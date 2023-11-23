import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function B1() {
  return (
    <CardGroup>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://livevox.com/wp-content/uploads/2019/11/How-to-Measure-the-Effectiveness-of-Your-Call-Center-Ticket-System-Blog.png"
        />
        <Card.Body>
          <Card.Title>Support Services</Card.Title>
          <Card.Text>want experts for your problems</Card.Text>
          <Card.Link href="">Pets search</Card.Link>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
const Book = () => {
  return (
    <>
      <B1 />
    </>
  );
};
export default Book;
