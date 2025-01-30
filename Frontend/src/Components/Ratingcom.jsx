import { Typography, Avatar, Rating } from "@material-tailwind/react";
 
export function RatingWithComment() {
  return (
    <div  className="flex flex-row   w-full flex flex-row justify-between pt-4  "
     >
    <div className="px-8 text-center "  >
   
      <Avatar
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image"
        size="md" className="rounded-full border-black "
      />
      <Typography  variant="h6" className="mt-4 text-white">
        Madhav Kashyap
      </Typography>
      <Typography color="gray" className="mb-4 font-normal text-zinc-100">
       Intern at Microsoft
      </Typography>
      <Rating value={4} readonly />
    </div>
    <div className="px-8 text-center   ">
   
   <Avatar
     src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww"
     alt="image"
     size="md"  className="rounded-full"
   />
   <Typography variant="h6" className="mt-4  text-white  ">
     Anuj Tiwari
   </Typography>
   <Typography color="gray" className="mb-4 font-normal  text-zinc-100">
    Intern at OPPO
   </Typography>
   <Rating value={5} readonly />
 </div>
 <div className=" lg:px-8 text-center pt-4 " >
   
   <Avatar
     src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
     alt="image"
     size="md"   className="rounded-full"
   />
   <Typography variant="h6" className="mt-4  text-white" >
     Aahna Singh
   </Typography>
   <Typography color="gray" className="mb-4 font-normal text-zinc-100">
    Intern at Apple
   </Typography>
   <Rating   value={4} readonly />
 </div>
    </div>
  );
}