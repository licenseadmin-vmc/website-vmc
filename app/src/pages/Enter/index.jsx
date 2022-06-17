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


            {/* {selectedQuadrant == 0 && (
              <section>
                <div className='left'>

                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: false,
                      cursor: '',
                      delay: 0
                    }}
                    onInit={typewriter => {
                      typewriter
                        .pauseFor(6200)
                        .typeString("<div class='full'><h1>" + content[0].title + "</h1><div class='divide'></div></div>")
                        .start()
                    }}
                  />
                  <div className="subtle fade-in-delay-6s">
                    <h1 onClick={() => handleQuadrant(1)}>
                      {content[1].title}
                    </h1><div className="divide-off"></div>
                  </div>
                  <div className="subtle fade-in-delay-6s">
                    <h1 onClick={() => handleQuadrant(2)}>
                      {content[2].title}
                    </h1><div className="divide-off"></div>
                  </div>
                  <div className="subtle fade-in-delay-6s">
                    <h1 onClick={() => handleQuadrant(3)}>
                      {content[3].title}
                    </h1><div className="divide-off"></div>
                  </div>
                  <div className="subtle fade-in-delay-6s">
                    <h1 onClick={() => handleQuadrant(4)}>
                      {content[4].title}
                    </h1><div className="divide-off"></div>
                  </div>

                </div>

                <div className='right'>



                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: false,
                      cursor: '',
                      delay: 0
                    }}
                    onInit={typewriter => {
                      typewriter
                        .pauseFor(6200)
                        .pasteString("<p>" + content[1].abstract + "</p>")
                        .pasteString("<p>" + content[1].body + "</p>")
                        .start()
                    }}
                  />

                  <div className='links'>
                    <a className="fade-in-delay-6s" onClick={() => handleQuadrant(1)}>
                      <i className="fa-light fa-arrow-right"></i>
                    </a>
                  </div>


                </div>
              </section>
            )} */}

            {selectedQuadrant == 1 && (
              <section>
                <div className='left'>

                  <div className='full'>
                    <h1 onClick={() => handleQuadrant(1)}>
                      {content[0].title}
                    </h1><div className='divide'></div>
                  </div>

                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(2)}>
                      {content[1].title}
                    </h1><div className="divide-off"></div>
                  </div>

                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(3)}>
                      {content[2].title}
                    </h1><div className="divide-off"></div>
                  </div>
                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(4)}>
                      {content[3].title}
                    </h1><div className="divide-off"></div>
                  </div>
                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(5)}>
                      {content[4].title}
                    </h1><div className="divide-off"></div>
                  </div>

                </div>
                <div className='right'>

                  <div className="paragraph">
                    <h1>{content[0].title}</h1>

                    <span className='fade-in'
                      dangerouslySetInnerHTML={{
                        __html: content[0].text
                      }}
                    />
                  </div>


                </div>
              </section>
            )}

            {selectedQuadrant == 2 && (
              <section>
                <div className='left'>

                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(1)}>
                      {content[0].title}
                    </h1><div className="divide-off"></div>
                  </div>

                  <div className='full'>
                    <h1 onClick={() => handleQuadrant(2)}>
                      {content[1].title}
                    </h1><div className='divide'></div>
                  </div>

                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(3)}>
                      {content[2].title}
                    </h1><div className="divide-off"></div>
                  </div>
                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(4)}>
                      {content[3].title}
                    </h1><div className="divide-off"></div>
                  </div>
                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(5)}>
                      {content[4].title}
                    </h1><div className="divide-off"></div>
                  </div>

                </div>
                <div className='right'>

                  <div className="paragraph">
                    <h1>{content[1].title}</h1>

                    <span className='fade-in'
                      dangerouslySetInnerHTML={{
                        __html: content[1].text
                      }}
                    />
                  </div>


                </div>
              </section>
            )}

            {selectedQuadrant == 3 && (
              <section>
                <div className='left'>

                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(1)}>
                      {content[0].title}
                    </h1><div className="divide-off"></div>
                  </div>

                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(2)}>
                      {content[1].title}
                    </h1><div className="divide-off"></div>
                  </div>

                  <div className='full'>
                    <h1 onClick={() => handleQuadrant(3)}>
                      {content[2].title}
                    </h1><div className='divide'></div>
                  </div>
                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(4)}>
                      {content[3].title}
                    </h1><div className="divide-off"></div>
                  </div>
                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(5)}>
                      {content[4].title}
                    </h1><div className="divide-off"></div>
                  </div>

                </div>
                <div className='right'>

                  <div className="paragraph">
                    <h1>{content[2].title}</h1>

                    <span className='fade-in'
                      dangerouslySetInnerHTML={{
                        __html: content[2].text
                      }}
                    />
                  </div>


                </div>
              </section>
            )}

            {selectedQuadrant == 4 && (
              <section>
                <div className='left'>

                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(1)}>
                      {content[0].title}
                    </h1><div className="divide-off"></div>
                  </div>

                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(2)}>
                      {content[1].title}
                    </h1><div className="divide-off"></div>
                  </div>

                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(3)}>
                      {content[2].title}
                    </h1><div className="divide-off"></div>
                  </div>
                  <div className='full'>
                    <h1 onClick={() => handleQuadrant(4)}>
                      {content[3].title}
                    </h1><div className='divide'></div>
                  </div>
                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(5)}>
                      {content[4].title}
                    </h1><div className="divide-off"></div>
                  </div>

                </div>
                <div className='right'>

                  <div className="paragraph">
                    <h1>{content[3].title}</h1>

                    <span className='fade-in'
                      dangerouslySetInnerHTML={{
                        __html: content[3].text
                      }}
                    />
                  </div>


                </div>
              </section>
            )}

            {selectedQuadrant == 5 && (
              <section>
                <div className='left'>

                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(1)}>
                      {content[0].title}
                    </h1><div className="divide-off"></div>
                  </div>

                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(2)}>
                      {content[1].title}
                    </h1><div className="divide-off"></div>
                  </div>

                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(3)}>
                      {content[2].title}
                    </h1><div className="divide-off"></div>
                  </div>
                  <div className='subtle'>
                    <h1 onClick={() => handleQuadrant(4)}>
                      {content[3].title}
                    </h1><div className="divide-off"></div>
                  </div>
                  <div className='full'>
                    <h1 onClick={() => handleQuadrant(5)}>
                      {content[4].title}
                    </h1><div className='divide'></div>
                  </div>

                </div>
                <div className='right'>

                  <div className="paragraph">
                    <h1>{content[4].title}</h1>

                    <span className='fade-in'
                      dangerouslySetInnerHTML={{
                        __html: content[4].text
                      }}
                    />
                  </div>


                </div>
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
