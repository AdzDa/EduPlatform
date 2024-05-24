import CourseCard from "@/own-component/CourseCard";
import Footer from "@/own-component/Footer";
import NavBar from "@/own-component/NavBar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const course = [
    {
        profilePic: '',
        thumbnail: '',
        title: 'Web Development (Next.js)',
        price: 'RM 999.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tag: 'RECOMMENDED',
        trainer: 'minedmind',
        language: 'English',
        level: 'Beginner',
        materials:{
            videoHours: '18',
            readingMaterials: '12',
            hasQuiz: true,
        },
        information:{
            introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            objective: '',
            requirement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
    },
]

export default function CoursePage() {
    return (
        <div>
            <NavBar/>

            {course.map((details, index) => (
                <div key={index} className="flex">
                    <div className="flex flex-col w-3/5 pt-6 px-10">
                        <div className="flex flex-col pb-6">
                            <h1 className="font-bold text-3xl">
                                {details.title}
                            </h1>

                            <p className="text-gray-500 text-sm">
                                By {details.trainer}
                            </p>
                        </div>

                        <img src="course-thumbnail.png" alt="" />

                        <Tabs defaultValue="info" className="pt-6">
                            <div className="pb-6 border-b-2">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="info">Information</TabsTrigger>
                                    <TabsTrigger value="plan">Lesson Plan</TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="info">
                                <div className="flex flex-col py-7">
                                    <div>
                                        <h2 className="font-bold text-xl pb-4">
                                            Introduction
                                        </h2>

                                        <p className="text-justify">
                                            {details.information.introduction}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col py-7">
                                    <div>
                                        <h2 className="font-bold text-xl pb-4">
                                            Learning Objectives
                                        </h2>

                                        <div className="flex flex-col space-y-2">
                                            <div className="border-2 p-4 rounded-lg">
                                                <p className="">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </div>

                                            <div className="border-2 p-4 rounded-lg">
                                                <p className="">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </div>

                                            <div className="border-2 p-4 rounded-lg">
                                                <p className="">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </div>

                                            <div className="border-2 p-4 rounded-lg">
                                                <p className="">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col py-7">
                                    <div>
                                        <h2 className="font-bold text-xl pb-4">
                                            Requirements and Materials
                                        </h2>

                                        <p className="text-justify">
                                            {details.information.requirement}
                                        </p>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div className="flex flex-col w-2/5 px-10 pt-8">
                        <p className="font-bold text-color5">
                            {details.tag}
                        </p>

                        <p className="font-bold text-2xl">
                            {details.price}
                        </p>

                        <div className="flex py-6">
                            <div className="flex w-1/2 space-x-2 items-center">
                                <img src="a-level.png" alt="" className="w-5 h-5"/>

                                <p>
                                    {details.level}-level
                                </p>
                            </div>
                            
                            <div className="flex w-1/2 space-x-2 items-center">
                                <img src="a-language.png" alt="" className="w-5 h-5"/>

                                <p>
                                    {details.language}
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <Button className="w-4/5">
                                Enroll Now
                            </Button>
                        </div>

                        <div className="pt-8 flex flex-col space-y-2">
                            <h3 className="font-bold">
                                This course includes:
                            </h3>

                            <div className="flex space-x-4 items-center">
                                <img src="a-lifetime.png" alt="" className="w-5 h-5"/>

                                <p>
                                    Full lifetime access
                                </p>
                            </div>

                            <div className="flex space-x-4 items-center">
                                <img src="a-vid.png" alt="" className="w-5 h-5"/>

                                <p>
                                    {details.materials.videoHours} hours of full course video
                                </p>
                            </div>

                            <div className="flex space-x-4 items-center">
                                <img src="a-material.png" alt="" className="w-5 h-5"/>

                                <p>
                                    {details.materials.readingMaterials} Learning materials
                                </p>
                            </div>

                            <div className="flex space-x-4 items-center">
                                <img src="a-quiz.png" alt="" className="w-5 h-5"/>

                                <p>
                                    Quizzes & assignments
                                </p>
                            </div>
                           
                            <div className="flex space-x-4 items-center">
                                <img src="a-cert.png" alt="" className="w-5 h-5"/>

                                <p>
                                    Certificate of completion
                                </p>
                            </div>
                       
                            <div className="flex space-x-4 items-center">
                                <img src="a-mobile.png" alt="" className="w-5 h-5"/>

                                <p>
                                    Accessible on mobile
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <Footer/>
        </div>
    );
}