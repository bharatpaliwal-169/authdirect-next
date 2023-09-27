import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const layout = ({children}) => {
  return (
    <main className='bg-indigo-200 dark:bg-slate-700 dark:text-brand-white antialiased'>
      <Navbar />
        {children}
      <footer>
        <Footer />
      </footer>
    </main>
  )
}

export default layout;
