import CourseCard from "@/own-component/CourseCard";
import FilterChips from "@/own-component/FilterChips";
import Footer from "@/own-component/Footer";
import InputSearch from "@/own-component/InputSearch";
import NavBar from "@/own-component/NavBar";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CategoryList(){
    return (
        <div>
            <NavBar/>
            <InputSearch/>
            <FilterChips/>

{/* Main Course Recommendation */}
<div className="flex bg-color7">
        <div className="flex justify-center items-center w-1/2 p-4">
            <img src="course-thumbnail.png" alt="" className="w-full"/>
        </div>
        
        <div className="w-1/2 flex flex-col space-y-2 p-20">
            <p className="font-bold text-color5">
                RECOMMENDED
            </p>

            <h1 className="text-3xl font-bold">
                Web Development Course
            </h1>

            <p className="text-gray-400 text-sm">
                By minedmind
            </p>

            <p className="text-justify"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo
            </p>

            <div className="flex justify-between items-center space-x-2">
                <p className="font-bold text-color4 text-xl">
                    RM 999.00
                </p>

                <Button variant="outline" size="icon" className="bg-color6">
                    <ChevronRight className="text-white h-4 w-4" />
                </Button>
            </div>
        </div>
</div>

{/* Recommended Course */}
            <div className="pb-8">
                <div className="py-10 flex justify-between px-4">
                    <div>
                        <h1 className="flex justify-center font-bold text-2xl">
                            Recommended Course
                        </h1>
                    </div>

                    <div className="flex space-x-2 items-center">
                        <p>
                            See more
                        </p>

                        <Link href='/course-list'>
                            <Button variant="outline" size="icon">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
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
            </div>

{/* Data Science */}
<div className="pb-8">
                <div className="py-10 flex justify-between px-4">
                    <div>
                        <h1 className="flex justify-center font-bold text-2xl">
                            Data Science Course
                        </h1>
                    </div>

                    <div className="flex space-x-2 items-center">
                        <p>
                            See more
                        </p>

                        <Link href='/course-list'>
                            <Button variant="outline" size="icon">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
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
            </div>

{/* Web Development */}
            <div className="pb-8">
                <div className="py-10 flex justify-between px-4">
                    <div>
                        <h1 className="flex justify-center font-bold text-2xl">
                            Web Development Course
                        </h1>
                    </div>

                    <div className="flex space-x-2 items-center">
                        <p>
                            See more
                        </p>

                        <Link href='/course-list'>
                            <Button variant="outline" size="icon">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
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
                    <Button className="px-14">
                        Load More
                    </Button>
                </div>
            </div>

            <Footer/>
        </div>
    );
}