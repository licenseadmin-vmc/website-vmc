import React, { useState, useEffect, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import Typewriter from 'typewriter-effect'


import Footer from '../Footer'

function Enter() {
  const [loading, setLoading] = useState(true)
  const [selectedQuadrant, setSelectedQuadrant] = useState(0)
  const [quadrants, setQuadrants] = useState(false)
  const [quadrantLines, setQuadrantLines] = useState(false)
  const [content, setContent] = useState([])
  const [intro, setIntro] = useState([])

  useEffect(() => {

    window.scrollTo(0, 0)

    setLoading(false)

    setTimeout(() => {
      setSelectedQuadrant(1);
    }, 6000)



      ; (async function () {
        try {
          const response = await axios.get(
            `data/content.json?` + Math.floor(Math.random() * 100000)
          )
          const introResponse = await axios.get(
            `data/intro.json?` + Math.floor(Math.random() * 100000)
          )
          setContent(response.data)
          setIntro(introResponse.data)

          console.log(response.data);
          console.log(introResponse.data);


        } catch (err) {
          console.error(err)
        }
      })()
  }, [])

  function handleQuadrant(event) {
    setSelectedQuadrant(event)
  }


  return (
    content.length > 0 && intro.length > 0 && (
      <>
        <Helmet titleTemplate='VitroMetrics | %s'>
          <title>Home</title>
        </Helmet>

        {loading ? (
          <div className='flex-container'>
            <div className='load'></div>
          </div>
        ) : (
          <>

            <div className='header'>
              <div className='header-left' onClick={() => handleQuadrant(1)}>
                <img src='img/logo-vm.png' height='72' />

                <Typewriter
                  options={{
                    autoStart: true,
                    loop: false,
                    cursor: '',
                    delay: 12
                  }}
                  onInit={typewriter => {
                    typewriter
                      .pauseFor(4000)
                      .typeString("<h1>VitroMetrics</h1>")
                      .typeString("<h4>Your <strong>IVDR</strong> Solution</h4>")
                      .start()
                  }}
                />


              </div>

              <div className='header-right'>

              <h3>As of May 26th 2022, <strong> In Vitro Diagnostics Regulation </strong> is in effect. <strong>VitroMetrics has your complete solution.</strong></h3>

              </div>
            </div>

            {selectedQuadrant == 0 && (

              <div className='flex-container'>

                <div className='follow'>
                  {selectedQuadrant == 0 && (
                    <>
                      <Typewriter
                        options={{
                          autoStart: true,
                          loop: false,
                          cursor: '',
                          delay: 12
                        }}
                        onInit={typewriter => {
                          typewriter
                            .pauseFor(200)
                            .typeString('<h1>' + intro[0].title + '</h1>')
                            .pauseFor(400)
                            .typeString('<h4>' + intro[0].subtitle + '</h4>')
                            .pauseFor(1000)
                            .deleteAll(1)
                            .pasteString(
                              "<h2>" +
                              intro[0].line1 +
                              '</h2>'
                            )
                            .pauseFor(750)
                            .pasteString("<div class='nudge-md'></div>")
                            .pasteString(
                              "<h2 class='pulse-turbo'>" +
                              intro[0].line2 +
                              '</h2>'
                            )
                            .pauseFor(2000)
                            .deleteAll(1)
                            .start()
                        }}
                      />

                    </>
                  )}
                </div>


                <div className='row'>
                  <div className={`flex-item-q` + selectedQuadrant}>
                    <img
                      className='zoom-out'
                      style={{
                        cursor: selectedQuadrant !== 0 ? 'pointer' : 'default'
                      }}
                      onClick={() => handleQuadrant(0)}
                      src='img/logo-vm.png'
                      height='72'
                    />{' '}
                    <div className='nudge-md'></div>
                  </div>
                </div>



              </div>
            )}


            {selectedQuadrant == 1 && (

              <section>

                {content && content.map((item, index) => (
                  <div className="paragraph" key={index}>
                    <h1>{item.title}</h1>

                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.text
                      }}
                    />
                  </div>

                ))}


              </section>

            )}


            <Footer />
          </>
        )}




      </>
    )
  )
}

export default Enter
