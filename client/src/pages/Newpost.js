import React, { useState } from 'react';
import Container from '../component/Container';
import Nav from '../component/Navbar';
import Footer from '../component/Footer';

import  { createNewPost } from '../controllers/post_controller';

export default function NewPost({isLoggedIn, setIsLoggedIn}) {

  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const [imagelink, setImagelink] = useState("");

  function handleCreatePost(e) {
    e.preventDefault();

    createNewPost(title, subTitle, imagelink, content, () => {
      setTitle("");
      setSubTitle("");
      setContent("");
      setImagelink("");
    });
  }

  return(
    <>
      <Nav isLoggedIn ={isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
      <Container>
        <form className="mt-5" style={{ marginBottom: "230px", maxWidth: "600px", margin: "auto" }}>
          <div class="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" class="form-control" id="title" placeholder="Enter a title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div class="form-group">
            <label htmlFor="subtitle">Subtitle</label>
            <input type="text" class="form-control" id="subtitle" placeholder="Enter a title" value={subTitle} onChange={(e) => setSubTitle(e.target.value)} />
          </div>
          <div class="form-group">
            <label for="content">Post Content</label>
            <textarea class="form-control" id="content" rows="5"  value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          </div>
          
          <div class="form-group">
            <label htmlFor="image">Image</label>
            <input type="text" class="form-control" id="image" placeholder="Enter an image url" value={imagelink} onChange={(e) => setImagelink(e.target.value)} />
          </div>
          <button className="btn btn-primary" onClick={ handleCreatePost }>Create Post</button>
        </form>
      </Container>
      <Footer />
    </>
  )

}
