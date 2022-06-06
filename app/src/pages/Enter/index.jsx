import React, { useState, useEffect, Fragment } from "react";
import Footer from "../Footer";
import axios from 'axios'
import Typewriter from "typewriter-effect";

function Enter() {

  const [loading, setLoading] = useState(true);
  const [selectedQuadrant, setSelectedQuadrant] = useState(0);
  const [quadrants, setQuadrants] = useState(false);
  const [quadrantLines, setQuadrantLines] = useState(false);
  const [content, setContent] = useState([]);
  const [imageJump, setImageJump] = useState(false);

  useEffect(() => {

    setLoading(false);

    setTimeout(() => {
      setQuadrants(true)
    }, 5700);
    setTimeout(() => {
      setImageJump(true)
    }, 5700);
    setTimeout(() => {
      setQuadrantLines(true)
    }, 5300);


    (async function () {
      try {
        const response = await axios.get(`data/content.json?` + (Math.floor(Math.random() * 100000)));
        setContent(response.data);
        console.log(response.data)
      } catch (err) {
        console.error(err);
      }
    })();




  }, []);




  // function resetEverything() {

  //   window.location.reload();
  // }

  function handleQuadrant(event) {
    setSelectedQuadrant(event)
  }

  return content.length && (
    <>
      {loading ? (
        <div className="flex-container">

          <div className="load"></div>
        </div>
      ) : (
        <>

          <div className="flex-container">


            {quadrants ?
              <>

                {selectedQuadrant == 1 ?
                  <>
                    <div className="quadrant-select-1"></div>

                    <div className="quadrant-1">
                      <div>
                        <h1>{content[1].title}</h1>
                        <p className="fade-in" dangerouslySetInnerHTML={{ __html: content[1].body }} />

                        <a onClick={() => handleQuadrant(0)}>{content[1].buttonBack}</a>
                      </div>
                    </div>
                  </>
                  : selectedQuadrant == 0 &&
                  <div className="quadrant-1 fade-in">
                    <div>
                      <h1>{content[1].title}</h1>
                      <p dangerouslySetInnerHTML={{ __html: content[1].abstract }} />
                      <a onClick={() => handleQuadrant(1)}>{content[1].buttonCTA}</a>
                    </div>
                  </div>
                }
                {selectedQuadrant == 2 ?
                  <>
                    <div className="quadrant-select-2"></div>

                    <div className="quadrant-2">
                      <div>
                        <h1>{content[2].title}</h1>
                        <p className="fade-in">{content[2].body}</p>

                        <p className="fade-in" dangerouslySetInnerHTML={{ __html: content[2].body }} />
                      </div>
                    </div>
                  </>
                  : selectedQuadrant == 0 &&
                  <div className="quadrant-2 fade-in">
                    <div>
                      <h1>{content[2].title}</h1>
                      <p dangerouslySetInnerHTML={{ __html: content[2].abstract }} />
                      <a onClick={() => handleQuadrant(2)}>{content[2].buttonCTA}</a>
                    </div>
                  </div>
                }
                {selectedQuadrant == 3 ?
                  <>
                    <div className="quadrant-select-3"></div>

                    <div className="quadrant-3b">
                      <div>
                        <h1>{content[3].title}</h1>
                        <p className="fade-in" dangerouslySetInnerHTML={{ __html: content[3].body }} />

                        <a onClick={() => handleQuadrant(0)}>{content[3].buttonBack}</a>
                      </div>
                    </div>
                  </>
                  : selectedQuadrant == 0 &&
                  <div className="quadrant-3 fade-in">
                    <div>
                      <h1>{content[3].title}</h1>
                      <p dangerouslySetInnerHTML={{ __html: content[3].abstract }} />
                      <a onClick={() => handleQuadrant(3)}>{content[3].buttonCTA}</a>
                    </div>
                  </div>
                }
                {selectedQuadrant == 4 ?
                  <>
                    <div className="quadrant-select-4"></div>

                    <div className="quadrant-4b">
                      <div>
                        <h1>{content[4].title}</h1>

                        <p className="fade-in" dangerouslySetInnerHTML={{ __html: content[4].body }} />

                        <a onClick={() => handleQuadrant(0)}>{content[4].buttonBack}</a>
                      </div>
                    </div>
                  </>
                  : selectedQuadrant == 0 &&
                  <div className="quadrant-4 fade-in">
                    <div>
                      <h1>{content[4].title}</h1>
                      <p dangerouslySetInnerHTML={{ __html: content[4].abstract }} />
                      <a onClick={() => handleQuadrant(4)}>{content[4].buttonCTA}</a>
                    </div>
                  </div>
                }
              </>
              :
              <div className="follow">
                {selectedQuadrant == 0 &&
                  <>
                    <Typewriter
                      options={{
                        autoStart: true,
                        loop: false,
                        cursor: "",
                        delay: 12,
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(200)
                          .typeString("<h1>" + content[0].title + "</h1>")
                          .pauseFor(400)
                          .typeString("<h4>" + content[0].subtitle + "</h4>")
                          .pauseFor(1000)
                          .deleteAll(1)
                          .pasteString("<h2 class='fade-in'>" + content[0].line1 + "</h2>")
                          .pauseFor(750)
                          .pasteString("<div class='nudge-md'></div>")
                          .pasteString("<h2 class='pulse-turbo'>" + content[0].line2 + "</h2>")

                          .pauseFor(1700)
                          .deleteAll(1)
                          .start();
                      }}
                    />
                  </>
                }

              </div>

            }

            <div className="row">

              <div className={`flex-item-q` + selectedQuadrant}>

                <img className="zoom-out" onClick={() => handleQuadrant(0)} src='img/logo-vm.png' height='72' /> <div className='nudge-md'></div>

              </div>




            </div>

            {quadrantLines &&
              <>
                <div className={`flex-container-lineX-q` + selectedQuadrant}></div>
                <div className={`flex-container-lineY-q` + selectedQuadrant}></div>
              </>
            }

          </div >

          <Footer />

        </>
      )
      }
    </>
  );
}

export default Enter;
