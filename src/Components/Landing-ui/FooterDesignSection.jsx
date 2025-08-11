import logo from '../../assets/FooterDesignSection/logo.png'
const FooterDesignSection = () => {
  return (
    <div className='max-w-6xl mx-auto flex justify-around items-center pt-[8.5rem] w-[1002.34px] h-[301.68px]'>
      <div>
        <img src={logo} alt='' className='w-[307.34px] h-[301.68px]' />
      </div>
      <div>
        <div className='w-[460.1px] h-[215.95px] gap-[22.27px]'>
          <h1 className='font-semibold text-[25.06px] text-[#4D4D4D] leading-[30.63px]'>
            <span>How to design your site footer like</span> <br />
            <span>we did</span>
          </h1>
          <div>
            <p className='font-normal text-[9.74px] text-[#717171] leading-[13.92px]'>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt{' '}
            </p>
            <p className='font-normal text-[9.74px] text-[#717171] leading-[13.92px]'>
              molestie, massa nunc varius arcu, at scelerisque elit erat a
              magna. Donec quis erat at
            </p>
            <p className='font-normal text-[9.74px] text-[#717171] leading-[13.92px]'>
              libero ultrices mollis. In hac habitasse platea dictumst. Vivamus
              vehicula leo dui, at porta
            </p>
            <p className='font-normal text-[9.74px] text-[#717171] leading-[13.92px]'>
              nisi facilisis finibus. In euismod augue vitae nisi ultricies, non
              aliquet urna tincidunt. Integer
            </p>
            <p className='font-normal text-[9.74px] text-[#717171] leading-[13.92px]'>
              in nisi eget nulla commodo faucibus efficitur quis massa. Praesent
              felis est, finibus et nis
            </p>
            <p className='font-normal text-[9.74px] text-[#717171] leading-[13.92px]'>
              ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum
              id gravida
            </p>
            <div className='mt-3'>
              <button className='primary-button '>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterDesignSection
