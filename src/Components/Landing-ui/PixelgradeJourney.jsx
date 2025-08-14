import PixelgradeJourneyLogo from '../../assets/Pixelgrade/pixelgrade.png'

const PixelgradeJourney = () => {
  return (
    <div className='max-w-6xl mx-auto py-16 mt-7'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <div className='flex justify-center md:justify-start '>
          <img
            src={PixelgradeJourneyLogo}
            alt='Pixelgrade Journey'
            className='w-[307px] h-auto object-contain'
          />
        </div>

        <div className='text-center md:text-left px-4 sm:px-0'>
          <h1 className='font-bold text-[#4D4D4D] text-[20px] sm:text-[22px] md:text-[25px] sm:leading-[30px] leading-[30px] '>
            The unseen of spending three <br /> years at Pixelgrade
          </h1>

          <p className='font-normal text-[12px] sm:text-[9.75px]  md:text-left leading-[18px] sm:leading-[13.92px] text-[#717171] mt-4 sm:text-start text-center max-w-full  sm:max-w-[280px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <div className='mt-5 flex justify-center md:justify-start'>
            <button className='primary-button '>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PixelgradeJourney
