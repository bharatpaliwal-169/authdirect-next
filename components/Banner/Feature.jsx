import Image from "next/image";
import Link from "next/link";
const Features = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-0">
        <div className="col-span-12 text-center mt-12">
          <h1 className="font-extrabold text-4xl text-gray-700 dark:text-brand-white">
            What does <span className="text-brand-regular dark:text-indigo-300">AuthDirect</span> Offers </h1>

          <div className='mt-2 mb-4 flex justify-center items-center text-center'>
            <div className='w-1/4 h-1 rounded-full bg-indigo-500 dark:bg-indigo-100'></div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 md:col-start-2 m-2 p-2 mt-12">
          <Image className='w-100 h-100' src="/assets/x.svg" alt="AuthDirect" width={500} height={500} />
          <h5 className='text-brand-gray dark:text-slate-400 font-medium text-md m-2 p-2 mt-2'>
            *AuthDirect takes care of all your <span className='text-brand-regular dark:text-indigo-300'>auth related requirements.</span> 
          </h5>
        </div>

        <div className='col-span-12 md:col-span-6 md:mx-12 mt-12'>
          <ul className='text-lg text-brand-gray dark:text-gray-300 font-semibold list-disc'>
            <li className='m-2 py-2'>AuthDirect is a <span className='text-brand-regular dark:text-indigo-300'> simple-to-use, highly flexible and customisable </span> on demand solution for all your needs.</li>
            <li className='m-2 py-2'>We take care of your <span className='text-brand-regular dark:text-indigo-300'>user management, sanitise user's input</span> and store it securly for you.</li>
            <li className='m-2 py-2'> <span className='text-brand-regular dark:text-indigo-300'>pro-active support and strong feedback system,</span> that listen to you.</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Features;