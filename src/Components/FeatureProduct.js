import React, { useEffect, useRef } from "react";

import gsap from "gsap"; // Import GSAP library
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import smoke from "../assets/images/new/smoke.svg";
import vape1 from "../assets/images/new/vape1.svg";
import vape2 from "../assets/images/new/vape2.svg";
import vape3 from "../assets/images/new/vape3.svg";
import scrollerimg1 from "../assets/images/scrollerimg1.png";
import scrollerimg2 from "../assets/images/scrollerimg2.png";
import scrollerimg3 from "../assets/images/scrollerimg3.png";
import scrollerimg4 from "../assets/images/scrollerimg4.png";
import scrollerimg5 from "../assets/images/scrollerimg5.png";
import scrollerimg6 from "../assets/images/scrollerimg6.png";
import arrows from "../assets/images/arrows.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
gsap.registerPlugin(ScrollTrigger);

function FeatureProduct() {

  let mystyle = {
    opacity: 1,
  };
// this code is needed to refresh scroll trigger when coming from another page
  useEffect(() => {
    ScrollTrigger.refresh();
    }, [ScrollTrigger.getAll()]);


  let gsapcomponent = useRef();
  useEffect(() => {
       //removes all the reoccuring functions
        let ctx = gsap.context(() => {
   
    gsap.set(".slide-1 img.vapes", { opacity: 1 });
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".rect1",
        markers: false,
        start: "center 40%",
        toggleActions: "play none none reverse",
        // onEnterBack: () => {tl1.reverse(2)}
       // onToggle: self => self.animation.timeScale(self.isActive ? 1 : -1.5),
       
      },
      defaults:{
        ease: "power4.out"
      }
    });
    tl1.to(".smoke-changer", {rotate: 90,duration: 2.5,filter: "hue-rotate(90deg)"});
    tl1.to(`.slide-1 img.vapes`, { rotate: 90, opacity: 0, duration: 1.8 }, "-=2.5");
    tl1.to(`.slide-1 h2.slide-left-text`, { x: 350, opacity: 0, duration: 1.5 }, "-=2.3");
    tl1.to(`.slide-1 .slider-product-left .buynow`, { opacity: 0}, "-=2.3");
    tl1.to(`.slide-1 .slider-product-right`, { x: -150, opacity: 0, duration: 1.5 }, "<");
    tl1.to(`.slide-2 .slider-product-right`, { x: 0, opacity: 1, duration: 1.5 }, "=-2.3");
    tl1.to(`.slide-1`, { opacity: 0});
    tl1.to(`.slide-2`, { opacity: 1 }, "-=2.3");
    tl1.to(`.slide-2 img.vapes`, { rotate: 0, opacity: 1, duration: 1.8 }, "=-3");
    tl1.to(`.slide-2 h2.slide-left-text`, { x: 0, opacity: 1, duration: 1.8 }, "-=2.3");
    tl1.to(`.slide-2 .slider-product-left .buynow`, { opacity: 1}, "-=2.3");
    

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".rect2",
        markers: false,
        start: "20% 20%",
        toggleActions: "play none none reverse",
        //onToggle: self => self.animation.timeScale(self.isActive ? 1 : -1.5),
      },
      defaults:{
        ease: "power4.out"
      }
    });
    tl2.to(".smoke-changer", {rotate: 180,duration: 2.5,filter: "hue-rotate(180deg)",});
    tl2.to(".slide-2 img.vapes",{ rotate: 180, opacity: 0, duration: 1.8 },"-=2.5");
    tl2.to(`.slide-2 h2.slide-left-text`, { x: 350, opacity: 0, duration: 1.5 }, "-=2.3");
    tl2.to(`.slide-2 .slider-product-left .buynow`, { opacity: 0}, "-=2.3");
    tl2.to(`.slide-2 .slider-product-right`, { x: -150, opacity: 0, duration: 1.5 }, "<");
    tl2.to(`.slide-3 .slider-product-right`, { x: 0, opacity: 1, duration: 1.5 }, "=-2.3");
    tl2.to(`.slide-2`, { opacity: 0});
    tl2.to(`.slide-3`, { opacity: 1 }, "-=2.3");
    tl2.to(`.slide-3 img.vapes`, { rotate: 0, opacity: 1, duration: 1.8 }, "-=3");
    tl2.to(`.slide-3 h2.slide-left-text`, { x: 0, opacity: 1, duration: 1.8 }, "-=2.3");
    tl2.to(`.slide-3 .slider-product-left .buynow`, { opacity: 1 }, "-=2.3");


      gsap.timeline({
        scrollTrigger: {
          trigger: ".sec-scroll",
          start: "top",
          end: "bottom",
          pin: true,
          markers: false,
        },
      });
    }, gsapcomponent); // <- selector scoping
    return () => ctx.revert();
  }, []);
  return (
    <div className="sec-featured bg-black" ref={gsapcomponent}>
      <section className="sec-scroll">
       

        <h1 className="title-mean tt">
          Featured <span>Products</span>
        </h1>

        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="section-smoke-slider">
          <div className="main-slider-area">
            <div className="smoke smoke-changer transition-color-change">
              <img className="smoke-img" src={smoke} alt="" />
            </div>

            <div className="slider slide-1" style={mystyle}>
              <div className="slider-product-left">
              <h2 className="slide-left-text">Lorem <span className="text-color-blue">Ipsum</span></h2>
              <a href="/" className="buynow px-xl-5 px-lg-4 py-2">Buy Now</a>
              <img className="vapes" src={vape1} alt="" />
              </div>
              {/* slider product left end */}

              <div className="slider-product-right">
               <div className="align-items-center d-flex justify-content-between slide-product-1 mb-5 position-relative">
               <h2 className="btnname">
               Lorem <span className="text-color-blue">Ipsum</span></h2>
                <a href="/" className="buynow px-3 py-1">Buy Now</a>
                <img src={scrollerimg1} className="slide-right-img" alt="" />
                <img src={arrows} alt="" />
               
              </div>{/* slide-product-1 end */}

              <div className="align-items-center d-flex justify-content-between slide-product-1 mb-5 position-relative">
               <h2 className="btnname">
               Lorem <span className="text-color-blue">Ipsum</span></h2>
                <a href="/" className="buynow px-3 py-1">Buy Now</a>
                <img src={scrollerimg2} className="slide-right-img" alt="" />
                <img src={arrows} alt="" />
              </div>{/* slide-product-1 end */}


              <div className="align-items-center d-flex justify-content-between slide-product-1 position-relative">
               <h2 className="btnname">
               Lorem <span className="text-color-blue">Ipsum</span></h2>
                <a href="/" className="buynow px-3 py-1">Buy Now</a>
                <img src={scrollerimg3} className="slide-right-img" alt="" />
                <img src={arrows} alt="" />
              </div>{/* slide-product-1 end */}
               </div>{/* slider-product-right end */}
            </div>
            {/* slide-1 end */}

            <div className="slider slide-2">
            <div className="slider-product-left">
              <h2 className="slide-left-text">Lorem <span className="text-color-blue">Ipsum</span></h2>
              <a href="/" className="buynow px-xl-5 px-lg-4 py-2">Buy Now</a>
              <img className="vapes" src={vape2} alt="" />
              </div>


              <div className="slider-product-right">
               <div className="align-items-center d-flex justify-content-between slide-product-1 mb-5 position-relative">
               <h2 className="btnname">
               Lorem <span className="text-color-blue">Ipsum</span></h2>
                <a href="/" className="buynow px-3 py-1">Buy Now</a>
                <img src={scrollerimg4} className="slide-right-img" alt="" />
                <img src={arrows} alt="" />
              </div>{/* slide-product-1 end */}

              <div className="align-items-center d-flex justify-content-between slide-product-1 mb-5 position-relative">
               <h2 className="btnname">
               Lorem <span className="text-color-blue">Ipsum</span></h2>
                <a href="/" className="buynow px-3 py-1">Buy Now</a>
                <img src={scrollerimg5} className="slide-right-img" alt="" />
                <img src={arrows} alt="" />
              </div>{/* slide-product-1 end */}


              <div className="align-items-center d-flex justify-content-between slide-product-1 position-relative">
               <h2 className="btnname">
               Lorem <span className="text-color-blue">Ipsum</span></h2>
                <a href="/" className="buynow px-3 py-1">Buy Now</a>
                <img src={scrollerimg6} className="slide-right-img" alt="" />
                <img src={arrows} alt="" />
              </div>{/* slide-product-1 end */}
               </div>{/* slider-product-right end */}

            </div>{/* slider 2 end */}
            
            
            <div className="slider slide-3">
            <div className="slider-product-left">
              <h2 className="slide-left-text">Lorem <span className="text-color-blue">Ipsum</span></h2>
              <a href="/" className="buynow px-xl-5 px-lg-4 py-2">Buy Now</a>
              <img className="vapes" src={vape3} alt="" />
              </div>

              <div className="slider-product-right">
               <div className="align-items-center d-flex justify-content-between slide-product-1 mb-5 position-relative">
               <h2 className="btnname">
               Lorem <span className="text-color-blue">Ipsum</span></h2>
                <a href="/" className="buynow px-3 py-1">Buy Now</a>
                <img src={scrollerimg1} className="slide-right-img" alt="" />
                <img src={arrows} alt="" />
              </div>{/* slide-product-1 end */}

              <div className="align-items-center d-flex justify-content-between slide-product-1 mb-5 position-relative">
               <h2 className="btnname">
               Lorem <span className="text-color-blue">Ipsum</span></h2>
                <a href="/" className="buynow px-3 py-1">Buy Now</a>
                <img src={scrollerimg2} className="slide-right-img" alt="" />
                <img src={arrows} alt="" />
              </div>{/* slide-product-1 end */}


              <div className="align-items-center d-flex justify-content-between slide-product-1 position-relative">
               <h2 className="btnname">
               Lorem <span className="text-color-blue">Ipsum</span></h2>
                <a href="/" className="buynow px-3 py-1">Buy Now</a>
                <img src={scrollerimg3} className="slide-right-img" alt="" />
                <img src={arrows} alt="" />
              </div>{/* slide-product-1 end */}
               </div>{/* slider-product-right end */}


            </div>{/* slider 3 end */}
         
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeatureProduct;
