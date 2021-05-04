import React from 'react';
import './post.css'
import { useSelector } from "react-redux";

const Post = (props) => {
    const posts = useSelector((state) => state.posts);
return(
    <div className="App">
        {posts.map((post) => (
           // console.log(post)
            <div key={post.id} className="post">
                <div className="author_photo">
                    <img
                    className="photo_author"
                    src={ post.photo }
                    alt="#"
                    />
                </div>
                <div className="author_post">
                <div className="author">
                    <h3 className="name">{ post.postName }</h3>
                    <img
                    className="photo_check"
                    src={ post.photoCheck }
                    alt="#"
                    />
                    <a
                    className="link_nickname"
                    href="https://www.google.com/search?q=dr+house&oq=dr+house&aqs=chrome.0.69i59j46j69i59j0l7.8516j0j7&sourceid=chrome&ie=UTF-8"
                    >@{ post.nickname }
                    </a>  
                    <time className="date">&#8226; { post.time }</time>
                </div>
                <div className="content">
                    <h2 className="content_message">{ post.text }</h2>
                    <img
                    className="content_photo"
                    src={ post.contentPhoto }
                    alt="#"
                    />
                </div>
                <div className="activity">
                    <div className="activity_items">
                        <img
                        className="activity_photo"
                        src={ post.photoComment }
                        alt="#"
                        />
                        <p>{ post.comment }</p>
                    </div>
                    <div className="activity_items">
                        <img
                        className="activity_photo"
                        src={ post.photoRepost }
                        alt="#"
                        />
                        <p>{ post.retvit }</p> 
                    </div>
                    <div className="activity_items">
                        <img
                        className="activity_photo"
                        src={ post.photoLike }
                        alt="#"
                        />
                        <p>{ post.like }</p>
                    </div>
                    <div className="activity_items">
                        <img
                        className="activity_photo"
                        src={ post.photoShare }
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
