import { landing } from "@/constants/Landing"
import Link from "next/link"
const More = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-12 gap-0 rounded-2xl shadow-2xl bg-indigo-100 mx-8 mt-4 py-4 dark:bg-slate-500' >
      <div className="col-span-12 md:col-span-6 md:col-start-2">
        <h3 className="font-bold text-2xl my-4 text-brand-regular dark:text-brand-white">{landing.ctahead}</h3>
        <div className='mt-1 mb-2 flex justify-start items-center text-center'>
          <div className='w-1/4 h-1 rounded-full bg-indigo-500 dark:bg-indigo-100'></div>
        </div>
        <p className="text-brand-gray dark:text-gray-200 mt-2 font-medium">
          {landing.ctamessage}
        </p>
      </div>

      <div className="col-span-12 md:col-span-5 text-center">
        <Link href="/">
          <button className="px-8 py-4 my-8 rounded-full bg-indigo-400 text-brand-white dark:bg-indigo-500  shadow-xl font-semibold">{landing.sam}</button>
        </Link>
      </div>
    </section>
  )
}

export default More