import './App.scss';
import logo from "./img/logo.png";
import img0 from "./img/0.png";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import {useRef , useState} from 'react';

const arrBtns = [
    {
      img:img0,
      color:'#000'
    },
     {
      img:img1,
      color:'#247ec8'
    },
     {
      img:img2,
      color:'#1e1e1e'
    },
     {
      img:img3,
      color:'#c79b53'
    },
     {
      img:img4,
      color:'#c82525'
    }
]
function App () {
  const [imgSrc,setimgSrc] = useState(img0); 
const  containerBackground = useRef();
function handle(src,color){
  setimgSrc(src);
  containerBackground.current.style.background = color;
} 
   return (

 
   	
  <div className="phones" ref={containerBackground}>
    <div className="container">
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="apple"/>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="content">
        <div className="text">
          <h3>
            iphone pro sc<span> 1</span>
          </h3>
          <h2>Welcome To Our Store !</h2>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a</p>
        </div>
        <div className="phone">
          <img  src={imgSrc} alt=""/>
        </div>
        <div className="btns">
        {
          arrBtns.map((btn,i)=>{
            return <img  onClick={()=>handle(btn.img,btn.color)} key={i} src={btn.img} alt=""/>
                    
          })
        }
        </div>
      </div>
              
    </div>
  </div>
   		
   		
	
   		
  
    
  );
 
}

export default App;



