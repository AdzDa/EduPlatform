import Link from "next/link";

const course = [
    {
        profilePic: '',
        thumbnail: '',
        title: 'Web Development (Next.js)',
        price: 'RM 999.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tag: 'RECOMMENDED',
        trainer: 'minedmind',
    },
]

export default function CourseList(){
    return (
        <ul className="hover:border-gray-400, hover:border-2">
            {course.map((details, index) =>(
                <li key={index} className="flex">
                    <div className="w-1/2 flex justify-center items-center p-4">
                        <img src="course-thumbnail.png" alt="" className="w-full"/>
                    </div>

                    <div className="p-10 space-y-2 w-1/2">
                        <p className="font-bold text-color5">
                            {details.tag}    
                        </p>
                        
                        <h1 className="text-2xl font-bold">
                            {details.title}
                        </h1>
                        
                        <p className="text-gray-400 text-sm">
                            By {details.trainer}
                        </p>
                        
                        <p>
                            {details.description}
                        </p>
                        
                        <p className="font-bold text-color4 text-xl">
                            {details.price}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
}