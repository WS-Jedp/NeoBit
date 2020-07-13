import React from 'react';

// Components
import Button from '../atoms/Button';

const Article = ({ title, author, description }) => {
  return (
    <div className="article">
      <h4>{title || "title"}</h4>
      <p className="article-author">{author || "author"}</p>
      <p className="article-body">{description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolore delectus libero repellendus cumque, ipsam incidunt animi quam impedit id possimus pariatur, et officiis labore non distinctio rem, magnam doloremque?"}</p>
    </div>
  );
};

export default Article;