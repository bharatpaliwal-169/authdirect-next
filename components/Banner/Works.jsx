
import { landing } from '@/constants/Landing';
import Image from 'next/image';

const Works = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-0">

        <div className="col-span-12 text-center mt-12">
          <h1 className="font-extrabold text-4xl text-gray-700 dark:text-brand-white">
            How you could use <span className="text-brand-regular dark:text-indigo-300">{landing.authdirect}</span> </h1>

          <div className='mt-2 mb-4 flex justify-center items-center text-center'>
            <div className='w-1/4 h-1 rounded-full bg-indigo-500 dark:bg-indigo-100'></div>
          </div>
        </div>

        <div className='col-span-12 md:col-span-5 md:col-start-2 md:my-12'>
          <Image src="/assets/howADworks.svg" alt="authDirect" width={400} height={400}  />
        </div>

        <div className='col-span-12 md:col-span-6'>
          <ul className='text-lg text-brand-gray dark:text-gray-300 font-semibold list-disc md:my-12'>
            <li className='m-2 py-4'>AuthDirect can be <span className='text-brand-regular dark:text-indigo-300'>consumed as API,</span> making it independent of what Framework/tech you use.</li>
            <li className='m-2 py-4'>It can act as one of your microservice and <span className='text-brand-regular dark:text-indigo-300'>serve as user management for your entire distributed system.</span></li>
            <li className='m-2 py-4'>It's so flexible and simple you can simpley <span className='text-brand-regular dark:text-indigo-300'>use it as React component</span> in your web application.</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Works;