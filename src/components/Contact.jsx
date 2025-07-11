import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center pt-44 p-4'>
        <form method='POST' action="https://formspree.io/f/xeokypna" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold justify-start items-start inline border-b-4 border-pink-600 text-gray-300 '>Contact Me</p>
                <p className='text-gray-300 py-4'> I'm open to freelance projects, internships, or any collaboration opportunities. Reach out using the form below! </p>
            </div>
            <input className=' p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 ' type="email" placeholder='Email' name='email' />
            <textarea className=' p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact