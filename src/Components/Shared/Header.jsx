import logo from '../../assets/png/Logo.png'
import Button from '../../ui/Button'
import { ArrowRight } from 'lucide-react'

const Header = () => {
  return (
    <>
      <header className='max-w-6xl mx-auto flex justify-between items-center py-6 bg-[#FFFFFF] w-[1002px] h-[58.67]'>
        <div>
          <img src={logo} alt='' />
        </div>
        <div>
          <nav className='flex justify-between items-center space-x-6'>
            <ul className='flex space-x-6'>
              <li>
                <a href='#' className='text-[#4D4D4D] text-[13px]'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='text-[#4D4D4D] text-[13px]'>
                  Features
                </a>
              </li>
              <li>
                <a href='#' className='text-[#4D4D4D] text-[13px]'>
                  Community
                </a>
              </li>
              <li>
                <a href='#' className='text-[#4D4D4D] text-[13px]'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' className='text-[#4D4D4D] text-[13px]'>
                  Pricing
                </a>
              </li>
            </ul>
            <div>
              <Button>
                <div className='flex items-center justify-center '>
                  <div>Register Now </div>
                  <div>
                    <ArrowRight size={24} className=' w-7 h-5' />
                  </div>
                </div>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
