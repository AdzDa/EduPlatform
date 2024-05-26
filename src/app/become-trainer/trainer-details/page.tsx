import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TrainerDetailsInput(){
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

                    <ChevronRight className="h-4 w-4 text-gray-200" />

                    <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-white rounded-full">
                            2
                        </div>

                        <h3 className="text-gray-200">
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
                        Trainer Details
                    </h1>

                    <div className="flex flex-col pt-6 px-4">
                        <h2 className="font-bold text-lg">
                            Name
                        </h2>

                        <Input disabled type="text" placeholder="eg: Web Development" />
                    </div>
                </div>
            </div>

            <div className="flex justify-end space-x-2">
                <Link href='/become-trainer/course-info'>
                    <Button className="w-48">
                        Next
                    </Button>
                </Link>
            </div>
        </div>
    );
}