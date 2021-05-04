import React from 'react';
import { useDispatch } from "react-redux";
import addPost from '../store'
import { Field, reduxForm } from 'redux-form';
const authors = [ 'Doctor House', 'Lisa Cuddy', 'James Wilson'];
const Form = props => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost(postData))
    }

    const postData = {
        id: 234236,
        author: 'Doctor House',
        //photo:  photoDrHouse,
        //photoCheck: photoCheck,
        nickname: 'best_doctor',
        text: '',
        contentPhoto: '',
        time: '09 april',
        //photoComment: photoComment,
        //photoLike: photoLike,
        //photoRepost: photoRepost,
        //photoShare: photoShare,
        comment: 568,
        like: 67,
        retvit: 23
    }
    
    return (
        <div>
            <form className='public' onSubmit={handleSubmit}>
                <div className='public__items'>
                    <div>
                        <label>Текст публікації </label>
                        <div>
                            <Field
                                name="text"
                                component="input"
                                type="text"
                                placeholder="Input text*"
                                value={postData.text}
                            />
                        </div>
                    </div>
                    <div className='public__select'>
                        <label>Зображення</label>
                        <div>
                            <Field
                                name="text"
                                component="input"
                                type="text"
                                placeholder="link*"
                                value={postData.contentPhoto}
                            />
                        </div>
                    </div>
                    <div className='public__select'>
                        <label>Вибір автора</label>
                        <div>
                            <Field name="" component="select">
                                <option value="">Select autor</option>
                                {authors.map(author => (
                                <option value={postData.author} key={author}>
                                    {author}
                                </option>
                                ))}
                            </Field>
                        </div>
                    </div>
                </div>                  
                <button type="submit" className='form__btn'>Add</button>
            </form>
        </div>
    );
};
export default reduxForm({
    form: 'form', 
})(Form);