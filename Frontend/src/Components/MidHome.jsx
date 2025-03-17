import React from "react";
import { Button } from "./Button";
import { FooterSection } from "./FooterSection";
// import { RatingWithComment } from "./Ratingcom";
export function MidHome() {
  return (
    <div className="flex flex-col  bg-stone-950 bg-gradient-to-r from-[#020024] via-[#386060] to-[#386060]"  >
    {/* // style={{
    //   backgroundImage: "url('/img/hero-2.png')", // Use the relative path
    //   backgroundSize: "cover", // Ensure background covers entire div
    //   backgroundPosition: "center", // Center the background image
    //   paddingTop: 0, // Ensure no padding on top
    //   marginTop: 0, // Ensure no margin on top
    // }} */}
   
      <div className="flex-grow py-16">
        <div className="container mx-auto px-4">
          {/* Search Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6 text-white underline"
            style={{ fontFamily: 'Times New Roman' }}>
              Explore Top Jobs & Get Internships
            </h2>
            {/* Add search input or other elements here if needed */}
          </div>

          {/* Featured Jobs Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Job Cards */}
            {[
              { title: "Software Engineer", icon: "https://www.svgrepo.com/show/397379/man-technologist-medium-light-skin-tone.svg" },
              { title: "Marketing Intern", icon: "https://www.svgrepo.com/show/428772/marketing-market-social.svg" },
              { title: "Data Analyst", icon: "https://www.svgrepo.com/show/97638/person-explaining-data.svg" },
            ].map((job, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img className="h-20 mx-auto mb-4" src={job.icon} alt={job.title} />
                <h4 className="text-xl font-bold text-center mb-4">{job.title}</h4>
                <Button />
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <section className="mb-20">
            <div className="bg-white py-8 px-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">
                Why Choose Us?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Benefits Cards */}
                {[
                  { title: "Top Employers", desc: "Work with leading companies worldwide.", icon: "M12 14l9-5-9-5-9 5 9 5z" },
                  { title: "Remote Options", desc: "Flexibility to work from anywhere.", icon: "M3 10h11M9 21H3v-6a2 2 0 012-2h4m0 0v-4a2 2 0 012-2h6l3 3v4a2 2 0 01-2 2h-7" },
                  { title: "Career Growth", desc: "Learn and grow with new challenges.", icon: "M5 12h14M12 5l7 7-7 7" },
                  { title: "Diverse Roles", desc: "Explore roles across multiple domains.", icon: "M8 16l4-4-4-4m8 8l-4-4 4-4" },
                ].map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                      <svg
                        className="w-12 h-12 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={benefit.icon}
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-medium text-gray-800">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        {/* <RatingWithComment/> */}
      </div>

      {/* Footer Section */}
     
      
      <FooterSection />
    </div>
  );
}
