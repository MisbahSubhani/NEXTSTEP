import { FooterSection } from "../Components/FooterSection"

import { Navbarnew } from "../Components/Navbarnew"

import Githublogo from "../assets/Github.png";


export function Contact() {


    return (
 
         <div className="" style={{
          backgroundImage: "url('/img/hero-2.png')", // Use the relative path
          backgroundSize: "cover", // Ensure background covers entire div
          backgroundPosition: "center", // Center the background image
          paddingTop: 0, // Ensure no padding on top
          marginTop: 0, // Ensure no margin on top
        }}>
         <div  className="  : md:block   ">
          <Navbarnew/>
          </div>
          
          <div class=" bg-white max-h-screen-full   md:bg-stone-800  pt-4 pb-6 bg-gradient-to-r from-[#020024] via-[#386060] to-[#386060] "
        >
          <div  >
      <div class="rounded-xl grid  md:mt-4 grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl bg-zinc-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-semi font-[sans-serif] ">
        <div>
          <h1 class=" px-4 font-mono underline text-gray-800 text-3xl font-bold  text-center">Let's Talk</h1>
          <p class="font-mono text-md text-black  font-semibold mt-4">"We’d love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out. Our team is here to help!"</p>

          <div class="mt-12">
            <h2 class="text-gray-800 text-base font-bold">Email</h2>
            <ul class="mt-4">
              <li class="flex items-center">
                <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                    viewBox="0 0 479.058 479.058">
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000" />
                  </svg>
                </div>
                <a href="javascript:void(0)" class="text-[#007bff] text-sm ml-4">
                  <small class="block  text-black font-bold">Mail</small>
                  <strong  className="font-Cambria text-black">NextStep@example.com</strong>
                </a>
              </li>
            </ul>
          </div>

          <div class="mt-12">
            <h2 class="text-gray-800 text-base font-bold">Socials</h2>

            <ul class="flex mt-4 space-x-4">
            
            <a href="https://github.com/MisbahSubhani/" target="_blank" rel="noopener noreferrer">
  <button className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
          <img src={Githublogo }/>  </button>
</a>

            
              <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                
                </a>
              </li>
              <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                    viewBox="0 0 24 24">
                    <path
                      d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                    </path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form class="ml-auo space-y-4">
          <input type='text' placeholder='Name'
            class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500" />
          <input type='email' placeholder='Email'
            class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500" />
          {/* <input type='text' placeholder='Subject'
            class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500" /> */}
          <textarea placeholder='Message' rows="6"
            class="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-none focus:border-blue-500"></textarea>
            <div   className="text-white bg-black hover:bg-blue-500   focus:outline-none focus:ring-4 focus:ring-cyan-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-cyan-900 dark:focus:ring-blue-800">

           
        <button type="button" class="">Send</button>
        </div>
        </form>
      </div>
    </div>
      <div>
     </div>
    




     
      </div>
    
        </div>
     
    )
}