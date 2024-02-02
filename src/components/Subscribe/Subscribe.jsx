import './Subscribe.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
// import image
import image1 from '../../assets/image1.jpg'

const Subscribe = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  },[])
  return (
    <div className='suscribe section container'>
      <div className="secContainer grid">
        <img src={image1} alt="Div Image"  data-aos="fade-up"/>

        <div className="textDiv">
          <h4 data-aos="fade-up">Best Way To Start Your Journey!</h4>
          <p data-aos="fade-up">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae cupiditate sit asperiores, ipsum dolorem beatae iste consequuntur incidunt esse accusantium quo quis quibusdam odio qui placeat. 
          </p>
          <button className="btn" data-aos="fade-up">Start Here</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe