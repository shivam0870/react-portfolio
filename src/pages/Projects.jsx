import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="GPT AI"
              description="The project incorporates various features and components that enhance the user experience. I have utilized React's component-based architecture to create reusable UI elements, making the project highly modular and scalable.
To enhance the project's aesthetics, I have implemented modern design principles and utilized CSS frameworks like Bootstrap or Material UI to create a polished and visually consistent user interface. ReactJS: The core technology powering the frontend, providing a performant and interactive user interface.
React Router: For smooth navigation and handling different views within the application."
              ghLink="https://github.com/shivam0870/gpt-3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Shopifyy"
              description="Users can create an account by registering with their email and password.
Authentication mechanisms, such as hashing and salting passwords, are implemented for secure storage.
Users can log in with their registered credentials, and the system verifies their identity.
Upon successful login, the system generates an authentication token (e.g., JSON Web Token) that is used for subsequent requests. After logging in, the user is directed to the products page, which displays relevant data. The backend server communicates with the MongoDB database to retrieve the necessary data."
              ghLink="https://github.com/shivam0870/shopifyy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="E‑Commerce Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB as the database. There is also an Admin who can view add or delete the products and also update the product details."
              ghLink="https://github.com/shivam0870/E-Commerce-FullStack"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Book Store"
              description="This is a MERN Based Full Stack Project!
It has all the features of a Book Store .. User can Visit the website and add books on his own.
The Schema looks like this -> 
1. Name of the book
2. Author of the book 
3. Description of the book 
4. Price of the book
5. Availability of the book
6. Image of the book
Once the website is fully completed i'll make sure to upload it on some platform so that the site becomes live! Extensive Book Collection: houses a diverse range of books across various genres, making it a one-stop destination for book lovers. From bestsellers to classics, users can discover new reads and old favorites easily.

Also this web based application can perform CRUD (Create, Read, Update, Delete) Operations.
"
              ghLink="https://github.com/shivam0870/BookStore_FullStack"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Training and Placement Cell"
              description="This is the official website of Training and Placement Cell of Madan Mohan Malaviya University of Technology. This website uses React JS and the design was made using Figma. Overall this project was made to completion by the help of 5 members. The core technology powering the website, providing a robust and interactive frontend. CSS (or SASS/Styled-components): For creating visually appealing styles and animations. React Router: For smooth navigation and handling different views within the website. Git: To maintain version control and facilitate collaboration among team members during development. Overall this website uses ReactJS for the build structure."
              ghLink="https://github.com/TnP-MMMUT/Official-Website"
              demoLink="http://tnpmmmut.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Groco"
              description="GroceryBask is an interactive and visually appealing frontend web project created with HTML, CSS, and JavaScript, providing users with a seamless and convenient online grocery shopping experience. The website aims to revolutionize how users purchase groceries by offering a user-friendly interface, rich product catalog, and smooth navigation. By harnessing the power of HTML, CSS, and JavaScript, GroceryBask delivers an intuitive platform where users can browse, select, and order their favorite groceries from the comfort of their homes. JavaScript is a dynamic programming language that enables web developers."
              ghLink="https://github.com/shivam0870/Groco"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
