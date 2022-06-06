import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Typewriter from "typewriter-effect";

function Enter() {

  const [loading, setLoading] = useState(true);
  const [selectedQuadrant, setSelectedQuadrant] = useState(0);
  const [quadrants, setQuadrants] = useState(false);
  const [quadrantLines, setQuadrantLines] = useState(false);
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


  }, []);

  // function resetEverything() {

  //   window.location.reload();
  // }

  function handleQuadrant(event) {
    setSelectedQuadrant(event)
  }

  return (
    <>
      {loading ? (
        <div className="flex-container">

          <div className="load"></div>
        </div>
      ) : (
        <>

          <div className="flex-container">
            {quadrants &&
              <>

                {selectedQuadrant == 1 ?
                  <>

                    <div className="quadrant-select-1"></div>

                    <div className="quadrant-1">
                      <div>
                        <h1>IVD Compliance</h1>
                        <p className="fade-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac magna sed libero gravida placerat iaculis accumsan urna. Vestibulum rutrum quis nisi id gravida. Aenean gravida nisi scelerisque molestie interdum. Sed posuere placerat tortor vel varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque enim dui, volutpat vel placerat aliquam, finibus eu felis. Nullam mattis, dolor eget pellentesque aliquet, dui metus venenatis metus, ac pharetra magna nisi ut ante. Pellentesque id arcu in ligula porttitor dictum sed et tellus. Phasellus condimentum, ligula at dignissim iaculis, augue ex suscipit nulla, sed egestas dui quam sed leo. Sed efficitur rhoncus dui, nec laoreet lorem venenatis et. Sed dapibus, felis sed posuere vehicula, neque lacus condimentum nulla, in pretium diam ipsum vel lectus. Nullam sed sapien nec erat bibendum gravida at eget augue. Cras eget feugiat ligula, id sollicitudin lorem. Cras feugiat ullamcorper ullamcorper.</p>

                        <a onClick={() => handleQuadrant(0)}>Go Back</a>
                      </div>
                    </div>
                  </>
                  : selectedQuadrant == 0 &&
                  <div className="quadrant-1 fade-in">
                    <div>
                      <h1>IVD Compliance</h1>
                      <p>IVDR enacted May 26, 2022<br />
                        Requirement for post-market surveyance of all IVD</p>
                      <a onClick={() => handleQuadrant(1)}>Tell me about it</a>
                    </div>
                  </div>
                }
                {selectedQuadrant == 2 ?
                  <>
                    <div className="quadrant-select-2"></div>

                    <div className="quadrant-2">
                      <div>
                        <h1>VitroMetrics Opportunity</h1>
                        <p className="fade-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac magna sed libero gravida placerat iaculis accumsan urna. Vestibulum rutrum quis nisi id gravida. Aenean gravida nisi scelerisque molestie interdum. Sed posuere placerat tortor vel varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque enim dui, volutpat vel placerat aliquam, finibus eu felis. Nullam mattis, dolor eget pellentesque aliquet, dui metus venenatis metus, ac pharetra magna nisi ut ante. Pellentesque id arcu in ligula porttitor dictum sed et tellus. Phasellus condimentum, ligula at dignissim iaculis, augue ex suscipit nulla, sed egestas dui quam sed leo. Sed efficitur rhoncus dui, nec laoreet lorem venenatis et. Sed dapibus, felis sed posuere vehicula, neque lacus condimentum nulla, in pretium diam ipsum vel lectus. Nullam sed sapien nec erat bibendum gravida at eget augue. Cras eget feugiat ligula, id sollicitudin lorem. Cras feugiat ullamcorper ullamcorper.</p>

                        <a onClick={() => handleQuadrant(0)}>Go Back</a>
                      </div>
                    </div>
                  </> : selectedQuadrant == 0 &&

                  <div className="quadrant-2 fade-in">
                    <div>
                      <h1>VitroMetrics Opportunity</h1>
                      <p>IVD is a USD 117B market, which will grow to 128B by 2028<br />
                        Compliance cost estimated at USD 3.5B – 3% of revenues<br />
                        Compliance market estimated at USD 900M<br />
                        EQA (External Quality Assessment) data is fit for purpose</p>
                      <a onClick={() => handleQuadrant(2)}>More Info</a>
                    </div>
                  </div>
                }
                {selectedQuadrant == 3 ?
                  <>
                    <div className="quadrant-select-3"></div>

                    <div className="quadrant-3b">
                      <div>
                        <h1>VitroMetrics Advantage</h1>
                        <p className="fade-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac magna sed libero gravida placerat iaculis accumsan urna. Vestibulum rutrum quis nisi id gravida. Aenean gravida nisi scelerisque molestie interdum. Sed posuere placerat tortor vel varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque enim dui, volutpat vel placerat aliquam, finibus eu felis. Nullam mattis, dolor eget pellentesque aliquet, dui metus venenatis metus, ac pharetra magna nisi ut ante. Pellentesque id arcu in ligula porttitor dictum sed et tellus. Phasellus condimentum, ligula at dignissim iaculis, augue ex suscipit nulla, sed egestas dui quam sed leo. Sed efficitur rhoncus dui, nec laoreet lorem venenatis et. Sed dapibus, felis sed posuere vehicula, neque lacus condimentum nulla, in pretium diam ipsum vel lectus. Nullam sed sapien nec erat bibendum gravida at eget augue. Cras eget feugiat ligula, id sollicitudin lorem. Cras feugiat ullamcorper ullamcorper.</p>

                        <a onClick={() => handleQuadrant(0)}>Go Back</a>
                      </div>
                    </div>
                  </> : selectedQuadrant == 0 &&

                  <div className="quadrant-3 fade-in">
                    <div>
                      <h1>VitroMetrics Advantage</h1>
                      <p>30 years of regulatory experience<br />
                        20 years of EQA data
                      </p>
                      <a onClick={() => handleQuadrant(3)}>Explore</a>
                    </div>
                  </div>
                }
                {selectedQuadrant == 4 ?
                  <>
                    <div className="quadrant-select-4"></div>

                    <div className="quadrant-4b">
                      <div>
                        <h1>VitroMetrics Datacube</h1>
                        <p className="fade-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac magna sed libero gravida placerat iaculis accumsan urna. Vestibulum rutrum quis nisi id gravida. Aenean gravida nisi scelerisque molestie interdum. Sed posuere placerat tortor vel varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque enim dui, volutpat vel placerat aliquam, finibus eu felis. Nullam mattis, dolor eget pellentesque aliquet, dui metus venenatis metus, ac pharetra magna nisi ut ante. Pellentesque id arcu in ligula porttitor dictum sed et tellus. Phasellus condimentum, ligula at dignissim iaculis, augue ex suscipit nulla, sed egestas dui quam sed leo. Sed efficitur rhoncus dui, nec laoreet lorem venenatis et. Sed dapibus, felis sed posuere vehicula, neque lacus condimentum nulla, in pretium diam ipsum vel lectus. Nullam sed sapien nec erat bibendum gravida at eget augue. Cras eget feugiat ligula, id sollicitudin lorem. Cras feugiat ullamcorper ullamcorper.</p>

                        <a onClick={() => handleQuadrant(0)}>Go Back</a>
                      </div>
                    </div>
                  </> : selectedQuadrant == 0 &&

                  <div className="quadrant-4 fade-in">
                    <div>
                      <h1>VitroMetrics Datacube</h1>
                      <p>AI analytics applied to big data<br />
                        Mutliple facets of data collected<br />
                        Multiple compliance regions satified with single solution</p>
                      <a onClick={() => handleQuadrant(4)}>Get Started</a>
                    </div>
                  </div>
                }
              </>

            }

            <div className="row">

              <div className={`flex-item-q` + selectedQuadrant}>

                <img onClick={() => handleQuadrant(0)} src='img/logo-vm.png' height='72' /> <div className='nudge-md'></div>

              </div>

              <div className="follow">

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
                      .typeString("<h1>Your IVDR Solution</h1>")
                      .pauseFor(400)
                      .typeString("<h4>powered by <strong>VitroMetrics</strong></h4>")
                      .pauseFor(1000)
                      .deleteAll(1)
                      .pasteString("<h2 class='fade-in'>As of May 26th 2022, <strong> In Vitro Diagnostics Regulation </strong> is in effect.</h2>")
                      .pauseFor(750)
                      .pasteString("<div class='nudge-md'></div>")
                      .pasteString("<h2 class='pulse-turbo'><strong>VitroMetrics has your complete solution.</strong></h2>")
                      .pauseFor(1700)
                      .deleteAll(1)
                      .start();
                  }}
                />

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
