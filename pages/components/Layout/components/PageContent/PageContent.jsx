import React from 'react'

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
              CHUYỂN ĐỔI SỐ QUỐC GIA
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
            {/* <a href="about-1.html" class="site-button-secondry btn-effect">More About</a> */}
          </div>
        </li>
        {/* SLIDE 2 */}
        {/* <li data-index="rs-902" data-transition="fade" data-slotamount="default" data-hideafterloop="0"
                      data-hideslideonmobile="off" data-easein="default" data-easeout="default"
                      data-masterspeed="default"
                      data-thumb="https://theme7x.com/shapen/images/main-slider/slider1/slide2-thumb.jpg"
                      data-rotate="0" data-fstransition="fade" data-fsmasterspeed="300" data-fsslotamount="7"
                      data-saveperformance="off" data-title="" data-param1="" data-param2="" data-param3=""
                      data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9=""
                      data-param10="" data-description="">
                      <img src="https://theme7x.com/shapen/images/main-slider/slider1/slide2.jpg" alt=""
                          data-lazyload="https://theme7x.com/shapen/images/main-slider/slider1/slide2.jpg"
                          data-bgposition="center center" data-bgfit="cover" data-bgparallax="4"
                          class="rev-slidebg" data-no-retina>
            
                      <div class="tp-caption tp-shape tp-shapewrapper " id="slide-902-layer-0"
                          data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                          data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
                          data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape"
                          data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames='[
                              {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                              {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                              ]' data-textAlign="['left','left','left','left']" data-paddingtop="[0,0,0,0]"
                          data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                          data-paddingleft="[0,0,0,0]"
                          style="z-index: 1;background-color:rgba(255, 255, 255, 0.3);border-color:rgba(0, 0, 0, 0);border-width:0px;">
                      </div>


                      <div class="tp-caption   tp-resizeme" id="slide-902-layer-2"
                          data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']"
                          data-y="['top','top','top','top']" data-voffset="['240','240','180','200']"
                          data-fontsize="['72','72','62','52']" data-lineheight="['82','82','72','62']"
                          data-width="['700','700','700','500']" data-height="['none','none','none','none']"
                          data-whitespace="['normal','normal','normal','normal']" data-type="text"
                          data-responsive_offset="on"
                          data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                          data-textAlign="['left','left','left','left']" data-paddingtop="[5,5,5,5]"
                          data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                          data-paddingleft="[0,0,0,0]" style="z-index: 13; 
                              white-space: normal; 
                              font-weight: 700;
                              color:#111;
                              border-width:0px;font-family: 'Poppins', sans-serif; text-transform:uppercase ;">
                          <div>From concept to creation.</div>

                      </div>


                      <div class="tp-caption rev-btn  tp-resizeme slider-block" id="slide-902-layer-3"
                          data-x="['left','left','left','left']" data-hoffset="['0','80','80','60']"
                          data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
                          data-width="none" data-height="none" data-whitespace="nowrap" data-type="button"
                          data-responsive_offset="on"
                          data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                                  {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                          data-textAlign="['left','left','left','left']" data-paddingtop="[250,250,250,200]"
                          data-paddingright="[150,150,150,150]" data-paddingbottom="[250,250,250,200]"
                          data-paddingleft="[150,150,150,150]" style="z-index: 8;">
                          <div class="rs-wave" data-speed="1" data-angle="0" data-radius="2px"></div>
                      </div>


                      <div class="tp-caption   tp-resizeme" id="slide-902-layer-4"
                          data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']"
                          data-y="['top','top','top','top']" data-voffset="['410','410','350','340']"
                          data-fontsize="['20','20','30','30']" data-lineheight="['28','28','48','38']"
                          data-width="['600','600','700','600']" data-height="['none','none','none','none']"
                          data-whitespace="['normal','normal','normal','normal']" data-type="text"
                          data-responsive_offset="on"
                          data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                          data-textAlign="['left','left','left','left']" data-paddingtop="[5,5,5,5]"
                          data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                          data-paddingleft="[0,0,0,0]" style="z-index: 13; 
                              white-space: normal; 
                              font-weight: 500;
                              color:#111;
                              border-width:0px;font-family: 'Poppins', sans-serif;">
                          It is a long established fact that a reader will be distracted by the readable content.

                      </div>

                      <div class="tp-caption tp-resizeme" id="slide-902-layer-5"
                          data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']"
                          data-y="['top','top','top','top']" data-voffset="['500','520','500','480']"
                          data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']"
                          data-height="['none','none','none','none']"
                          data-whitespace="['normal','normal','normal','normal']" data-type="text"
                          data-responsive_offset="on" data-frames='[ 
                              {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                              {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                              ]' data-textAlign="['left','left','left','left']" data-paddingtop="[0,0,0,0]"
                          data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                          data-paddingleft="[0,0,0,0]" style="z-index:100; text-transform:uppercase;">
                          <a href="about-1.html" class="site-button-secondry btn-effect">More About</a>
                      </div>

                  </li> */}
        {/* SLIDE 3*/}
        {/* <li data-index="rs-903" data-transition="fade" data-slotamount="default" data-hideafterloop="0"
                      data-hideslideonmobile="off" data-easein="default" data-easeout="default"
                      data-masterspeed="default"
                      data-thumb="https://theme7x.com/shapen/images/main-slider/slider1/slide3-thumb.jpg"
                      data-rotate="0" data-fstransition="fade" data-fsmasterspeed="300" data-fsslotamount="7"
                      data-saveperformance="off" data-title="" data-param1="" data-param2="" data-param3=""
                      data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9=""
                      data-param10="" data-description="">
                      <img src="https://theme7x.com/shapen/images/main-slider/slider1/slide3.jpg" alt=""
                          data-lazyload="https://theme7x.com/shapen/images/main-slider/slider1/slide3.jpg"
                          data-bgposition="center center" data-bgfit="cover" data-bgparallax="4"
                          class="rev-slidebg" data-no-retina>
                    
                      <div class="tp-caption tp-shape tp-shapewrapper " id="slide-903-layer-0"
                          data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                          data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
                          data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape"
                          data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames='[
                              {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                              {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                              ]' data-textAlign="['left','left','left','left']" data-paddingtop="[0,0,0,0]"
                          data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                          data-paddingleft="[0,0,0,0]"
                          style="z-index: 1;background-color:rgba(255, 255, 255, 0.3);border-color:rgba(0, 0, 0, 0);border-width:0px;">
                      </div>




                      <div class="tp-caption   tp-resizeme" id="slide-903-layer-2"
                          data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']"
                          data-y="['top','top','top','top']" data-voffset="['240','240','180','200']"
                          data-fontsize="['72','72','62','52']" data-lineheight="['82','82','72','62']"
                          data-width="['700','700','700','500']" data-height="['none','none','none','none']"
                          data-whitespace="['normal','normal','normal','normal']" data-type="text"
                          data-responsive_offset="on"
                          data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                          data-textAlign="['left','left','left','left']" data-paddingtop="[5,5,5,5]"
                          data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                          data-paddingleft="[0,0,0,0]" style="z-index: 13; 
                              white-space: normal; 
                              font-weight: 700;
                              color:#111;
                              border-width:0px;font-family: 'Poppins', sans-serif; text-transform:uppercase ;">
                          <div>Making dreams come to life</div>

                      </div>


                      <div class="tp-caption rev-btn  tp-resizeme slider-block" id="slide-903-layer-3"
                          data-x="['left','left','left','left']" data-hoffset="['0','80','80','60']"
                          data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
                          data-width="none" data-height="none" data-whitespace="nowrap" data-type="button"
                          data-responsive_offset="on"
                          data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                                  {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                          data-textAlign="['left','left','left','left']" data-paddingtop="[250,250,250,200]"
                          data-paddingright="[150,150,150,150]" data-paddingbottom="[250,250,250,200]"
                          data-paddingleft="[150,150,150,150]" style="z-index: 8;">
                          <div class="rs-wave" data-speed="1" data-angle="0" data-radius="2px"></div>
                      </div>


                      <div class="tp-caption   tp-resizeme" id="slide-903-layer-4"
                          data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']"
                          data-y="['top','top','top','top']" data-voffset="['410','410','350','340']"
                          data-fontsize="['20','20','30','30']" data-lineheight="['28','28','48','38']"
                          data-width="['600','600','700','600']" data-height="['none','none','none','none']"
                          data-whitespace="['normal','normal','normal','normal']" data-type="text"
                          data-responsive_offset="on"
                          data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                          data-textAlign="['left','left','left','left']" data-paddingtop="[5,5,5,5]"
                          data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                          data-paddingleft="[0,0,0,0]" style="z-index: 13; 
                              white-space: normal; 
                              font-weight: 500;
                              color:#111;
                              border-width:0px;font-family: 'Poppins', sans-serif;">
                          It is a long established fact that a reader will be distracted by the readable content.

                      </div>

                      <div class="tp-caption tp-resizeme" id="slide-903-layer-5"
                          data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']"
                          data-y="['top','top','top','top']" data-voffset="['500','520','500','480']"
                          data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']"
                          data-height="['none','none','none','none']"
                          data-whitespace="['normal','normal','normal','normal']" data-type="text"
                          data-responsive_offset="on" data-frames='[ 
                                  {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                  {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                  ]' data-textAlign="['left','left','left','left']" data-paddingtop="[0,0,0,0]"
                          data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                          data-paddingleft="[0,0,0,0]" style="z-index:100; text-transform:uppercase;">
                          <a href="about-1.html" class="site-button-secondry btn-effect">More About</a>
                      </div>

                  </li> */}
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
                    Nền tảng
                  </span>
                  <b style={{ color: "black" }}> hỗ trợ</b>{" "}
                </h2>
              </div>
            </div>
            <h3 style={{ color: "black" }}>
              Tham khảo danh sách các nền tảng hỗ trợ chuyển đổi số, phục vụ
              công cuộc chuyển đổi số quốc gia: Chính phủ số, kinh tế số và xã
              hội số.
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
                  {/* <div class="icon-content">
                                          <h4 class="mt-tilte m-b25">Building <br>Construction</h4>
                                          <p>lorem Ipsum available, but the majority have suffered alterati on in
                                              some form, by ious by accident.</p>
                                          <a href="services.html" class="site-button-link"
                                              data-hover="Read More">Read More <i
                                                  class="fa fa-angle-right arrow-animation"></i></a>
                                      </div> */}
                  <div className="icon-content">
                    <h4 className=" m-b25">
                      Đánh giá &amp; xếp hạng chuyển đổi số
                    </h4>
                    <p>
                      Đây là nội dung demo phục vụ cho việc đánh giá có phù hợp
                      không.
                    </p>
                    <a
                      href="services.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                      Xem Chi tiết{" "}
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
                      Nền tảng học hỗ trợ học trực tuyến
                    </h4>
                    <p>
                      Đây là nội dung demo phục vụ cho việc đánh giá có phù hợp
                      không.
                    </p>
                    <a
                      href="services.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                      Xem Chi tiết{" "}
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
                      Nền tảng khảo sát đánh giá phân tích
                    </h4>
                    <p>
                      Đây là nội dung demo phục vụ cho việc đánh giá có phù hợp
                      không.
                    </p>
                    <a
                      href="services.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                      Xem Chi tiết{" "}
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
                      Nền tảng xã hội số và kinh tế số{" "}
                    </h4>
                    <p>
                      Đây là nội dung demo phục vụ cho việc đánh giá có phù hợp
                      không.
                    </p>
                    <a
                      href="services.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                      Xem Chi tiết{" "}
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
                    <h4 className=" m-b25">Cẩm nang chuyển đổi số</h4>
                    <p>
                      Đây là nội dung demo phục vụ cho việc đánh giá có phù hợp
                      không.
                    </p>
                    <a
                      href="services.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                      Xem Chi tiết{" "}
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
                      SMEdx - Chuyển đổi số cho doanh nghiệp
                    </h4>
                    <p>
                      Đây là nội dung demo phục vụ cho việc đánh giá có phù hợp
                      không.
                    </p>
                    <a
                      href="services.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                      Xem Chi tiết{" "}
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
                    <h4 className=" m-b25">Cổng thông tin dữ liệu quốc gia</h4>
                    <p>
                      Đây là nội dung demo phục vụ cho việc đánh giá có phù hợp
                      không.
                    </p>
                    <a
                      href="services.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                      Xem Chi tiết{" "}
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
                    <h4 className=" m-b25">Nền tảng số EMC tracking</h4>
                    <p>
                      Đây là nội dung demo phục vụ cho việc đánh giá có phù hợp
                      không.
                    </p>
                    <a
                      href="services.html"
                      className="site-button-link"
                      data-hover="Xem Chi tiết"
                    >
                      Xem Chi tiết{" "}
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
    {/* <div class="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
              <strong>Dịch vụ</strong>
          </div> */}
  </div>
  {/* OUR SERVICES  END */}
  {/* OUR SPECIALLIZATION START */}
  {/* <div class="section-full mobile-page-padding our-speci_wrap bg-white  p-t80 p-b30 bg-repeat square_shape1"
          style="background-image:url(https://theme7x.com/shapen/images/background/bg-5.png);">
          <div class="container">
              <div class="section-content">
                  <div class="row">
                      <div class="col-xl-3 col-lg-4 col-md-6  m-b30">

                          <div class="image-effect-one hover-shadow">
                              <img src="https://theme7x.com/shapen/images/pic1.jpg" alt="" />
                              <div class="figcaption">
                                  <h4>Construction</h4>
                                  <p>Engineering your dreams with us.</p>
                                  <a href="project-detail.html"><i class="link-plus site-bg-primary"></i></a>
                              </div>


                          </div>

                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-6 m-b30">

                          <div class="image-effect-one hover-shadow">
                              <img src="https://theme7x.com/shapen/images/pic2.jpg" alt="" />
                              <div class="figcaption">
                                  <h4>Architecture</h4>
                                  <p>Life is Architecture.</p>
                                  <a href="project-detail.html"><i class="link-plus site-bg-primary"></i></a>
                              </div>

                          </div>

                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-6 m-b30">

                          <div class="image-effect-one hover-shadow">
                              <img src="https://theme7x.com/shapen/images/pic3.jpg" alt="" />
                              <div class="figcaption site-bg-dark">
                                  <h4>Renovation</h4>
                                  <p>Dazzling Design</p>
                                  <a href="project-detail.html"><i class="link-plus site-bg-primary"></i></a>
                              </div>

                          </div>

                      </div>

                      <div class="col-xl-3 col-lg-12 col-md-6 m-b30">

                          <div class="mt-box our-speciallization-content">
                              <h3 class="m-t0"><span class="font-weight-100">Building</span> <br>It better in
                                  concrete.</h3>
                              <p>When it comes to your house, don’t mess with the rest, trust the best. Making
                                  your vision come true, that is what we do.</p>
                              <a href="about-1.html" class="site-button btn-effect">View All</a>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
          <div class="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
              <strong>Welcome</strong>
          </div>
      </div> */}
  {/* OUR SPECIALLIZATION END */}
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
              <span className="font-weight-300 site-text-primary">Cục </span>{" "}
              Chuyển đổi số Quốc gia
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
                Cục Chuyển đổi số quốc gia
              </h4>
              <p>
                Cục Chuyển đổi số quốc gia là tổ chức trực thuộc Bộ Thông tin và
                Truyền thông, thực hiện chức năng tham mưu giúp Bộ trưởng quản
                lý nhà nước và tổ chức thực thi pháp luật về ứng dụng công nghệ
                thông tin trong cơ quan nhà nước, phát triển Chính phủ điện tử,
                Chính phủ số; là đầu mối tổng hợp, tham mưu, điều phối, thúc đẩy
                chuyển đổi số quốc gia.
              </p>
              <p>
                Cục Chuyển đổi số quốc gia có tư cách pháp nhân, có con dấu và
                tài khoản riêng theo quy định của pháp luật, có trụ sở chính đặt
                tại thành phố Hà Nội.
              </p>
              <div className="text-right">
                <a
                  href="about-1.html"
                  className="site-button-link"
                  data-hover="Xem Chi tiết"
                >
                  Xem chi tiết
                  <i className="fa fa-angle-right arrow-animation" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div class="hilite-title text-left p-l50 text-uppercase hilite-dark">
              <strong>Giới thiệu</strong>
          </div> */}
  </div>
  {/* ABOUT COMPANY END */}
  {/* OUR VALUE START */}
  {/* <div class="section-full mobile-page-padding p-t80 p-b50 bg-white our-valu-wrap">
          <div class="container">

              <div class="section-content">
                  <div class="row">
                      <div class="col-lg-4 col-md-12">
                          <div class="section-head">
                              <div class="mt-separator-outer separator-left">
                                  <div class="mt-separator">
                                      <h2 class="text-uppercase sep-line-one "><span
                                              class="font-weight-300 site-text-primary">Our</span> Value</h2>
                                  </div>
                                  <p>It is a long established fact that a reader will be distracted by the
                                      readable content of a page when looking at its layout.</p>
                              </div>
                          </div>
                          <div class="author-info p-t20">

                              <div class="author-signature">
                                  <img src="https://theme7x.com/shapen/images/Signature+Black.png" alt="Signature"
                                      width="150">
                              </div>
                              <div class="author-name">
                                  <h4 class="m-t0">David Houkr</h4>
                                  <p>Architect & Founder</p>
                              </div>
                          </div>
                          <div class="video-section-full bg-no-repeat bg-cover overlay-wraper"
                              style="background-image:url(https://theme7x.com/shapen/images/video-bg.jpg)">
                              <div class="overlay-main bg-black opacity-07"></div>
                              <div class="video-section-inner">
                                  <div class="video-section-content">
                                      <div class="video-section-left">
                                          <a href="https://player.vimeo.com/video/34741214?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0"
                                              class="mfp-video play-now">
                                              <i class="icon fa fa-play"></i>
                                              <span class="ripple"></span>
                                          </a>
                                      </div>
                                      <div class="video-section-right">
                                          <a href="https://player.vimeo.com/video/34741214?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0"
                                              class="mfp-video font-weight-600 text-uppercase">Video
                                              Presentation</a>
                                      </div>
                                  </div>
                              </div>
                          </div>

                      </div>
                      <div class="col-lg-3 col-md-6">

                          <div class="mt-count m-b30 text-white mt-icon-box-wraper center  site-bg-dark p-a20">
                              <div class="counter font-30 font-weight-800 m-b15 site-text-primary">450</div>
                              <h4 class="m-tb0">Active Experts</h4>
                          </div>
                          <div class="mt-count m-b30 text-white mt-icon-box-wraper center  site-bg-dark p-a20">
                              <div class="counter font-30 font-weight-800 m-b15  site-text-primary">670</div>
                              <h4 class="m-tb0">Satisfied Clients</h4>
                          </div>
                          <div class="mt-count m-b30 text-white mt-icon-box-wraper center  site-bg-dark p-a20">
                              <div class="counter font-30 font-weight-800 m-b15 site-text-primary">1500</div>
                              <h4 class="m-tb0">Project Complete</h4>
                          </div>
                      </div>
                      <div class="col-lg-5 col-md-6">

                          <div class="our-exp">
                              <div class="mt-box">
                                  <h3 class="m-t0"><span class="font-weight-100"> We have</span><span
                                          class="site-text-primary"> 15 years</span> experience in construction
                                  </h3>
                              </div>

                              <span class="progressText text-black"><B>Architecher</B></span>
                              <div class="progress m-b30 m-t10">
                                  <div class="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black"
                                      role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0"
                                      aria-valuemax="100">
                                      <span>85%</span>
                                  </div>
                              </div>

                              <span class="progressText text-black"><B>Construction</B></span>
                              <div class="progress m-b30 m-t10">
                                  <div class="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black"
                                      role="progressbar" style="width: 78%;" aria-valuenow="78" aria-valuemin="0"
                                      aria-valuemax="100"><span>78%</span></div>
                              </div>

                              <span class="progressText text-black"><B>Interior</B></span>
                              <div class="progress m-b30 m-t10">
                                  <div class="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black"
                                      role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0"
                                      aria-valuemax="100"><span>65%</span></div>
                              </div>

                              <span class="progressText text-black"><B>Building</B></span>
                              <div class="progress m-b30 m-t10">
                                  <div class="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black"
                                      role="progressbar" style="width: 78%;" aria-valuenow="78" aria-valuemin="0"
                                      aria-valuemax="100"><span>78%</span></div>
                              </div>

                              <span class="progressText text-black"><B>Commercial</B></span>
                              <div class="progress m-b30 m-t10">
                                  <div class="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black"
                                      role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0"
                                      aria-valuemax="100"><span>95%</span></div>
                              </div>

                          </div>

                      </div>

                  </div>
              </div>
          </div>
      </div> */}
  {/* OUR VALUE END */}
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
                  Câu chuyện{" "}
                </span>{" "}
                chuyển đổi số
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
                <span className="font-weight-100"> Câu chuyện</span>
                <br /> chuyển đổi số
              </h3>
              <p>
                “Internet là một mạng lưới phi tập trung với sự sáng tạo không
                giới hạn. Và chuyển đổi số chính là bước tiếp theo của cuộc cách
                mạng về phi tập trung hóa”
              </p>
              <ul className="list-angle-right anchor-line">
                <li>
                  <a href="services.html">
                    Đô thị thông minh và Chính quyền số
                  </a>
                </li>
                <li>
                  <a href="services.html">Cơ sở dữ liệu quốc gia về dân cư</a>
                </li>
                <li>
                  <a href="services.html">Hệ thống Hội nghị giao ban điện tử</a>
                </li>
                <li>
                  <a href="services.html">
                    Khoa học, công nghệ đổi mới sáng tạo
                  </a>
                </li>
                <li>
                  <a href="services.html">Cấp hộ chiếu phổ thông</a>
                </li>
              </ul>
              <div className="text-right">
                <a
                  href="about-1.html"
                  className="site-button-link"
                  data-hover="Xem Chi tiết"
                >
                  Xem Chi tiết
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
          {/* <div class="col-lg-4 col-md-12">
                          <div class="contact-home1-left site-bg-dark p-a30 m-b0">
                              <h3 class="text-white m-t0"><span class="font-weight-100">Get In</span> Touch</h3>
                              <form class="cons-contact-form2 form-transparent" method="post"
                                  action="form-handler2.php">

                                  <div class="input input-animate">
                                      <label for="name">Name</label>
                                      <input type="text" name="username" id="name" required>
                                      <span class="spin"></span>
                                  </div>

                                  <div class="input input-animate">
                                      <label for="email">Email</label>
                                      <input type="email" name="email" id="email" required>
                                      <span class="spin"></span>
                                  </div>

                                  <div class="input input-animate">
                                      <label for="Phone">Phone</label>
                                      <input type="text" name="phone" id="Phone" required>
                                      <span class="spin"></span>
                                  </div>

                                  <div class="input input-animate">
                                      <label for="message">Textarea</label>
                                      <textarea name="message" id="message" required></textarea>
                                      <span class="spin"></span>
                                  </div>

                                  <div class="text-center p-t10">
                                      <button type="submit" class="site-button btn-effect ">
                                          Submit Now
                                      </button>
                                  </div>
                              </form>
                          </div>
                      </div> */}
        </div>
      </div>
    </div>
    {/* <div class="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
              <strong>Câu chuyện</strong>
          </div> */}
  </div>
  {/* OUR MISSION  END */}
  {/* CALL US SECTION START */}
  {/* <div class="section-full mobile-page-padding p-tb80 overlay-wraper bg-cover bg-center"
          style="background-image:url(https://theme7x.com/shapen/images/background/bg-1.jpg)">
          <div class="overlay-main site-bg-primary opacity-07"></div>
          <div class="container">

              <div class="section-content">
                  <div class="call-us-section text-center">
                      <h4 class="m-b15">Let's work together</h4>
                      <h2 class="call-us-number m-b15 m-b0">(+291)-456-789-1234</h2>
                      <h4 class="call-us-address m-t0 m-b20">Street 4 ,45 New york City</h4>
                      <a href="contact-1.html" class="site-button-secondry btn-effect site-bg-dark">Contact Us</a>
                  </div>
              </div>

          </div>
      </div> */}
  {/* CALL US SECTION END */}
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
                Bài toán
              </span>{" "}
              Chuyển đổi số
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
                      Tất cả
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".cat-1"
                      data-hover="Lĩnh
                                              vực theo chiều ngang"
                      href="javascript:;"
                    >
                      Lĩnh vực theo chiều ngang
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".cat-4"
                      data-hover="Lĩnh vực ưu tiên CĐS QG"
                      href="javascript:;"
                    >
                      Lĩnh vực ưu tiên CĐS QG
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".cat-2"
                      data-hover="Trụ cột của CĐS QG
"
                      href="javascript:;"
                    >
                      Trụ cột của CĐS QG
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".cat-3"
                      data-hover="Đối tượng sử dụng"
                      href="javascript:;"
                    >
                      Đối tượng sử dụng
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".cat-5"
                      data-hover="Theo cấp hành chính
"
                      href="javascript:;"
                    >
                      Theo cấp hành chính
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
                  Chuyển đổi lên hạ tầng và điện toán đám mây
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
                  Kho học liệu mở cho giáo dục phổ thông
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
                  CĐS 3 trụ cột: Chính quyền số, Kinh tế số &amp; Xã hội số
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
                  Giải pháp công nghệ AI nhận dạng cảm xúc
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
                  Giải pháp công nghệ thị giác máy tính
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
                  Giải pháp ứng dụng blockchain trong digital twin
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
                  Trung tâm tích hợp dữ liệu chuyên ngành hàng hải
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
                  Phần mềm AI hỗ trợ phân tích ảnh nhiễm sắc thể
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
                  Chuyển đổi số nâng cao văn hóa đọc cho người dân
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
                  Nguồn nhân lực triển khai thực hiện chuyển đổi số
                </h4>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div class="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
              <strong>Dự án</strong>
          </div> */}
  </div>
  {/* OUR PROJECT END */}
  {/* OUR BLOG START */}
  <div className="section-full mobile-page-padding latest-blog-wrap p-t80 p-b30 square_shape1">
    {/* style="background-image:url(https://theme7x.com/shapen/images/background/bg5.jpg)" */}
    <div className="container">
      {/* TITLE START */}
      <div className="section-head ">
        <div className="mt-separator-outer separator-center">
          <div className="mt-separator">
            <h2 className="text-uppercase sep-line-one ">
              <span className="font-weight-300 site-text-primary">
                Các mảng
              </span>{" "}
              Chuyển đổi số
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
                    <h4 className="post-title m-b0">Tuần lễ Chuyển đổi số</h4>
                  </div>
                  <div className="mt-post-text">
                    <p>
                      Tuần lễ Chuyển đổi số - Huế 2022 được tổ chức nhằm xây
                      dựng chiến lược CĐS giai đoạn mới.
                    </p>
                  </div>
                  <div className="readmore-line">
                    <span>
                      <a
                        href="blog-grid.html"
                        className="site-button-link"
                        data-hover="Xem Chi tiết"
                      >
                        Xem Chi tiết{" "}
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
                      Nhận thức về Chuyển đổi số
                    </h4>
                  </div>
                  <div className="mt-post-text">
                    <p>
                      Các đài truyền hình đã và đang nỗ lực đẩy mạnh sản xuất
                      chương trình liên quan đến “Chuyển đổi số”.
                    </p>
                  </div>
                  <div className="readmore-line">
                    <span>
                      <a
                        href="blog-grid.html"
                        className="site-button-link"
                        data-hover="Xem Chi tiết"
                      >
                        Xem Chi tiết{" "}
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
                    <h4 className="post-title m-b0">Phát triển hạ tầng số</h4>
                  </div>
                  <div className="mt-post-text">
                    <p>
                      Phát triển, xây dựng hạ tầng số đồng bộ, hiện đại phục vụ
                      Chính phủ số là xu hướng của nhiều quốc gia.
                    </p>
                  </div>
                  <div className="readmore-line">
                    <span>
                      <a
                        href="blog-grid.html"
                        className="site-button-link"
                        data-hover="Xem Chi tiết"
                      >
                        Xem Chi tiết{" "}
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
  {/* TESTIMONIALS SECTION START */}
  {/* <div class="section-full mobile-page-padding p-t80 p-b50 square_shape2 bg-cover"
          style="background-image:url(https://theme7x.com/shapen/images/background/bg6.jpg);">
          <div class="container">
              <div class="section-content">

                  <div class="section-head">
                      <div class="mt-separator-outer separator-center">
                          <div class="mt-separator">
                              <h2 class="text-uppercase sep-line-one "><span
                                      class="font-weight-300 site-text-primary">Client</span> Testimonials</h2>
                          </div>
                      </div>
                  </div>

                  <div class="owl-carousel testimonial-home">
                      <div class="item">
                          <div class="testimonial-2 m-a30 hover-animation-1">
                              <div class=" block-shadow bg-white p-a30">
                                  <div class="testimonial-detail clearfix">
                                      <div class="testimonial-pic radius shadow scale-in-center"><img
                                              src="https://theme7x.com/shapen/images/testimonials/pic1.jpg"
                                              width="100" height="100" alt="">
                                      </div>
                                      <h4 class="testimonial-name m-b5">Shelly Johnson -</h4>
                                      <span class="testimonial-position">Business Person</span>
                                  </div>
                                  <div class="testimonial-text">
                                      <span class="fa fa-quote-right"></span>
                                      <p> Excellent Customer support!. The template itself is very ext ended.
                                          simply dummy text of the printing and industry. the printing and
                                          typesetting industry. Lorem Ipsum has been the industry's</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="item">
                          <div class="testimonial-2 m-a30  hover-animation-1">
                              <div class=" block-shadow bg-white p-a30">
                                  <div class="testimonial-detail clearfix">
                                      <div class="testimonial-pic radius shadow scale-in-center"><img
                                              src="https://theme7x.com/shapen/images/testimonials/pic2.jpg"
                                              width="100" height="100" alt="">
                                      </div>
                                      <h4 class="testimonial-name m-b5">Cuthbert Brain -</h4>
                                      <span class="testimonial-position">Contractor</span>
                                  </div>
                                  <div class="testimonial-text">
                                      <span class="fa fa-quote-right"></span>
                                      <p>The template itself is very ext ended. excellent customer support! simply
                                          dummy text of the printing and industry. the printing and typesetting
                                          industry. Lorem Ipsum has been the industry's</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="item">
                          <div class="testimonial-2 m-a30  hover-animation-1">
                              <div class=" block-shadow bg-white p-a30">
                                  <div class="testimonial-detail clearfix">
                                      <div class="testimonial-pic radius shadow scale-in-center"><img
                                              src="https://theme7x.com/shapen/images/testimonials/pic3.jpg"
                                              width="100" height="100" alt="">
                                      </div>
                                      <h4 class="testimonial-name m-b5">Cathrine Wagner -</h4>
                                      <span class="testimonial-position">Builder</span>
                                  </div>
                                  <div class="testimonial-text">
                                      <span class="fa fa-quote-right"></span>
                                      <p>The template itself is very ext ended. excellent customer support! simply
                                          dummy text of the printing and industry. the printing and typesetting
                                          industry. Lorem Ipsum has been the industry's</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="item">
                          <div class="testimonial-2 m-a30  hover-animation-1">
                              <div class=" block-shadow bg-white p-a30">
                                  <div class="testimonial-detail clearfix">
                                      <div class="testimonial-pic radius shadow scale-in-center"><img
                                              src="https://theme7x.com/shapen/images/testimonials/pic4.jpg"
                                              width="100" height="100" alt="">
                                      </div>
                                      <h4 class="testimonial-name m-b5">John Doe -</h4>
                                      <span class="testimonial-position">Business Person</span>
                                  </div>
                                  <div class="testimonial-text">
                                      <span class="fa fa-quote-right"></span>
                                      <p> Excellent Customer support!. The template itself is very ext ended.
                                          simply dummy text of the printing and industry. the printing and
                                          typesetting industry. Lorem Ipsum has been the industry's</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="item">
                          <div class="testimonial-2 m-a30  hover-animation-1">
                              <div class=" block-shadow bg-white p-a30">
                                  <div class="testimonial-detail clearfix">
                                      <div class="testimonial-pic radius shadow scale-in-center"><img
                                              src="https://theme7x.com/shapen/images/testimonials/pic5.jpg"
                                              width="100" height="100" alt="">
                                      </div>
                                      <h4 class="testimonial-name m-b5">Cuthbert Brain -</h4>
                                      <span class="testimonial-position">Business Person</span>
                                  </div>
                                  <div class="testimonial-text">
                                      <span class="fa fa-quote-right"></span>
                                      <p>The template itself is very ext ended. excellent customer support!.
                                          simply dummy text of the printing and industry. the printing and
                                          typesetting industry. Lorem Ipsum has been the industry's</p>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>

              </div>
          </div>
          <div class="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
              <strong>Clients</strong>
          </div>
      </div> */}
  {/* TESTIMONIALS SECTION END */}
</div>
  )
}
