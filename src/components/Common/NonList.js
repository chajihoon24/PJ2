import { Button } from "react-bootstrap";

export default function NonList() {
    return (
        <>
            <div id="nonlist_con">
                <div id="nonListImage">
                    <img id="cat" src="images/catimage.PNG" width={300} height={300}></img>
                    <img id="non" src="images/non.png" width={100} height={100}></img>
                
                
                </div>
                <div id="nonlist">등록된 상품이 없습니다...</div>
                <Button variant="light" id='nonHome' href="/">다른 상품보기 →</Button>
            </div>
        </>
    )
}