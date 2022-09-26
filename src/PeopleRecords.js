import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

export default function PeopleRecord() {

  const [apiData, setApiData] = useState({})
  const{name} = useParams();
  const loadData = () => {
    axios.get("https://swapi.dev/api/people")
      .then((response) => setApiData(response.data))
      .catch((error) => console.log("error", error))
  }
  useEffect(() => loadData(), []);

  return (
    <>
      {
        Object.keys(apiData)?.map((el,index)=>{
          <ul>
            <li keys = 'index'> {el} : {apiData[el]}</li>
          </ul>
        })
      }
      {
        apiData.results?.filter((el)=>el.name === name).map((el)=>{
          return(
            <>
            
            <h2>Name:{el.name}</h2>
            <h2>Height:{el.height}</h2>
            <h2>Mass:{el.mass}</h2>
            <h2>Hair-Color:{el.hair_color}</h2>
            <h2>Skin-Color:{el.skin_color}</h2>
            <h2>Eye-Color:{el.eye_color}</h2>
            <h2>Birth-Year{el.birth_year}</h2>
            <h2>Gender{el.gender}</h2>
            <h2>Home-World:{el.eye_color}</h2>
            <h2>Flims:{el.birth_year}</h2>
            <h2>Species:{el.species}</h2>
            <h2>Vechicals:{el.vehicles}</h2>
            <h2>Start-Ships:{el.startships}</h2>
            <h2>Created:{el.created}</h2>
            <h2>Edited:{el.edited}</h2>
            <h2>URL:{el.url}</h2>
            </>
          )
        })

      }
    </>
  )
}