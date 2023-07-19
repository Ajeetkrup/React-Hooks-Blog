import {Routes, Route} from 'react-router-dom';
import { NavBar, Home, CreatePost,  PostDetail} from './Index';

function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path='/post/:postId' element={<PostDetail />}></Route>
        <Route path='/create-post' element={<CreatePost />}></Route>
      </Routes>
    </div>
  );
}

export default App;