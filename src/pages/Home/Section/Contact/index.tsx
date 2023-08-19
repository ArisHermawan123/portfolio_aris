import React, { useRef } from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import emailjs from 'emailjs-com'
import { RiWhatsappLine } from 'react-icons/ri'
import './contact.css'
import Success from '@components/Modal/Success'
import { Link } from 'react-router-dom'

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.current) {
      emailjs.sendForm(
        'service_igz42nt',
        'template_16v645r',
        form.current,
        'M9JH2XBDiMY7W98KZ'
      )
    }
    Success()
    if (form.current) {
      form.current.reset() // Reset the form
    }
  }

  return (
    <section id="contact" className="pt-12 sm:pt-28">
      <div className="flex justify-center flex-col items-center space-y-10 mb-12">
        <h2 className="uppercase tracking-[10px] sm:tracking-[20px] text-[var(--color-primary)] shadow-md ml-5 text-gray-500 text-lg sm:text-2xl">
          contact
        </h2>
        <h5 className="sm:text-lg text-gray-400 ">Get In Touch</h5>
      </div>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>arisgggg123@gmail.com</h5>
            <Link to="mailto:arisgggg123@gmail.com" target="_blank">
              Send a message
            </Link>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+62895405600855</h5>
            <Link
              to="https://api.whatsapp.com/send?phone=+62895405600855"
              target="_blank"
            >
              Send a message
            </Link>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="h-12 px-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="h-12 px-2"
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
            className="px-2 py-2"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
