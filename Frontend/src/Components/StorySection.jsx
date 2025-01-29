import React from "react";

export function StorySection() {
  return (
    <>
      {/* Section Title */}
      <div className="z-10 px-16 pt-[400px] pb-0 text-6xl font-extrabold text-white max-md:px-5 max-md:pt-24 max-md:text-4xl">
        OUR STORY
      </div>

      {/* Story Section Layout */}
      <div className="flex z-10 flex-col mt-12 w-full max-md:max-w-full">
        <div className="self-start w-full max-w-[1382px] max-md:max-w-full pl-10">
          <div className="flex gap-10 max-md:flex-col-reverse max-md:gap-4">
            {/* Text Section */}
            <div className="flex flex-col w-6/12 justify-start max-md:w-full">
              <div className="mt-6 text-xl font-light text-white max-md:mt-5 max-md:px-4 max-md:pl-4">
                As third-year B.Tech students specializing in CSE-IT at SRM
                Institute of Technology, we, Neelesh Adhikari and Misbah
                Subhani, have always been passionate about helping our peers
                navigate the competitive world of internships. The idea for this
                platform was born from our own experiences of searching for
                opportunities and realizing the need for a centralized resource
                to guide students.
                <br />
                We envisioned a solution that not only showcases diverse
                internship opportunities but also equips students with the tools
                to crack them. By providing carefully curated materials tailored
                to hiring companies, our goal is to make the preparation process
                seamless and efficient.
                <br />
                Through this platform, we aim to foster a community where
                students can explore, learn, and achieve their professional
                aspirations with confidence. Our story is rooted in the belief
                that every student deserves access to the right opportunities
                and resources to shape their future.
              </div>
            </div>

            {/* Image Section */}
            <div className="flex flex-col w-6/12 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8765e061fffa1088985dcd8975cf7f8b0b34469f80f80253c9ce8cec6a321ca?apiKey=d6a4942175374e7baf2a6d7a60f38356&"
                alt="Our Story Illustration"
                className="object-contain grow w-full aspect-[0.93] max-md:mt-6 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
