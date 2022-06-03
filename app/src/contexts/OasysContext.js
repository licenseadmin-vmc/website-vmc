import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as ContentfulLib from "contentful";
import PropTypes from "prop-types";

const SPACE_ID = "8tdc4p1tb4f2";
const ACCESS_TOKEN = "E_uadDypJ6OZy6cui0RjwgzPVaZ9bgmujpXNUy_UB0E";
const NYT_KEY = "77s7mgk3XyRnQ4ijrad7pV1cpZW0uAmG";

const contentfulAPI =
  "https://cdn.contentful.com/spaces/" +
  SPACE_ID +
  "/entries?access_token=" +
  ACCESS_TOKEN +
  "&" +
  Date.now();

const client = ContentfulLib.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

const OasysContext = React.createContext({ ...initialState });

const initialState = {
  client,
  environment: {},
  loadingEnv: true,
  loadingContentful: true,
  loadingAPI: true,
  reconnect: false,
  networkStatus: "",
  errorCount: 0,
  counter: false,
  healthTimer: false,
  log: `Initialization...<span class=good>Complete</span>`,
  socketLog: "0",
  socketConnected: false,
  socketStatus: undefined,
  drag: false,
  update: () => {},
  debug: undefined,
  errorAPI: undefined,
  envDate: undefined,
  totalEnvTime: undefined,
  health: undefined,
  contentful: undefined,
  totalContentfulTime: undefined,
  totalContextTime: undefined,
  errorContentful: undefined,
  errorEnv: undefined,
  searchTerm: undefined,
  focus: true,
  waiting: false,
  inputFocus: false,
  globeDefault: null,
  countReady: false,
  checked: true,
  socketX: undefined,
  socketY: undefined,
  socketW: undefined,
  socketH: undefined,
  statusX: undefined,
  statusY: undefined,
  statusW: undefined,
  statusH: undefined,
  healthX: undefined,
  healthY: undefined,
  healthW: undefined,
  healthH: undefined,
  visualizerStatus: false,
  visualizerX: undefined,
  visualizerY: undefined,
  visualizerW: localStorage.getItem("localVisualizerW") ? parseInt(localStorage.getItem("localVisualizerW")): 480,
  visualizerH: localStorage.getItem("localVisualizerH") ? parseInt(localStorage.getItem("localVisualizerH")): 240,
  earthX: undefined,
  earthY: undefined,
  earthW: undefined,
  earthH: undefined,
  landingX: undefined,
  landingY: undefined,
  landingW: undefined,
  landingH: undefined,
  keyX: undefined,
  keyY: undefined,
  keyW: undefined,
  keyH: undefined,
  searchX: undefined,
  searchY: undefined,
  searchW: undefined,
  searchH: undefined,
  dragEnabled: false,
  muteStatus: false,
  sizingStatus: false,
  draggingStatus: false,
  sizing: false,
  dragging: false,
  chatX: undefined,
  chatY: undefined,
  chatW: undefined,
  chatH: undefined,
  nasaX: undefined,
  nasaY: undefined,
  nasaW: undefined,
  nasaH: undefined,
  quadrantX: undefined,
  quadrantY: undefined,
  quadrantW: undefined,
  quadrantH: undefined,
  quadrantLogoX: undefined,
  quadrantLogoY: undefined,
  quadrantLogoW: undefined,
  quadrantLogoH: undefined,
  lifespanX: undefined,
  lifespanY: undefined,
  lifespanW: undefined,
  lifespanH: undefined,
  newsX: undefined,
  newsY: undefined,
  newsW: undefined,
  newsH: undefined,
  chatting: false,
  online: false,
  chat: [],
  articles: [],
  keystrokesActive: true,
  chatSending: false,
  message: undefined,
  messageReceived: false,
  lifespan: [],
  nytData: [],
  limit: 10,
  level: 0,
  moduleSearch: false,
  orbitalData: [],
  diameters:[],
  moduleLifespan: localStorage.getItem("localLifespan") == 1 ? 1 : 0,
  moduleVisualizer: 0,
  moduleNews: localStorage.getItem("localNews") == 1 ? 1 : 0,
  moduleEarth: localStorage.getItem("localEarth") == 1 ? 1 : 0,
  moduleSocket: localStorage.getItem("localSocket") == 1 ? 1 : 0,
  moduleStatus: localStorage.getItem("localStatus") == 1 ? 1 : 0,
  moduleNasa: localStorage.getItem("localNasa") == 1 ? 1 : 0,
  moduleQuadrant: localStorage.getItem("localQuadrant") == 1 ? 1 : 0,
  moduleQuadrantLogo: localStorage.getItem("localQuadrantLogo") == 1 ? 1 : 0,
  moduleHealth: localStorage.getItem("localHealth") == 1 ? 1 : 0,
  moduleLanding: localStorage.getItem("localLanding") == 1 ? 1 : 0,
  moduleKeystroke: localStorage.getItem("localKeystroke") == 1 ? 1 : 0,
  moduleWebsocket: localStorage.getItem("localSocket") == 1 ? 1 : 0,
  currentCount: 0,
  nasaDataReady: false,
  earthDragInit: false,
  newsDragInit: false,
  nasaDragInit: false,
  keyDragInit: false,
  landingDragInit: false,
  visualizerDragInit: false,
  lifespanDragInit: false,
  healthDragInit: false,
  statusDragInit: false,
  quadrantDragInit: false,
  quadrantLogoDragInit: false,
};

function OasysProvider({ children }) {
  const [state, setState] = useState(initialState);
  const timeouts = useRef([]);

  const loadData = useCallback(() => {
    (async function () {
      const requestTime = Date.now();

      // START: NYT API

      try {
        const getNytData = await fetch(
          "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=" +
            NYT_KEY
        );
        const response = await getNytData.json();

        // Loop thru NYT Data and remove empty entries.....NTY usually returns at least one empty entries per call.
        let newArray = [];
        for (let i = 0; i < response.results.length; i++) {
          const result = response.results[i];
          if (result.section) {
            newArray.push(response.results[i]);
          }
        }

        setState((state) => ({
          ...state,
          nytData: newArray,
        }));
      } catch (error) {
        console.log(error);
      }

      // END: NYT API

      try {
        // LIFESPAN
        client
          .getEntry("4uH5wQKiCTvDGhSIQjjNvW")
          .then((response) => {
            setState((state) => ({
              ...state,
              update: (value = {}) => {
                setState((s) => ({ ...s, ...value }));
              },
              lifespan: response.fields,
            }));
          })
          .catch(console.error);
        // LIFESPAN

        client
          .getEntries({
            content_type: "article",
            limit: 8,
          })
          .then((response) => {
            setState((state) => ({
              ...state,
              update: (value = {}) => {
                setState((s) => ({ ...s, ...value }));
              },
              articles: response,
            }));
          })
          .catch(console.error);

        setInterval(() => {
          client
            .getEntries()
            .then((response) => {
              setState((state) => ({
                ...state,
                update: (value = {}) => {
                  setState((s) => ({ ...s, ...value }));
                },
                chat: response.items,
              }));

              if (response.items?.slice(0, -1)[0].fields.admin == true) {
                setState((state) => ({
                  ...state,
                  update: (value = {}) => {
                    setState((s) => ({ ...s, ...value }));
                  },
                  messageReceived: true,
                }));
              }
            })

            .catch(console.error);

          client
            .getEntry("4pgWwXirXAmQfu50ilMA5F")
            .then((singleentry) => {
              setState((state) => ({
                ...state,
                update: (value = {}) => {
                  setState((s) => ({ ...s, ...value }));
                },
                online: singleentry.fields.online,
              }));
            })
            .catch(console.error);
        }, 2000);

        const getEnv = await fetch(`conf/env.json`);
        const envData = await getEnv.json();

        setState((state) => ({
          ...state,
          update: (value = {}) => {
            setState((s) => ({ ...s, ...value }));
          },
          muteStatus: true,
          environment: envData,
          debug: envData.debug,
          errorAPI: null,
          envDate: new Date(envData.created),
          loadingEnv: false,
          totalEnvTime: Date.now() - requestTime,
          networkStatus: "RETRY",
          counter: true,
          health: true,
          log: `Environment...<span class=good>Complete</span><br>${state.log}`,
        }));

        try {
          const getContentful = await fetch(contentfulAPI);
          const contentfulData = await getContentful.json();
          setState((state) => ({
            ...state,
            loadingContentful: false,
            contentful: contentfulData,
            totalContentfulTime: Date.now() - requestTime,
            totalContextTime: Date.now() - requestTime,
            log: `Authentication...<span class=good>Complete</span><br>${state.log}`,
          }));

          healthCheck();
        } catch (error) {
          setState((state) => ({
            ...state,
            errorContentful: error,
            loadingContentful: true,
            reconnect: true,
            errorAPI: error,
            loadingAPI: true,
            counter: false,
            log: `<span class=status-error>Failed to Load Activities</span><br>${state.log}`,
          }));

          timeouts.current[timeouts.current.length] = setTimeout(() => {
            loadData();
            setState((state) => ({
              ...state,
              log: "Retrying",
              muteStatus: true,
            }));
          }, 5000);
        }
      } catch (error) {
        setState((state) => ({
          ...state,
          errorEnv: error,
          errorContentful: error,
          errorAPI: error,
          loadingAPI: true,
          loadingContentful: true,
          reconnect: true,
          counter: false,
          networkStatus: "ERROR",
          log: `<span class=status-error>Failed to Load Environment</span><br>${state.log}`,
        }));
      }
    })();
  }, [healthCheck]);

  const healthCheck = useCallback(() => {
    (async function () {
      try {
        const getContentful = await fetch(contentfulAPI);
        const contentfulData = await getContentful.json();

        if (!getContentful.ok) {
          throw new Error(getContentful.statusText);
        }

        setState((state) => ({
          ...state,
          contentful: contentfulData,
          errorContentful: false,
          loadingContentful: false,
          errorAPI: false,
          loadingAPI: false,
          reconnect: false,
          errorCount: state.errorCount + 1,
          health: true,
          networkStatus: "VERIFY",
          countReady: false,
          counter: false,
          log: `<div className="load"></div> Verifying ${state.environment.resources_url}<br>${state.log}`,
        }));

        timeouts.current[timeouts.current.length] = setTimeout(() => {
          setState((state) => ({
            ...state,
            health: false,
            networkStatus: "NOMINAL",
            log: state.log,
          }));
        }, 4000);

        timeouts.current[timeouts.current.length] = setTimeout(() => {
          setState((state) => ({
            ...state,
            healthTimer: true,
          }));
        }, 6000);

        timeouts.current[timeouts.current.length] = setTimeout(() => {
          setState((state) => ({
            ...state,
            countReady: true,
          }));
        }, 9000);

        timeouts.current[timeouts.current.length] = setTimeout(() => {
          setState((state) => ({
            ...state,
            counter: true,
          }));
        }, 12000);

        timeouts.current[timeouts.current.length] = setTimeout(() => {
          setState((state) => ({
            ...state,
            waiting: true,
          }));
        }, 13000);

        timeouts.current[timeouts.current.length] = setTimeout(() => {
          healthCheck();

          setState((state) => ({
            ...state,
            counter: false,
            healthTimer: false,
            waiting: false,
            log: "",
          }));
        }, 42000);

        if (state.errorContentful) {
          loadData();

          setState((state) => ({
            ...state,
            errorEnv: false,
            networkStatus: "RETRY",
            muteStatus: true,
            log: `Reloading Data<br>${state.log}`,
          }));
        }
      } catch (error) {
        setState((state) => ({
          ...state,
          errorEnv: error,
          errorContentful: error,
          errorAPI: error,
          loadingAPI: true,
          loadingContentful: true,
          health: false,
          reconnect: true,
          errorCount: state.errorCount + 1,
          networkStatus: "ERROR",
          muteStatus: true,
          log: `<span class='status-error'>Can't establish connection</span>${state.log}`,
        }));

        timeouts.current[timeouts.current.length] = setTimeout(() => {
          healthCheck();
          setState((state) => ({
            ...state,
            muteStatus: true,
            log: `Retrying connection<br>${state.log}`,
          }));
        }, 5000);
      }
    })();
  }, [loadData, state.errorContentful]);

  useEffect(loadData, [loadData]);

  useEffect(() => {
    const _timeouts = timeouts.current;
    return () => {
      _timeouts.forEach(clearTimeout);
    };
  }, []);

  const ctxtValue = useMemo(() => state, [state]);

  return (
    <OasysContext.Provider value={ctxtValue}>{children}</OasysContext.Provider>
  );
}

function useContext() {
  const ctxt = React.useContext(OasysContext);

  if (ctxt === undefined) {
    throw new Error(
      "useContext can only be used within an OasysProvider context"
    );
  }

  return ctxt;
}

OasysProvider.propTypes = {
  children: PropTypes.any,
};

export { OasysContext, OasysProvider, useContext };
