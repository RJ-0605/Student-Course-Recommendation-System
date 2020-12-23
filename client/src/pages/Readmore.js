import React, { useState } from 'react';
import NavBar from '../component/Navbar';
import Image from '../component/Image';
import Container from '../component/Container';
import Content from '../component/Content';
import CommentBox from '../component/CommentBox';
import Comment from '../component/Comment';
import Footer from '../component/Footer';
import { getPostById, addNewComment, upvotePost, downvotePost } from '../controllers/post_controller';


export default function Readmore( props ) {

    const [comment, setComment] = useState("");
    let currentPost = getPostById(props.location.state.id);
    const [upvotes, setUpvotes] = useState(currentPost.upvotes);
    const [downvotes, setDownvotes] = useState(currentPost.downvotes);

    function handleAddNewComment() {
        if(comment) {
            addNewComment(currentPost.id, comment);
            setComment("");
        }
    }

    function handleUpvote() {
        upvotePost(currentPost.id);
        setUpvotes(currentPost.upvotes);
    }
    
    function handleDownvote() {
        downvotePost(currentPost.id);
        setDownvotes(currentPost.downvotes);
    }


    return (
        <>
            <NavBar isLoggedIn ={props.isLoggedIn} setIsLoggedIn = {props.setIsLoggedIn} />
            <Container>
                <Image image={currentPost.img} />
                <Content content={currentPost.content} />
                <div className="btn-toolbar my-5 pb-5" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group" role="group" aria-label="Third group">
                        <button type="button" className="btn btn-success" onClick={ handleUpvote } ><i className='bx bxs-like'></i> { upvotes } Likes</button>
                    </div>
                    <div className="btn-group ml-3" role="group" aria-label="Third group">
                        <button type="button" className="btn btn-danger" onClick={ handleDownvote } ><i className='bx bxs-dislike'></i> { downvotes } Dislikes</button>
                    </div>
                </div>
                <CommentBox value={ comment } onChange={ setComment } addNewComment={ handleAddNewComment } />
                
                {
                    console.log(currentPost)
                }

                {
                    currentPost.comments.map( _comment => <Comment comment={ _comment } />)
                }

                
            </Container>
            <Footer />
        </>
    )
}
