import './App.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadPosts } from './store';
import { addPost } from './store';
import Post from './components/Post.jsx';
import Form from './components/Form.jsx';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const submit = values => {
    dispatch(addPost(values))
    console.log(values)
  }

  return (
    <div className="App">
      <Post />
      <Form onSubmit={submit}/>
    </div>
  );
}

export default App;