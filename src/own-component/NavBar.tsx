import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavBar(){
    return (
        <div className="flex justify-between p-4 border-b">
            <Link href='/'>
                <div className="flex items-center pt-1 pl-2">
                    <h1 className="font-bold text-xl">
                        EduHub
                    </h1>
                </div>
            </Link>
            
            <div className="flex space-x-2 items-center">
                <Link href='/sign-in'>
                    <Button>
                        Sign In
                    </Button>
                </Link>
                
                <Link href='/sign-up'>
                    <Button>
                        Sign Up
                    </Button>
                </Link>
            </div>
        </div>
    );
}