import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Detail from './Detail';
import CartModal from './CartModal';

export default function ListCard(props) {
    let title = props.title
    title= title.replace(/<b>.*?<\/b>/g,"")    //문자열의 <b><b/> 제거
    let price = props.price
    price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")    //가격에 "," 삽입


    const [modalShow, setModalShow] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);

    const handler = () => {
        let obj = {
            title: props.title,
            image: props.image,
            price: props.price,
            count: 1    // 장바구니 상품 추가 시 기본 수량 1로 설정
        }

        let tmp = [...props.cart, obj];
        props.setCart(tmp);
        localStorage.setItem('cart', JSON.stringify(tmp));
    }





    return (
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title> {title}</Card.Title>
                <Card.Text >
                    {price}원
                </Card.Text>
                <hr></hr>
                <Button variant="light" id='detail' onClick={() => setModalShow(true)}>상세보기</Button>
                
                <Detail
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    title={title}
                    price={price}
                    category={props.category}
                    brand={props.brand}
                    image={props.image}
                    setModalShow={setModalShow}
                />



                
                <Button variant="warning" onClick={() => setModalShow1(true)}>장바구니</Button>

                <CartModal
                    show={modalShow1}
                    onHide={() => setModalShow1(false)}
                    title={title}
                    price={price}
                    category={props.category}
                    brand={props.brand}
                    image={props.image}
                    setCart={props.setCart}
                    cart={props.cart}
                />
            </Card.Body>
        </Card>)
}