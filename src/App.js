import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { client } from "./client";
import Imageslider from "./components/Imageslider";
import RecipePage from "./components/RecipePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    <Router>
      {/* REACT ROUTING */}
      <Switch>
        <Route exact path="/">
          <Imageslider recipes={recipes} />
        </Route>
        <Route exact path="/recipes/:id">
          <RecipePage recipes={recipes} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;