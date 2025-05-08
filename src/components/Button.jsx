import React from 'react'
import "../styles/Button.css"
function Button(props) {
    const {buttonlabel,className,changeAction,buttonStyle} = props;
  return (
    <div>
        <button className={className} style={buttonStyle}onClick={changeAction}>{buttonlabel}</button>
    </div>
  )
}

export default Button