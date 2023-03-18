import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { openArticle } from '../redux/articlesSlice';

const ArticleCard = ({id, image, title, link}) => {

  const dispatch = useDispatch();

  return (
    <Col lg={4}>
      <Card>
        <Link to={`article/${id}`} onClick={() => dispatch(openArticle(image))}>
          <Card.Img src={image} alt={image} />
          <Card.Body>
              <Card.Title>{title}</Card.Title>
              {/* {!link ? "" : <Card.Text>{link}</Card.Text>} */}
          </Card.Body>
        </Link>
      </Card>
    </Col>
  )
}

export default ArticleCard;