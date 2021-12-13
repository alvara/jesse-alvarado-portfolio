import Socials from '../Socials/Socials'
import './Contact.scss'

export default function Contact() {
  return (
    <div className='contact' id='contact'>
        <h2>Contact</h2>

      <div className='contact-form'>
        <p>Send a message and let's get in touch!</p>
        <Socials />
        <form>
          <label for='name'>Name</label>
          <input type='text' placeholder='Name' id='name' name='name' />
          <label for='name'>Name</label>
          <input type='email' placeholder='Email' id='email' name='email' />
          <label for='name'>Message</label>
          <textarea placeholder='Message' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}
