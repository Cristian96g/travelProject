import { useState, useEffect } from 'react'
import Accordion from './Accordion'
import './Questions.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Questions = () => {
  const [active, setActive] = useState('title1');

  useEffect(() => {
    Aos.init({duration:2000})
  },[])
 
  return (
    <div className='questions section container'>
      <div className="secHeading">
        <h3 data-aos="fade-up">Frecuently Asked Questions</h3>
      </div>

      <div className="secContainer grid">
        {/* We will import a component from a different a file */}
        <div className="accordion grid">
          <Accordion title='title1' desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ea eos. Ex, iusto. Ducimus repudiandae aliquam, mollitia rerum impedit fugit eos numquam quaerat inventore sunt hic omnis blanditiis corporis cumque?' active={active} setActive={setActive}  data-aos="fade-up"/>

          <Accordion title='title2' desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ea eos. Ex, iusto. Ducimus repudiandae aliquam, mollitia rerum impedit fugit eos numquam quaerat inventore sunt hic omnis blanditiis corporis cumque?' active={active} setActive={setActive} data-aos="fade-up"/>

          <Accordion title='title3' desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ea eos. Ex, iusto. Ducimus repudiandae aliquam, mollitia rerum impedit fugit eos numquam quaerat inventore sunt hic omnis blanditiis corporis cumque?' active={active} setActive={setActive} data-aos="fade-up"/>

          <Accordion title='title4' desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ea eos. Ex, iusto. Ducimus repudiandae aliquam, mollitia rerum impedit fugit eos numquam quaerat inventore sunt hic omnis blanditiis corporis cumque?' active={active} setActive={setActive} data-aos="fade-up"/>
          
        </div>
        <div className="form">
        <div className="secHeading" data-aos="fade-up">
        <h4>Do you have any specific question?</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cumque possimus maiores porro aliquam et assumenda, </p>
      </div>

      <div className="formContent grid" data-aos="fade-up">
        <input type="email" placeholder='Enter your email address'/>
        <textarea placeholder='Enter your question here'></textarea>
        <button className='btn'>Submit Inquiry</button>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Questions