import banner from '../../assets/Banner/Banner.png'

const Banner = () => {
  return (
    <>
      <div className='bg-[#F5F7FA] py-6'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0'>
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className='font-semibold text-[45px] leading-[52.9px] text-[#4D4D4D]'>
              <span> Lessons and insights</span> <br />{' '}
              <span className='text-[#4caf4f] font-semibold text-[44.55px]  '>
                from 8 years
              </span>
            </h1>
            <p className='text-[#717171] leading-[29.55px] font-normal'>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className='Brand-primary-button mt-6'>Register</button>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={banner}
              alt='Banner'
              className='w-[272.16px] h-[283.43px]'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
