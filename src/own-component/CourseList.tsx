import Link from "next/link";

const course = [
    {
        profilePic: '',
        thumbnail: '',
        title: 'Web Development (Next.js)',
        price: 'RM 999.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tag: 'RECOMMENDED',
        trainer: 'minedmind',
    },
]

export default function CourseList(){
    return (
        <ul className="flex flex-col hover:border-gray-400, hover:border-2">
            {course.map((details, index) =>(
                <li key={index} className="">
                    <div>
                        1
                    </div>
                </li>
            ))}
        </ul>
    );
}