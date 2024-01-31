import { useState } from 'react'
import Accordion from './Accordion'
import './Questions.css'

const Questions = () => {
  const [active, setActive] = useState('title1') 

 
  return (
    <div className='questions section container'>
      <div className="secHeading">
        <h3>Frecuently Asked Questions</h3>
      </div>

      <div className="secContainer grid">
        {/* We will import a component from a different a file */}
        <div className="accordion grid">
          <Accordion title='title1' desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ea eos. Ex, iusto. Ducimus repudiandae aliquam, mollitia rerum impedit fugit eos numquam quaerat inventore sunt hic omnis blanditiis corporis cumque?' active={active} setActive={setActive}/>

          <Accordion title='title2' desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ea eos. Ex, iusto. Ducimus repudiandae aliquam, mollitia rerum impedit fugit eos numquam quaerat inventore sunt hic omnis blanditiis corporis cumque?' active={active} setActive={setActive}/>

          <Accordion title='title3' desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ea eos. Ex, iusto. Ducimus repudiandae aliquam, mollitia rerum impedit fugit eos numquam quaerat inventore sunt hic omnis blanditiis corporis cumque?' active={active} setActive={setActive}/>

          <Accordion title='title4' desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ea eos. Ex, iusto. Ducimus repudiandae aliquam, mollitia rerum impedit fugit eos numquam quaerat inventore sunt hic omnis blanditiis corporis cumque?' active={active} setActive={setActive}/>
          
        </div>
        <div className="form">
        <div className="secHeading">
        <h4>Do you have any specific question?</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cumque possimus maiores porro aliquam et assumenda, </p>
      </div>

      <div className="formContent grid">
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