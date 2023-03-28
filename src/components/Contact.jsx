import React from "react";
import emailjs from "emailjs-com";
import { useRef,useState } from "react";

function Contact() {
  const form = useRef();
  const [message, setmessage] = useState();
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uog23se",
        "template_j10za1a",
        form.current,
        "u_o34Ox9L0zLMJiLp"
      )
      .then(
        (result) => {
          setmessage("Message sent succesfull!");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div>
    <div className="w-full flex items-center justify-center my-8">
      <form ref={form} onSubmit={sendEmail}>
        <div className=" bg-white shadow rounded py-2 lg:px-28 px-8">
          <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
            Let’s chat and get a quote!
          </p>
          <div className="md:flex items-center mt-2">
            <div className="md:w-50 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Name
              </label>
              <input
                tabIndex={0}
                arial-label="Please input name"
                input="name"
                name="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input  name"
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Email Address
              </label>
              <input
                tabIndex={0}
                arial-label="Please input email address"
                type="email"
                name="email"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input email address"
              />
            </div>
          </div>
          <div className="md:flex items-center mt-8">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Subject
              </label>
              <input
                tabIndex={0}
                role="input"
                arial-label="Please input company name"
                name="subject"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                placeholder="Please input company name"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col mt-8">
              <label className="text-base font-semibold leading-none text-gray-800">
                Message
              </label>
              <textarea
                tabIndex={0}
                aria-label="leave a message"
                role="textbox"
                name="message"
                className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                defaultValue={""}
              />
            </div>
          </div>
          <p className="text-xs leading-3 text-gray-600 mt-4">
            By clicking submit you agree to our terms of service, privacy policy
            and how we use data as stated
          </p>
          <div className="flex items-center justify-center w-full">
            <button
              type="submit"
              className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
            >
              Send message
            </button>
          </div>
          <div className="message text-sm text-green-500 col-span-6">{message ? <p>{message}</p> : null}</div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Contact;
