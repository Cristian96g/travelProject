import './Home.css'


// imported Assets
import image1 from '../../assets/image1.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import Video from '../../assets/video.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { AiOutlineSwapRight } from 'react-icons/ai'
import { useEffect } from 'react'
const Home = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[])
  return (
    <div className='Home'>
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1 data-aos="fade-up">Unlock Your Travel Dreams With Us!</h1>
        <p data-aos="fade-up">
          Discover the world´s most adventurous nature,
          life is so short for a trip.
        </p>
        <button className='btn flex' data-aos="fade-up">GET STARTED <AiOutlineSwapRight className='icon' /> </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3>Popular Places</h3>
          <div className="images flex" data-aos="fade-up">
            <img src={image1} alt="Image Header" />
            <img src={image3} alt="Image Header" />
            <img src={image4} alt="Image Header" />
            <img src={image5} alt="Image Header" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home