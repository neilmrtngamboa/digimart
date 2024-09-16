import { Link } from "react-router-dom"


function NotFound() {


  return (
    <>
      <div className="bg-gray-700 p-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 my-auto p-10">

          <div>
            <h1 className="mt-4 text-white font-extrabold text-5xl">
              Sorry!  The page that you were looking for doesn't exist</h1>
            <p className="my-5 text-gray-400 font-light text-xl">It looks like the page you're searching for has wandered off. 
               But don't worry, we’ll help you find your way!</p>
            <p className="text-gray-100 font-semibold text-lg">What could've gone wrong?
            </p>
            <ul className="text-gray-300 font-extralight list-disc ms-5 mt-2">
              <li className="my-2">The page may have been moved or deleted.</li>
              <li className="my-2">You might have mistyped the URL.</li>
              <li className="my-2">Or maybe... this page never existed!</li>
            </ul>
            <Link to='/'>
            <button className="rounded bg-gray-700 shadow-inner p-3 font-semibold text-white  mt-7
            hover:bg-gray-800 hover:shadow-xl hover:text-slate-300">
              Return to homepage</button>
            </Link>
          </div>

          <div className="p-5">
            <img className="mx-auto" src="https://phairandco.ie/wp-content/uploads/2020/05/404-illustration.png" alt="" />
          </div>

        </div>





      </div>

    </>
  )
}

export default NotFound