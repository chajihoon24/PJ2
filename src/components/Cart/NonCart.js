import { Button } from "react-bootstrap";

export default function NonCart() {
    return (
        <>
            <div id="nonlist_con">
                <div id="nonListImage"><img id="cat" src="https://png.pngtree.com/png-vector/20230114/ourmid/pngtree-angry-cute-dog-sticker-png-image_6562186.png" width={300} height={300}></img></div>
                <div id="nonlist">💛장바구니가 비어있습니다💛</div>
                <Button variant="light" id='nonHome' href="/">메인으로 이동 →</Button>
            </div>
        </>
    )
}