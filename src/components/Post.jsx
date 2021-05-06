import './assets/css/post.css';
import { useSelector } from "react-redux";
import React from 'react';
import photoCheck from './assets/img/check.png';
import photoComment from './assets/img/comment.png';
import photoLike from './assets/img/likes.png';
import photoRepost from './assets/img/retvit.png';
import photoShare from './assets/img/give.png';

const Post = (props) => {
    const posts = useSelector((state) => state.reducer.posts);

    return(
        <div className="App">
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <div className="photo">
                        <img
                        className="photo__author"
                        src={ post.photoAuthor }
                        alt="#"
                        />
                    </div>
                    <div className="author__post">
                        <div className="author">
                            <h3 className="name">{ post.author }</h3>
                            <img
                            className="photo__check"
                            src={ photoCheck }
                            alt="#"
                            />
                            <a
                            className="link__nickname"
                            href="https://www.google.com/search?q=dr+house&oq=dr+house&aqs=chrome.0.69i59j46j69i59j0l7.8516j0j7&sourceid=chrome&ie=UTF-8"
                            >@{ post.nickname }
                            </a>  
                            <time className="date">&#8226; { post.time }</time>
                        </div>
                        <div className="content">
                            <h2 className="content__message">{ post.text }</h2>
                            <img
                            className="content__photo"
                            src={ post.contentPhoto }
                            alt="#"
                            />
                        </div>
                        <div className="activity">
                            <div className="activity__items">
                                <img
                                className="activity__photo"
                                src={ photoComment }
                                alt="#"
                                />
                                <p >{ post.comment }</p>
                            </div>
                            <div className="activity__items">
                                <img
                                className="activity__photo"
                                src={ photoRepost }
                                alt="#"
                                />
                                <p>{ post.retvit }</p> 
                            </div>
                            <div  className="activity__items">
                                <img
                                className="activity__photo"
                                src={ photoLike }
                                alt="#"
                                />
                                <p>{ post.like }</p>
                            </div>
                            <div className="activity__items">
                                <img
                                className="activity__photo"
                                src={ photoShare }
                                alt="#"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div> 
    )
}
export default Post;
