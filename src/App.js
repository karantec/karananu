import logo from './logo.svg';
import { Button,Navbar,NavDropdown,Form,Nav,Container,FormControl } from 'react-bootstrap';
function App() {
  return (
    <>
   <Navbar bg="primary" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Text Utils</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About</Nav.Link>
       
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
   </>
  
    
  );
}

export default App;
