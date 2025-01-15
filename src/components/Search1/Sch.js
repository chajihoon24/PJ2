import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListCard from "../Common/Card";
import { useEffect, useMemo } from "react";
import NonList from "../Common/NonList";



export default function Sch(props) {
    
    const list = [...new Set([...props.all])];
    console.log(props.keyward);
    let allList = list.filter((obj) => obj.title.includes(props.keyward)); //   1. 고양이 키워드로 필터작업
    


    return (
      <Container>
        <div id="search_notice" className="search_notice">
          <p>
            검색어 : <span>{props.keyward === "" ? "ALL" : props.keyward}</span>
          </p>
        </div>
        <hr></hr>
        <div className="search_notice">검색결과: 총 {allList.length}건</div>
        <Row xs={1} md={4}>
          {allList.length !== 0 ? (
            allList.map((e) => (
              <Col key={allList.indexOf(e)}>
                <ListCard image={e.image} title={e.title} price={e.lprice} />
              </Col>
            ))
          ) : (
            <NonList />
          )}
        </Row>
      </Container>
    );
}
