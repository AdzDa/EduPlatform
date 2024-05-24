import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from "@/components/ui/button";

export default function CourseInfoInput(){
    return (
        <div className="flex flex-col p-8">
            <div className="flex flex-col">
                <h1 className="font-bold text-2xl">
                    Create New Course
                </h1>

                <div className="items-center flex py-4 space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-color1 text-white rounded-full">
                            1
                        </div>

                        <h3 className="text-color1 font-bold">
                            Trainer Details
                        </h3>
                    </div>

                    <ChevronRight className="h-4 w-4 text-color1" />

                    <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-color1 text-white rounded-full">
                            2
                        </div>

                        <h3 className="text-color1 font-bold">
                            Course Information
                        </h3>
                    </div>

                    <ChevronRight className="h-4 w-4 text-gray-200" />

                    <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-white rounded-full">
                            3
                        </div>

                        <h3 className="text-gray-200">
                            Course Materials
                        </h3>
                    </div>

                    <ChevronRight className="h-4 w-4 text-gray-200" />

                    <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-white rounded-full">
                            3
                        </div>

                        <h3 className="text-gray-200">
                            Publish
                        </h3>
                    </div>
                </div>
            </div>
            
            <div className="flex py-8">
                <div className="w-1/2">
                    <h1 className="font-bold text-2xl">
                        Course Information
                    </h1>

                    <div className="flex flex-col pt-6 px-4">
                        <h2 className="font-bold text-lg">
                            Title
                        </h2>

                        <Input type="text" placeholder="eg: Web Development" />
                    </div>

                    <div className="flex flex-col pt-6 px-4">
                        <h2 className="font-bold text-lg">
                            Price (RM)
                        </h2>

                        <Input type="number" placeholder="Enter price here" />
                    </div>

                    <div className="flex">
                        <div className="w-1/2 flex flex-col pt-6 px-4">
                            <h2 className="font-bold text-lg">
                                Category
                            </h2>

                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select here" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="business">Business</SelectItem>

                                    <SelectItem value="web-dev">Web Development</SelectItem>

                                    <SelectItem value="python">Python</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                            
                        <div className="w-1/2 flex flex-col pt-6 px-4">
                            <h2 className="font-bold text-lg">
                                Level
                            </h2>

                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select here" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="beginner">Beginner</SelectItem>

                                    <SelectItem value="intermediate">Intermediate</SelectItem>

                                    <SelectItem value="expert">Expert</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="flex flex-col pt-6 px-4">
                        <h2 className="font-bold text-lg">
                            Description
                        </h2>

                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col pt-2 space-y-2">
                                <h3 className="font-bold text-base">
                                    Introduction
                                </h3>

                                <Textarea placeholder="Type your description here." />
                            </div>

                            <div className="flex flex-col pt-2 space-y-2">
                                <h3 className="font-bold text-base">
                                    Requirement and Materials
                                </h3>

                                <Textarea placeholder="Type here." />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-1/2">
                    <div className="flex flex-col pt-14 px-4">
                        <h2 className="font-bold text-lg">
                            Course Thumbnail
                        </h2>

                        <Input type="text" placeholder="Drag or upload here" />
                    </div>
                </div>
            </div>

            <div className="flex justify-end space-x-2">
                <Button className="w-48">
                    Previous
                </Button>

                <Button className="w-48">
                    Submit
                </Button>
            </div>
        </div>
    );
}

