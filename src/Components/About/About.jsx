import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate, Link } from "react-router-dom";


// import Button from "./Button";

const About = () => {
  const nav = useNavigate();
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);


  return (
    <>
      <section className="home" id="home">
        <div className="home__container bd-container bd-grid">
          <div className="home__img"
            data-aos="fade-right"
            data-aos-duration="500">
            <img src={""} alt="" />
          </div>
          <div className="home__data"
            data-aos="fade-left"
            data-aos-duration="500">
            <h1 className="home__title">Introducting TravelSafe</h1>
            <p className="home__description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 </p>
          </div>
        </div>
      </section>

      <section className="share section bd-container" id="learn_more">
        <div className="share__container bd-grid">
          <div className="share__img"
            data-aos="fade-right"
            data-aos-duration="500">
            <img src={""} alt="" />
          </div>
          <div className="share__data"
            data-aos="fade-left"
            data-aos-duration="500">
            <h2 className="section-title-center"> How it Helps?</h2>
            <p className="share__description"> With TravelSafe, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.</p>
          </div>
        </div>
      </section>

      <section className="decoration section bd-container" id="features">
        <h2 className="section-title">Features</h2>
        <div className="decoration__container bd-grid">
          <div className="decoration__data">
            <img src={""} alt="" className="decoration__img" id="render" />
            <h3 className="decoration__title">Feature 1</h3>
            <p>Swipe left or right to show interest in potential teammates, effortlessly forming alliances that foster creativity, innovation, & inclusivity. </p>
            <div className="button"><Link to="/FindMate" className="button-link" style={{ color: 'white' }}>Explore</Link>
            </div>
          </div>
          <div className="decoration__data">
            <img src={""} alt="" className="decoration__img" id="render" />
            <h3 className="decoration__title">Feature 2</h3>
            <p>Showcase your unique skills & experiences on your personalized portfolio page, highlighting your past projects, social media links, & involvement as a speaker, organizer, or volunteer in community events.
</p>
            <div className="button"><Link to="./" className="button-link" style={{ color: 'white' }}>Explore</Link>
            </div>
          </div>
          <div className="decoration__data">
            <img src={""} alt="" className="decoration__img" id="render" />
            <h3 className="decoration__title">Feature 3</h3>
            <p>Stay organized and focused with the user dashboard, where you can manage your hackathons in a calendar, add teammates from your matches, and track your achievements along the way</p>
            <div className="button"><Link to="/dashboard" className="button-link" style={{ color: 'white' }}>Explore</Link></div>
          </div>
        </div>
      </section>

      <section className="decoration section bd-contain" id="team">
        <h2 className="section-title">Our Team</h2>
        <div className="decoration__container bd-grid">
          <div className="decoration__data">
            <img src={""} alt="" className="decoration__img" id="apple_render" />
            <h3 className="decoration__title">Pooja Gera</h3>
            {/* <div className="button"><a href="./view/designsolve.html" className="button-link" style={{ color: 'white' }}>Details</a>
            </div> */}
          </div>
          <div className="decoration__data">
            <img src={""} alt="" className="decoration__img" id="burger_render" />
            <h3 className="decoration__title">Sneha Chauhan</h3>
            {/* <div className="button"><a href="./view/ideatesolve.html" className="button-link" style={{ color: 'white' }}>Details</a>
            </div> */}
          </div>
          <div className="decoration__data">
            <img src={""} alt="" className="decoration__img" id="milk_render" />
            <h3 className="decoration__title">Player 3</h3>
            {/* <div className="button"><a href="./view/hacksolve.html" className="button-link" style={{ color: 'white' }}>Details</a></div> */}
          </div>
          <div className="decoration__data">
            <img src={""} alt="" className="decoration__img" id="milk_render" />
            <h3 className="decoration__title"> Player 4</h3>
            {/* <div className="button"><a href="./view/hacksolve.html" className="button-link" style={{ color: 'white' }}>Details</a></div> */}
          </div>
          <div className="decoration__data">
            <img src={""} alt="" className="decoration__img" id="milk_render" />
            <h3 className="decoration__title">Player 5</h3>
            {/* <div className="button"><a href="./view/hacksolve.html" className="button-link" style={{ color: 'white' }}>Details</a></div> */}
          </div>
        </div>
      </section>


    </>
  );
};

export default About;