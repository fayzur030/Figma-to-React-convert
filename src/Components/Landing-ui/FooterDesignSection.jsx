import logo from '../../assets/FooterDesignSection/logo.png'

const FooterDesignSection = () => {
  return (
    <div className='max-w-6xl mx-auto py-16 mt-7'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <div className='flex justify-center md:justify-start '>
          <img
            src={logo}
            alt={logo}
            className='w-[307px] h-auto object-contain'
          />
        </div>
        <div className='text-center md:text-left px-4 sm:px-0'>
          <h1 className='font-bold text-[#4D4D4D] text-[20px] sm:text-[22px] md:text-[25px] sm:leading-[30px] leading-[30px] '>
            How to design your site footer like <br /> we did
          </h1>
          <p className='font-normal text-[12px] sm:text-[9.75px] md:text-left leading-[18px] sm:leading-[13.92px] text-[#717171] mt-4 sm:text-start text-center max-w-full  sm:max-w-[418px] '>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <div className='mt-5 flex justify-center md:justify-start'>
            <button className='primary-button '>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterDesignSection
