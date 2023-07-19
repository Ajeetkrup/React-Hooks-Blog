import {useState} from 'react';
import { firestore } from '../firebase';
import { useHandleInput } from '../formInputHook';
import './App.css';

function CreatPost() {
  const title = useHandleInput();
  const subtitle = useHandleInput();
  const content = useHandleInput();

  function handleSubmit(e) {
    e.preventDefault();

    console.log('title', title);
    console.log('subtitle', subtitle);
    console.log('content', content);

    firestore.collection('posts').add({
      title: title.value,
      subtitle: subtitle.value,
      content: content.value,
      createdAt: new Date()
    })
  }

  return (
    <div className="create-post">
      <form onSubmit={handleSubmit}>
        <h1>Create Post</h1>

        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Subtitle</label>
          <input {...subtitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <button className='create-post-btn'>Post</button>
      </form>
    </div>
  );
}

export default CreatPost;