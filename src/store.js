import { createStore, combineReducers} from "redux";
import photoDrHouse from './components/assets/img/drhouse.jpg';
import photoEverybody from './components/assets/img/everybody.jpg';
import photoHouse from './components/assets/img/dr_house.jpg';
import { reducer as reduxForm } from 'redux-form';
import { reducer as formReducer } from 'redux-form'

const posts = [
    {
        id: 234234,
        author: "Doctor House",
        photoAuthor:  photoDrHouse,
        nickname: "best_doctor",
        text: "Everybody lies..",
        contentPhoto: photoEverybody,
        time: "25 april",
        comment: 348,
        like: 967,
        retvit: 98
    },
    {
        id: 234235,
        author: "Doctor House",
        photoAuthor:  photoDrHouse,
        nickname: "best_doctor",
        text: "You can't always get everything you want, but if you try, it turns out that sometimes you can.",
        contentPhoto: photoHouse,
        time: "09 april",
        comment: 568,
        like: 67,
        retvit: 23
    }
]
const initialState = {
    posts: []
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "load_posts":
        return {
            ...state,
            posts
        };
        case "add_post":
        return {
            ...state,
            posts: [...state.posts, action.payload],
            form: reduxForm
        };
        default:
        return state;
    }
};
export const loadPosts = () => ({
    type: "load_posts"
});
export const addPost = (postData) => (
    {
        type: "add_post",
        payload: postData
    }
);

const rootReducer = combineReducers({
    reducer,
    form: formReducer
})

const store = createStore(rootReducer)

export default store;