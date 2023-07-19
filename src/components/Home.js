import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";
import './App.css';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore.collection('posts').get().then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });

        setPosts(posts);
        console.log('posts', posts)
    })
  }, [])

    return (
      <div className="home">
        <h1>HOME</h1>

        <div>Posts</div>
        <div className="author" id="blog-by">AJEET</div>

        <div className="post-detail">
          {posts.map((post, ind) => {
            return (
              <div className="post" key={`post-${ind}`}>
                <Link to={`/post/${post.id}`}>
                  <h3>{post.title}</h3>
                </Link>
                <p>{post.subtitle}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
  
  export default Home;