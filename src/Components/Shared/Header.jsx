import { useState } from 'react'
import logo from '../../assets/png/Logo.png'
import Button from '../../ui/Button'
import { ArrowRight, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <header className='max-w-6xl mx-auto flex flex-wrap md:flex-nowrap justify-between items-center py-6 bg-white w-full'>
        <div className='flex items-center justify-between w-full md:w-auto'>
          <img src={logo} alt='' className='w-[77.61px] h-[14.38px]' />
          <button
            className='md:hidden text-gray-700'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/*NavBar Menu for mobile*/}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:block w-full md:w-auto mt-4 md:mt-0 transition-all duration-300 ease-in-out md:overflow-visible`}
        >
          <nav className='flex flex-col md:flex-row md:items-center w-full md:w-auto md:space-y-0 md:space-x-6 text-center md:text-left'>
            <ul className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6'>
              <li>
                <a
                  href='#'
                  className='text-[#4D4D4D] text-[13px] hover:text-blue-600'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-[#4D4D4D] text-[13px] hover:text-blue-600'
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-[#4D4D4D] text-[13px] hover:text-blue-600'
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-[#4D4D4D] text-[13px] hover:text-blue-600'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-[#4D4D4D] text-[13px] hover:text-blue-600'
                >
                  Pricing
                </a>
              </li>
            </ul>
            <div className='flex justify-center md:justify-start mt-4'>
              <Button>
                <div className='flex items-center justify-center gap-1'>
                  <div>Register Now </div>
                  <div>
                    <ArrowRight size={20} className=' w-5 h-7' />
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
