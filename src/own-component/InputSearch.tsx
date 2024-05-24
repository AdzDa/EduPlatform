import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InputSearch(){
    return (
        <div className="flex justify-center pt-8 py-2 space-x-2">
            <Input type="text" placeholder="Course or category" className="pl-4 w-1/2"/>

            <Button>
                Search
            </Button>
        </div>
    );
}