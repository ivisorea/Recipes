import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Imageslider from "./components/Imageslider";
import RecipePage from "./components/RecipePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/pages/aboutus";
import ContactUs from "./components/pages/contactus";
import Signin from "./components/pages/signin";
import Footer from "./components/footer/footer";
import axios from "axios";
import Search from "./components/Search";
import CreateRecipe from "./components/CreateRecipe";

const apiDataHeroku = ("https://recipes-app-wbs.herokuapp.com/api/recipes")

const App = () => {
  //----------USE STATE----------
  const [recipes, setRecipes] = useState([]);
  

  //----------USE EFFECT----------
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("Modified and saved data into useState: ");
    console.log(recipes);
  }, [recipes]);

  //----------FUNCTIONS----------
  const getData = async () => {
    try {
      const results = await axios.get(apiDataHeroku);
      
      setRecipes(results.data);
    }catch(err){
      console.log(err);
    }
  };

  

  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>
          <Route path="/pages/aboutus" component={AboutUs} />
          <Route path="/pages/contactus" component={ContactUs} />
          <Route path="/pages/signin" component={Signin} />
          <Route exact path="/">
            <Search recipes={recipes} />
            <Imageslider recipes={recipes} />
          </Route>
          <Route exact path="/recipes/:id">
            <RecipePage recipes={recipes} />
          </Route>
          <Route exact path="/recipe/">
            <CreateRecipe/>
          </Route>
          <Route exact path="*">
            <h1>404 Page Not Found</h1>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
