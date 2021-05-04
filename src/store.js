import { createStore} from "redux";
import photoDrHouse from './components/assets/img/drhouse.jpg';
import photoEverybody from './components/assets/img/everybody.jpg';
import photoCheck from './components/assets/img/check.png';
import photoComment from './components/assets/img/comment.png';
import photoLike from './components/assets/img/likes.png';
import photoRepost from './components/assets/img/retvit.png';
import photoShare from './components/assets/img/give.png';
import photoHouse from './components/assets/img/dr_house.jpg';
import { reducer as reduxForm } from 'redux-form';
const posts = [
    {
        id: 234234,
        author: "Doctor House",
        photo:  photoDrHouse,
        photoCheck: photoCheck,
        nickname: "best_doctor",
        text: "Everybody lies..",
        contentPhoto: photoEverybody,
        time: "25 april",
        photoComment: photoComment,
        photoLike: photoLike,
        photoRepost: photoRepost,
        photoShare: photoShare,
        comment: 348,
        like: 967,
        retvit: 98
    },
    {
        id: 234235,
        author: "Doctor House",
        photo:  photoDrHouse,
        photoCheck: photoCheck,
        nickname: "best_doctor",
        text: "You can't always get everything you want, but if you try, it turns out that sometimes you can.",
        contentPhoto: photoHouse,
        time: "09 april",
        photoComment: photoComment,
        photoLike: photoLike,
        photoRepost: photoRepost,
        photoShare: photoShare,
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
        case "add_post_doctor_house":
        return {
            ...state,
            posts: posts.concat(action.payload),
            form: reduxForm
        };
        // case "add_post_lisa_cuddy":
        // return {
        //     ...state,
        //     posts: posts.concat(action.payload),
        //     form: reduxForm
        // };
        // case "add_post_james_wilson":
        // return {
        //     ...state,
        //     posts: [...state, action.payload],
        //     form: reduxForm
        // };
        default:
        return state;
    }
};
export const loadPosts = () => ({
    type: "load_posts"
});
export const addPost = (postData) => (
    {
        type: "add_post_doctor_house",
        payload: postData
    }
);
const store = createStore(reducer);
export default store;