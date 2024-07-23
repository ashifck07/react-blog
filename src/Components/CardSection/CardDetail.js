import React, { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { data } from "../Card.data";

const CardDetail = () => {
  const [blogId, changeBlogId] = useState("");

  const toggleBlogId = (id) => {
    if (blogId === id) {
      changeBlogId(""); 
    } else {
      changeBlogId(id);
    }
  };

  return (
    <div className="bg-white">
      <Container className="py-2">
        <h1 className="py-2 text-dark">Popular topics</h1>
        {data.map((item) => (
          <Card
            style={{ width: "18rem", height: "100%" }}
            className="p-2 m-2 d-inline-flex shadow"
            key={item.id}
          >
            <Card.Img variant="top" src={require(`./image/${item.image}`)} />
            <Card.Body>
              <Card.Text>{item.date}</Card.Text>
              <Card.Title>{item.tilte}</Card.Title>
              <Card.Text>
                {blogId === item.id
                  ? item.desc
                  : item.desc.split(" ").slice(0,10).join(" ") + "..."}
              </Card.Text>
              <Button variant="secondary" onClick={() => toggleBlogId(item.id)}>
                {blogId === item.id ? "Show less" : "Read more"}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default CardDetail;
