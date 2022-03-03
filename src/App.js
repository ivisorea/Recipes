import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from "axios";
import { Footer } from "./components/Footer";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { Home } from "./pages/Home";
import { CreateRecipe } from "./pages/CreateRecipe";
import { RecipePage } from "./components/RecipePage";
import { NotFound } from "./pages/NotFound";

const apiDataHeroku = ("https://recipes-backend-endpoint.herokuapp.com/api/recipes");

const App = () => {
  //----------USE STATE----------
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  //----------USE EFFECT----------
  useEffect(() => {
    setLoading(true);
    axios
      .get(apiDataHeroku)
      .then(response => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
    

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
            <NotFound/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </>
  );
};

export default App;
