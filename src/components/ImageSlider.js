import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import './ImageSlider.css'; 


export class ImageSlider extends Component {
    render() {  
        var images = [
            {
                image: "/imagesFolder/food1-c.jpg"
            },{
                image: '/imagesFolder/food2-c.jpg'
            },{
                image: '/imagesFolder/food3-c.jpg'
            },{
                image: '/imagesFolder/food4-c.jpg'
            },{
                image: '/imagesFolder/food5-c.jpg'
            },{
                image: '/imagesFolder/food6-c.jpg'
            },{
                image: '/imagesFolder/food7-c.jpg'
            },{
                image: '/imagesFolder/food8-c.jpg'
            },{
                image: '/imagesFolder/food9-c.jpg'
            },,{
                image: '/imagesFolder/food10-c.jpg'
            },{
                image: '/imagesFolder/food11-c.jpg'
            },{
                image: '/imagesFolder/food12-c.jpg'
            },{
                image: '/imagesFolder/food13-c.jpg'
            },{
                image: '/imagesFolder/food14-c.jpg'
            },{
                image: '/imagesFolder/food15-c.jpg'
            },{
                image: '/imagesFolder/food16-c.jpg'
            },{
                image: '/imagesFolder/food17-c.jpg'
            },{
                image: '/imagesFolder/food18-c.jpg'
            },{
                image: '/imagesFolder/food19-c.jpg'
            },{
                image: '/imagesFolder/food20-c.jpg'
            },{
                image: '/imagesFolder/food21-c.jpg'
            },{
                image: '/imagesFolder/food22-c.jpg'
            }
        ];   
    var imgSlides = () =>  
    images.map((num) => (  
      <div className="imgpad">  
      {/* <p className='titleImage'>Baida Roti</p>  */}
          <img className="imgdetails" src= {num.image} width="100%" alt='imagedemo'/>  
          
      </div>  
    ));  

    var settings = {
        dots:true , 
        slidesToShow:3  ,
        slidesToScroll:1 ,
        autoplay:true  ,
        arrows:false  ,
        autoplaySpeed:3000,
        infinite:true,
        responsive:[
            {
                breakpoint: 1200,
                settings:{
                    dots:false , 
                    slidesToShow:2  ,
                    slidesToScroll:1 ,
                    autoplay:true  ,
                    infinite:true,
                    autoplaySpeed:3000, 
                    arrows:false  ,
                }
            },{
                breakpoint: 900,
                settings:{
                    dots:false , 
                    slidesToShow:1  ,
                    slidesToScroll:1 ,
                    autoplay:true  ,
                    infinite:true,
                    autoplaySpeed:3000, 
                    arrows:false  ,
                }
            }
        ]
    }

  return (  
    <div className="App">  
         <div className='container-fluid'>        
            <div className="row title"  >        
            <div >        
               
            </div>        
            </div>    
            </div>  
      <Slider  
    {...settings}>{imgSlides()}</Slider>  
    </div>  
  );  
}  
}  

export default ImageSlider