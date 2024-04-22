import { createSlice } from "@reduxjs/toolkit";

const richTextSlice = createSlice({
    name: "richtext",
    initialState: { richTextData: '' },
    reducers: {
        setRichTextData: (state, actions) => {
            state.richTextData = actions.payload
        }
    },
});

export const { setRichTextData } = richTextSlice.actions;
export default richTextSlice.reducer;
