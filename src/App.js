import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col } from "react-bootstrap";
import "./App.css";
import { client } from "./client";

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
          };
        })
      );
    });
  };

  return <>Check the console for the data from Contenful</>;
};

export default App;
