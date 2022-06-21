import React from "react";
import { ImCross } from "react-icons/im";
import { links, social } from "../data";
import { useDispatch } from "react-redux/es/exports";
import { closeSidebar } from "../feature/sidebar/sidebar-slide";

const Sidebar = () => {
    const dispatch = useDispatch();
    return (
        <div className={`fixed w-full md:w-3/12`}>
            <div
                className={
                    "w-full bg-[bisque] h-16 flex justify-between items-center p-4"
                }
            >
                <h1 className={"font-bold text-xl"}>Sidebar.</h1>
                <button onClick={() => dispatch(closeSidebar())}>
                    <ImCross />
                </button>
            </div>
            <ul className={"bg-[bisque] md:pb-96 pb-14"}>
                {links.map((data, index) => {
                    return (
                        <li key={data.id}>
                            <a
                                href={data.url}
                                className={
                                    "flex items-center py-2 px-4 capitalize md:hover:text-white md:hover:pl-8 duration-300 ease-in-out md:hover:bg-slate-500"
                                }
                            >
                                {data.icon}
                                <span className={"mx-2 font-semibold"}>
                                    {data.text}
                                </span>{" "}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className="fixed bottom-1 text-center flex flex-row w-full justify-center">
                {social.map((data, index) => {
                    return (
                        <li key={data.id}>
                            <a href={data.url} className={"mx-4 text-lg"}>
                                {data.icon}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;
