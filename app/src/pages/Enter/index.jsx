import React, { useState } from "react";


import { useHistory } from "react-router-dom";
import { useContext } from "../../contexts";
import Footer from "../Footer";
import Typewriter from "typewriter-effect";

function Enter() {

  const history = useHistory();
  const oasysCtxt = useContext();

  const { loadingContentful, update: updateCtxt } = useContext();

  const {
  } = oasysCtxt;

  return (
    <>
      {loadingContentful ? (
        <div className="load"></div>
      ) : (
        <>

          <div className="flex-container">

            <div className="quadrant-1 delay-q1">
              <div>
                <h1>IVD Compliance</h1>
                <p>IVDR enacted May 26, 2022<br />
                  Requirement for post-market surveyance of all IVD</p>
                <a>Tell me about it</a>
              </div>
            </div>

            <div className="quadrant-2 delay-q2">
              <div>
                <h1>VitroMetrics Opportunity</h1>
                <p>IVD is a USD 117B market, which will grow to 128B by 2028<br />
                  Compliance cost estimated at USD 3.5B – 3% of revenues<br />
                  Compliance market estimated at USD 900M<br />
                  EQA (External Quality Assessment) data is fit for purpose</p>
                <a>More Info</a>
              </div>
            </div>

            <div className="quadrant-3 delay-q3">
              <div>
                <h1>VitroMetrics Advantage</h1>
                <p>30 years of regulatory experience<br />
                  20 years of EQA data
                </p>
                <a>Explore</a>
              </div>
            </div>

            <div className="quadrant-4 delay-q4">
              <div>
                <h1>VitroMetrics Datacube</h1>
                <p>AI analytics applied to big data<br />
                  Mutliple facets of data collected<br />
                  Multiple compliance regions satified with single solution</p>
                <a id="selected">Get Started</a>
              </div>
            </div>


            <div className="row">

              <div className="flex-item">


                <img class='fade-in' src='img/logo-vm.png' height='72' /> <div class='nudge-md'></div>



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
                      .pauseFor(2200)
                      .deleteAll(1)
                      .start();
                  }}
                />

              </div>


            </div>

            <div className="flex-container-lineX"></div>
            <div className="flex-container-lineY"></div>


          </div >

          <Footer />


        </>
      )
      }
    </>
  );
}

export default Enter;
