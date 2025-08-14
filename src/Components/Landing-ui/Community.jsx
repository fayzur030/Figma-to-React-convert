import communityLogo1 from '../../assets/Community/Icon (1).png'
import communityLogo2 from '../../assets/Community/Icon (2).png'
import communityLogo3 from '../../assets/Community/Icon (3).png'

const Community = () => {
  const data = [
    {
      id: 1,
      image: communityLogo1,
      title: 'Membership Organisations',
      description:
        'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      id: 2,
      image: communityLogo2,
      title: 'National Associations',
      description:
        'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      id: 3,
      image: communityLogo3,
      title: 'Clubs And Groups',
      description:
        'Our membership management software provides full automation of membership renewals and payments,',
    },
  ]
  return (
    <div className='max-w-6xl mx-auto'>
      <h1 className='font-semibold text-[25px] leading-[30px] text-center text-[#4D4D4D] mt-5'>
        Manage your entire community <br /> in a single system
      </h1>
      <p className='font-normal text-[12px] leading-[16px] text-center text-[#4D4D4D] mt-2'>
        Who is Nextcent suitable for?
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8'>
        {data.map((item) => (
          <div
            key={item.id}
            className='flex flex-col items-center text-center p-4 bg-white rounded-lg shadow'
          >
            <img
              src={item.image}
              alt={item.title}
              className='w-[45.24px] h-[38.98px] mb-4'
            />
            <h1 className='font-bold  text-[20px] leading-[25px] text-[#4D4D4D]'>
              {item.title}
            </h1>
            <p className='text-[12px] leading-[16px] text-[#717171] mt-2 max-w-[280px]'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Community
