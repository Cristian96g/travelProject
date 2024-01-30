import './Portfolio.css'

// imported icons
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
// import image from '../../assets/gridImage.png'

const Portfolio = () => {
  return (
    <div className='portfolio section container'>
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3>Why Should You Choose Us</h3>
            <p>We have extensive Knoledge and experience in the trvel industry</p>
          </div>

          <div className="grid">
            <div className="singlPortfolio flex">
              <div className="iconDiv">
                <img src={icon1} alt="Icon Safety" />
              </div>
              <div className="infor">
                <h4>Safety and support</h4>
                <p>
                  Our top priority is the safety and well-being of our clients.
                  We maintain high safety santards and have emergency support available during the trip.
                </p>
              </div>
            </div>

            <div className="singlPortfolio flex">
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

            <div className="singlPortfolio flex">
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

        <div className="rightContent">
          {/* <img src={image} alt="Image" /> */}
        </div>
      </div>
    </div>
  )
}

export default Portfolio