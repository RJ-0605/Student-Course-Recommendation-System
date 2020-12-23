import React from 'react';

export default function Image( { image } ) {

  return (
    <div className="article-image-header my-5">
      <img src={ image } alt="article-img" />
    </div>
  );
}