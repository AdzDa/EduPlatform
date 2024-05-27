'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import CourseList from "@/own-component/CourseList";
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { createSupabaseClient } from '@/utils/supabase/client';

export default function TrainerDashboard(){
    const supabase = createSupabaseClient();

    const [courseList, setCourseList] = useState<any[]>([]); // State to store the list of courses

    const getCourseFromDB = async () => {
		const { data: courseDetails, error } = await supabase
			.from('details')
			.select();

		if (error) {
			console.log(error);
		} else {
			setCourseList(courseDetails);
		}
    };

	useEffect(() => {
		getCourseFromDB();
	}, []);

    return (
        <div className="flex">
            <div className="h-screen flex flex-col w-1/5 p-4 border-r">
                <Link href='/'>
                    <div className="flex items-center pt-1 pl-2">
                        <h1 className="font-bold text-xl">
                            EduHub
                        </h1>
                    </div>
                </Link>

                <div className="pt-8">
                    <Button className="w-full">
                        Homepage
                    </Button>
                </div>
            </div>

            <div className="flex flex-col w-4/5">
                <div className="p-4 flex justify-end border-b space-x-4 items-center">
                    <div className="">
                        <Link href='/become-trainer/trainer-details'>
                            <Button className="">
                                <img src="add-circle.svg" alt="" className="w-8 h-8 pr-2"/>
                                Add Course
                            </Button>
                        </Link>
                    </div>

                    <div className="border-l pl-4 flex items-center space-x-3">
                        <img src="calendar-icon.svg" alt="" className="w-6 h-6"/>

                        <img src="bell.svg" alt="" className="w-8 h-8 items-center"/>

                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                    </div>
                </div >

                <div className="p-4 flex space-x-4">
                    <div className="flex space-x-4 w-1/2 border p-2 rounded-lg">
                        <div className="w-4/5 flex flex-col space-y-2 p-2">
                            <h3 className="font-bold">
                                Total Course
                            </h3>

                            <p>
                                -
                            </p>
                        </div>
                        
                        <div className="flex w-1/5 items-center justify-center">
                            <img src="course.svg" alt="" />
                        </div>
                    </div>

                    <div className="flex space-x-4 w-1/2 border p-2 rounded-lg">
                        <div className="w-4/5 flex flex-col space-y-2 p-2">
                            <h3 className="font-bold">
                                Number of Students
                            </h3>

                            <p>
                                -
                            </p>
                        </div>
                        
                        <div className="flex w-1/5 items-center justify-center">
                            <img src="student.svg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="p-4 flex flex-col">
                    <h1 className="font-bold text-xl">
                        My Course
                    </h1>

                    <Tabs defaultValue="published" className="pt-6">
                            <div className="pb-4">
                                <TabsList className="grid w-full grid-cols-3">
                                    <TabsTrigger value="published">Published</TabsTrigger>

                                    <TabsTrigger value="draft">Draft</TabsTrigger>

                                    <TabsTrigger value="archived">Archived</TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="published">
                                <ul className="grid grid-cols-3 gap-4 flex flex-col">
                                    {courseList.map((detail, index) =>(
                                        <li key={index} className="hover:border-gray-400, hover:border-2">
                                            <div className="h-2/3 flex justify-center items-center">
                                                <img src="course-thumbnail.png" alt="" className="w-full"/>
                                            </div>

                                            <div className="flex p-2">
                                                <div className="flex justify-center w-1/3 px-2 pt-2">
                                                    <img src="profile-pic.png" alt="" className="size-16"/>
                                                </div>

                                                <div className="p-2">
                                                    <p className="font-bold text-lg text-clip">
                                                        {detail.title}
                                                    </p>

                                                    <p className="text-sm text-gray-400">
                                                        By {detail.trainer}
                                                    </p>

                                                    <p className="font-bold text-color4">
                                                        RM {detail.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                {/* <div className="bg-blue-100 grid grid-cols-4 gap-2 mx-5">
                                    {courseList.map((detail, index) => (
                                        <div 
                                        key={index}
                                        className=""
                                        >
                                            <p>
                                                {detail.title}
                                            </p>
                                            <p>
                                                By {detail.trainer}
                                            </p>
                                            <p>
                                                {detail.price}
                                            </p>
                                        </div>
                                    ))}
                                </div> */}
                            </TabsContent>
                        </Tabs>
                </div>
            </div>
        </div>
    );
}