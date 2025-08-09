
"use client"
import React from 'react'
import { useState } from "react";

import Image from 'next/image';
import { useRouter } from "next/navigation";

const Page = () => {
    const [user, setuser] = useState("");
const router = useRouter()

  
  const createTree = () => { 
    
    router.push(`/Signup?handle=${username}`)
  }
  return (

<main className="min-h-screen text-white  ">
  {/* HERO SECTION */}
  <section className="py-10 px-6 md:py-20 md:px-16 flex  md:flex-row items-center gap-10 bg-[#254f1a]">
    {/* Left Section */}
    <div className="md:w-1/2 space-y-6 mt-20">
      <h1 className="text-[#d2e823] font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight">
        Everything you are. In one, simple link in bio.

      </h1>
      <p className="text-lg md:text-xl font-medium max-w-lg text-white/90">
        Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
      </p>

      {/* Input & Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4" >
        <div className="relative w-full sm:w-auto bg-white/90 rounded-md">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-900">
            linktr.ee/
          </span>
          <input
            type="text"
            className="pl-[85px] pr-4 py-3  w-full border border-zinc-900 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="" value={user} onChange={(e) => setuser(e.target.value)}/>
        </div>
        <button className="bg-[#e9c0e9] px-12 py-5  rounded-full font-bold text-black/90" onClick={()=> createTree()}>
          Claim your Linktree
        </button>
      </div>
    </div>

    {/* Right Section Image */}
    <div className="md:w-1/2 flex justify-center">
      <Image src="/images/l.png" alt="l" width={400} height={500} />
    </div>
  </section>

  {/* SECOND SECTION */}
  <section className="bg-[#e9c0e9] min-h-screen text-black">
    <main className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 py-10 lg:px-20 lg:py-16 gap-10">
      
      {/* Left Image */}
      <div className="lg:w-1/2 flex justify-center">
        <Image src="/images/boy.png" alt="boy" width={350} height={600} />
      </div>

      {/* Right Text + Button */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-[#5e347f] font-extrabold text-3xl md:text-5xl leading-tight">
          Create and customize your Linktree in minutes
        </h2>
        <p className="text-lg md:text-xl">
          Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.
        </p>
        <button className="bg-[#5e347f] px-8 py-4 font-bold rounded-full text-white">
          Get started for free
        </button>
      </div>
    </main>
  </section>
</main>

  )
}

export default Page

