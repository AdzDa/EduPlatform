import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FilterChips(){
    return (
        <div className="flex space-x-2 justify-center pt-2 pb-4">
            <Button variant="outline">
                Filter
            </Button>

            <Button variant="outline">
                Engineering
            </Button>

            <Button variant="outline">
                Code
            </Button>

            <Button variant="outline">
                Health
            </Button>

            <Button variant="outline">
                Python
            </Button>

            <Button variant="outline">
                Django
            </Button>

            <Button variant="outline">
                Art
            </Button>

            <Button variant="outline">
                Music
            </Button>

            <Button variant="outline">
                Photography
            </Button>

            <Button variant="outline">
                Lorem
            </Button>
        </div>
    );
}