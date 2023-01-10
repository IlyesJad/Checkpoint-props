import { buildQueries } from '@testing-library/react'
import React from 'react';
import  propTypes  from 'prop-types';
import img from "../image/pic1.jpg";
import { Alert } from 'bootstrap';
const Profil = (props) => {
  const{ FullName,biograhy,profission,handleName} = props
  return (
    <div style={{color:"blue", textAlign:'center'}}>
      <h1>Hi my name's {props.FullName} </h1>
      <p>i'am {props.biograhy} </p>
    <p>also known as {props.Profission}</p>
    <img src={img} alt="not found" style={{width:300}}/>
    <br></br>
      <button style={{marginTop:10, width:80, backgroundColor:'violet'}} onClick={()=>props.data(`Hello, my name is ${props.FullName}`)}>Click</button>
    </div>
  )
}



Profil.defaultProps={
  FullName:'Elyes',
  biograhy:'bio',
  profission:'web developer',
  // handleName: (name) => alert(`hello, ${name}!`),
  
};

Profil.prototype ={
  FullName : propTypes.string.isRequired,
  biograhy : propTypes.string,
  profission : propTypes.string,
  handleName : propTypes.func,
};
export default Profil
