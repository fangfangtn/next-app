import React from 'react'
import { FormattedMessage } from "react-intl";
export default function PageContent() {
  return (
    <div className="page-content">
  {/* SLIDER START */}
  <div
    id="welcome_wrapper"
    className="rev_slider_wrapper fullscreen-container"
    data-alias="goodnews-header"
    data-source="gallery"
    style={{ background: "#eeeeee", padding: 0 }}
  >
    <div
      id="welcome"
      className="rev_slider fullscreenbanner"
      style={{ display: "none" }}
      data-version="5.4.3.1"
    >
      <ul>
        {/* SLIDE 1 */}
        <li
          data-index="rs-901"
          data-transition="fade"
          data-slotamount="default"
          data-hideafterloop={0}
          data-hideslideonmobile="off"
          data-easein="default"
          data-easeout="default"
          data-masterspeed="default"
          data-thumb="https://theme7x.com/shapen/images/main-slider/slider1/slide1-thumb.jpg"
          data-rotate={0}
          data-fstransition="fade"
          data-fsmasterspeed={300}
          data-fsslotamount={7}
          data-saveperformance="off"
          data-title=""
          data-param1=""
          data-param2=""
          data-param3=""
          data-param4=""
          data-param5=""
          data-param6=""
          data-param7=""
          data-param8=""
          data-param9=""
          data-param10=""
          data-description=""
        >
          {/* MAIN IMAGE */}
          <img
            src="https://theme7x.com/shapen/images/main-slider/slider1/slide1.jpg"
            alt=""
            data-lazyload="https://theme7x.com/shapen/https://theme7x.com/shapen/images/main-slider/slider1/slide1.jpg"
            data-bgposition="center center"
            data-bgfit="cover"
            data-bgparallax={4}
            className="rev-slidebg"
            data-no-retina=""
          />
          {/* LAYERS */}
          {/* LAYER NR. 1 [ for overlay ] */}
          <div
            className="tp-caption tp-shape tp-shapewrapper "
            id="slide-901-layer-0"
            data-x="['center','center','center','center']"
            data-hoffset="['0','0','0','0']"
            data-y="['middle','middle','middle','middle']"
            data-voffset="['0','0','0','0']"
            data-width="full"
            data-height="full"
            data-whitespace="nowrap"
            data-type="shape"
            data-basealign="slide"
            data-responsive_offset="off"
            data-responsive="off"
            data-frames='[
                          {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                          {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                          ]'
            data-textalign="['left','left','left','left']"
            data-paddingtop="[0,0,0,0]"
            data-paddingright="[0,0,0,0]"
            data-paddingbottom="[0,0,0,0]"
            data-paddingleft="[0,0,0,0]"
            style={{
              zIndex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderColor: "rgba(0, 0, 0, 0)",
              borderWidth: 0
            }}
          ></div>
          {/* LAYER NR. 4 [ for title ] */}
          <div
            className="tp-caption   tp-resizeme"
            id="slide-901-layer-2"
            data-x="['left','left','left','left']"
            data-hoffset="['50','130','130','130']"
            data-y="['top','top','top','top']"
            data-voffset="['240','240','180','200']"
            data-fontsize="['72','72','62','52']"
            data-lineheight="['82','82','72','62']"
            data-width="['700','700','700','500']"
            data-height="['none','none','none','none']"
            data-whitespace="['normal','normal','normal','normal']"
            data-type="text"
            data-responsive_offset="on"
            data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
            data-textalign="['left','left','left','left']"
            data-paddingtop="[5,5,5,5]"
            data-paddingright="[0,0,0,0]"
            data-paddingbottom="[0,0,0,0]"
            data-paddingleft="[0,0,0,0]"
            style={{
              zIndex: 13,
              whiteSpace: "normal",
              fontWeight: 700,
              color: "#111",
              borderWidth: 0,
              fontFamily: '"Poppins", sans-serif',
              textTransform: "uppercase"
            }}
          >
            <div>
              10.10.2023 <br />
              <FormattedMessage
                    id="title.home.welcome_wrapper"
                    values={{ b: (chunks) => <b>{chunks}</b> }}
                  />
            </div>
          </div>
          {/* LAYER NR. 5 [ for block] */}
          <div
            className="tp-caption rev-btn  tp-resizeme slider-block"
            id="slide-901-layer-3"
            data-x="['left','left','left','left']"
            data-hoffset="['0','80','80','60']"
            data-y="['middle','middle','middle','middle']"
            data-voffset="['0','0','0','0']"
            data-width="none"
            data-height="none"
            data-whitespace="nowrap"
            data-type="button"
            data-responsive_offset="on"
            data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                              {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
            data-textalign="['left','left','left','left']"
            data-paddingtop="[250,250,250,200]"
            data-paddingright="[150,150,150,150]"
            data-paddingbottom="[250,250,250,200]"
            data-paddingleft="[150,150,150,150]"
            style={{ zIndex: 8 }}
          >
            <div
              className="rs-wave"
              data-speed={1}
              data-angle={0}
              data-radius="2px"
            />
          </div>
          {/* LAYER NR. 5 [ for block] */}
          <div
            className="tp-caption   tp-resizeme"
            id="slide-901-layer-4"
            data-x="['left','left','left','left']"
            data-hoffset="['50','130','130','130']"
            data-y="['top','top','top','top']"
            data-voffset="['410','410','350','340']"
            data-fontsize="['20','20','30','30']"
            data-lineheight="['28','28','48','38']"
            data-width="['600','600','700','600']"
            data-height="['none','none','none','none']"
            data-whitespace="['normal','normal','normal','normal']"
            data-type="text"
            data-responsive_offset="on"
            data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
            data-textalign="['left','left','left','left']"
            data-paddingtop="[5,5,5,5]"
            data-paddingright="[0,0,0,0]"
            data-paddingbottom="[0,0,0,0]"
            data-paddingleft="[0,0,0,0]"
            style={{
              zIndex: 13,
              whiteSpace: "normal",
              fontWeight: 500,
              color: "#111",
              borderWidth: 0,
              fontFamily: '"Poppins", sans-serif'
            }}
          >
            {/* It is a long established fact that a reader will be distracted by the readable content. */}
          </div>
          {/* LAYER NR. 6 [ for see all service botton ] */}
          <div
            className="tp-caption tp-resizeme"
            id="slide-901-layer-5"
            data-x="['left','left','left','left']"
            data-hoffset="['50','130','130','130']"
            data-y="['top','top','top','top']"
            data-voffset="['500','520','500','480']"
            data-lineheight="['none','none','none','none']"
            data-width="['300','300','300','300']"
            data-height="['none','none','none','none']"
            data-whitespace="['normal','normal','normal','normal']"
            data-type="text"
            data-responsive_offset="on"
            data-frames='[ 
                          {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                          {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                          ]'
            data-textalign="['left','left','left','left']"
            data-paddingtop="[0,0,0,0]"
            data-paddingright="[0,0,0,0]"
            data-paddingbottom="[0,0,0,0]"
            data-paddingleft="[0,0,0,0]"
            style={{ zIndex: 100, textTransform: "uppercase" }}
          >
     
          </div>
        </li>
        
      </ul>
      <div
        className="tp-bannertimer tp-bottom"
        style={{ visibility: "hidden !important" }}
      />
      <div className="multi-line-animation">
        <div className="multi-line-one">
          <div className="animation-block1 bounce-1" />
        </div>
        <div className="multi-line-two">
          <div className="animation-block2 bounce-2" />
        </div>
        <div className="multi-line-three">
          <div className="animation-block1 bounce-1" />
        </div>
        <div className="multi-line-four">
          <div className="animation-block2 bounce-2" />
        </div>
      </div>
    </div>
  </div>
  {/* SLIDER END */}
  {/* OUR SERVICES START */}
  <div className="section-full mobile-page-padding our-service-wrap  p-b50  square_shape2">
    <div className="section-content">
      <div
        className="Service-half-top p-t80   bg-moving"
        style={{
          backgroundImage:
            "url(https://theme7x.com/shapen/images/background/ptn-1.png)"
        }}
      >
        <div className="container">
          {/* TITLE START */}
          <div className="section-head text-white">
            <div className="mt-separator-outer separator-left">
              <div className="mt-separator">
                <h2 className="text-white text-uppercase sep-line-one ">
                  <span className="font-weight-300 site-text-primary">
                  <FormattedMessage
                        id="base.support"
                        values={{
                          b: (chunks) => <b className="text-black">{chunks}</b>,
                        }}
                      />
                  </span>
                  <b style={{ color: "black" }}>
                  {" "}
                  <FormattedMessage
                        id="support.support"
                        values={{
                          b: (chunks) => <b className="text-black">{chunks}</b>,
                        }}
                      />
                  </b>{" "}
                </h2>
              </div>
            </div>
            <h3 style={{ color: "black" }}>
            <FormattedMessage
                  id="text1.support"
                  values={{
                    b: (chunks) => <b className="text-black">{chunks}</b>,
                  }}
                />
            </h3>
          </div>
          {/* TITLE END */}
        </div>
      </div>
      <div className="services-half-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="mt-icon-box-wraper m-b30">
                <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                  <span className="icon-count-number">1</span>
                  <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                    <span className="icon-cell">
                      <img
                        src="https://theme7x.com/shapen/images/icon/crane-1.png"
                        alt=""
                      />
                    </span>
                  </div>
                  
                  <div className="icon-content">
                    <h4 className=" m-b25">
                    <FormattedMessage
                          id="text2.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "} &amp; {" "}<FormattedMessage
                        id="text3.support"
                        values={{
                          b: (chunks) => (
                            <b className="text-black">{chunks}</b>
                          ),
                        }}
                      />
                    </h4>
                    <p>
                    <FormattedMessage
                          id="text4.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                    </p>
                    <a
                      href="services.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                       <FormattedMessage
                          id="text5.see.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "}
                      <i className="fa fa-angle-right arrow-animation" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mt-icon-box-wraper m-b30">
                <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                  <span className="icon-count-number">2</span>
                  <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                    <span className="icon-cell">
                      <img
                        src="https://theme7x.com/shapen/images/icon/renovation.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className=" m-b25">
                    <FormattedMessage
                          id="text6.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                    </h4>
                    <p>
                    <FormattedMessage
                          id="text4.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                    </p>
                    <a
                      href="services.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                      <FormattedMessage
                          id="text5.see.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "}
                      <i className="fa fa-angle-right arrow-animation" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mt-icon-box-wraper m-b30">
                <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                  <span className="icon-count-number">3</span>
                  <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                    <span className="icon-cell">
                      <img
                        src="https://theme7x.com/shapen/images/icon/toolbox.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className=" m-b25">
                    <FormattedMessage
                          id="text8.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                    </h4>
                    <p>
                    <FormattedMessage
                          id="text4.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                    </p>
                    <a
                      href="services.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                       <FormattedMessage
                          id="text5.see.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "}
                      <i className="fa fa-angle-right arrow-animation" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mt-icon-box-wraper m-b30">
                <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                  <span className="icon-count-number">4</span>
                  <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                    <span className="icon-cell">
                      <img
                        src="https://theme7x.com/shapen/images/icon/compass.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className=" m-b25">
                    <FormattedMessage
                          id="text9.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "}
                    </h4>
                    <p>
                    <FormattedMessage
                          id="text4.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                    </p>
                    <a
                      href="services.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                      <FormattedMessage
                          id="text5.see.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "}
                      <i className="fa fa-angle-right arrow-animation" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mt-icon-box-wraper m-b30">
                <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                  <span className="icon-count-number">5</span>
                  <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                    <span className="icon-cell">
                      <img
                        src="https://theme7x.com/shapen/images/icon/crane-1.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className=" m-b25"> <FormattedMessage
                          id="text10.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        /></h4>
                    <p>
                    <FormattedMessage
                          id="text4.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                    </p>
                    <a
                      href="services.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                      <FormattedMessage
                          id="text5.see.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "}
                      <i className="fa fa-angle-right arrow-animation" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mt-icon-box-wraper m-b30">
                <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                  <span className="icon-count-number">6</span>
                  <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                    <span className="icon-cell">
                      <img
                        src="https://theme7x.com/shapen/images/icon/renovation.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className=" m-b25">
                    <FormattedMessage
                          id="text11.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                    </h4>
                    <p>
                    <FormattedMessage
                          id="text4.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                    </p>
                    <a
                      href="services.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                       <FormattedMessage
                          id="text5.see.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "}
                      <i className="fa fa-angle-right arrow-animation" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mt-icon-box-wraper m-b30">
                <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                  <span className="icon-count-number">7</span>
                  <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                    <span className="icon-cell">
                      <img
                        src="https://theme7x.com/shapen/images/icon/toolbox.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className=" m-b25">
                    <FormattedMessage
                          id="text12.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                    </h4>
                    <p>
                    <FormattedMessage
                          id="text4.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                    </p>
                    <a
                      href="services.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                       <FormattedMessage
                          id="text5.see.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "}
                      <i className="fa fa-angle-right arrow-animation" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mt-icon-box-wraper m-b30">
                <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                  <span className="icon-count-number">8</span>
                  <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                    <span className="icon-cell">
                      <img
                        src="https://theme7x.com/shapen/images/icon/compass.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className=" m-b25">
                    <FormattedMessage
                          id="text13.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                    </h4>
                    <p>
                    <FormattedMessage
                          id="text4.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />
                    </p>
                    <a
                      href="services.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                      <FormattedMessage
                          id="text5.see.support"
                          values={{
                            b: (chunks) => (
                              <b className="text-black">{chunks}</b>
                            ),
                          }}
                        />{" "}
                      <i className="fa fa-angle-right arrow-animation" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* ABOUT COMPANY START */}
  <div
    className="section-full  mobile-page-padding p-t80 p-b30 site-bg-dark bg-repeat square_shape2 bg-moving"
    style={{
      backgroundImage:
        "url(https://theme7x.com/shapen/images/background/bg-6.png)"
    }}
  >
    <div className="container">
      {/* TITLE START */}
      <div className="section-head">
        <div className="mt-separator-outer separator-center">
          <div className="mt-separator">
            <h2 className="text-white text-uppercase sep-line-one ">
              <span className="font-weight-300 site-text-primary">
              <FormattedMessage
                      id="only"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />  
              </span>{" "}
              <FormattedMessage
                    id="title1.conversion"
                    values={{ b: (chunks) => <b>{chunks}</b> }}
                  />
            </h2>
          </div>
        </div>
      </div>
      {/* TITLE END */}
      <div className="section-content">
        <div className="row">
          <div className="col-lg-9 col-md-12">
            <div className="owl-carousel about-home owl-btn-vertical-center">
              {/* COLUMNS 1 */}
              <div className="item ">
                <div className="mt-img-effect zoom-slow">
                  <a href="about-1.html">
                    <img
                      src="https://theme7x.com/shapen/images/gallery/pic1.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              {/* COLUMNS 2 */}
              <div className="item ">
                <div className="mt-img-effect zoom-slow">
                  <a href="about-1.html">
                    <img
                      src="https://theme7x.com/shapen/images/gallery/pic8.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              {/* COLUMNS 3 */}
              <div className="item ">
                <div className="mt-img-effect zoom-slow">
                  <a href="about-1.html">
                    <img
                      src="https://theme7x.com/shapen/images/gallery/pic9.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              {/* COLUMNS 4 */}
              <div className="item ">
                <div className="mt-img-effect zoom-slow">
                  <a href="about-1.html">
                    <img
                      src="https://theme7x.com/shapen/images/gallery/pic6.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              {/* COLUMNS 5 */}
              <div className="item ">
                <div className="mt-img-effect zoom-slow">
                  <a href="about-1.html">
                    <img
                      src="https://theme7x.com/shapen/images/gallery/pic2.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="about-home-right bg-white p-a30">
              <h4 className="m-t0">
                <span className="font-weight-100" />
                <FormattedMessage
                      id="title2.conversion"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
              </h4>
              <p>
              <FormattedMessage
                      id="text1.conversion"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
              </p>
              <p>
              <FormattedMessage
                      id="text2.conversion"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
              </p>
              <div className="text-right">
                <a
                  href="about-1.html"
                  className="site-button-link"
                  data-hover="Xem Chi tiết"
                >
                   <FormattedMessage
                        id="see.conversion"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                  <i className="fa fa-angle-right arrow-animation" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  {/* ABOUT COMPANY END */}
  
  {/* OUR MISSION START */}
  <div
    className="section-full mobile-page-padding mission-outer-section  p-t80 p-b30 bg-gray bg-no-repeat bg-right-center"
    style={{
      backgroundImage:
        "url(https://theme7x.com/shapen/images/left-men.png), url(https://theme7x.com/shapen/images/background/bg-4.png)"
    }}
  >
    <div className="section-content">
      <div className="container">
        <div className="section-head">
          <div className="mt-separator-outer separator-center">
            <div className="mt-separator">
              <h2 className="text-uppercase sep-line-one ">
                <span className="font-weight-300 site-text-primary">
                <FormattedMessage
                        id="title1.recital"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />{" "}
                </span>{" "}
                <FormattedMessage
                      id="title1.1.recital"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div
              className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left"
              style={{
                backgroundImage:
                  "url(https://theme7x.com/shapen/images/background/bg-site.png)"
              }}
            >
              <h3 className="m-t0">
                <span className="font-weight-100">  <FormattedMessage
                        id="title1.recital"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      /></span>
                <br /> <FormattedMessage
                      id="title1.1.recital"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
              </h3>
              <p>
              <FormattedMessage
                      id="text1.recital"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
              </p>
              <ul className="list-angle-right anchor-line">
                <li>
                  <a href="services.html">
                  <FormattedMessage
                          id="link1.recital"
                          values={{ b: (chunks) => <b>{chunks}</b> }}
                        />
                  </a>
                </li>
                <li>
                  <a href="services.html">
                  <FormattedMessage
                          id="link2.recital"
                          values={{ b: (chunks) => <b>{chunks}</b> }}
                        />
                  </a>
                </li>
                <li>
                  <a href="services.html">
                  <FormattedMessage
                          id="link3.recital"
                          values={{ b: (chunks) => <b>{chunks}</b> }}
                        />
                  </a>
                </li>
                <li>
                  <a href="services.html">
                  <FormattedMessage
                          id="link4.recital"
                          values={{ b: (chunks) => <b>{chunks}</b> }}
                        />
                  </a>
                </li>
                <li>
                  <a href="services.html">
                  <FormattedMessage
                          id="link5.recital"
                          values={{ b: (chunks) => <b>{chunks}</b> }}
                        />
                  </a>
                </li>
              </ul>
              <div className="text-right">
                <a
                  href="about-1.html"
                  className="site-button-link"
                  data-hover="Xem Chi tiết"
                >
                  <FormattedMessage
                        id="see.recital"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                  <i className="fa fa-angle-right arrow-animation" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div
              className="mission-mid bg-no-repeat bg-cover m-b30"
              style={{
                backgroundImage:
                  "url(https://theme7x.com/shapen/images/mission.jpg)"
              }}
            ></div>
          </div>
         
        </div>
      </div>
    </div>
   
  </div>
  {/* OUR MISSION  END */}
  
  {/* OUR PROJECT START */}
  <div
    className="section-full mobile-page-padding our-project-wrap p-t80 p-b30 square_shape2"
    style={{
      backgroundImage:
        "url(https://theme7x.com/shapen/images/background/bg5.jpg)"
    }}
  >
    <div className="container">
      {/* TITLE START */}
      <div className="section-head">
        <div className="mt-separator-outer separator-left">
          <div className="mt-separator">
            <h2 className="text-white text-uppercase sep-line-one ">
              <span className="font-weight-300 site-text-primary">
              <FormattedMessage
                      id="title1.problem"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
              </span>{" "}
              <FormattedMessage
                    id="title1.1.problem"
                    values={{ b: (chunks) => <b>{chunks}</b> }}
                  />
            </h2>
          </div>
        </div>
      </div>
      {/* TITLE END */}
      <div className="section-content">
        <div className="portfolio-wrap row mfp-gallery product-stamp clearfix">
          {/* COLUMNS 1 */}
          <div className="stamp masonry-item col-lg-3 col-md-6 m-b30">
            <div className="bg-gray p-a30">
              <div className="filter-wrap">
                <ul className="filter-navigation masonry-filter text-uppercase">
                  <li className="active">
                    <a data-filter="*" data-hover="All" href="#">
                    <FormattedMessage
                            id="title2.problem"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".cat-1"
                      data-hover="Lĩnh vực theo chiều ngang"
                      href="javascript:;"
                    >
                       <FormattedMessage
                            id="link1.problem"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".cat-4"
                      data-hover="Lĩnh vực ưu tiên CĐS QG"
                      href="javascript:;"
                    >
                       <FormattedMessage
                            id="link2.problem"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".cat-2"
                      data-hover="Trụ cột của CĐS QG"
                      href="javascript:;"
                    >
                       <FormattedMessage
                            id="link3.problem"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".cat-3"
                      data-hover="Đối tượng sử dụng"
                      href="javascript:;"
                    >
                       <FormattedMessage
                            id="link4.problem"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".cat-5"
                      data-hover="Theo cấp hành chính
"
                      href="javascript:;"
                    >
                       <FormattedMessage
                            id="link5.problem"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* COLUMNS 2 */}
          <div className="masonry-item  cat-2 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img
                  src="https://theme7x.com/shapen/images/projects/portrait/pic1.jpg"
                  alt=""
                />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">
                <FormattedMessage
                        id="text1.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                </h4>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 3 */}
          <div className="masonry-item  cat-2 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img
                  src="https://theme7x.com/shapen/images/projects/portrait/pic2.jpg"
                  alt=""
                />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">
                <FormattedMessage
                        id="text2.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                </h4>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 4 */}
          <div className="masonry-item  cat-6 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img
                  src="https://theme7x.com/shapen/images/projects/portrait/pic3.jpg"
                  alt=""
                />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">
                <FormattedMessage
                        id="text3.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      /> &amp;  <FormattedMessage
                      id="text3.1.problem"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
                </h4>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 5 */}
          <div className="masonry-item  cat-6 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img
                  src="https://theme7x.com/shapen/images/projects/portrait/pic4.jpg"
                  alt=""
                />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">
                <FormattedMessage
                        id="text4.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                </h4>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 6 */}
          <div className="masonry-item  cat-3 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img
                  src="https://theme7x.com/shapen/images/projects/portrait/pic5.jpg"
                  alt=""
                />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">
                <FormattedMessage
                        id="text5.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                </h4>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 7 */}
          <div className="masonry-item  cat-3 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img
                  src="https://theme7x.com/shapen/images/projects/portrait/pic6.jpg"
                  alt=""
                />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">
                <FormattedMessage
                        id="text6.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                </h4>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 8 */}
          <div className="masonry-item  cat-1 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img
                  src="https://theme7x.com/shapen/images/projects/portrait/pic7.jpg"
                  alt=""
                />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">
                <FormattedMessage
                        id="text7.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                </h4>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 11 */}
          <div className="masonry-item  cat-6 col-lg-6 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img
                  src="https://theme7x.com/shapen/images/projects/pic-l-5.jpg"
                  alt=""
                />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">
                <FormattedMessage
                        id="text8.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                </h4>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 9 */}
          <div className="masonry-item  cat-5 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img
                  src="https://theme7x.com/shapen/images/projects/pic-1.jpg"
                  alt=""
                />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">
                <FormattedMessage
                        id="text9.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                </h4>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 10 */}
          <div className="masonry-item  cat-4 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img
                  src="https://theme7x.com/shapen/images/projects/pic-2.jpg"
                  alt=""
                />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">
                <FormattedMessage
                        id="text10.problem"
                        values={{ b: (chunks) => <b>{chunks}</b> }}
                      />
                </h4>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  {/* OUR PROJECT END */}
  {/* OUR BLOG START */}
  <div className="section-full mobile-page-padding latest-blog-wrap p-t80 p-b30 square_shape1">
    
    <div className="container">
      {/* TITLE START */}
      <div className="section-head ">
        <div className="mt-separator-outer separator-center">
          <div className="mt-separator">
            <h2 className="text-uppercase sep-line-one ">
              <span className="font-weight-300 site-text-primary">
              <FormattedMessage
                      id="title1.ingredient"
                      values={{ b: (chunks) => <b>{chunks}</b> }}
                    />
              </span>{" "}
              <FormattedMessage
                    id="title1.1.ingredient"
                    values={{ b: (chunks) => <b>{chunks}</b> }}
                  />
            </h2>
          </div>
        </div>
      </div>
      {/* TITLE END */}
      {/* IMAGE CAROUSEL START */}
      <div className="section-content">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
              <div className="mt-post-media mt-img-overlay7">
                <a href="javascript:;">
                  <img
                    src="https://theme7x.com/shapen/images/blog/latest-blog/pic1.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="mt-post-info p-a30">
                <div className="post-overlay-position">
                  <div className="mt-post-meta ">
                    <ul>
                      <li className="post-date">
                        <strong className="site-text-primary">21</strong>
                        <span>08/2023</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-post-title ">
                    <h4 className="post-title m-b0">
                    <FormattedMessage
                            id="content1.ingredient"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                    </h4>
                  </div>
                  <div className="mt-post-text">
                    <p>
                    <FormattedMessage
                            id="text1.ingredient"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                    </p>
                  </div>
                  <div className="readmore-line">
                    <span>
                      <a
                        href="blog-grid.html"
                        className="site-button-link"
                        data-hover="Xem Chi tiết"
                      >
                         <FormattedMessage
                              id="see.ingredient"
                              values={{ b: (chunks) => <b>{chunks}</b> }}
                            />{" "}
                        <i className="fa fa-angle-right arrow-animation" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
              <div className="mt-post-media mt-img-overlay7">
                <a href="javascript:;">
                  <img
                    src="https://theme7x.com/shapen/images/blog/latest-blog/pic2.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="mt-post-info p-a30">
                <div className="post-overlay-position">
                  <div className="mt-post-meta ">
                    <ul>
                      <li className="post-date">
                        <strong className="site-text-primary">18</strong>
                        <span>08/2023</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-post-title ">
                    <h4 className="post-title m-b0">
                    <FormattedMessage
                            id="content2.ingredient"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                    </h4>
                  </div>
                  <div className="mt-post-text">
                    <p>
                    <FormattedMessage
                            id="text2.ingredient"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                    </p>
                  </div>
                  <div className="readmore-line">
                    <span>
                      <a
                        href="blog-grid.html"
                        className="site-button-link"
                        data-hover="Xem Chi tiết"
                      >
                         <FormattedMessage
                              id="see.ingredient"
                              values={{ b: (chunks) => <b>{chunks}</b> }}
                            />{" "}
                        <i className="fa fa-angle-right arrow-animation" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
              <div className="mt-post-media mt-img-overlay7">
                <a href="javascript:;">
                  <img
                    src="https://theme7x.com/shapen/images/blog/latest-blog/pic3.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="mt-post-info p-a30">
                <div className="post-overlay-position">
                  <div className="mt-post-meta ">
                    <ul>
                      <li className="post-date">
                        <strong className="site-text-primary">14</strong>
                        <span>08/2023</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-post-title ">
                    <h4 className="post-title m-b0">
                    <FormattedMessage
                            id="content3.ingredient"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                    </h4>
                  </div>
                  <div className="mt-post-text">
                    <p>
                    <FormattedMessage
                            id="text3.ingredient"
                            values={{ b: (chunks) => <b>{chunks}</b> }}
                          />
                    </p>
                  </div>
                  <div className="readmore-line">
                    <span>
                      <a
                        href="blog-grid.html"
                        className="site-button-link"
                        data-hover="Xem Chi tiết"
                      >
                        <FormattedMessage
                              id="see.ingredient"
                              values={{ b: (chunks) => <b>{chunks}</b> }}
                            />{" "}
                        <i className="fa fa-angle-right arrow-animation" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hilite-title text-right p-r50 text-uppercase hilite-dark">
      <strong>Blog</strong>
    </div>
  </div>
  {/* OUR BLOG END */}
 
</div>
  )
}
