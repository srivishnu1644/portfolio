import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
     const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5e7a7875-83af-4bc9-949b-bf0090aa4a18");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id = 'contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                <br/>Whether you have a question or just want to say hi, I would love to hear from you.
                <br/>Feel free to reach out to me via email or connect with me on LinkedIn.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>srivishnu6648@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>+91 7032281401</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>Hyderabad, India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} id='form' className="contact-right">
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" placeholder='Enter your name' name='name' autoComplete="name" />
                <label htmlFor="email">Your Email</label>
                <input id="email" type="email" placeholder='Enter your email ' name='email' autoComplete="email" />
                <label htmlFor="message">Write your message here</label>
                <textarea id="message" name="message" rows='8' placeholder='Enter your message' autoComplete="off"></textarea>
                <button className ='contact-submit' type='submit'>Submit now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
