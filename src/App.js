import './App.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadPosts } from './store';
import Post from './components/Post.jsx';
import Form from './components/Form.jsx';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Post />
      <Form />
    </div>
  );
}

export default App;