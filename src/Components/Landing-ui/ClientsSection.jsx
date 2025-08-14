import clientLogo1 from '../../assets/Client/Logo (1).png'
import clientLogo2 from '../../assets/Client/Logo (2).png'
import clientLogo3 from '../../assets/Client/Logo (3).png'
import clientLogo4 from '../../assets/Client/Logo (4).png'
import clientLogo5 from '../../assets/Client/Logo (5).png'
import clientLogo6 from '../../assets/Client/Logo (6).png'
import clientLogo7 from '../../assets/Client/Logo (7).png'
const ClientsSection = () => {
  const clientLogo = [
    {
      id: 1,
      image: clientLogo1,
    },
    {
      id: 2,
      image: clientLogo2,
    },
    {
      id: 3,
      image: clientLogo3,
    },
    {
      id: 4,
      image: clientLogo4,
    },
    {
      id: 5,
      image: clientLogo5,
    },
    {
      id: 6,
      image: clientLogo6,
    },
    {
      id: 7,
      image: clientLogo7,
    },
  ]
  return (
    <div className='max-w-7xl mx-auto py-8 px-4'>
      <h1 className='font-semibold text-[25px] md:text-[28px] text-center text-[#4D4D4D]'>
        Our Clients
      </h1>
      <p className='font-normal text-[11px] sm:text-[14px] leading-[25.71px] text-center text-[#717171] mt-2 max-w-xl mx-auto'>
        We have been working with some Fortune 500+ clients
      </p>
      <div className='flex flex-wrap justify-center items-center gap-10 sm:gap-16 mt-6'>
        {clientLogo.map((logo) => (
          <img
            key={logo.id}
            src={logo.image}
            alt='client logo'
            className='w-8 h-8 sm:w-[33.41px] sm:h-[33.41px] object-contain'
          />
        ))}
      </div>
    </div>
  )
}

export default ClientsSection
