import ContentParagraphLogo from '../../assets/ContentParagraph/image 9.png'
import logo1 from '../../assets/ContentParagraph/Logo (1).png'
import logo2 from '../../assets/ContentParagraph/Logo (2).png'
import logo3 from '../../assets/ContentParagraph/Logo (3).png'
import logo4 from '../../assets/ContentParagraph/Logo (4).png'
import logo5 from '../../assets/ContentParagraph/Logo (5).png'
import { ArrowRight } from 'lucide-react'
const ContentParagraph = () => {
  const logo = [
    {
      id: 1,
      image: logo1,
    },
    {
      id: 2,
      image: logo2,
    },
    {
      id: 3,
      image: logo3,
    },
    {
      id: 4,
      image: logo4,
    },
    {
      id: 5,
      image: logo5,
    },
  ]
  return (
    <div className='bg-[#F5F7FA] w-full py-16'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center md:justify-around px-4 md:px-0 gap-8 md:gap-0'>
        <div className='flex-shrink-0'>
          <img
            src={ContentParagraphLogo}
            alt=''
            className='w-56 h-56 md:w-[226.92px] md:h-[226.92px] object-contain'
          />
        </div>
        <div className='flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[520.66px] px-4 sm:px-0'>
          <p className='font-medium text-[11.14px] leading-[16.71px] text-[#717171] text-center md:text-left'>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className='font-bold text-[14px] md:text-[13.92px] text-[#4CAF4F] mt-4'>
            Tim Smith
          </p>
          <p className='font-normal text-[11px] md:text-[11.14px] leading-6 text-[#89939E]'>
            British Dragon Boat Racing Association
          </p>
          <div>
            <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-4 mt-7'>
              {logo.map((logo) => (
                <img
                  key={logo.id}
                  src={logo.image}
                  alt='client logo'
                  className='w-[33.41px] h-[33.41px]'
                />
              ))}
              <div className='flex items-center gap-2 mt-2 md:mt-0'>
                <button className='btn'>Meet all customers</button>
                <ArrowRight className='text-[#4CAF4F]' size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentParagraph
