import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavBar(){
    return (
        <div className="flex justify-between p-4 border-b">
            <div className="flex items-center">
                <h1 className="font-bold text-xl">
                    EduHub
                </h1>
            </div>
            
            <div className="flex space-x-2 items-center">
                <Button>
                    Sign In
                </Button>

                <Button>
                    Sign Up
                </Button>
            </div>
        </div>
    );
}