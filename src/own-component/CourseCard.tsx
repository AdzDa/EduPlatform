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

export default function CourseCard(){
    return (
        <ul className="flex flex-col hover:border-gray-400, hover:border-2">
            {course.map((details, index) =>(
                <li key={index} className="">
                    <div className="h-2/3">
                        <img src="course-thumbnail.png" alt="" className="w-full"/>
                    </div>

                    <div className="flex p-2">
                        <div className="flex justify-center items-center w-1/3 p-2">
                            <img src="profile-pic.png" alt="" className="w-20 h-20"/>
                        </div>

                        <div className="p-4">
                            <p className="font-bold text-color5">
                                {details.tag}
                            </p>

                            <p className="font-bold text-lg">
                                {details.title}
                            </p>

                            <p className="text-sm text-gray-400">
                                By {details.trainer}
                            </p>

                            <p className="font-bold text-color4">
                                {details.price}
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}