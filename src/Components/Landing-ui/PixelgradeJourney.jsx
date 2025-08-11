import PixelgradeJourneyLogo from '../../assets/Pixelgrade/pixelgrade.png'

const PixelgradeJourney = () => {
  return (
    <div className='max-w-6xl mx-auto py-12 px-4'>
      <div className='flex flex-col md:flex-row items-stretch justify-center space-x-32'>
        <div>
          <img
            src={PixelgradeJourneyLogo}
            alt='Pixelgrade Journey'
            className='w-[307px] h-auto object-contain'
          />
        </div>

        <div className='text-center md:text-left'>
          <h1 className='font-semibold text-[25px] leading-[30px] text-[#4D4D4D]'>
            The unseen of spending three <br /> years at Pixelgrade
          </h1>
          <p className='font-normal text-[10px] text-[#717171] leading-[14px] mt-3'>
            <span>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed
            </span>{' '}
            <br />
            <span>
              {' '}
              accumsan quam vitae est varius fringilla. Pellentesque placerat
              vestibulum lorem sed
            </span>{' '}
            <br />
            <span>
              {' '}
              porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet
              risus pretium auctor. Etiam
            </span>{' '}
            <br />
            <span>
              {' '}
              quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </span>
          </p>
          <div className='mt-5'>
            <button className='primary-button '>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PixelgradeJourney
