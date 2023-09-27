import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="container px-6 py-8 mx-auto">
          <hr className="my-10 border-gray-200 dark:border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between text-brand-gray dark:text-gray-300">
              <p className="text-sm ">© Copyright 2023. All Rights Reserved.</p>

              <div className="flex mt-3 -mx-2 sm:mt-0">
                  <Link href="#" className="mx-2 text-sm"> Teams </Link>

                  <Link href="#" className="mx-2 text-sm"> Privacy </Link>

                  <Link href="#" className="mx-2 text-sm"> Cookies </Link>
              </div>
          </div>
        </div>
    </footer>
    </>
  )
}

export default Footer