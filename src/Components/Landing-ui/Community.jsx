import communityLogo1 from '../../assets/Community/Icon (1).png'
import communityLogo2 from '../../assets/Community/Icon (2).png'
import communityLogo3 from '../../assets/Community/Icon (3).png'

const Community = () => {
  return (
    <div className='max-w-7xl mx-auto py-8 px-4'>
      <h1 className='font-semibold text-[#4D4D4D] text-center text-[25.06px] leading-[30.63px] tracking-[0%]'>
        <span>Manage your entire community</span>
        <br />
        <span>in a single system</span>
      </h1>
      <p className='font-normal text-[12px] text-center text-[#717171] pt-2'>
        Who is Nextcent suitable for?
      </p>
      <div className='flex justify-evenly mt-8'>
        <div className='flex flex-col items-center text-center'>
          <img
            src={communityLogo1}
            alt=''
            className='w-[45.24px] h-[38.98px]'
          />
          <h1 className='font-bold text-[19.49px] leading-[25.06px] text-[#4D4D4D] pt-2'>
            <span>Membership</span> <br /> <span>Organisations</span>
          </h1>
          <p className='font-normal text-[9.74px] leading-[13.98px text-center text-[#717171] pt-2'>
            <span>Our membership management</span> <br />{' '}
            <span>software provides full automation of</span> <br />
            <span>membership renewals and payments</span>
          </p>
        </div>
        <div className='flex flex-col items-center text-center'>
          <img
            src={communityLogo2}
            alt=''
            className='w-[45.24px] h-[38.98px]'
          />
          <h1 className='font-bold text-[19.49px] leading-[25.06px] text-[#4D4D4D] pt-2'>
            <span>National</span> <br /> <span>Associations</span>
          </h1>
          <p className='font-normal text-[9.74px] leading-[13.98px text-center text-[#717171] pt-2'>
            <span>Our membership management</span> <br />{' '}
            <span>software provides full automation of</span> <br />
            <span>membership renewals and </span>
            <br />
            <span>payments </span>
          </p>
        </div>
        <div className='flex flex-col items-center text-center'>
          <img
            src={communityLogo3}
            alt=''
            className='w-[45.24px] h-[38.98px]'
          />
          <h1 className='font-bold text-[19.49px] leading-[25.06px] text-[#4D4D4D] pt-2'>
            <span>Clubs And </span> <br /> <span>Groups</span>
          </h1>
          <p className='font-normal text-[9.74px] leading-[13.98px text-center text-[#717171] pt-2'>
            <span>Our membership management</span> <br />{' '}
            <span>software provides full automation of</span> <br />
            <span>membership renewals and payments</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Community
