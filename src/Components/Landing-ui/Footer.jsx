import logo from '../../assets/Footer/Logo.png'
import socialIcon1 from '../../assets/Social icon/Social Icons1.png'
import socialIcon2 from '../../assets/Social icon/Social Icons2.png'
import socialIcon3 from '../../assets/Social icon/Social Icons3.png'
import socialIcon4 from '../../assets/Social icon/Social Icons4.png'
import send from '../../assets/Footer/send.png'

const Footer = () => {
  return (
    <div className='bg-[#263238] w-full py-8'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left'>
        {/* Logo + Social Icon */}
        <div>
          <img
            src={logo}
            alt='Logo'
            className='w-[132.95px] h-[20.65px] mb-4 mx-auto md:mx-0'
          />
          <p className='font-normal text-[#F5F7FA] text-[9.74px] leading-[13.92px]'>
            Copyright © 2020 Landify UI Kit.
          </p>
          <p className='font-normal text-[#F5F7FA] text-[9.74px] leading-[13.92px] mb-4'>
            All rights reserved
          </p>
          <div className='flex justify-center md:justify-start gap-3'>
            <img
              src={socialIcon1}
              alt='Facebook'
              className='w-[22.27px] h-[22.27px]'
            />
            <img
              src={socialIcon2}
              alt='Twitter'
              className='w-[22.27px] h-[22.27px]'
            />
            <img
              src={socialIcon3}
              alt='LinkedIn'
              className='w-[22.27px] h-[22.27px]'
            />
            <img
              src={socialIcon4}
              alt='Instagram'
              className='w-[22.27px] h-[22.27px]'
            />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h1 className='font-bold text-[13.92px] text-[#FFFFFF] mb-3'>
            Company
          </h1>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-[#F5F7FA] text-[9.74px]'>
                About us
              </a>
            </li>
            <li>
              <a href='#' className='text-[#F5F7FA] text-[9.74px]'>
                Blog
              </a>
            </li>
            <li>
              <a href='#' className='text-[#F5F7FA] text-[9.74px]'>
                Contact us
              </a>
            </li>
            <li>
              <a href='#' className='text-[#F5F7FA] text-[9.74px]'>
                Pricing
              </a>
            </li>
            <li>
              <a href='#' className='text-[#F5F7FA] text-[9.74px]'>
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h1 className='font-bold text-[13.92px] text-[#FFFFFF] mb-3'>
            Support
          </h1>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-[#F5F7FA] text-[9.74px]'>
                Help Center
              </a>
            </li>
            <li>
              <a href='#' className='text-[#F5F7FA] text-[9.74px]'>
                Terms of Service
              </a>
            </li>
            <li>
              <a href='#' className='text-[#F5F7FA] text-[9.74px]'>
                Legal
              </a>
            </li>
            <li>
              <a href='#' className='text-[#F5F7FA] text-[9.74px]'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='text-[#F5F7FA] text-[9.74px]'>
                Status
              </a>
            </li>
          </ul>
        </div>

        {/* Sign up to date option */}
        <div>
          <h1 className='font-bold text-[13.92px] text-[#FFFFFF] mb-3'>
            Stay up to date
          </h1>
          <div className='flex items-center border border-gray-400 rounded-lg overflow-hidden w-[200px]'>
            <input
              type='email'
              placeholder='Your email address'
              className='flex-1 px-3 py-2 text-[9.74px] text-[#D9DBE1] bg-transparent outline-none'
            />
            <button className=' px-3 py-2 flex items-center justify-center'>
              <img src={send} alt='Send' className='w-[12.53px] h-[12.53px]' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
