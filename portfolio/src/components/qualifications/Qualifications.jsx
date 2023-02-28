import React, { useState } from 'react';
import "./qualifications.css";

const Qualifications = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualifications">
      <h2 className="section__title"> Qualifications</h2>
      <span className="section__subtitle"> My Personal Journey</span>

      <div div className="qualification__container container">
        <div className="qualification__tabs">
          <div className= {toggleState === 1 
            ? "qualification__button qualification__active button--flex" 
            : "qualification__button button-flex" }
            onClick={ () => toggleTab(1) }
            >
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div className= {toggleState === 2 
            ? "qualification__button qualification__active button--flex" 
            : "qualification__button button-flex" }
            onClick={ () => toggleTab(2) }
            >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>

        </div>

        <div className="qualification__sections">
          <div className= {toggleState === 1 
            ? "qualification__content qualification__content-active" 
            : "qualification__content" }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Full Stack Web Development </h3>
                <span className="qualification__subtitle"> UC Irvine </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2023 </i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> Neuroscience </h3>
                <span className="qualification__subtitle"> UC Davis </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2015 - 2019 </i>
                </div>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Web Development </h3>
                <span className="qualification__subtitle"> UC Davis </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2022- Present </i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div> */}

            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> UX Expert </h3>
                <span className="qualification__subtitle"> UC Davis </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2022- Present </i>
                </div>
              </div>
            </div> */}
          </div>

          <div className= {toggleState === 2 
            ?"qualification__content qualification__content-active"
            :"qualification__content"}>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> MERN Stack App </h3>
                <span className="qualification__subtitle"> To-Done </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2023 </i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> Full Stack App </h3>
                <span className="qualification__subtitle"> Library Management </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2023 </i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Front End App </h3>
                <a href="https://sdanimc.github.io/shire-board-game/" target="{_blank}" className="qualification__subtitle"> Board & Booze </a>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2023 </i>
                </div>
              </div>
              
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Qualifications;
