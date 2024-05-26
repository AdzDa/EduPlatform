import Image from "next/image";
import NavBar from "@/own-component/NavBar";
import Footer from "@/own-component/Footer";
import CourseCard from "@/own-component/CourseCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NavBar/>

{/* Top Categories */}
      <div className="flex flex-col pb-8">
          <div className="flex py-10">
            <div className="flex justify-center w-4/5">
              <h1 className="font-bold text-2xl">
                Top Categories
              </h1>
            </div>

            <div className="flex space-x-2 justify-center items-center w-1/5">
              <p>See more</p>

              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center px-12 pb-8">
              <div className="hover:border flex flex-col justify-center w-1/5 space-y-4">
                <div className="flex justify-center">
                  <img src="cat-eng.png" alt="" />
                </div>
                
                <div className="flex justify-center">
                  <h2>
                    Engineering
                  </h2>
                </div>
              </div>

              <div className="hover:border flex flex-col justify-center w-1/5 space-y-4">
                <div className="flex justify-center">
                  <img src="cat-code.png" alt="" />
                </div>
                
                <div className="flex justify-center">
                  <h2>
                    Code
                  </h2>
                </div>
              </div>

              <div className="hover:border flex flex-col justify-center w-1/5 space-y-4">
                <div className="flex justify-center">
                  <img src="cat-health.png" alt="" />
                </div>
                
                <div className="flex justify-center">
                  <h2>
                    Health
                  </h2>
                </div>
              </div>

              <div className="hover:border flex flex-col justify-center w-1/5 space-y-4">
                <div className="flex justify-center">
                  <img src="cat-photography.png" alt="" />
                </div>
                
                <div className="flex justify-center">
                  <h2>
                    Photography
                  </h2>
                </div>
              </div>

              <div className="hover:border flex flex-col justify-center w-1/5 space-y-4">
                <div className="flex justify-center">
                  <img src="cat-art.png" alt="" />
                </div>
                
                <div className="flex justify-center">
                  <h2>
                    Art
                  </h2>
                </div>
              </div>
          </div>
      </div>

{/* Unlock a world of knowledge */}
<div className="flex py-14">
  <div className="w-1/2 flex flex-col justify-center space-y-4 px-16">
    <div>
      <h1 className="font-bold text-2xl">
        Unlock a world of knowledge with EduHub
      </h1>
    </div>

    <div>
      <p>
        Whether you’re looking for personal development or interest. EduHub has you covered. Start TODAY
      </p>
    </div>
     
     
    <div>
      <Button>
        Get 10% Discount
      </Button>
    </div>
     
    <div>
      <p className="text-sm text-gray-400">
        *Terms & Conditions applied
      </p>
    </div> 
  </div>
  
  <div className="w-1/2 flex justify-center">
    <img src="banner-top-home.png" alt="" />
  </div>
</div>

{/* Learn In-Demand Course */}
      <div className="bg-color7 pb-8">
        <div className="py-10 flex flex-col justify-center">
          <h1 className="flex justify-center font-bold text-2xl">Learn Most In-Demand Course</h1>
        </div>
      
        <div className="flex px-4 pb-4 space-x-4"> 
          <div className="w-1/4">
            <CourseCard/>
          </div>
          
          <div className="w-1/4">
            <CourseCard/>
          </div>

          <div className="w-1/4">
            <CourseCard/>
          </div>

          <div className="w-1/4">
            <CourseCard/>
          </div>
        </div>

        <div className="py-3 flex justify-center">
          <Link href='/category-list'>
            <Button className="px-8">
              Explore More
            </Button>
          </Link>
        </div>
      </div>

{/* Why EduHub */}
<div className="flex flex-col">
  <div className="flex justify-center py-10">
    <h1 className="font-bold text-2xl">
      Why EduHub?
    </h1>
  </div>

  <div className="flex space-x-4 justify-center px-24 pb-10">
    <div className="flex flex-col w-1/4 p-6">
      <div className="flex items-center justify-center h-1/2 py-6">
        <img src="why-cert.png" alt="" className=""/>
      </div>
      
      <div className="flex flex-col items-center justify-center h-1/2 space-y-4 py-2">
        <div className="font-bold text-lg">
          Certificate of Completion
        </div>
        
        <div className="text-center">
          Boost your resume with certificates showcasing your  newly acquired skills.
        </div>
      </div>
    </div>

    <div className="flex flex-col w-1/4 p-6">
      <div className="flex items-center justify-center h-1/2 py-6">
        <img src="why-in-demand.png" alt="" className=""/>
      </div>
      
      <div className="flex flex-col items-center justify-center h-1/2 space-y-4 py-2">
        <div className="font-bold text-lg">
          In-Demand Course
        </div>
        
        <div className="text-center">
          Our courses cover the latest and most relevant topics in techn, business, and more.
        </div>
      </div>
    </div>

    <div className="flex flex-col w-1/4 p-6">
      <div className="flex items-center justify-center h-1/2 py-6">
        <img src="why-lifetime.png" alt="" className=""/>
      </div>
      
      <div className="flex flex-col items-center justify-center h-1/2 space-y-4 py-2">
        <div className="font-bold text-lg">
          Lifetime Access
        </div>
        
        <div className="text-center">
          Once enrolled, you would have a lifetime access to the course material provided.
        </div>
      </div>
    </div>

    <div className="flex flex-col w-1/4 p-6">
      <div className="flex items-center justify-center h-1/2 py-6">
        <img src="why-money.png" alt="" className=""/>
      </div>
      
      <div className="flex flex-col items-center justify-center h-1/2 space-y-4 py-2">
        <div className="font-bold text-lg">
          Value for Money
        </div>
        
        <div className="text-center">
          Enjoy top-tier courses at competitive prices to make learning more accessible.
        </div>
      </div>
    </div>
  </div>
</div>

{/* Be a Trainer */}
      <div className="px-20 pt-16">
        <div className="flex bg-color8 rounded-t-2xl">
          <div className="w-1/2 pl-12">
            <img src="banner-bottom-home.png" alt="" />
          </div>

          <div className="pr-20  w-1/2 flex justify-center items-center flex-col space-y-6">
            <h1 className="font-bold text-3xl text-white text-left">
              Become a Trainer
            </h1>

            <p className="text-white text-xl text-justify">
              EduHub provide a platform for educators around the world to teach what you interested in and start making a difference today. Your knowledge might inspire and transform others live. Sign up now and embark on a rewarding journey with us.
            </p>

            <Link href='/trainer-dashboard'>
              <Button className="bg-white text-color8">
                Start Teaching
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
