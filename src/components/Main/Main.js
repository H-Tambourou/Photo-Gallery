import React, {useState} from 'react';
import CloseIcon from '../../../node_modules/@material-ui/icons/Close';
import "./Main.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";
import img15 from "../../assets/img15.jpg";
import img16 from "../../assets/img16.jpg";
import img17 from "../../assets/img17.jpg";
import img18 from "../../assets/img18.jpg";
import img19 from "../../assets/img19.jpg";
import img20 from "../../assets/img20.jpg";
import img21 from "../../assets/img21.jpg";
import img22 from "../../assets/img22.jpg";
import img23 from "../../assets/img23.jpg";
import img24 from "../../assets/img24.jpg";
import img25 from "../../assets/img25.jpg";
import img26 from "../../assets/img25.jpg";

const Main = () => {
   let data = [
       {
            id:1,
            imgSrc:img1,
        },
        {
            id:2,
            imgSrc:img2,
        },
        {
            id:3,
            imgSrc:img3,
        },
        {
            id:4,
            imgSrc:img4,
        },
        {
            id:5,
            imgSrc:img5,
        },
        {
            id:6,
            imgSrc:img6,
        },
        {
            id:7,
            imgSrc:img7,
        },
        {
            id:8,
            imgSrc:img8,
        },
        {
            id:9,
            imgSrc:img9,
        },
        {
            id:10,
            imgSrc:img10,
        },
        {
            id:11,
            imgSrc:img11,
        },
        {
            id:12,
            imgSrc:img12,
        },
        {
            id:13,
            imgSrc:img13,
        },
        {
            id:14,
            imgSrc:img14,
        },
        {
            id:15,
            imgSrc:img15,
        },
        {
            id:16,
            imgSrc:img16,
        },
        {
            id:17,
            imgSrc:img17,
        },
        {
            id:18,
            imgSrc:img18,
        },
        {
            id:19,
            imgSrc:img19,
        },
        {
            id:20,
            imgSrc:img20,
        },
        {
            id:21,
            imgSrc:img21,
        },
        {
            id:22,
            imgSrc:img22,
        },
        {
            id:23,
            imgSrc:img23,
        },
        {
            id:24,
            imgSrc:img24,
        },
        {
            id:25,
            imgSrc:img25,
        },
        {
            id:26,
            imgSrc:img26,
        },
   ]
   const [status, updateStatus] = useState(false);
   const [imgClicked, setImgClicked]=useState('');

   const getImg = (imgSrc) =>{
    setImgClicked(imgSrc);
    updateStatus(true);
   };
    return(
        <>
        <div className={status? "status active" : "status"}>
            <img src={imgClicked}/>
            <CloseIcon onClick={()=> updateStatus(false)}/>
        </div>
        <div className="gallery">
           {data.map((item, index)=>{
               return(
                 <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                     <img src={item.imgSrc}/>
                </div>
                   )
           })}
        </div>
        </>
    )
}
export default Main