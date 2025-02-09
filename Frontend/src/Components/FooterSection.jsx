



import Githublogo from "../assets/Github.png";
export function FooterSection() {
  return (
  

<footer class="w-full bg-black p-8">
  <div class="flex flex-row flex-wrap items-center justify-left gap-y-6 gap-x-12 bg-black text-center md:justify-between">
   
 
    <ul class="flex flex-wrap items-center gap-y-2 gap-x-8">
      <li>
        <a
          href="#"
          class="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
       <img className="w-8" src={Githublogo}/>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          License
        </a>
      </li>
      <li>
        <a
          href="#"
          class="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          Contribute
        </a>
      </li>
      <li>
        <a
          href="#"
          class="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          Contact Us
        </a>
      </li>
    </ul>
  </div>
  <p class="block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4">
    Copyright © 2025&nbsp; 
    <a href="" target="_blank" rel="noreferrer">NextStep.com</a>.
  </p>
  </footer>
  );
}
