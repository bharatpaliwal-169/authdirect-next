import Image from 'next/image';
import Link from 'next/link';
import {landing} from '@/constants/Landing';

const Banner = () => {
  return (
    <section className='xl:container xl:mx-auto p-2 mt-4'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-0'>
        <div className='col-start-1 col-span-7 '>
          <p className='md:px-24 my-6'>
            <span className='badge'>auth</span>
            <span className='badge'>user-management</span>
            <span className='badge'>SaaS</span>
          </p>
          <h1 className='text-2xl md:text-4xl font-extrabold text-indigo-400 dark:text-brand-white md:px-24'>
            <span className="lg:text-6xl mr-1 text-brand-regular dark:text-indigo-400 md:tracking-wide">
              {landing.authentication}<br/>
            </span>
            {landing.simple}
          </h1>

          <section className='md:px-24 py-12'>
            <p className='text-indigo-400 dark:text-slate-300 text-left font-medium text-lg'>
              {landing.line1}
            </p>
            {/* <p>
              {landing.line2}
            </p> */}
            <div className='items-center text-center mt-5 md:mt-12 '>
              <Link href="/signup">
                <button className='sign-btn'>{landing.signup}</button>
              </Link>
              <Link href="/docs">
                <button className='doc-btn'>{landing.docs}</button>
              </Link>
            </div>
          </section>
        </div>
        
        <div className='col-span-5'>
          <Image src='/assets/Banner-1.svg' alt="Banner" className='w-auto h-auto' width={200} height={200} />
        </div>
      </div>
    </section>
  )
}

export default Banner;