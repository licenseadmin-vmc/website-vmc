import React, { useState, useEffect } from 'react'
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
          setContent(response.data)

      

        } catch (err) {
          console.error(err)
        }
      })()
  }, [])

  function handleQuadrant(event) {
    setSelectedQuadrant(event)
  }


  return (
    content.length > 0 && (
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

                <Typewriter
                  options={{
                    autoStart: true,
                    loop: false,
                    cursor: '',
                    delay: 25
                  }}
                  onInit={typewriter => {
                    typewriter
                      .typeString("As of May 26th 2022, <strong> In Vitro Diagnostics Regulation </strong> is in effect. <strong>VitroMetrics has your complete solution.</strong>")
                      .start()
                  }}
                />

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
                            .typeString('<h1>' + content[0].title + '</h1>')
                            .pauseFor(400)
                            .typeString('<h4>' + content[0].subtitle + '</h4>')
                            .pauseFor(1000)
                            .deleteAll(1)
                            .pasteString(
                              "<h2>" +
                              content[0].line1 +
                              '</h2>'
                            )
                            .pauseFor(750)
                            .pasteString("<div class='nudge-md'></div>")
                            .pasteString(
                              "<h2 class='pulse-turbo'>" +
                              content[0].line2 +
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



                  <div className='paragraph'>
                    <h1>THE PROBLEM</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat non lectus imperdiet semper. Suspendisse posuere metus ultrices lacus tempor viverra. Nulla posuere dignissim tellus, ut luctus nibh vehicula ac. In venenatis dignissim odio in suscipit. Sed ac massa et ex faucibus sodales. Duis convallis ligula ut nunc ullamcorper, at dictum dui euismod. Nunc porta metus ut dui suscipit egestas.</p>

                    <aside className='pull-quote'>
                      <span>
                        In gravida at lacus eget molestie. Nunc porttitor nisi in tellus tempus, nec pulvinar tortor interdum.
                      </span>
                    </aside>


                    <p>Vestibulum dapibus, mi id mollis imperdiet, leo dui varius felis, ac malesuada lacus odio et tellus. Ut ac eros congue, imperdiet urna pellentesque, sagittis neque. Quisque pretium mattis dui vitae dictum. Duis feugiat risus sed leo efficitur, a lacinia ipsum posuere. Mauris lacinia consectetur tempor. Etiam pellentesque maximus urna non porttitor. Vivamus sagittis nec lorem ut mattis. Integer eget mauris sed lectus rutrum euismod sit amet nec tortor. Phasellus bibendum augue in euismod auctor. Ut non pretium odio. Sed finibus pretium justo, ut fermentum elit sagittis a.</p>

                    <p>Pellentesque fermentum cursus finibus. In ac faucibus ligula. Suspendisse potenti. Phasellus ac fringilla sem. In ut dolor eget nunc suscipit pharetra et at ante. Nulla mattis sollicitudin neque, id egestas lorem mattis sit amet. Aenean molestie justo ac porttitor malesuada. Quisque et est a mauris volutpat pretium. Pellentesque a lectus at nisl laoreet molestie. Fusce eget nibh eu tortor tempus fringilla in ac ligula. Mauris mollis odio nunc, in cursus urna convallis quis. Proin turpis nisi, hendrerit quis urna id, efficitur molestie augue. Etiam aliquam odio ac diam blandit commodo.</p>

                  </div>


                  <div className='paragraph'>
                    <h1>Section Two</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat non lectus imperdiet semper. Suspendisse posuere metus ultrices lacus tempor viverra. Nulla posuere dignissim tellus, ut luctus nibh vehicula ac. In venenatis dignissim odio in suscipit. Sed ac massa et ex faucibus sodales. Duis convallis ligula ut nunc ullamcorper, at dictum dui euismod. Nunc porta metus ut dui suscipit egestas.</p>

                    <aside className='pull-quote-right'>
                      <span>
                        In gravida at lacus eget molestie. Nunc porttitor nisi in tellus tempus, nec pulvinar tortor interdum.
                      </span>
                    </aside>


                    <p>Vestibulum dapibus, mi id mollis imperdiet, leo dui varius felis, ac malesuada lacus odio et tellus. Ut ac eros congue, imperdiet urna pellentesque, sagittis neque. Quisque pretium mattis dui vitae dictum. Duis feugiat risus sed leo efficitur, a lacinia ipsum posuere. Mauris lacinia consectetur tempor. Etiam pellentesque maximus urna non porttitor. Vivamus sagittis nec lorem ut mattis. Integer eget mauris sed lectus rutrum euismod sit amet nec tortor. Phasellus bibendum augue in euismod auctor. Ut non pretium odio. Sed finibus pretium justo, ut fermentum elit sagittis a.</p>

                    <p>Pellentesque fermentum cursus finibus. In ac faucibus ligula. Suspendisse potenti. Phasellus ac fringilla sem. In ut dolor eget nunc suscipit pharetra et at ante. Nulla mattis sollicitudin neque, id egestas lorem mattis sit amet. Aenean molestie justo ac porttitor malesuada. Quisque et est a mauris volutpat pretium. Pellentesque a lectus at nisl laoreet molestie. Fusce eget nibh eu tortor tempus fringilla in ac ligula. Mauris mollis odio nunc, in cursus urna convallis quis. Proin turpis nisi, hendrerit quis urna id, efficitur molestie augue. Etiam aliquam odio ac diam blandit commodo.</p>
                  </div>
                 
                  <div className='paragraph'>
                    <h1>Section Three</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat non lectus imperdiet semper. Suspendisse posuere metus ultrices lacus tempor viverra. Nulla posuere dignissim tellus, ut luctus nibh vehicula ac. In venenatis dignissim odio in suscipit. Sed ac massa et ex faucibus sodales. Duis convallis ligula ut nunc ullamcorper, at dictum dui euismod. Nunc porta metus ut dui suscipit egestas.</p>

                    <aside className='pull-quote'>
                      <span>
                        In gravida at lacus eget molestie. Nunc porttitor nisi in tellus tempus, nec pulvinar tortor interdum.
                      </span>
                    </aside>


                    <p>Vestibulum dapibus, mi id mollis imperdiet, leo dui varius felis, ac malesuada lacus odio et tellus. Ut ac eros congue, imperdiet urna pellentesque, sagittis neque. Quisque pretium mattis dui vitae dictum. Duis feugiat risus sed leo efficitur, a lacinia ipsum posuere. Mauris lacinia consectetur tempor. Etiam pellentesque maximus urna non porttitor. Vivamus sagittis nec lorem ut mattis. Integer eget mauris sed lectus rutrum euismod sit amet nec tortor. Phasellus bibendum augue in euismod auctor. Ut non pretium odio. Sed finibus pretium justo, ut fermentum elit sagittis a.</p>

                    <p>Pellentesque fermentum cursus finibus. In ac faucibus ligula. Suspendisse potenti. Phasellus ac fringilla sem. In ut dolor eget nunc suscipit pharetra et at ante. Nulla mattis sollicitudin neque, id egestas lorem mattis sit amet. Aenean molestie justo ac porttitor malesuada. Quisque et est a mauris volutpat pretium. Pellentesque a lectus at nisl laoreet molestie. Fusce eget nibh eu tortor tempus fringilla in ac ligula. Mauris mollis odio nunc, in cursus urna convallis quis. Proin turpis nisi, hendrerit quis urna id, efficitur molestie augue. Etiam aliquam odio ac diam blandit commodo.</p>
                  </div>
                  
                  <div className='paragraph'>
                    <h1>Section Four</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat non lectus imperdiet semper. Suspendisse posuere metus ultrices lacus tempor viverra. Nulla posuere dignissim tellus, ut luctus nibh vehicula ac. In venenatis dignissim odio in suscipit. Sed ac massa et ex faucibus sodales. Duis convallis ligula ut nunc ullamcorper, at dictum dui euismod. Nunc porta metus ut dui suscipit egestas.</p>

                    <aside className='pull-quote-right'>
                      <span>
                        In gravida at lacus eget molestie. Nunc porttitor nisi in tellus tempus, nec pulvinar tortor interdum.
                      </span>
                    </aside>


                    <p>Vestibulum dapibus, mi id mollis imperdiet, leo dui varius felis, ac malesuada lacus odio et tellus. Ut ac eros congue, imperdiet urna pellentesque, sagittis neque. Quisque pretium mattis dui vitae dictum. Duis feugiat risus sed leo efficitur, a lacinia ipsum posuere. Mauris lacinia consectetur tempor. Etiam pellentesque maximus urna non porttitor. Vivamus sagittis nec lorem ut mattis. Integer eget mauris sed lectus rutrum euismod sit amet nec tortor. Phasellus bibendum augue in euismod auctor. Ut non pretium odio. Sed finibus pretium justo, ut fermentum elit sagittis a.</p>

                    <p>Pellentesque fermentum cursus finibus. In ac faucibus ligula. Suspendisse potenti. Phasellus ac fringilla sem. In ut dolor eget nunc suscipit pharetra et at ante. Nulla mattis sollicitudin neque, id egestas lorem mattis sit amet. Aenean molestie justo ac porttitor malesuada. Quisque et est a mauris volutpat pretium. Pellentesque a lectus at nisl laoreet molestie. Fusce eget nibh eu tortor tempus fringilla in ac ligula. Mauris mollis odio nunc, in cursus urna convallis quis. Proin turpis nisi, hendrerit quis urna id, efficitur molestie augue. Etiam aliquam odio ac diam blandit commodo.</p>
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
