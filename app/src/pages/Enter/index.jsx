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
          <Footer />

          <div className="flex-container">
            <div className="row">

              <div className="flex-item">

                <img className='fade-in' src='img/logo-vm.png' height='72' /> <div className='nudge-sm'></div>

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
                      .pauseFor(2500)
                      .deleteAll(1)
                      .pasteString("<h2 class='fade-in'>As of May 26th 2022, the new In Vitro Diagnostics Regulation is in effect.</h2>")
                      .pauseFor(750)
                      .pasteString("<div class='nudge-sm'></div>")
                      .pasteString("<h2 class='fade-in'><b>VitroMetrics has your complete solution.</b></h2>")
                      .pauseFor(750)
                      .pasteString("<div class='nudge-md'></div>")
                      .typeString("<h3>More Coming Soon <span class='pulse'>_</span</h3>")

                      .start();
                  }}
                />

              </div>

            </div>

          </div>

        </>
      )}
    </>
  );
}

export default Enter;
