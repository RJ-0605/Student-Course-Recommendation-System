import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function ArticleCard( { left, post } ) {
  

  return (
    <div className="card mt-5 border-0">
      <div className="card-body p-0">

      {left &&
        <div className="row">
          <div className="col">
            <img src={ post.img }  className="card-img-top" alt="..." />
          </div>
          <div className="col d-flex flex-column">
            <h1 className="card-title"> { post.title } </h1>
            <h3> { post.subtitle } </h3>
            <p className="card-text"> { post.content.substr(0, 400) + "..." } </p>
            <Link className="btn btn-primary read-more align-self-end" to={ { pathname:  "/readmore", state: { id: post.id } } }  >Read more</Link>
            
            {/* <button className="btn btn-primary read-more align-self-end" onClick={readmore}>Read more</button> */}
          </div>    
        </div>
      }

      {!left &&
        <div className="row">
          <div className="col d-flex flex-column">
            <h1 className="card-title"> { post.title } </h1>
            <h3> { post.subtitle } </h3>
            <p className="card-text"> { post.content.substr(0, 400) + "..." } </p>
            <Link className="btn btn-primary read-more align-self-end" to={{ pathname:  "/readmore", state: { id: post.id }  }} >Read more</Link>
          </div>    
          <div className="col">
            <img src={ post.img } className="card-img-top" alt="..." />
          </div>
        </div>
      }

      </div>
    </div>
  );
}



// let card={"bird":2,"cat":3, "head":4, "panda":5}
//     sheep = card["bird"]

//     {bird} = card

    