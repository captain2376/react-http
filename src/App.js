import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import { PostListOne } from './components/PostListOne';
import { PostFormOne } from './components/PostFormOne';

function App() {

  return (
    <div className="App">
      {/* <PostList/> */}
      {/* <PostForm/> */}
      {/* <PostListOne/> */}
      <PostFormOne/>
    </div>
  );
}

export default App;
