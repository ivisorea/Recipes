import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import './styles.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RecipeCard } from "../RecipeCard";


export const ImageSlider = ({recipes, loading}) => {
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
            {/* -------Valentin's Day Carousel using Slick---------- */}
            <div style={{ margin: "30px" }} className="carousel">
                <h1 style={{textAlign: "center"}}>Valentine's Day Recipes</h1>
                <Slider {...settings}>
                    {loading ? 
                        <i class="fas fa-spinner fa-pulse"></i> : 
                        recipes.map((recipe) => 
                        (recipe.recipe_event === "Valentine's Day") && <RecipeCard key={recipe} recipe={recipe}/>
                    )}
                </Slider>
            </div>

            {/* -------Halloween Carousel using Slick---------- */}
            <div style={{ margin: "30px" }} className="carousel">
                <h1 style={{textAlign: "center"}}>Halloween Recipes</h1>
                <Slider {...settings}>
                    {loading ? 
                        <i class="fas fa-spinner fa-pulse"></i> : 
                        recipes.map((recipe) => 
                        (recipe.recipe_event === "Halloween") && <RecipeCard key={recipe} recipe={recipe}/>
                    )}
                </Slider>
            </div>

            {/* -------Christmas Carousel using Slick---------- */}
            <div style={{ margin: "30px" }} className="carousel">
                <h1 style={{textAlign: "center"}}>Christmas Recipes</h1>
                <Slider {...settings}>
                    {loading ? 
                        <i class="fas fa-spinner fa-pulse"></i> :
                        recipes.map((recipe) => 
                        (recipe.recipe_event === "Christmas") && <RecipeCard key={recipe} recipe={recipe}/>
                    )}
                </Slider>
            </div>
        </>
    )
}
