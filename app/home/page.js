
import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row bg-red-900 text-white p-9 pt-28 min-h-screen">
        <section className="md:w-1/2 items-center justify-center mt-30">
          <div className="flex flex-col space-y-4 text-[#e9c0e9] ">
            <h1 className="text-6xl md:text-8xl font-extrabold">Connect</h1>
            <h1 className="text-6xl md:text-8xl font-extrabold">more of you</h1>
            <p className="text-xl md:text-2xl">
              Bring the best experiences across the internet to one place: your Linktree
            </p>
            <input
              type="text"
              placeholder="Search link and app and integration"
              className="bg-white w-[80%] md:w-[25vw] p-4 border border-zinc-900 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </section>

        <section className="mt-10 md:mt-0 md:w-1/2 flex justify-center p-9">
          <Image src="/images/h.webp" alt="Linktree Preview" width={400} height={600} />
        </section>
      </main>
    </>
  );
};

export default Home;
