import React, { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import { useHistory } from "react-router-dom";
import { useContext } from "../../contexts";

function Home() {
  const { push } = useHistory();
  const { loadingContentful, update: updateCtxt } = useContext();
  const [audio, setAudio] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);

    const listener = (event) => {
      if (event.key == 0 && !event.metaKey && !event.ctrlKey) {
        // don't allow keypress greater than records shown and also prevent using number is CMD or CTRL are pressed

        setAudio(true);

        event.preventDefault();
        setTimeout(runHistory, 200, []);

        function runHistory() {
          history.push(`/home`);
          document.removeEventListener("keyup", listener);
        }
      }
    };

    window.addEventListener("keyup", listener);
    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, []);

  return (
    <>
      <div className="flex-container">
        <div className="row">
          <div className="flex-item">
            {loadingContentful ? (
              <a className="link-logo-load">
                <i className="fa-solid fa-face-expressionless"></i></a>
            ) : (
              <>
                <Link
                  to="/home/"
                  className="link-logo"
                  data-tip
                  data-for={`tooltip` + 0}
                >
                  <i className="fa-solid fa-face-awesome"></i>
                </Link>

                <ReactTooltip
                  place="right"
                  type="dark"
                  effect="float"
                  id={`tooltip` + 0}
                  className="tooltip-side"
                >
                  <i className="fa-solid fa-keyboard pulse-slow"></i>
                  <i className="fa-thin fa-angle-right"></i>
                  <span className="link-key">0</span>
                </ReactTooltip>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
