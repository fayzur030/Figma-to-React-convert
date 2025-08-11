import { ArrowRight } from 'lucide-react'
const Demo = () => {
  return (
    <div className='bg-[#F5F7FA] w-full'>
      <div className='max-w-6xl mx-auto flex flex-col justify-center items-center mt-[2.5rem] h-[438.53px] text-center'>
        <h1 className='font-bold text-center text-[44.55px] leading-[52.5px]'>
          {' '}
          <span>Pellentesque suscipit</span> <br />{' '}
          <span>fringilla libero eu.</span>
        </h1>
        <div className='mt-5'>
          <div className='primary-button flex items-center justify-center '>
            <div>Get a Demo </div>
            <div>
              <ArrowRight size={24} className=' w-7 h-5' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo
