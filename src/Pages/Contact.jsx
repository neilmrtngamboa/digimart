import React from "react";
import Swal from "sweetalert2";

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6ab37722-6275-4245-910c-6741f6791304");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Message sent successfully!",
        background: "#3d444d",
        icon: "success",
        confirmButtonText: 'Ok',
        confirmButtonColor: '#282d33',
        color: 'white'
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      Swal.fire({
        title: "Error!",
        text:'Unable to send message',
        background: "#3d444d",
        icon: "error",
        confirmButtonText: 'Go back',
        confirmButtonColor: '#282d33',
        color: 'white'
      });
      
      setResult(data.message);
    }
  };


  return (
    <>
      <div className="bg-gray-700 p-5">

        <div className="flex flex-col">
          <p className="mx-auto text-white text-md font-semibold">CONTACT US</p>
          <h1 className="mx-auto text-center font-thin text-6xl text-white">Get in touch</h1>
          <p className="mx-auto text-center text-md font-thin text-gray-400 mt-2">Don't hesistate to contact us and schedule your
            <b className="text-yellow-500"> free consultation!</b></p>
        </div>

        <div className="sm:flex flex-row">

          <div className="basis-1/2 mt-10">
            <p className=" text-white text-lg font-thin">DigiMart is willing to help you and your brand or business to reach greater heights via Digital Marketing.
            </p>
            <p className="text-white text-lg font-thin mt-5">Email:</p>
            <p className="font-semibold text-white">support@digimart.com</p>
            <p className="text-white text-lg font-thin mt-5">Contact:</p>
            <p className="font-semibold text-white">+63 123 456 7890</p>
          </div>

          <div className="basis-1/2 mt-24">
            <h2 className="text-3xl text-white font-thin">Ready to get started?</h2>

            <form onSubmit={onSubmit} className="flex flex-col gap-3 mt-5">
              <input className="rounded-md p-2 shadow-lg" type="text" name="name" id="name" placeholder="Your Name" required />
              <input className="rounded-md p-2 shadow-lg" type="email" name="email" id="email" placeholder="Your Email" required/>
              <textarea className="rounded-md p-2 shadow-lg" name="message" id="msg" cols="30" rows="4" placeholder="Write your message here..." required></textarea>
              <div>
                <button type="submit" class="text-black bg-yellow-400 hover:bg-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center transition duration-500">
                  Send Message
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </button>
              </div>



            </form>


          </div>

        </div>




      </div>

    </>
  )
}

export default Contact