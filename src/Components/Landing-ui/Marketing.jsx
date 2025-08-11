import logo1 from '../../assets/Marketing/1.png'
import logo2 from '../../assets/Marketing/2.png'
import logo3 from '../../assets/Marketing/3.png'

const Marketing = () => {
  return (
    <div className='max-w-6xl mx-auto flex justify-around items-center  w-[1002.34px] h-[354.51px]'>
      <div className='w-[772.64px] h-[87.57px]'>
        <h1 className='text-center font-bold text-[25.06px] leading-[30.63px] text-[#4D4D4D]'>
          Caring is the new marketing{' '}
        </h1>
        <p className='font-normal text-[11.14px] leading-[16.71px] text-[#717171] text-center mt-1'>
          The Nextcent blog is the best place to read about the latest
          membership insights
        </p>
        <p className='font-normal text-[11.14px] leading-[16.71px] text-center text-[#717171] mt-1'>
          trends and more. See who's joining the community, read about how our
          community{' '}
        </p>
        <p className='font-normal text-[11.14px] leading-[16.71px] text-center text-[#717171] mt-1'>
          are increasing their membership income and lot's more.
        </p>
        <div className='flex justify-evenly mt-8 gap-4'>
          <img src={logo1} alt='' className='w-[255.15px] h-[255.8px]' />
          <img src={logo2} alt='' className='w-[256.15px] h-[255.8px]' />
          <img src={logo3} alt='' className='w-[255.15px] h-[255.15px]' />
        </div>
      </div>
    </div>
  )
}

export default Marketing
