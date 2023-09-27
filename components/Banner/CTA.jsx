import Link from "next/link"
import Image from "next/image"
import { landing } from "@/constants/Landing"
const CTA = () => {
  return (
    <section className='rounded-2xl shadow-2xl bg-indigo-100 mx-8 mt-4 dark:bg-slate-500'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-0'>
        
        <div className='col-span-12 md:col-span-7 md:col-start-2 my-16'>
          <h1 className='text-2xl font-semibold text-brand-regular dark:text-indigo-300'> AuthDirect is the one of its kind solution</h1>
          <h6 className="my-4 font-semibold text-md"> {landing.trynowmsg} </h6>
          <Link href="/docs">
            <button className=' px-8 py-4 rounded-2xl border-2 border-indigo-400 font-semibold text-md text-brand-regular dark:text-indigo-400 hover:dark:bg-slate-600 hover:bg-indigo-300'>
              {landing.trynow}
            </button>
          </Link>
        </div>

        <div className='col-span-12 md:col-span-4 md:my-8'>
          <Image src="/assets/Fingerprint-bro.svg" alt="finger"  width={300} height={300}/>
        </div>
      
      </div>
    </section>
  )
}

export default CTA