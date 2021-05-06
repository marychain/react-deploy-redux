import { addPost }  from '../store'
import { Field, reduxForm } from 'redux-form';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import photoDrHouse from './assets/img/drhouse.jpg';
import photoJWilson from './assets/img/wilson.jpg';
import photoLCuddy from './assets/img/cuddy.jpg';
import './assets/css/form.css'

let Form = props => {

    const dispatch = useDispatch();

    const [postData, setPostData] = useState({
        id: 234236,
        author: '',
        photoAuthor: photoDrHouse,
        nickname: 'nick_name',
        text: '',
        contentPhoto: '',
        time: '23 april',
        comment: 674,
        like: 8964,
        retvit: 367
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost(postData))
        postData.id = postData.id + 1;
    };

    const handleChangeInputs = (e) => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value,
        })
    };

    const handleChangeAuthorData = (e) => {
        if(e.target.value ==='James Wilson'){
            setPostData({
                ...postData,
                author: e.target.value,
                photoAuthor: photoJWilson,
            })   
        } else if(e.target.value === 'Lisa Cuddy') {
            setPostData({
                ...postData,
                author: e.target.value,
                photoAuthor: photoLCuddy
            })
        } else if (e.target.value === 'Doctor House'){
            setPostData({
                ...postData,
                author: e.target.value,
                photoAuthor: photoDrHouse
            })
        }
    }
    
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                    <h1 className='form__head'>Enter public data</h1>
                    <div className='form__items'>
                        <div className='items__fields'>
                            <div>
                                <Field
                                    className='items__field'
                                    name="text"
                                    component="input"
                                    type="text"
                                    placeholder="Input text*"
                                    value={postData.text}
                                    onChange={handleChangeInputs}
                                />
                            </div>
                        </div>
                        <div className='items__fields'>
                            <div>
                                <Field
                                    className='items__field'
                                    name="contentPhoto"
                                    component="input"
                                    type="text"
                                    placeholder="link img*"
                                    value={postData.contentPhoto}
                                    onChange={handleChangeInputs}
                                />
                            </div>
                        </div>
                        <div className='items__fields'>
                            <label className='items__field__label'>Author select</label>
                            <div>
                                <Field className='items__field' name="author" component="select" onChange={handleChangeAuthorData} value={postData.author}>
                                    <option value='Doctor House' >Doctor House</option>
                                    <option value='Lisa Cuddy'>Lisa Cuddy</option>
                                    <option value='James Wilson'>James Wilson</option>
                                </Field>
                            </div>
                        </div>
                    </div>                  
                    <button type="submit" className='form__btn'>Add</button>
            </form>
        </div>
    );
};

Form = reduxForm({
    form: 'contact'
})(Form)

export default Form