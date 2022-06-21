import React from "react";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openModal } from "../feature/modal/modal-slide";
import { openSidebar } from "../feature/sidebar/sidebar-slide";
const Home = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button
                className={"fixed top-4 left-4 text-xl animate-pulse"}
                onClick={() => dispatch(openSidebar())}
            >
                <FaBars />
            </button>
            <button
                className={
                    "fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] border-2 border-black p-2 font-semibold md:hover:bg-black md:hover:text-white"
                }
                onClick={() => dispatch(openModal())}
            >
                SHOW MODAL
            </button>
        </div>
    );
};

export default Home;
