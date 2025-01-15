import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListCard from '../Common/Card';                            //     고양이 리스트 컴포넌트
import { useEffect, useState } from 'react';
import NonList from '../Common/NonList';


export default function CatList(props) {
    let category = ["사료", "간식", "장난감", "배변용품", "건강/관리", "리빙용품/외출용품"]
    let list = [...props.list]
    
    console.log(list)
    
    list = list.filter(obj => obj.title.includes('고양이') || obj.category3.includes('고양이')) //   1. 고양이 키워드로 필터작업
    // list = list.filter(obj => !obj.title.includes('강아지'))    //   2. 강아지 키워드을 포함한 상품 목록제거


    const [catlist, setCatlist] = useState([])
    const [notice, setNotice] = useState("");


    useEffect(() => {

        setCatlist(list);
        
    }, [props.list]);



    const handler0 = function () {
        
        setCatlist(list.filter((obj) => obj.category3.includes(category[0])));
        setNotice(`${category[0]}`);
    }
    const handler1 = function () {

        setCatlist(list.filter((obj) => obj.category3.includes(category[1])));
        setNotice(`${category[1]}`);
    }
    const handler2 = function () {

        setCatlist(list.filter((obj) => obj.category3.includes(category[2])));
        setNotice(`${category[2]}`);
    }
    const handler3 = function () {
        setCatlist(list.filter((obj) => obj.category3.includes(category[3])));
        setNotice(`${category[3]}`);
    }
    const handler4 = function () {
        setCatlist(list.filter((obj) => obj.category3.includes(category[4])));
        setNotice(`${category[4]}`);
    }
    const handler5 = function () {
        setCatlist(list.filter((obj) => obj.category3.includes("리빙용품") || obj.category3.includes("식기/급수기") || obj.category3.includes("외출용품") || obj.category3.includes("야외")||obj.category3.includes("캣타워")));
        setNotice(`리빙용품/외출용품`);
    }






    return (
        <Container >
                <div id="D_cate">
                    카테고리 검색 <span id="space"> | </span>  
                    <Button variant="outline-secondary" className='cate_btn' onClick={handler0}>{category[0]}</Button>{' '}
                    <Button variant="outline-secondary" className='cate_btn' onClick={handler1}>{category[1]}</Button>{' '}
                    <Button variant="outline-secondary" className='cate_btn' onClick={handler2}>{category[2]}</Button>{' '}
                    <Button variant="outline-secondary" className='cate_btn' onClick={handler3}>{category[3]}</Button>{' '}
                    <Button variant="outline-secondary" className='cate_btn' onClick={handler4}>{category[4]}</Button>{' '}
                    <Button variant="outline-secondary" className='cate_btn' onClick={handler5}>{category[5]}</Button>{' '}
                </div>
                <hr></hr>
                <div className='cate_notice'>Home &gt; 고양이  {notice != "" ? <><span>&gt;</span><span>{notice}</span></>:<span id='empty'></span>}</div>
            <div id="nor">검색 결과 : 총 {catlist.length}건</div>
                <Row xs={1} md={4}>{ catlist.length !== 0 ?
                    catlist.map((e) => (
                        <Col key={e.productId}>
                            <ListCard image={e.image} title={e.title} price={e.lprice} brand={e.brand} category={e.category4} />
                        </Col>
                    )) : <NonList />}
                </Row>
        </Container>
    )
}