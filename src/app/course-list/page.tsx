import CourseList from "@/own-component/CourseList";
import NavBar from "@/own-component/NavBar";
import InputSearch from "@/own-component/InputSearch";
import FilterChips from "@/own-component/FilterChips";
import Footer from "@/own-component/Footer";
import CourseCard from "@/own-component/CourseCard";
import { Pagination } from "@/components/ui/pagination";
import Filter from "@/own-component/Filter";
import { SortBy } from "@/own-component/SortBy";
import Link from "next/link";

export default function CourseFull(){
    return (
        <div>
            <NavBar/>
            <InputSearch/>
            <FilterChips/>

{/* Filter & Course List */}
            <div className="flex">
                <div className="w-1/4 border-r px-10 pt-4">
                    <Filter/>
                </div>

                <div className="flex flex-col justify-center w-3/4 space-y-4">
                    <div className="space-x-2 items-center pr-10 flex justify-end">
                        <p>
                            Sort by:
                        </p>

                        <SortBy/>
                    </div>
                    
                    <CourseList/>
                    <CourseList/>
                    <CourseList/>
                    <CourseList/>

                    {/* <Pagination/> */}
                </div>
            </div>
            
            <Footer/>
        </div>
    );
}