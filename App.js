import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { client } from "./client";
import Imageslider from "./components/Imageslider";
import RecipePage from "./components/RecipePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button, Row, Col,  Nav, Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import Footer from "./components/footer/footer";

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
  const getData = () => {
    client.getEntries().then((entries) => {
      console.log("In the next line is the raw data from contentful:");
      console.log(entries);
      setRecipes(
        entries.items.map((entry, index) => {
          return {
            name: entry.fields.name,
            image: entry.fields.image.fields.file.url,
            description: entry.fields.description,
            id: index,
            ingredients: entry.fields.ingredients,
            method: entry.fields.method,
            event: entry.fields.event,
          };
        })
      );
    });
  };

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/pages/aboutus"  component={AboutUs} />
        <Route path="/pages/aboutus"  component={AboutUs} />
        <Route path="/pages/aboutus"  component={AboutUs} />
        <Route path="/pages/contactus"  component={ContactUs} />
    {/* <Route path="/components/AboutUs" exact component={AboutUs} />
        <Route path="/components/AboutUs" exact component={AboutUs} />
        <Route path="/components/AboutUs" exact component={AboutUs} />
  <Route path="/components/AboutUs" exact component={AboutUs} /> */}
        <Route exact path="/">
          <Imageslider recipes={recipes} />
        </Route>
        <Route exact path="/recipes/:id">
          <RecipePage recipes={recipes} />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </>
  );
};

export default App;
