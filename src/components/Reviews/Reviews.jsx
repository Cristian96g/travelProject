import { AiFillStar } from 'react-icons/ai'
import './Reviews.css'

// imported Images
import image1 from '../../assets/user1.jpg'
import image2 from '../../assets/user2.jpg'
import image3 from '../../assets/user3.jpg'
import image4 from '../../assets/user4.jpg'
import image5 from '../../assets/user5.jpg'

const Reviews = () => {
  return (
    <div className='review section container'>
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText"> FROM OUR CLIENTS</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem illum reprehenderit. Praesentium accusantium numquam quibusdam cum cumque eius sint fuga distinctio, iusto eum! Ullam minima similique voluptates animi ipsa.</p>

          <span className="stars flex">
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
          </span>

          <div className="clientsImages flex">
              <img src={image1} alt="Client Image" />
              <img src={image2} alt="Client Image" />
              <img src={image3} alt="Client Image" />
              <img src={image4} alt="Client Image" />
          </div>
        </div>

        <div className="imgDiv">
          <img src={image5} alt="Div Image" />
        </div>
      </div>
    </div>
  )
}

export default Reviews