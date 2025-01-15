import { useState } from "react";
import { Accordion, Button, Card, Modal } from "react-bootstrap"
import NonCart from "./NonCart";

export default function Cart(props) {
    const [show, setShow] = useState(false);
    const [deleteItemIdx, setDeleteItemIdx] = useState(null); // 삭제할 아이템의 인덱스 저장소

    const handleClose = () => setShow(false);

    const handleShow = (index) => { // 삭제버튼 클릭 시 호출되는 함수 = (삭제할 아이템의 인덱스)
        setDeleteItemIdx(index);
        setShow(true);
    }

    const increaseCount = (index) => {  // 개수 플러스 함수
        const updateCart = props.cart.map((item, i) => {
            if (i === index) {  // 인덱스와 요소의 값이 같을 때 (배열의 모든 요소 수량 감소를 막기 위한 조건)
                return { ...item, count: item.count + 1 };
            }
            return item;
        });
        props.setCart(updateCart)
        localStorage.setItem('cart', JSON.stringify(updateCart))
    }

    const decreaseCount = (index) => {  // 개수 마이너스 함수
        const updateCart = props.cart.map((item, i) => {
            if (i === index && item.count > 0) {    // 음수 포함 x
                return { ...item, count: item.count - 1 }
            }
            return item;
        }).filter(item => item.count > 0);  // filter로 수량이 0인 상품은 제거
        props.setCart(updateCart);
        localStorage.setItem('cart', JSON.stringify(updateCart));
    }

    const handleDelete = () => {    // 아이템을 삭제하는 함수
        const updateCart = props.cart.filter((item, index) => index !== deleteItemIdx);
        props.setCart(updateCart);  // 삭제된 항목을 제외한 새로운 배열(updateCart)을 호출하여 cart 업데이트
        localStorage.setItem('cart', JSON.stringify(updateCart));   // 업데이트 된 cart 상태를 localStorage에 저장
        handleClose();
    };

    const updatePrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (

        <div className="AllCart">
            {props.cart.length !== 0 ? (
                props.cart.map((item, index) => (
                    <Accordion defaultActiveKey="0" style={{ margin: '20px' }}>
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>상품 {index + 1}</Accordion.Header>
                            <Accordion.Body>
                                <div className="cartBox" key={index}>
                                    <Card.Img src={item.image} />
                                    <div style={{ fontSize: '20px' }}>
                                        {item.title.replace(/<b>.*?<\/b>/g, "")}
                                    </div>


                                    <div>
                                        <Button variant="outline-secondary" onClick={() => decreaseCount(index)}>-</Button>
                                        <span style={{ margin: '15px' }}>{item.count}</span>
                                        <Button variant="outline-secondary" onClick={() => increaseCount(index)}>+</Button>
                                    </div>

                                    <div style={{ fontSize: '20px' }}>
                                        {updatePrice(item.price * item.count)}원
                                    </div>

                                    <Button variant="warning">
                                        구매하기
                                    </Button>
                                    <Button variant="outline-danger" onClick={() => handleShow(index)}>
                                        삭제
                                    </Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                ))
            ) : (
                <NonCart />
            )}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>내역 확인</Modal.Title>
                </Modal.Header>
                <Modal.Body>선택 상품을 삭제하시겠습니까?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        취소하기
                    </Button>
                    <Button variant="success" onClick={handleDelete}>
                        삭제
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}