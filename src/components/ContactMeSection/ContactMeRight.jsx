import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

const ContactMeRight = () => {
  return (
    <div className='flex flex-col items-start justify-start gap-6 w-full'>
        <img src='./images/email.jpeg' alt='email' className=' max-w-[300px]' />
        <ContactInfo />
        <ContactSocial />
    </div>
  )
}

export default ContactMeRight
