import React from 'react'

function Eabout() {
  return (
    <section className='bg-blue-300 h-1/6'>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <p class="py-16 text-black font-extrabold text-4xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
          .
        </p>
        
      </div>

      <div class="lg:py-20 max-w-sm">
        
        <p class=" text-black text-2xl font-semibold text-center">
        We’ve re-invented how talented people find jobs in tech
        </p>

        <img
        src='https://storage.googleapis.com/otta-static/images/trustpilot/static_microstar.png'
        className='mt-5'
        />
      </div>
    </div>
  </div>
</section>

  )
}

export default Eabout