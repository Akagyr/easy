import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ArticleCard from '../components/ArticleCard';

const Articles = () => {
    const { articles } = useSelector(state => state.articles);

    const showArticles = articles.map((item, index) => <ArticleCard key={index}
                                                                    id={index + 1}
                                                                    image={item.imageUrl}
                                                                    title={item.title}
                                                                    link={item.link} />);

  return (
    <Container>
      <Row>
          {showArticles}
      </Row>
    </Container>
  )
}

export default Articles