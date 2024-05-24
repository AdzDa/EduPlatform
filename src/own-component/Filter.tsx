import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function Filter(){
    return (
        <div className="flex flex-col">
            <h2 className="pb-8 text-lg font-bold">
                Filter by:    
            </h2>   

            <div className="flex flex-col">
                <h3 className="font-bold">
                    Language
                </h3>

                <div className="flex flex-col pt-2 pl-10 space-y-2 pb-8">
                    <div className="flex">
                        <div className="w-1/2 flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                English
                            </label>
                        </div>

                        <div className="w-1/2 flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Malay
                            </label>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-1/2 flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Mandarin
                            </label>
                        </div>

                        <div className="w-1/2 flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Japanese
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <h3 className="font-bold">
                    Level
                </h3>

                <div className="flex flex-col pt-2 pl-10 space-y-2 pb-8">
                    <div className="flex">
                        <div className="w-1/2 flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Beginner
                            </label>
                        </div>

                        <div className="w-1/2 flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Intermediate
                            </label>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-1/2 flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Expert
                            </label>
                        </div>

                        <div className="w-1/2 flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                All 
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <h3 className="font-bold">
                    Lorem Ipsum
                </h3>

                <div className="flex flex-col pt-2 pl-10 space-y-2 pb-8">
                    <div className="flex">
                        <div className="w-1/2 flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Lorem
                            </label>
                        </div>

                        <div className="w-1/2 flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Lorem
                            </label>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-1/2 flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Lorem
                            </label>
                        </div>

                        <div className="w-1/2 flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Lorem
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <Button>
                Apply Filter
            </Button>
        </div>
    );
}