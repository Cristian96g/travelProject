import './Destinations.css'

import { MdLocationPin } from 'react-icons/md'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { TiLocation } from 'react-icons/ti'

// imported image
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image6.jpg'
import image7 from '../../assets/image7.jpg'
import image8 from '../../assets/image8.jpg'

// Lets create an array that is gonna contain all destination data and we loop through
const destinations = [
  {
    id: 1,
    img: image1,
    name: "Fiji Island",
    location: "South Pacific",
    rating: 4.4,
  },
  {
    id: 2,
    img: image2,
    name: "Eiffel Tower",
    location: "Paris, France",
    rating: 4.8,
  },
  {
    id: 3,
    img: image3,
    name: "Great Wall of China",
    location: "Beijing, China",
    rating: 4.7,
  },
  {
    id: 4,
    img: image4,
    name: "Machu Picchu",
    location: "Cusco Region, Peru",
    rating: 4.9,
  },
  {
    id: 5,
    img: image5,
    name: "Grand Canyon",
    location: "Arizona, United States",
    rating: 4.8,
  },
  {
    id: 6,
    img: image6,
    name: "Taj Mahal",
    location: "Agra, India",
    rating: 4.6,
  },
  {
    id: 7,
    img: image7,
    name: "Table Mountain",
    location: "Cape Town, South Africa",
    rating: 4.7,
  },
  {
    id: 8,
    img: image8,
    name: "Sydney Opera House",
    location: "Sydney, Australia",
    rating: 4.6,
  }
]



const Destinations = () => {
  return (
    <div className='destination section container'>
      <div className="secContainer">
        <div className="">
          <span className="redText"> EXPLORE NOW</span>
          <h3>Find Your Dream Destination</h3>
          <p>
            Fill in the fields below to find the best spot for your next tour
          </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex">
            <MdLocationPin className="icon" />
            <input type="text" placeholder='Location' />
          </div>

          <div className="inputField flex">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder='Budget' />
          </div>

          <div className="inputField flex">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder='Date' />
          </div>

          <button className="btn flex">
            <BiSearchAlt /> Search
          </button>

        </div>

        <div className="secMenu">
          <ul className="flex">
            <li className='active'>All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          {destinations.map((destination) => {
            return (
          <div className="singleDestination" key={destination.id}>
            <div className="imgDiv">
              <img src={destination.img} alt={destination.name} />
              <div className="secInfo flex">
                <div className="text">
                  <span className="name">{destination.name}</span>
                  <p className='flex'> <TiLocation className='icon' />
                    {destination.location}</p>
                </div>
                <span className="rating">{destination.rating}</span>
              </div>
            </div>
          </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Destinations