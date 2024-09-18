import { useEffect } from "react"
import { Link } from "react-router-dom"
import AOS from 'aos'
import 'aos/dist/aos.css'



function Home() {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <>

      <div className="bg-[linear-gradient(to_right_bottom,rgba(23,26,30,0.38),rgba(31,41,55,1)),url('https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6raYLjyH11Umgs86wx3lNF/b54297568e758730aa65f2a1c92258c7/GettyImages-1211395020.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000')] 
        bg-cover p-10 shadow-lg">
        <h1 className="text-5xl text-white sm:mt-64"><b className="text-yellow-500">Fuel Your Brand's Growth </b>
          with Cutting-Edge Digital Marketing Solutions</h1>
        <p className="text-white mt-2 text-lg">Drive engagement and boost your online presence with our tailored social media marketing strategies at DigiMart.</p>
        <div className="flex flex-row">
          <Link to='about'>
            <button class="outline outline-white text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded-full mt-3 transition 
            duration-500 hover:scale-105">
              Get Started
            </button>
          </Link>
          <Link to='contact'>
            <button class="bg-yellow-500 hover:bg-yellow-600 text-slate-900 hover:text-white font-bold py-2 px-4 rounded-full mt-3 ms-2 transition 
            duration-500 hover:scale-110">
              Get a Free Consultation!
            </button>
          </Link>

        </div>

      </div>


      <div className="bg-gray-900 p-5 pb-16">

        <h2 className="text-center text-white text-4xl font-extrabold mt-7">Diverse Digital Marketing Solutions</h2>
        <p className="text-white text-center text-md font-extralight mt-5">Explore our range of services designed to elevate your brand and engage your audience effectively.</p>

        <div className="sm:flex mt-5 sm:gap-3 justify-center">

          <div className="rounded shadow-xl ms-2 bg-slate-100 p-5 basis-1/4 text-center"
            data-aos="zoom-in" data-aos-duration='2000'>
            <img className="mx-auto rounded shadow-lg" src="https://images.stockcake.com/public/7/f/d/7fd721c1-b4a0-475f-aa38-f3c84a00c172_medium/social-media-overflow-stockcake.jpg" alt="" />
            <p className="font-bold mt-2">Social Media Management</p>
            <p className="font-extralight text-base text-gray-700">Strategic social media campaigns to engage your audience</p>

          </div>

          <div className="rounded shadow-xl ms-2 bg-slate-100  p-5 basis-1/4 text-center"
            data-aos="zoom-in" data-aos-duration='2000'>
            <img className="mx-auto rounded shadow-lg" src="https://d28ku8nzmkcjr6.cloudfront.net/cache/db/67/db6702bdc80c7e310edf1d94c0599c86.webp" alt="" />
            <p className="font-bold mt-2">SEO Optimization</p>
            <p className="font-extralight text-base">Help your brand to rank in search engines</p>

          </div>

          <div className="rounded shadow-xl ms-2 bg-slate-100  p-5 basis-1/4 text-center"
            data-aos="zoom-in" data-aos-duration='2000'>
            <img className="mx-auto rounded shadow-lg" src="https://era9r2jcsww.exactdn.com/wp-content/uploads/2024/03/Cover-3-4-256x256.jpg?strip=all&lossy=1&quality=80&ssl=1" alt="" />
            <p className="font-bold mt-2">Paid Ads</p>
            <p className="font-extralight text-base">Reach likely customers with your products, features, and services in the best ad formats.</p>

          </div>

        </div>

      </div>

      <div className="bg-gray-800 p-5">

        <div className="sm:flex">

          <div className="basis-1/2 mt-10">
            <img className="mx-auto shadow-2xl" src="https://img.freepik.com/free-photo/portrait-man-working-office_23-2150771045.jpg" alt="" />

          </div>

          <div className="basis-1/2" data-aos="fade-left" data-aos-duration="2000">
            <h3 className="text-white font-extrabold text-5xl mt-36">Empowering Brands, Creating Connections</h3>
            <p className="text-white font-thin mt-5 break-normal text-lg">DigiMart is dedicated to helping brands succeed with innovative social media strategies. We focus on engagement and growth.</p>
            <p className="text-white font-thin mt-5 break-normal text-lg">DigiMart is driven by a passion for enhancing brands through effective digital marketing.</p>



          </div>

        </div>


      </div>

      <div className="bg-gray-900 p-5">
        <h4 className="text-5xl font-thin text-center mt-8 text-white">A Modern Approach to Digital Marketing</h4>
        <p className="font-extralight text-center text-white mt-5">Explore how our strategies have delivered exceptional results for our clients, helping them achieve their marketing goals.</p>

        <div className="sm:flex sm:gap-5 justify-center mt-5">

          <div class="max-w-sm bg-gray-800 rounded-lg basis-1/2 shadow-inner shadow-md"
            data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img className="rounded-t-lg mx-auto" src="https://static.dynamitenews.com/images/2022/05/31/health-5-essential-guidelines-while-working-on-computer/6295cffb4cbf0.jpg" alt="" />
            <div class="p-3">
              <h5 class="mb-2 text-2xl font-light tracking-tight text-white ">Boost rankings and drive traffic to your website</h5>
              <p class="mb-3 font-extralight text-white text-sm">Utilizing digital marketing for any business necessitates a diverse range of skills, tools, and a collaborative effort.</p>
              <p class="mb-3 font-extralight text-white text-sm">Allow our team to handle the heavy lifting as we collaborate with you to determine which services will provide the greatest benefit and how we can enhance your reach across each marketing channel.</p>
            </div>
          </div>

          <div class="max-w-sm bg-gray-800 rounded-lg shadow basis-1/2"
            data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img className="rounded-t-lg mx-auto" src="https://dluhcdigital.blog.gov.uk/wp-content/uploads/sites/222/2024/03/FSD-Away-Day-London_V2-9595-620x386.jpg" alt="" />
            <div class="p-3">
              <h5 class="mb-2 text-2xl font-light tracking-tight text-white">
                Working with local and online businesses</h5>
              <p class="mb-3 font-extralight text-white text-sm">We cater to over 30 industries, and they all share one commonality. Regardless of your business, industry, or niche, we are here to assist you with exceptional marketing and customer service.</p>
            </div>
          </div>


        </div>

      </div>

      <section className="bg-gray-800 p-5">
        <p className="text-white text-4xl text-center font-extrabold">How we can help you?</p>
        <p className="text-gray-400 text-lg mt-3 text-center mb-5">Here are a few of the questions we get the most. If you don't see what's on your mind, reach out to us anytime on phone, chat, or email.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" data-aos="fade-up" data-aos-duration='3000'>

          <div d className="p-5 text-white">
            <p className="flex items-center font-bold mb-3 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 me-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
              Do I need digital marketing for my business?</p>
            <p className="font-light text-gray-400 text-justify">Yes! In today’s digital age, having a strong online presence is crucial for the growth and success of most businesses. Digital marketing helps you reach a wider audience, engage with your customers, and generate more leads and sales.</p>

          </div>

          <div className="p-5 text-white">
            <p className="flex items-center font-bold mb-3 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 me-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
              How much do your services cost?</p>
            <p className="font-light text-gray-400 text-justify">Our pricing depends on the scope of the project and the services you need. We offer customizable packages to suit different business needs and budgets. Contact us for a free consultation, and we can provide you with a tailored quote.</p>

          </div>

          <div className="p-5 text-white">
            <p className="flex font-bold mb-3 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 me-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
              How do you measure the success of a digital marketing campaign?</p>
            <p className="font-light text-gray-400 text-justify">We track key performance indicators (KPIs) that align with your business goals, such as website traffic, conversion rates, cost-per-lead, return on ad spend (ROAS), and customer acquisition costs. We also use analytics tools to provide detailed reports and insights to ensure the campaign's progress is on track.</p>

          </div>

          <div className="p-5 text-white">
            <p className="flex items-center font-bold mb-3 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 me-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
              How will you develop a strategy for my business?</p>
            <p className="font-light text-gray-400 text-justify">We start by analyzing your business, goals, target audience, competitors, and current digital presence. Based on this analysis, we’ll create a custom digital marketing strategy tailored to your specific objectives. We continuously monitor and optimize the strategy to ensure it delivers the best possible results.</p>

          </div>

          <div className="p-5 text-white">
            <p className="flex items-center font-bold mb-3 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 me-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
              Do you work with small businesses?</p>
            <p className="font-light text-gray-400 text-justify">Yes, we work with businesses of all sizes, from small startups to large enterprises. Our digital marketing strategies are tailored to fit the specific needs and budgets of each client, so we can help small businesses grow their online presence effectively.</p>

          </div>

          <div className="p-5 text-white">
            <p className="flex items-center font-bold mb-3 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 me-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
              Can you guarantee first-page rankings on Google?</p>
            <p className="font-light text-gray-400 text-justify">No legitimate digital marketing agency can guarantee first-page rankings on Google. SEO is a long-term process influenced by many factors, including competition, keyword difficulty, and Google’s algorithm updates. However, we use best practices to maximize your chances of achieving high rankings and improving visibility over time.</p>

          </div>

        </div>

      </section>

      <section className="bg-gray-950 pb-14">

        <div className="flex flex-col items-center" data-aos='flip-up' data-aos-duration='3000'>

          <div className=" text-white font-thin text-5xl mt-16 text-center">Boost your brand productivity.</div>
          <p className=" text-gray-400 font-extralight mt-5 text-center">Contact us now and let's talk about your brand's growth potential!</p>
          <Link to='contact'>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-2 px-4 border-b-4
           border-yellow-500 hover:border-yellow-600 hover:text-white rounded mt-5 transition duration-300 
            ease-in-out delay-150 hover:scale-110">Grow with us!</button>
          </Link>


        </div>




      </section>











    </>
  )
}

export default Home