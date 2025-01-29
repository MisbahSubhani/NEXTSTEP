
import { Carousel } from "flowbite-react"


export function SlideImage() {

    return (

        <div  className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel className="h-full md:h-full"  slideInterval={3000}>
    <img src="https://img.freepik.com/free-psd/job-fair-template-design_23-2151051754.jpg?t=st=1736526438~exp=1736530038~hmac=2b0ba7c31f5f4c615e5d402f8b6ceed2996de5b897ef1e670b5668014a28e2d8&w=1380 " alt="hello" />
    <img src="https://img.freepik.com/free-vector/flat-design-human-resources-landing-page-template_23-2149509507.jpg?t=st=1736525956~exp=1736529556~hmac=a33d38a37c39cd02e091aa52d884f2550b21e5e3ed39a607c7cb00557d8a17f6&w=1380" alt="..." />
    <img src="https://img.freepik.com/free-psd/employment-concept-banner-web-template_23-2148486096.jpg?t=st=1736526040~exp=1736529640~hmac=e613d4b1c6cc4b9acd137e3fe1cec16034a3662f96ede3dbb556388a8f545f04&w=1380" alt="..." />
    <img src="https://img.freepik.com/free-psd/minimalist-curriculum-banner-template_23-2149363286.jpg?t=st=1736526070~exp=1736529670~hmac=048cb75d4148ef946b3f903ef9d48f86dadef99a5801955ffb83d2be8b3edb6f&w=1380" alt="..." />
    <img src="https://img.freepik.com/premium-psd/we-are-hiring-job-vacancy-facebook-cover-banner-template_106176-4406.jpg?w=1380" alt="..." />
  </Carousel>
    

      </div>
    )
}