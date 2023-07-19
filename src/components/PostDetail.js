import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import './App.css';

function PostDetail() {
  const [post, setPost] = useState({});
  const {postId} = useParams();

  useEffect(() => {
    firestore.collection('posts').doc(postId).get().then((snapshot) => {
      console.log('snapshot', snapshot);
      setPost(snapshot.data());
    })
    }, []);

    return (
      <div className="PostDetail">
        <h1>{post.title}</h1>
        <br></br>
        <h3>{post.subtitle}</h3>
        <div className="post-content">{post.content}</div>
      </div>
    );
  }
  
  export default PostDetail;