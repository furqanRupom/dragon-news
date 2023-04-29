import moment from "moment/moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";


const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  const { name, published_date, img } = author;
  return (

      <div className="my-5">
        <Card>
          <Card.Header className="d-flex align-items-center">
            <Image width={50} src={img} roundedCircle />
            <div className="pt-3 ps-2 flex-grow-1">
              <h6>{name}</h6>
              <p>
                <small>{moment(published_date).format("yyyy-MM-D")}</small>
              </p>
            </div>

            <div>
              <FaRegBookmark /> <FaShareAlt />
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
            <Card.Text>
              {details.length === 250 ? (
                details
              ) : (
                <>
                  {details.slice(0, 250)}...{" "}
                  <Link className="btn btn-danger" to={`/news/${_id}`}>
                    Read more
                  </Link>
                </>
              )}
            </Card.Text>
          </Card.Body>

          <Card.Footer className="text-muted d-flex ">
            <div className="flex-grow-1  d-flex">
            <Rating style={{ maxWidth: 100 }} value={Math.round(rating.number || 0)} readOnly/>


              <span className="ms-2">{rating.number}</span>
            </div>
            <div>
              <FaEye />
              <small>
                <span className="ps-1">{total_view}</span>
              </small>
            </div>
          </Card.Footer>
        </Card>
      </div>


  );
};

export default NewsCard;
