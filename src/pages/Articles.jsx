import React, { useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ArticleCard from '../components/ArticleCard';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import { fetchArticles, openAddModal, setArticles } from '../redux/articlesSlice';
import Preloader from "../components/Preloader";
import AddModal from '../components/AddModal';

const Articles = () => {

    const { articles, isLoading, showAddModal } = useSelector(state => state.articles);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchArticles());
      const q = query(collection(db, "articles"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let articles = [];
        querySnapshot.forEach(doc => {
          articles.push({...doc.data(), id: Number(doc.id)});
        });
        dispatch(setArticles(articles));
      });
      return () => unsubscribe();
    }, [dispatch]);

    

    const showArticles = articles.map((item) => <ArticleCard key={item.id}
                                                             id={item.id}
                                                             image={item.imageUrl}
                                                             title={item.title}
                                                             link={item.link} />);

  return (
    <Container>
      {showAddModal && <AddModal showAddModal={showAddModal} idNewArticle={articles.length + 1} />}
      <Button onClick={() => dispatch(openAddModal())}>Create new article</Button>
      {isLoading 
      ? <Preloader />
      : <Row>
          {showArticles}
      </Row>
      }
    </Container>
  )
}

export default Articles