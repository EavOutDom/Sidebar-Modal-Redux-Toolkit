import React from "react";
import Home from "./home";
import Sidebar from "./sidebar";
import Modal from "./modal";
import { useSelector } from "react-redux/es/hooks/useSelector";
const App = () => {
    const { isOpen } = useSelector((state) => state.modal);
    const { open } = useSelector((state) => state.sidebar);
    return (
        <div>
            <Home />
            {open && <Sidebar />}
            {isOpen && <Modal />}
        </div>
    );
};

export default App;
