import { AiFillStar } from 'react-icons/ai'
import './Reviews.css'

// imported Images
import image1 from '../../assets/user1.jpg'
import image2 from '../../assets/user2.jpg'
import image3 from '../../assets/user3.jpg'
import image4 from '../../assets/user4.jpg'
import image5 from '../../assets/user5.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Reviews = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  },[])
  return (
    <div className='review section container'>
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText" data-aos="fade-up"> FROM OUR CLIENTS</span>
          <h3 data-aos="fade-up">Real Travel History From Our Beloved Clients</h3>
          <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem illum reprehenderit. Praesentium accusantium numquam quibusdam cum cumque eius sint fuga distinctio, iusto eum! Ullam minima similique voluptates animi ipsa.</p>

          <span className="stars flex"  data-aos="fade-up">
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
          </span>

          <div className="clientsImages flex">
              <img src={image1} alt="Client Image"  data-aos="fade-up"/>
              <img src={image2} alt="Client Image"  data-aos="fade-up"/>
              <img src={image3} alt="Client Image"  data-aos="fade-up"/>
              <img src={image4} alt="Client Image"  data-aos="fade-up"/>
          </div>
        </div>

        <div className="imgDiv">
          <img src={image5} alt="Div Image"  data-aos="fade-down"/>
        </div>
      </div>
    </div>
  )
}

export default Reviews