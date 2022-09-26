import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Usertable() {
  const [apiData, setApiData] = useState({})

  const loadData = () => {
    axios.get("https://swapi.dev/api/people")
      .then((response) => setApiData(response.data))
      .catch((error) => console.log("error", error))
  }
  const handleNxtBtn = () => {
    axios.get(apiData.next)
      .then((response) => setApiData(response.data))
      .catch((error) => console.log("error", error))
  }
  const handlePreBtn = () => {
    axios.get(apiData.previous)
      .then((response) => setApiData(response.data))
      .catch((error) => console.log("error", error))
  }
  useEffect(() => loadData(), []);

  return (
    <>
      <h3>People Table</h3>
      <h4>TotalPeople:{apiData.count}</h4>
      {
        apiData.next === null ?
          <>

          </>
          :
          <>
            <button onClick={handleNxtBtn}><h3>Next Page</h3></button>
          </>

      }


      {
        apiData.previous === null ?
          <>

          </>
          :
          <>
            <button onClick={handlePreBtn}><h3>Previous Page</h3></button>
          </>

      }


      <table border="2" width="80%" >
        <thead>
          
          <tr>
            {
            
              apiData.results?.filter((el)=>Object.keys(el)).map((data)=>{
                return(<><th>{data}</th></>)}
            // Object.keys.map((el)=><th>{el}</th>
              
            
              
              )
            
          } 
            
            {/* // (head => <th>{head}</th>)} */}
          </tr>
          
          {/* <tr>
            <th>Name</th>
            <th>Heigth</th>
            <th>Mass</th>
            <th>Hair-Color</th>
            <th>Skin-Color</th>
            <th>Eye-Color</th>
            <th>Birth-Year</th>
            <th>Gender</th>
            <th>Home-World</th>
            <th>Flims</th>
            <th>Species</th>
            <th>Vechicals</th>
            <th>Start-Ships</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr> */}
        </thead>
        <tbody>
          {apiData.results?.map((val) => {
            return (
              <tr>

                <td><Link to={`/${val.name}`}>{val.name}</Link></td>
                <td>{val.height}</td>
                <td >{val.mass}</td>
                <td >{val.hair_color}</td>
                <td>{val.skin_color}</td>
                <td >{val.eye_color}</td>
                <td >{val.birth_year}</td>
                <td>{val.gender}</td>
                <td >{val.homeworld}</td>
                {/* <td >{val.films}</td> */}
                <td>{val.films.map((el)=>{
                  return(
                      <>
                        <p>{el}</p><br/>
                      </>
                   )})}</td>
                <td>{val.species}</td>
                <td >{val.vehicles}</td>
                <td >{val.starships}</td>
                <td>{val.created}</td>
                <td >{val.edited}</td>
                <td>
                  <a href="{val.url}">{val.url}</a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </>
  )
}