import Banner from '@/components/Banner'
import Features from '@/components/Banner/Feature';
import More from '@/components/Banner/More';
import Works from '@/components/Banner/Works';
import CTA from '@/components/Banner/CTA';

const Home = () => {
  return(
    <>
      <section className='rounded-2xl shadow-2xl bg-indigo-100 mx-8 mt-4 py-4 dark:bg-slate-500'>
        <Banner />
      </section>

      {/* <div className='mt-10 mb-4 flex justify-center items-center text-center'>
        <div className='w-1/4 h-1 rounded-full bg-indigo-500 dark:bg-indigo-100'></div>
      </div> */}

      <section>
        <Features />
      </section>

      <section>
        <CTA />
      </section>
      
      <section>
        <Works />
      </section>

      <section>
        <More />
      </section>
    </>
  )
}
export default Home;