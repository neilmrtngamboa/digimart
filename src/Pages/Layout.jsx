import { Outlet, Link } from "react-router-dom"

function Layout() {


  return (
    <>


      <nav className="flex items-center justify-between flex-wrap bg-slate-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          <Link to='/' className="font-semibold text-xl tracking-tight">DigiMart</Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to='about' className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-slate-300 mr-4">
              About
            </Link>
            <Link to='contact' className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-slate-300 mr-4">
              Contact
            </Link>

          </div>

        </div>
      </nav>

      <div className="">
        <Outlet></Outlet>
      </div>

      <footer class="bg-gray-900 p-5">
        <p className=" text-gray-300 mt-5">Copyright © 2024 DigiMart </p>
        <hr class="h-px my-8 bg-gray-700 border-0"/>
        <div className="flex flex-row gap-2">
          <a href="" className="text-gray-400 hover:text-gray-500">About</a>
          <a href="" className="text-gray-400 hover:text-gray-500">Contact</a>

        </div>
      </footer>


    </>
  )
}

export default Layout