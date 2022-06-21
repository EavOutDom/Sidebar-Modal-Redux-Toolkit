import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false,
}

export const sidebarSlide = createSlice ({
    name: 'sidebar',
    initialState,
    reducers: {
        openSidebar: (state, action) => {
            state.open = true;
        },
        closeSidebar: (state, action) => {
            state.open = false;
        }
    }
})

export const {openSidebar, closeSidebar} = sidebarSlide.actions;
export default sidebarSlide.reducer;