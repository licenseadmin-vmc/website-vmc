import React, { useState, useEffect } from "react";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import TextField from '@material-ui/core/TextField'

function Footer() {


  const [aboutDrawer, setAboutDrawer] = useState({ right: false })
  const [contactDrawer, setContactDrawer] = useState({ right: false })


  useEffect(() => {


  });

  const openAbout = (side, open) => () => {
    setAboutDrawer({ right: false, [side]: open });
    setContactDrawer({ right: false });
  };

  const toggleAbout = (side, open) => (event) => {
    setContactDrawer({ right: false });
    setAboutDrawer({ ...aboutDrawer, [side]: open });
  };
  const openContact = (side, open) => () => {
    setContactDrawer({ right: false, [side]: open });
    setAboutDrawer({ right: false });
  };

  const toggleContact = (side, open) => (event) => {

    setContactDrawer({ ...contactDrawer, [side]: open });
    setAboutDrawer({ right: false });

  };


  return (
    <>
      <div className="footer footer-slide-in">

        <div className="footer-left">


        </div>


        <div className="footer-right">


          <a onClick={toggleAbout("right", true)}>ABOUT US</a>
          <a onClick={toggleContact("right", true)}>CONTACT US</a>


          <i className="fa-regular fa-copyright"></i> 2022 VitroMetrics Corp.

        </div>


      </div>
      <SwipeableDrawer
        anchor="right"
        open={aboutDrawer.right}
        onClose={openAbout("right", false)}
        onOpen={toggleAbout("right", true)}
        id="about"
      >

        <i className="fa-light fa-xmark" onClick={toggleAbout("right", false)}></i>

        <h2> ABOUT US</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum metus et ullamcorper laoreet. Ut tempor ante placerat, aliquet purus ac, ultricies erat. In eros ante, finibus molestie ligula in, ultrices dictum mauris. Etiam feugiat, mauris ac efficitur venenatis, nulla massa porttitor nulla, nec molestie lacus turpis at metus. In hac habitasse platea dictumst. Vestibulum pellentesque maximus volutpat. Ut eget cursus tortor, vitae tincidunt elit. Suspendisse potenti. Donec consequat malesuada tortor, a ultrices neque consequat in. Nam id lacinia purus.</p>
      </SwipeableDrawer>

      <SwipeableDrawer
        anchor="right"
        open={contactDrawer.right}
        onClose={openContact("right", false)}
        onOpen={toggleContact("right", true)}
        id="about"
      >

        <i className="fa-light fa-xmark" onClick={toggleContact("right", false)}></i>

        <h2>CONTACT US</h2>

        <p>Ut eget cursus tortor, vitae tincidunt elit. Suspendisse potenti. Donec consequat malesuada tortor, a ultrices neque consequat in. Nam id lacinia purus.</p>

        <div className="nudge-sm"></div>
        <TextField
          label="Name"
          autoComplete='nope'
          spellCheck='false'
          name='Name'
          id='Name'
          defaultValue=""
        // onChange={handleChange}
        // error={!!formErrors.orgName}
        // required={formData.userStatus === 'new'}
        />
        <div className="nudge-sm"></div>

        <TextField
          label="Email "
          autoComplete='nope'
          spellCheck='false'
          name='Name'
          id='Name'
          defaultValue=""
        // onChange={handleChange}
        // error={!!formErrors.orgName}
        // required={formData.userStatus === 'new'}
        />
        <div className="nudge-sm"></div>
        <TextField
          label="Which testing disciplines"
          autoComplete='nope'
          spellCheck='false'
          name='Name'
          id='Name'
          defaultValue=""
        // onChange={handleChange}
        // error={!!formErrors.orgName}
        // required={formData.userStatus === 'new'}
        />
          <div className="nudge-sm"></div>
        <TextField
          label="Which regulatory markets besides EU"
          autoComplete='nope'
          spellCheck='false'
          name='Name'
          id='Name'
          defaultValue=""
        // onChange={handleChange}
        // error={!!formErrors.orgName}
        // required={formData.userStatus === 'new'}
        />

        <div className="nudge-lg"></div>

        <a className="link-default" onClick={toggleContact("right", false)}>SUBMIT</a>



      </SwipeableDrawer>
    </>
  );
}

export default Footer;
