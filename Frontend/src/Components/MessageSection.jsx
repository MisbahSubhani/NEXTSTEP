export function MessageSection() {
  return (
    <div className="mt-12 w-full max-w-[1190px] max-md:mt-10 max-md:px-4">
      <div className="flex gap-5 max-md:flex-col max-md:gap-4">
        {/* Image Section */}
        <div className="flex flex-col w-3/5 max-md:w-full max-md:mb-6">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/d6a4942175374e7baf2a6d7a60f38356/db8962170a857c0721178d98dc5de3d921d902c2d0e601ab6bdaccfdb2a41c36?apiKey=d6a4942175374e7baf2a6d7a60f38356&"
            alt="Our message illustration"
            className="object-contain w-full mt-1.5 aspect-[0.76] max-md:mt-6 max-md:max-w-full"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col w-2/5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col text-white max-md:mt-10">
            <div className="self-start ml-3 text-6xl font-extrabold max-md:ml-2.5 max-md:text-4xl">
              OUR MESSAGE
            </div>
            <div className="mt-8 text-xl font-light max-md:mt-6 max-md:text-lg">
              At NextStep, our mission is to empower students and bridge the gap between aspirations and opportunities. We believe every student deserves a platform that not only opens doors to internships and jobs but also provides the tools and resources to walk through them with confidence.
              <br />
              For companies, we aim to simplify the hiring process by connecting them with passionate, skilled, and motivated individuals ready to contribute and grow.
              <br />
              Our vision is to create a thriving ecosystem where students can shape their futures, and companies can discover talent that aligns with their goals. Together, let's build a path to success—one step at a time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
