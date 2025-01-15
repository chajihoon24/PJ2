import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/Common/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DogList from './components/DogList/DogList';
import CatList from './components/CatList/CatList';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Event from './components/Event/Event';
import Sch from './components/Search1/Sch';

const Client_Id = process.env.REACT_APP_API_ID  //REACT_APP_ 으로 시작해야 함 .env파일에 수정사항 있으면 npm 다시시작해야함
const Client_Pw = process.env.REACT_APP_API_PW





// npm install
// npm install react-router-dom
// npm install react-bootstrap bootstrap

function App() {
  const [all, setAll] = useState([]);
  const [D_list, setD_List] = useState([])
  const [C_list, setC_List] = useState([])
  const [keyward, setKeyward] = useState("")
  
  const[cart,setCart]=useState([])


  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    setCart(JSON.parse(storedCart))
  },[])


  // ==========================강아지API 패치==============================================
  
  


  useEffect(() => {
    fetch(
      `/v1/search/shop?query=강아지&filter=false&sort=sim&display=100&start=1`,
      {
        method: "GET",
        headers: {
          "X-Naver-Client-Id": Client_Id,
          "X-Naver-Client-Secret": Client_Pw,
        },
      }
    )
      .then((response) => response.json()) // 두줄아니면 {}넣으면 안됨
      .then((json) => {
        // console.log(json)
        setD_List(json.items);
        setAll((prevAll) => [...prevAll, ...json.items]);
      });
  }, []);
//===========================고양이API 패치===============================================

  useEffect(() => {
    fetch(
      `/v1/search/shop?query=고양이&filter=false&sort=sim&display=100&start=1`,
      {
        method: "GET",
        headers: {
          "X-Naver-Client-Id": Client_Id,
          "X-Naver-Client-Secret": Client_Pw,
        },
      }
    )
      .then((response) => response.json()) // 두줄아니면 {}넣으면 안됨
      .then((json) => {
        // console.log(json)
        setC_List(json.items);
        setAll((prevAll) => [...prevAll, ...json.items]);
      });
  }, []);

  console.log(all)
  console.log(keyward)


  return (
    <>
      <Stack gap={3}>
        <div className="navBar">
          <NavBar
            all={all}
            setAll={setAll}
            D_list={D_list}
            C_list={C_list}
            setKeyward={setKeyward}
            keyward={keyward}
          />
        </div>
        <div className="Contents" id="Contents">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="Event" element={<Event />}></Route>
              <Route
                path="DogList"
                element={<DogList D_list={D_list} setD_List={setD_List} setCart={setCart} cart={cart} />}
              ></Route>
              <Route
                path="CatList"
                element={<CatList list={C_list} setC_List={setC_List} setCart={setCart} cart={cart} />}
              ></Route>
              <Route path="Cart" element={<Cart setCart={setCart} cart={cart} />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
        <div id="search" style={{ display: "none" }}>
          <Sch all={all} keyward={keyward} />
        </div>
      </Stack>
      <div>
        <div></div>
      </div>
    </>
  );
}


export default App;
