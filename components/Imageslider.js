import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import './Imageslider.css'
import RecipeCard from './RecipeCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Imageslider = ({recipes}) => {
    // -------Defining settings for the slider------
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,

    // -------Defining responsive settings for the slider------
        responsive: [
            {
                breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 1,
                    }
            },
            {
                breakpoint:  425,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                    }
            }
        ]
    }
    

    return (
        <>
            {/* -------Halloween Carousel using Slick---------- */}
            <div style={{ margin: "30px" }} className="carousel">
                <h1 style={{textAlign: "center"}}>Halloween Recipes</h1>
                <Slider {...settings}>
                    {recipes.map((recipe) => 
                        (recipe.event === "Halloween") && <RecipeCard key={recipe} recipe={recipe}/>
                    )}
                </Slider>
            </div>

            {/* -------Christmas Carousel using Slick---------- */}
            <div style={{ margin: "30px" }} className="carousel">
                <h1 style={{textAlign: "center"}}>Christmas Recipes</h1>
                <Slider {...settings}>
                    {recipes.map((recipe) => 
                        (recipe.event === "Christmas") && <RecipeCard key={recipe} recipe={recipe}/>
                    )}
                </Slider>
            </div>
        </>
    )
}



export default Imageslider
