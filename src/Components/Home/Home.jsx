import React from 'react'
const Home = () => {
  return (
    <>
  {/*========== SCROLL TOP ==========*/}
  <a href="#" className="scrolltop" id="scroll-top">
    <i className="bx bx-up-arrow-alt scrolltop__icon" />
  </a>
  {/*========== HEADER ==========*/}
  <header className="l-header" id="header">
    <nav className="nav bd-container">
      <a href="/" className="nav__logo">
        TravelSafe &#128663;
      </a>
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
        <li className="nav__item">
            <a href="#about" className="nav__link ">
              About
            </a>
          </li>
          {/* 
          <li className="nav__item">
            <a href="#theme" className="nav__link ">
              Theme
            </a>
          </li>
          <li className="nav__item">
            <a href="#events" className="nav__link">
              Events
            </a>
          </li> */}
          {/* <li class="nav__item"><a href="#timeline" class="nav__link">Timeline</a></li> */}
          <li className="nav__item">
            <a href="#features" className="nav__link">
             Features
            </a>
          </li>
          <li className="nav__item">
            <a href="#team" className="nav__link" >
              Team
            </a>
          </li>
          <li className="nav__item">
            <a href="/accounts" className="nav__link">
              Login
            </a>
          </li>
          <li>
            <i className="bx bx-toggle-left change-theme" id="theme-button" />
          </li>
        </ul>
      </div>
      <div className="nav__toggle" id="nav-toggle">
        <i className="bx bx-grid-alt" />
      </div>
    </nav>
  </header>
  <main className="l-main">
    {/*========== Welcome ==========*/}
    <section className="home" id="home">
      <div className="home__container bd-container bd-grid">
        <div className="home__img">
          <img src="https://res.cloudinary.com/dzy4r0fgy/image/upload/v1689477041/travelsafe_graphics_hpszey.png" alt="" className="vert-move"/>
        </div>
        <div className="home__data">
          <h1 className="home__title">TravelSafe &#128663;</h1>
          <p className="home__description">
          TravelSafe is an innovative web app prioritizing women's travel safety, providing an extra layer of protection and a virtual connection feature to create the impression of constant contact with loved ones during interactions with cab drivers. Travel with confidence and peace of mind on your journeys.
          </p>
        </div>
      </div>
    </section>
    {/*========== About ==========*/}
    <section className="share section bd-container" id="about">
      <div className="share__container bd-grid">
        <div className="share__data">
          <h2 className="section-title-center">
            How TravelSafe was Born? <br />{" "}
          </h2>
          <p className="share__description">
          The idea for TravelSafe was born from a personal experience I had one night when I was traveling from the airport at 1:00 am. Everyone in my family was asleep, and I couldn't reach my best friend. The thought of being alone with the cab driver made me feel scared and uncomfortable. I desperately wished I could just video call someone at that moment for reassurance. This experience led me to realize that many women face similar situations while traveling late at night in public transport. I began to envision a solution that would not only allow women to make fake video calls, simulating real conversations to deter potential threats, but also share their location and the car's license plate with their loved ones for an added layer of safety. Thus, the idea of TravelSafe was born, aiming to provide women with the means to protect themselves and feel safer during their journeys.
          </p>
        </div>
        <div className="share__img">
          <img src="https://res.cloudinary.com/dzy4r0fgy/image/upload/v1689477325/travelsafe_graphics-2_oafoyu.png" alt="" className='vert-move'/>
        </div>
      </div>
    </section>
    {/* ================  =================
    <section className="share section bd-container" id="learn_more">
      <div className="share__container bd-grid">
        <div className="share__data">
          <img src="./img/GDSC.png" alt="" />
        </div>
        <div className="share__img about__GDSC">
          <h2 className="section-title-center">
            About <br /> GDSC IGDTUW 🌍{" "}
          </h2>
          <p className="share__description">
            GDSC IGDTUW is a community interested in exploring new technology.
            Our club promotes various Google technologies and aims to help the
            students to nurture their passion for technology and build projects
            that positively impact the society.
          </p>
        </div>
      </div>
    </section>
    {/* =============Theme UN SDG============ */}
    {/* <section className="share section bd-container" id="theme">
      <div className="share__container bd-grid">
        <div className="share__data">
          <h2 className="section-title-center">Theme 🌟</h2>
          <p className="share__description">
            The Sustainable Development Goals or Global Goals are a collection
            of 17 interlinked global goals designed to be a "blueprint to
            achieve a better and more sustainable future for all". The SDGs were
            set up in 2015 by the United Nations General Assembly and are
            intended to be achieved by the year 2030.
          </p>
        </div>
        <div className="share__img">
          <img src="./img/SDG.png" alt="" />
        </div>
      </div>
    </section>  */}
    {/*========== CATEGORIES ==========*/}
    <section className="decoration section bd-container" id="features">
      <h2 className="section-title">Features of TravelSafe</h2>
      <div className="decoration__container bd-grid">
        <div className="decoration__data">
          <img
            src="https://res.cloudinary.com/dzy4r0fgy/image/upload/v1687072589/pryde_graphics-3_ylq42o.png"
            alt=""
            className="decoration__img"
            id="apple_render"
          />
          <h3 className="decoration__title">Reading Area</h3>
          <p>View a collection of resources related to sexual health and how you can stay safe physically and mentally. Spread love, be healthy, be you!</p><br></br>
          {/*<a href="./view/designsolve.html" class="button button-link">Details</a>*/}
          <div className="button">
            <a
              href="./readingArea"
              className="button-link"
              style={{ color: "white" }}
            >
              Try Here
            </a>
          </div>
        </div>
        <div className="decoration__data">
          <img
            src="https://res.cloudinary.com/dzy4r0fgy/image/upload/v1687072287/pryde_graphics-2_rnm5jd.png"
            alt=""
            className="decoration__img"
            id="burger_render"
          />
          <h3 className="decoration__title">InclusiBot</h3>
          <p>Co:here-powered chatbot for LGBTQ+ sexual health. Multilingual support with Azure Translator. Chat freely in your language!</p><br></br>
          <div className="button">
            <a
              href="https://prydebot.streamlit.app/"
              target="_blank"
              className="button-link"
              style={{ color: "white" }}
            >
              Try Here
            </a>
          </div>
        </div>
        <div className="decoration__data">
          <img
            src="https://res.cloudinary.com/dzy4r0fgy/image/upload/v1687073260/pryde_graphics-4_t07meb.png"
            alt=""
            className="decoration__img"
            id="milk_render"
          />
          <h3 className="decoration__title">Forum d'amour</h3>
          <p>An extensive community support forum for sexual health & hygiene. Get answers, collaborate, and empower yourself! </p><br></br>
          <div className="button">
            <a
              href="./view/hacksolve.html"
              className="button-link"
              style={{ color: "white" }}
            >
              Try Here
            </a>
          </div>
          {/*<div 
                    class="apply-button" 
                    data-hackathon-slug="hack-n-solve" 
                    data-button-theme="light"
                    style="height: 44px; width: 312px"
                  ></div>*/}
        </div>
      </div>
    </section>

    {/* Team */}
    <section class="decoration section bd-container" id="team">
      <h2 class="section-title">Team</h2>
      <div class="decoration__container bd-grid team-grid">
        <div class="decoration__data team_data">
          <img src="https://hygenie-gsc.netlify.app/img/Team/pooja_gera.jpg" alt="" class="decoration__img" id="team_render"/>
          <h3 class="decoration__title">Pooja Gera</h3>
          <p>I speak Python &#128013; and I love solving problems with technology &#129302;.</p>
        </div>
        <div class="decoration__data team_data">
          <img src="https://res.cloudinary.com/dzy4r0fgy/image/upload/v1689487397/WhatsApp_Image_2023-07-16_at_10.40.05_AM_h2qwva.jpg"  alt="" class="decoration__img" id="team_render"/>
          <h3 class="decoration__title">Akanksha Jha</h3>
          <p>I transform challenges into digital solutions and development is my escape. &#128161;&#x2728;</p>
        </div>
        <div class="decoration__data team_data">
          <img src="https://res.cloudinary.com/dzy4r0fgy/image/upload/v1687075071/WhatsApp_Image_2023-06-18_at_1.24.29_PM_d7tjzm.jpg" alt="" class="decoration__img" id="team_render"/>
          <h3 class="decoration__title">Sneha Chauhan</h3>
          <p>Empowering Innovation, Enabling Change: A Passionate Developer Spreading Positive Impact through Technology.</p>
        </div>
        <div class="decoration__data team_data">
          <img src="https://hygenie-gsc.netlify.app/img/Team/Karan-Taneja.jpeg" alt="" class="decoration__img" id="team_render"/>
          <h3 class="decoration__title">Karan Taneja</h3>
          <p>I think creatively to build sustainable technological solutions! &#128176;</p>
        </div>
        <div class="decoration__data team_data">
          <img src="https://res.cloudinary.com/dzy4r0fgy/image/upload/v1689488244/WhatsApp_Image_2023-07-16_at_11.45.26_AM_bxkfgy.jpg" alt="" class="decoration__img" id="team_render"/>
          <h3 class="decoration__title">Deepika jain</h3>
          <p>Java is my passion, coding is my art. On the way to make more beautiful and safe world</p>
        </div>
      </div>
    </section>

    {/*========== FOOTER (Socials) ==========*/}
    <section className="footer " id="contact_us">
      <div className="footer__container bd-container bd-grid">
        <div className="footer__social">
          <h2 className="footer__title" style={{ color: "white" }}>
            Built with &#129293; by Team TravelSafe
          </h2>
          <div className="footer__icons">
            <a
              href="https://www.instagram.com/gdsc_igdtuw/"
              className="footer__logo"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="https://twitter.com/gdsc_igdtuw" className="footer__logo">
              <i className="fa-brands fa-twitter" />
            </a>
            <a
              href="https://www.linkedin.com/company/dscigdtuw/mycompany/"
              className="footer__logo"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a
              href="https://www.youtube.com/c/DSCIGDTUW"
              className="footer__logo"
            >
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/*========== SCROLL REVEAL ==========*/}
  {/*========== MAIN JS ==========*/}
  {/* Timeline.js */}
  {/* Sponsors */}
</>

  )
}

export default Home