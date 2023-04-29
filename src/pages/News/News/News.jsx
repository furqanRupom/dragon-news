import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import EditorInsigts from '../EditorInsights/EditorInsigts';

const News = () => {
    const {details,image_url,title,category_id} = useLoaderData()
    // console.log(data)
    return (
      <div>
        <Card >
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>

        <Link to={`/category/${category_id}`}>
          <Button variant="danger">see all this category news</Button>
        </Link>
        </Card.Body>
      </Card>

      <EditorInsigts />
      </div>
    );
};

export default News;