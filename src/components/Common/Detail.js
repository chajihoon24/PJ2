import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartModal from './CartModal';

export default function Detail(props) {
    const [modalShow1, setModalShow1] = useState(false);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   상세보기
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 className='cate_in'>카테고리 &gt; {props.category}</h4>
                <div><img id="d_img"src={props.image} width={450}></img></div>
                <div id='detail_in'>
                    <p>브랜드:{" "}{props.brand == ""?"없음":props.brand}</p>
                    <p>가격:{" "}{props.price}원</p>
                    <p>삼품명:{" "}{props.title}</p>
                </div>
                <h3>상품 설명</h3>
                <hr></hr>
                <div>우리의 제품은 최상의 품질과 섬세한 디자인을 자랑합니다. 신선한 재료로 만들어져 풍부한 맛과 영양을 제공하며, 고객님의 요구와 기대를 충족시킬 것입니다. 다양한 크기와 스타일로 제공되어, 여러분의 취향과 필요에 맞게 선택할 수 있습니다. 우리의 제품은 높은 품질과 탁월한 가치를 보장하여 특별한 순간을 더욱 특별하게 만들어줄 것입니다. 또한, 안전하고 신뢰할 수 있는 생산 과정을 거쳐 제작되었으며, 최고의 만족을 위해 최선을 다하고 있습니다.</div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>

            </Modal.Footer>
        </Modal>
    );  




}