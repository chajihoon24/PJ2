import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CartModal(props) {
    const [num, setNum] = useState(1)
    let price = props.price
    price = price.replace(",", "")
    price = parseInt(price) * num
    const calculateTotal = () => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    };

    // ==============================================================================
    let obj = {
        title: props.title,
        image: props.image,
        price: props.price,
        num: num
    }
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

    const cartPush = () => {


        let tmp = [...props.cart, obj]
        props.setCart(tmp)
        console.log(props.cart)
        localStorage.setItem("cart", JSON.stringify(props.cart))

    }


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    구매하기
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div id="container_modal">
                    <img src={props.image} width={280}></img>
                    <div>삼품명:{"  "}{props.title}</div>
                    <div>가격:{"  "}{props.price}원</div>
                    <div>수량:{"  "}<input type='number' min={1} max={100} value={num} onChange={(e) => setNum(parseInt(e.target.value))} ></input></div>
                    <div>총 상품 금액:{calculateTotal()}원</div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button variant="warning" onClick={handler}>구매하러 가기</Button>
            </Modal.Footer>
        </Modal>
    );




}