
import { Carousel } from "flowbite-react"


export function SlideImage() {

    return (

        <div  className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel className="h-full md:h-full"  slideInterval={3000}>
    <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " alt="hello" />
    <img className=" h-full md:" src="https://swapnaprinting.com/wp-content/uploads/2016/10/Careers-banner.jpg" alt="..." />
    <img src="https://img.freepik.com/free-photo/we-are-hiring-digital-collage_23-2149667034.jpg?t=st=1738778761~exp=1738782361~hmac=dad172f2bd8091e7daf021afcd87f004f855d3b47e2b37e8530c719d0ca2fea6&w=1060" alt="..." />
    <img className="h-full w-screen md:" src="https://t3.ftcdn.net/jpg/01/40/02/10/240_F_140021035_l0SPWeEd1WAk2KFJpN0F5KQxNr88LWEx.jpg" alt="..." />
    <img className=" h-full md:" src="https://www.universityliving.com/blog/wp-content/uploads/2024/06/Internship_-Blog-Banner-1000x419.webp" alt="..." />
  </Carousel>
    

      </div>
    )
}