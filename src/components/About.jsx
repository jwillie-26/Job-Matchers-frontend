import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div id="about">
      <div className="">
  <div class=" bg-gray-50 p-6 shadow-sm">
    <button
      type="button"
      class="absolute -top-1 -right-1 rounded-full border border-gray-200 bg-white p-1 text-gray-400"
    >
      <span class="sr-only">Close</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-20">
      <img
        alt="Laptop"
        src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
       
        class="h-full w-full rounded-xl object-cover"
      />

      <div>
        <h2 class="text-2xl font-bold text-gray-800">
          About Us
        </h2>

        <p class="mt-4 text-sm text-gray-500">
        Welcome to our job website! We are a dedicated team of
                professionals committed to connecting job seekers with their
                dream careers. Our website offers a wide variety of job listings
                across various industries, making it easier for job seekers to
                find the right opportunity for them.In addition to connecting
                job seekers with job opportunities, we also offer a variety of
                resources and tools to help them in their job search. This
                includes resume building tips, interview preparation advice, and
                career development resources. We work closely with top employers
                and recruiters to ensure that our job listings are current and
                relevant. We also have a team of experts who review and verify
                all job listings to ensure that they are legitimate and that job
                seekers are not scammed.
        </p>

        <div class="mt-6 sm:text-right">
          <Link
            to="/signup"
            class="inline-block rounded-lg bg-gray-800 hover:bg-gray-600 px-5 py-3 text-sm font-medium text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default About