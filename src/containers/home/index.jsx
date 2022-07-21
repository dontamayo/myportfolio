import React from "react";
import { Animate } from "react-simple-animate";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./styles.scss";
import myResume from "../../myResume/Don_2022_March.pdf"
const Home = () => {
  const linkedIn = ()=> {
    return <a href="https://www.linkedin.com/in/don-tamayo/" target="_blank"></a>
  }
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Don Tamayo
          <br />
          Web Developer.
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            {/* <button>Hire me</button> */}
            <a href={myResume} download="Don_2022_March.pdf">Download resume</a>
          </div>
          <div className="contact-me__socials-wrapper">
          <a href="https://www.linkedin.com/in/don-tamayo/" target={'_blank'}>
            <FaLinkedin size={32}/>
          </a>
          <a href="https://www.facebook.com/donaldrich.tamayo" target={'_blank'}>
            <FaFacebook size={32} />
           </a>    
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
