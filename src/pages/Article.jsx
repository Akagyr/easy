import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Article = () => {
    const {currentArticle} = useSelector(state => state.articles);

  return (
    <Container className='article'>
      <h2>{currentArticle.title}</h2>
      <img src={currentArticle.imageUrl} alt={currentArticle.imageUrl} />
      <p>{currentArticle.description}</p>
      <div className="experts-comment">
          <h3>Experts Comment</h3>
          <p>{currentArticle.expertComment}</p>
      </div>
    </Container>
  )
}

export default Article;