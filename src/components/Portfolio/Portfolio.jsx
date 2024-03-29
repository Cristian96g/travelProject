import './Portfolio.css'

// imported icons
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import image4 from '../../assets/image4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Portfolio = () => {

  useEffect(() => {
    Aos.init({duration:2000});
  },[])
  return (
    <div className='portfolio section container'>
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos="fade-up">Why Should You Choose Us</h3>
            <p data-aos="fade-up">We have extensive Knoledge and experience in the trvel industry</p>
          </div>

          <div className="grid">
            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={icon1} alt="Icon Safety" />
              </div>
              <div className="infor" data-aos="fade-up">
                <h4 data-aos="fade-up">Safety and support</h4>
                <p data-aos="fade-up">
                  Our top priority is the safety and well-being of our clients.
                  We maintain high safety santards and have emergency support available during the trip.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon2} alt="Icon Safety" />
              </div>
              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>
                  Our top priority is the safety and well-being of our clients.
                  We maintain high safety santards and have emergency support available during the trip.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon3} alt="Icon Safety" />
              </div>
              <div className="infor">
                <h4>Safety and support</h4>
                <p>
                  Our top priority is the safety and well-being of our clients.
                  We maintain high safety santards and have emergency support available during the trip.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rightContent" data-aos="fade-down">
          <img src={image4} alt="Image" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio