import Link from "next/link";

export default function Footer(){
    return (
        <div className="flex flex-col justify-center bg-color6 py-6 space-y-2">
            <div>
                <ul className="flex space-x-2 justify-center">
                    <li>
                        <img src="social-fb.png" alt="" />
                    </li>
                    
                    <li>
                        <img src="social-ig.png" alt="" />
                    </li>
                    
                    <li>
                        <img src="social-linkedin.png" alt="" />
                    </li>
                    
                    <li>
                        <img src="social-x.png" alt="" />
                    </li>
                </ul>
            </div>
            
            <div className="flex justify-center">
                <p className="text-white text-base">
                    &#169; Copyright 2024 AdzDa. All rights reserved
                </p>
            </div>
        </div>
    );
}