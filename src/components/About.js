import React from "react";
import user from "../data/user";
import Links from "./Links";


function About(props) {
  let show
  if (props.bio){
    show = <p>{props.bio}</p>
  }
  else{
   show = null
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {show}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {props.github} linkedin = {props.linkedin}/>   
    </div>
  );
}


export default About;
