import React from 'react'
import { Link } from 'react-router-dom'

function Employerhero() {
  return (
    <section class="bg-gray-900 text-white">
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-5xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        We heard it’s hard to get quality inbound applications for your jobs. So we fixed it.

      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
      Designed for startups and innovative tech companies
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <h3>Are you an Employer? </h3>
        <Link
          class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          to="/esignup"
        >
          Register
        </Link>
      </div>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <h3>Already sign up? </h3>
        <Link
          class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          to="/elogin"
        >
          Login
        </Link>
      </div>
    </div>
  </div>
</section>

  )
}

export default Employerhero