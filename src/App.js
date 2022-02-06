import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import RecipePage from "./components/RecipePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from "axios";
import CreateRecipe from "./components/CreateRecipe";
import { Footer } from "./components/Footer";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { Home } from "./pages/Home";

const apiDataHeroku = ("https://recipes-backend-endpoint.herokuapp.com/api/recipes");

const App = () => {
  //----------USE STATE----------
  const [recipes, setRecipes] = useState([]);
  // const [season, setSeason] = useState("");
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      const results = await axios.get(apiDataHeroku);
      setRecipes(results.data);
      setLoading(false);
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
          <Route exact path="/">
            <Home recipes={recipes} loading={loading}/>
          </Route>
          <Route exact path="/recipes/:id">
            <RecipePage recipes={recipes} />
          </Route>
          <Route exact path="/recipe/">
            <CreateRecipe getData={getData}/>
          </Route>
          <Route exact path="*">
            <h1>404 Page Not Found</h1>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </>
  );
};

export default App;
