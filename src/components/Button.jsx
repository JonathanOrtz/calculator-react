import React from "react";
import '../stylesheets/Button.css'
function Button(props){

  const isOp = value =>{
    // will return false is value is not a number and . and = 
    return isNaN(value) && (value != '.') && (value != '=' );
  };

  return(
    // ternary js here we check whether the symbol of the props.children is a number or not. depends on that a certain class value name is asssigned
    // trimEnd() is used to eliminate the white space left by the empty value
    <div className={`button-container ${isOp(props.children) ? 'op' : ''}`.trimEnd() } onClick={ () => props.manageClick(props.children) }>
      
      {props.children}
    </div>
  );
}



export default Button;