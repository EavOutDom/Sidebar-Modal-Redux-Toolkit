import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './feature/modal/modal-slide';
import sidebarReducer from './feature/sidebar/sidebar-slide';
export const store = configureStore({
    reducer: {
        modal: modalReducer,
        sidebar: sidebarReducer,
    },
});
