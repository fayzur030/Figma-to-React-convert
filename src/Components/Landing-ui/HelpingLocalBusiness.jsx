import HelpingLocalBusiness1 from '../../assets/HelpingLocalBusiness/Icon (1).png'
import HelpingLocalBusiness2 from '../../assets/HelpingLocalBusiness/Icon (2).png'
import HelpingLocalBusiness3 from '../../assets/HelpingLocalBusiness/Icon (3).png'
import HelpingLocalBusiness4 from '../../assets/HelpingLocalBusiness/Icon (4).png'
const HelpingLocalBusiness = () => {
  return (
    <div className='bg-[#F5F7FA] py-12'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4'>
        <div className='mb-8 md:mb-0 max-w-md text-center md:text-left'>
          <h1 className='font-semibold text-2xl md:text-3xl text-[#4D4D4D] mb-2'>
            Helping a local <br />
            <span className='text-[#4CAF4F]'>business reinvent itself</span>
          </h1>
          <p className='text-[#18191F] text-sm'>
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className='grid grid-cols-2 gap-8 max-w-md mx-auto'>
          <div className='flex items-center space-x-3'>
            <img src={HelpingLocalBusiness1} alt='' className='w-8 h-8' />
            <div>
              <p className='font-bold text-[19.49] text-[#4D4D4D] leading-[25.06px]'>
                2,245,341
              </p>
              <p className='text-[11.14px] text-[#717171] leading-[16.71px]'>
                Members
              </p>
            </div>
          </div>

          <div className='flex items-center space-x-3'>
            <img src={HelpingLocalBusiness2} alt='' className='w-8 h-8' />
            <div>
              <p className='font-bold text-[19.49px] text-[#4D4D4D] leading-[25.06px] '>
                46,328
              </p>
              <p className='text-[11.14px] text-[#717171] leading-[16.71px]'>
                Clubs
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-3'>
            <img src={HelpingLocalBusiness3} alt='' />
            <div>
              <p className='font-bold text-[19.49px] text-[#4D4D4D] leading-[25.06px]'>
                828,867
              </p>
              <p className='text-[11.14px] text-[#717171] leading-[16.71px] '>
                Event Bookings
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-3'>
            <img src={HelpingLocalBusiness4} alt='' />
            <div>
              <p className='font-bold text-[19.49px] text-[#4D4D4D] leading-[25.06px]'>
                1,926,436
              </p>
              <p className='text-[11.14px] text-[#717171] leading-[16.71px] '>
                Payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpingLocalBusiness
