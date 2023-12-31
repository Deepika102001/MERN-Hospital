// import React, { useState } from "react";

// import {
//   Button,
//   Container,
//   Form,
//   Nav,
//   Navbar,
//   NavDropdown,
//   Carousel,
//   Card,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGem,
//   faHome,
//   faEnvelope,
//   faPhone,
//   faPrint,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebookF,
//   faTwitter,
//   faGoogle,
//   faInstagram,
//   faLinkedin,
//   faGithub,
// } from "@fortawesome/free-brands-svg-icons";
// import Image from "react-bootstrap/Image";
// import Offcanvas from "react-bootstrap/Offcanvas";

// function App() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const styles = {
//     logo: {
//       height: "80px",
//       marginRight: "10px",
//     },
//     brand: {
//       fontWeight: "bold",
//       fontSize: "2.2rem",
//       color: "#fff",
//     },
//     nav: {
//       maxHeight: "400px",
//       fontSize: "1.6rem",
//     },
//     navLink: {
//       color: "#fff",
//       marginRight: "45px",
//     },
//     dropdownItem: {
//       color: "#8a817c",
//     },
//     form: {
//       marginLeft: "auto",
//     },
//     searchInput: {
//       marginRight: "5px",
//       padding: "20px",
//     },
//     searchButton: {
//       color: "#fff",
//     },
//     carouselContainer: {
//       height: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     carouselImage: {
//       objectFit: "cover",
//       width: "100%",
//       height: "100%",
//     },
//     cardContainer: {
//       marginBottom: "40px",
//     },
//     cardTitle: {
//       fontSize: "2rem",
//     },
//     cardText: {
//       fontSize: "1.2rem",
//     },
//     form: {
//       padding: "40px", // Adjust the padding as needed
//       backgroundColor: "#778da9", // Adjust the background color as needed
//     },
//     formGroup: {
//       marginBottom: "3.5rem",
//     },
//     formLabel: {
//       display: "block",
//       marginBottom: "1.5rem",
//     },
//     formControl: {
//       width: "80%",
//       padding: "1.75rem", // Adjust the padding as needed
//       fontSize: "2rem",
//       border: "5px solid #ced4da",
//       borderRadius: "1.25rem",
//       backgroundColor: "#00171f", // Adjust the background color as needed
//       color: "#ffaa00", // Adjust the text color as needed
//     },
//     textarea: {
//       resize: "vertical",
//       width: "80%",
//       padding: "1.75rem", // Adjust the padding as needed
//       fontSize: "2rem",
//       border: "5px solid #ced4da",
//       borderRadius: "1.25rem",
//       backgroundColor: "#00171f", // Adjust the background color as needed
//       color: "#ffaa00", // Adjust the text color as needed
//     },
//     imageContainer: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "80vh", // Set a specific height for the container, adjust as needed
//     },
//     image: {
//       maxWidth: "90%",
//       maxHeight: "70%",
//     },
//   };

//   return (
//     <>
//       <div>
//         <Navbar expand="lg" bg="black" variant="dark">
//           <Container fluid>
//             <Button
//               variant="primary"
//               onClick={handleShow}
//               style={{
//                 backgroundColor: "blue", // Replace with your preferred background color
//                 color: "white", // Replace with your preferred text color
//                 padding: "10px 20px", // Replace with your preferred padding
//                 borderRadius: "5px", // Replace with your preferred border radius
//                 // Add any other inline styles as needed
//               }}
//             >
//               Launch
//             </Button>

//             <Offcanvas show={show} onHide={handleClose}>
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 Some text as placeholder. In real life you can have the elements
//                 you have chosen. Like, text, images, lists, etc.
//               </Offcanvas.Body>
//             </Offcanvas>
//             <Navbar.Brand href="#" style={styles.brand}>
//               <img
//                 src="https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg?w=2000"
//                 alt="Logo"
//                 style={styles.logo}
//               />
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarScroll" />
//             <Navbar.Collapse id="navbarScroll">
//               <Nav
//                 className="me-auto my-1 my-lg-0"
//                 style={styles.nav}
//                 navbarScroll
//               >
//                 <Nav.Link href="#action1" style={styles.navLink}>
//                   Home
//                 </Nav.Link>
//                 <Nav.Link href="#action2" style={styles.navLink}>
//                   Link
//                 </Nav.Link>
//                 <NavDropdown
//                   title="Link"
//                   id="navbarScrollingDropdown"
//                   style={styles.navLink}
//                 >
//                   <NavDropdown.Item href="#action3" style={styles.dropdownItem}>
//                     Action
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="#action4" style={styles.dropdownItem}>
//                     Another action
//                   </NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item href="#action5" style={styles.dropdownItem}>
//                     Something else here
//                   </NavDropdown.Item>
//                 </NavDropdown>
//                 <Nav.Link href="#" disabled style={styles.navLink}>
//                   Link
//                 </Nav.Link>
//               </Nav>
//               <Form className="d-flex" style={styles.form}>
//                 <Form.Control
//                   type="search"
//                   placeholder="Search"
//                   className="me-2"
//                   aria-label="Search"
//                   style={styles.searchInput}
//                 />
//                 <Button variant="outline-success" style={styles.searchButton}>
//                   Search
//                 </Button>
//               </Form>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>

//         {/* <Container style={styles.cardContainer}>
//       <Card className="bg-dark text-white">
//         <Card.Img src="https://www.spokenbyyou.com/wp-content/uploads/2019/07/how-data-driven-analytics-transform-into-healthcare_1.jpg" alt="Card image" />
//         <Card.ImgOverlay>
//           <Card.Title style={styles.cardTitle}>Card title</Card.Title>
//           <Card.Text style={styles.cardText}>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This content is a little bit longer.
//           </Card.Text>
//           <Card.Text>Last updated 3 mins ago</Card.Text>
//         </Card.ImgOverlay>
//       </Card>
//     </Container> */}

//         <Container style={styles.carouselContainer}>
//           <Carousel>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src="https://www.spokenbyyou.com/wp-content/uploads/2019/07/how-data-driven-analytics-transform-into-healthcare_1.jpg"
//                 alt="First slide"
//                 style={styles.carouselImage}
//               />
//               <Carousel.Caption>
//                 <h3>First slide label</h3>
//                 <p>
//                   Nulla vitae elit libero, a pharetra augue mollis interdum.
//                 </p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src="https://www.spokenbyyou.com/wp-content/uploads/2019/07/how-data-driven-analytics-transform-into-healthcare_1.jpg"
//                 alt="Second slide"
//                 style={styles.carouselImage}
//               />
//               <Carousel.Caption>
//                 <h3>Second slide label</h3>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src="https://th.bing.com/th/id/OIP.s9TkhHt6ZBCqze23ac2LiQHaEc?w=2000&h=1200&rs=1&pid=ImgDetMain"
//                 alt="Third slide"
//                 style={styles.carouselImage}
//               />
//               <Carousel.Caption>
//                 <h3>Third slide label</h3>
//                 <p>
//                   Praesent commodo cursus magna, vel scelerisque nisl
//                   consectetur.
//                 </p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//         </Container>
//         <div style={styles.imageContainer}>
//           <Image
//             src="https://th.bing.com/th/id/OIP.s9TkhHt6ZBCqze23ac2LiQHaEc?w=2000&h=1200&rs=1&pid=ImgDetMain"
//             alt="Your Alt Text"
//             fluid
//             style={styles.image}
//           />
//         </div>
//         <div style={styles.imageContainer}>
//           <Image
//             src="https://th.bing.com/th/id/OIP.s9TkhHt6ZBCqze23ac2LiQHaEc?w=2000&h=1200&rs=1&pid=ImgDetMain"
//             alt="Your Alt Text"
//             fluid
//             style={styles.image}
//           />
//         </div>
//         <div style={styles.imageContainer}>
//           <Image
//             src="https://th.bing.com/th/id/OIP.s9TkhHt6ZBCqze23ac2LiQHaEc?w=2000&h=1200&rs=1&pid=ImgDetMain"
//             alt="Your Alt Text"
//             fluid
//             style={styles.image}
//           />
//         </div>
//         <div style={styles.imageContainer}>
//           <Image
//             src="https://th.bing.com/th/id/OIP.s9TkhHt6ZBCqze23ac2LiQHaEc?w=2000&h=1200&rs=1&pid=ImgDetMain"
//             alt="Your Alt Text"
//             fluid
//             style={styles.image}
//           />
//         </div>
//         {/* <Row xs={1} md={2} className="g-4">
//     {Array.from({ length: 1 }).map((_, idx) => (
//       <Col key={idx}>
//         <Card>
//           <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.Qq8IC6l8wGL9DX3oxqtClwHaD5?w=304&h=180&c=7&r=0&o=5&pid=1.7" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a longer card with supporting text below as a natural
//               lead-in to additional content. This content is a little bit
//               longer.
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </Col>
//     ))}
//   </Row> */}
//         <Container style={styles.cardContainer}>
//           <Row xs={1} md={4} className="g-5">
//             {[1].map((idx) => (
//               <>
//                 <Col key={idx}>
//                   <Card style={{ width: "18rem" }}>
//                     <Card.Img
//                       variant="top"
//                       src="https://th.bing.com/th/id/OIP.Qq8IC6l8wGL9DX3oxqtClwHaD5?w=304&h=180&c=7&r=0&o=5&pid=1.7"
//                     />
//                     <Card.Body>
//                       <Card.Title style={styles.cardTitle}>
//                         Card Title
//                       </Card.Title>
//                       <Card.Text style={styles.cardText}>
//                         Some quick example text to build on the card title and
//                         make up the bulk of the card's content.
//                       </Card.Text>
//                       <Button variant="primary">Go somewhere</Button>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//                 <Col key={idx}>
//                   <Card style={{ width: "18rem" }}>
//                     <Card.Img
//                       variant="top"
//                       src="https://th.bing.com/th/id/OIP.Qq8IC6l8wGL9DX3oxqtClwHaD5?w=304&h=180&c=7&r=0&o=5&pid=1.7"
//                     />
//                     <Card.Body>
//                       <Card.Title style={styles.cardTitle}>
//                         Card Title
//                       </Card.Title>
//                       <Card.Text style={styles.cardText}>
//                         Some quick example text to build on the card title and
//                         make up the bulk of the card's content.
//                       </Card.Text>
//                       <Button variant="primary">Go somewhere</Button>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//                 <Col key={idx}>
//                   <Card style={{ width: "18rem" }}>
//                     <Card.Img
//                       variant="top"
//                       src="https://th.bing.com/th/id/OIP.Qq8IC6l8wGL9DX3oxqtClwHaD5?w=304&h=180&c=7&r=0&o=5&pid=1.7"
//                     />
//                     <Card.Body>
//                       <Card.Title style={styles.cardTitle}>
//                         Card Title
//                       </Card.Title>
//                       <Card.Text style={styles.cardText}>
//                         Some quick example text to build on the card title and
//                         make up the bulk of the card's content.
//                       </Card.Text>
//                       <Button variant="primary">Go somewhere</Button>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//                 <Col key={idx}>
//                   <Card style={{ width: "18rem" }}>
//                     <Card.Img
//                       variant="top"
//                       src="https://th.bing.com/th/id/OIP.Qq8IC6l8wGL9DX3oxqtClwHaD5?w=304&h=180&c=7&r=0&o=5&pid=1.7"
//                     />
//                     <Card.Body>
//                       <Card.Title style={styles.cardTitle}>
//                         Card Title
//                       </Card.Title>
//                       <Card.Text style={styles.cardText}>
//                         Some quick example text to build on the card title and
//                         make up the bulk of the card's content.
//                       </Card.Text>
//                       <Button variant="primary">Go somewhere</Button>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//                 <Col key={idx}>
//                   <Card style={{ width: "18rem" }}>
//                     <Card.Img
//                       variant="top"
//                       src="https://th.bing.com/th/id/OIP.Qq8IC6l8wGL9DX3oxqtClwHaD5?w=304&h=180&c=7&r=0&o=5&pid=1.7"
//                     />
//                     <Card.Body>
//                       <Card.Title style={styles.cardTitle}>
//                         Card Title
//                       </Card.Title>
//                       <Card.Text style={styles.cardText}>
//                         Some quick example text to build on the card title and
//                         make up the bulk of the card's content.
//                       </Card.Text>
//                       <Button variant="primary">Go somewhere</Button>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//                 <Col key={idx}>
//                   <Card style={{ width: "18rem" }}>
//                     <Card.Img
//                       variant="top"
//                       src="https://th.bing.com/th/id/OIP.Qq8IC6l8wGL9DX3oxqtClwHaD5?w=304&h=180&c=7&r=0&o=5&pid=1.7"
//                     />
//                     <Card.Body>
//                       <Card.Title style={styles.cardTitle}>
//                         Card Title
//                       </Card.Title>
//                       <Card.Text style={styles.cardText}>
//                         Some quick example text to build on the card title and
//                         make up the bulk of the card's content.
//                       </Card.Text>
//                       <Button variant="primary">Go somewhere</Button>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               </>
//             ))}
//           </Row>
//           <form style={styles.form}>
//             <div style={styles.formGroup}>
//               <label
//                 style={styles.formLabel}
//                 htmlFor="exampleForm.ControlInput1"
//               >
//                 Email address
//               </label>
//               <input
//                 style={styles.formControl}
//                 type="email"
//                 id="exampleForm.ControlInput1"
//                 placeholder="name@example.com"
//               />
//             </div>
//             <div style={styles.formGroup}>
//               <label
//                 style={styles.formLabel}
//                 htmlFor="exampleForm.ControlTextarea1"
//               >
//                 Example textarea
//               </label>
//               <textarea
//                 style={styles.textarea}
//                 id="exampleForm.ControlTextarea1"
//                 rows={3}
//               />
//             </div>
//             <div className="d-grid gap-2">
//               <Button variant="primary" size="lg">
//                 hi
//               </Button>
//               <Button variant="secondary" size="lg">
//                 hi
//               </Button>
//             </div>
//           </form>
//         </Container>
//         <br></br>
//         <br></br>
//       </div>
//       <footer className="bg-light text-center text-lg-start text-muted">
//         <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
//           <div className="me-5 d-none d-lg-block">
//             <span>Get connected with us on social networks:</span>
//           </div>

//           <div>
//             <a href="/" className="me-4 text-reset">
//               <FontAwesomeIcon icon={faFacebookF} color="secondary" />
//             </a>
//             <a href="/" className="me-4 text-reset">
//               <FontAwesomeIcon icon={faTwitter} color="secondary" />
//             </a>
//             <a href="/" className="me-4 text-reset">
//               <FontAwesomeIcon icon={faGoogle} color="secondary" />
//             </a>
//             <a href="/" className="me-4 text-reset">
//               <FontAwesomeIcon icon={faInstagram} color="secondary" />
//             </a>
//             <a href="/" className="me-4 text-reset">
//               <FontAwesomeIcon icon={faLinkedin} color="secondary" />
//             </a>
//             <a href="/" className="me-4 text-reset">
//               <FontAwesomeIcon icon={faGithub} color="secondary" />
//             </a>
//           </div>
//         </section>

//         <section className="">
//           <Container className="text-center text-md-start mt-5">
//             <Row className="mt-3">
//               <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
//                 <h6 className="text-uppercase fw-bold mb-4">
//                   <FontAwesomeIcon icon={faGem} className="me-3" />
//                   Company name
//                 </h6>
//                 <p>
//                   Here you can use rows and columns to organize your footer
//                   content. Lorem ipsum dolor sit amet, consectetur adipisicing
//                   elit.
//                 </p>
//               </Col>

//               <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
//                 <h6 className="text-uppercase fw-bold mb-4">Products</h6>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Angular
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     React
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Vue
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Laravel
//                   </a>
//                 </p>
//               </Col>

//               <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
//                 <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Pricing
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Settings
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Orders
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Help
//                   </a>
//                 </p>
//               </Col>

//               <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
//                 <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
//                 <p>
//                   <FontAwesomeIcon icon={faHome} className="me-2" />
//                   New York, NY 10012, US
//                 </p>
//                 <p>
//                   <FontAwesomeIcon icon={faEnvelope} className="me-3" />
//                   info@example.com
//                 </p>
//                 <p>
//                   <FontAwesomeIcon icon={faPhone} className="me-3" /> + 01 234
//                   567 88
//                 </p>
//                 <p>
//                   <FontAwesomeIcon icon={faPrint} className="me-3" /> + 01 234
//                   567 89
//                 </p>
//               </Col>
//             </Row>
//           </Container>
//         </section>

//         <div
//           className="text-center p-4"
//           style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
//         >
//           © 2021 Copyright:
//           <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
//             MDBootstrap.com
//           </a>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default App;
