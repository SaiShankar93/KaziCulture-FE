import React, { useContext } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { Link, useParams } from "react-router-dom";
import { MainAppContext } from "@/context/MainContext";
import { cn } from "@/lib/utils";

export function BlogCard({ event, key }) {
    console.log(event);
    const {
        seteventPageId,
    } = useContext(MainAppContext);

    return (
        (<div>
            <Link to={`/blog/${event?.title.replace(/\s+/g, "-")}`}
                onClick={() => {
                    sessionStorage.setItem(
                        "blogPageId",
                        JSON.stringify(event?._id)
                    );
                    seteventPageId(event?._id);
                }}
            >
                <div className="max-w-xs w-full group/card">
                    <div
                        className={cn(
                            " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                            "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
                        )}
                    >
                        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                        <div className="flex flex-row items-center space-x-4 z-10">
                            <img
                                height="100"
                                width="100"
                                alt="Avatar"
                                src="http://localhost:5000/images/additionalImages-1735064142892.jpeg"
                                className="h-10 w-10 rounded-full border-2 object-cover"
                            />
                            <div className="flex flex-col">
                                <p className="font-normal text-base text-gray-50 relative z-10">
                                    Sai Shankar
                                </p>
                                <p className="text-sm text-gray-400">2 min read</p>
                            </div>
                        </div>
                        <div className="text content">
                            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                                Blog Title
                            </h1>
                            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sunt est praes...
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div >)
    );
}
