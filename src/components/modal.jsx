import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { closeModal } from "../feature/modal/modal-slide";
const Modal = () => {
    const dispatch = useDispatch();
    return (
        <div
            className={`fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]`}
        >
            <div
                className={
                    "bg-[bisque] max-w-96 w-80 max-h-56 h-48 md:w-[30rem] md:h-[20rem] p-2 rounded-lg shadow-lg text-center flex justify-center items-center"
                }
            >
                <h1 className={"font-semibold md:text-lg"}>Modal content</h1>
                <button
                    className={"absolute top-3 right-3 text-sm md:text-base"}
                    onClick={() => dispatch(closeModal())}
                >
                    <ImCross />
                </button>
            </div>
        </div>
    );
};

export default Modal;
