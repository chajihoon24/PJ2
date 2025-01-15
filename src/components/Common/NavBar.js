import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function NavBar(props) {
  // ===============================SEARCH 코드=============================
  const [input, setInput] = useState("")



  console.log(input)

  const handler = () => {
    props.setKeyward(input);

    document.getElementById("Contents").style.display = "none"
    document.getElementById("search").style.display = "block";
  }


  const enter = (event) => {
    if (event.key === "Enter") {
      props.setKeyward(input);
      document.getElementById("Contents").style.display = "none";
      document.getElementById("search").style.display = "block";


    }
  };






  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        {/* ===========================▼ ▼ ▼홈페이지 제목 변경▼ ▼ ▼=================================== */}

        <Navbar.Brand href="/">
          <img src="images/mainLogo2.png" width={150} height={50}></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* ===================================카테고리 추가===============================================*/}

            <Nav.Link href="Event">EVENT</Nav.Link>
            <Nav.Link href="DogList">강아지</Nav.Link>
            <Nav.Link href="CatList">고양이</Nav.Link>
            <Nav.Link href="Cart"> 장바구니</Nav.Link>
          </Nav>
          <div className="d-flex">
            <input
              id="me-2"
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={enter}
            ></input>
            <Button
              onClick={handler}
              variant="outline-success"
            >
              Search
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;