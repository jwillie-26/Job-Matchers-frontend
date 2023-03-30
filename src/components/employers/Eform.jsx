import React, {useState} from "react";


function Eform() {


  const [job_title, setTitle] = useState("");
  const [category_id, setCategory] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
const [message,setMessage]=useState()

  const newList = {
    job_title,
    category_id,
    qualifications,
    deadline,
    description
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newList)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://careerconnect-production.up.railway.app/job_listings", configObj)
      .then((r) => {
        if (r.ok){
          setMessage("Job posted successfull!")
        }else{
          setMessage("All field are required")
        }
      })

    };
  return (
    <div>
      <section>
        <h1 class="sr-only">Checkout</h1>

        <div class="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
          <div class="py-12 bg-gray-50 md:py-24">
            <div class="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
              <div class="flex items-center">
                <span class="w-10 h-10 bg-blue-700 rounded-full"></span>

                <h2 class="ml-4 font-medium text-gray-900">Job posting form</h2>
              </div>
          </div>
          </div>

          <div class="py-12 bg-white md:py-24">
            <div class="max-w-lg px-4 mx-auto lg:px-8">
              <form class="grid grid-cols-6 gap-4" onSubmit={handleSubmit}>
                <div class="col-span-3">
                  <label
                    for="FirstName"
                    class="block text-xs font-medium text-gray-700"
                    
                  >
                    Job title
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    value={job_title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <fieldset class="col-span-6">
                  <legend class="block text-sm font-medium text-gray-700">
                    Category
                  </legend>

                  <div class="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                    <div>
                      <label for="Country" class="sr-only" >
                        Category
                      </label>

                      <select
                        id="Country"
                        class="relative w-full border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                        value={category_id}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="1">Human & Resources</option>
                        <option value="2">Programming</option>
                        <option value="3">Data Science</option>
                        <option value="4">Other</option>
                      </select>
                    </div>
                  </div>
                </fieldset>
                <div class="col-span-6">
                  <label
                    for="Email"
                    class="block text-xs font-medium text-gray-700"
                    
                  >
                    Qualifications
                  </label>

                  <textarea
                    type="email"
                    id="Email"
                    class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    value={qualifications}
                    onChange={(e) => setQualifications(e.target.value)}
                  />
                </div>
                <fieldset class="col-span-6">
                  <legend class="block text-sm font-medium text-gray-700">
                    Description
                  </legend>

                  <div class="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                    <div>
                      <label for="Description" class="sr-only" ></label>

                      <textarea
                        type="text"
                        id="CardNumber"
                        placeholder="Description"
                        class="relative w-full mt-1 border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                </fieldset>
                <div class="col-span-3">
                  <label
                    for="FirstName"
                    class="block text-xs font-medium text-gray-700"


                  >
                    Deadline
                  </label>

                  <input
                    type="date"
                    id="date"
                    class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                  />
                </div>
                <div class="col-span-6">
                  <button class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
                    Post
                  </button>
                </div>
                <div className="message text-sm text-green-500 col-span-6">{message ? <p>{message}</p> : null}</div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Eform;
