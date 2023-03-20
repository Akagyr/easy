import { createSlice } from "@reduxjs/toolkit";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";


const articlesSlice = createSlice({
    name: "articles",
    initialState: {
        articles: [],
        currentArticle: {},
        isLoading: false,
        showAddModal: false
    },
    reducers: {
        fetchArticles: (state) => {
            state.isLoading = true;
        },
        setArticles: (state, action) => {
            state.articles = action.payload;
            state.isLoading = false;
        },
        openArticle: (state, action) => {
            state.currentArticle = state.articles.find(item => item.imageUrl === action.payload);
        },
        openAddModal: (state) => {
            state.showAddModal = true;
        },
        closeAddModal: (state) => {
            state.showAddModal = false;
        },
        createArticle: (state, action) => {
            state.showAddModal = false;
            setDoc(doc(db, "articles", action.payload.id), {
                title: action.payload.title,
                description: action.payload.description,
                imageUrl: action.payload.imageUrl,
                expertComment: action.payload.expertComment
            });
        }
    },
});

export const {
    fetchArticles,
    setArticles,
    openArticle,
    openAddModal,
    closeAddModal,
    createArticle
} = articlesSlice.actions;

export default articlesSlice.reducer;