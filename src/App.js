import React from "react";
import ReactDOM from "react-dom/client" ;
import Header from "./Components/Header";


//Get the root container as everything in react happens inside root 

const root = ReactDOM.createRoot(document.getElementById("root")) ; 
root.render(<Header/>) ; 
