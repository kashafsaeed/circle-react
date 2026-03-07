import React from 'react'
import hero from "../assets/images/hero.png"

const Hero = () => {
  return (
    <>
<section class="bg-neutral-primary">
    <div class="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16  bg-[#EDFEFF]">
        <h1 class="mb-6 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl">A powerful online engagement tool <br /> that’s intuitive and simple to use.</h1>
        <p class="mb-8 text-base font-normal text-[#878787] md:text-xl">With stellar one-click reports and unmatched support, see how <br /> Circle will make a difference in your business.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 md:space-x-4">
            <button type="button" class="inline-flex items-center justify-center text-white bg-[#0CBBC7]  font-bold rounded-base text-base px-5 py-3 tracking-wide">
                Getting started
                <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
            </button>
        </div>
        <div class="mt-8 " >
            <img src={hero} alt="mockup" class="mx-auto mt-10 w-full max-w-2/3  rounded-lg" />
        </div>
    </div>
</section>

    </>
  )
}

export default Hero