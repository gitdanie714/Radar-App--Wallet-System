import React from 'react'
import "../styles/Button.css"
function Button(props) {
    const {buttonlabel,className,changeAction} = props;
  return (
    <div>
        <button className={className} onClick={changeAction}>{buttonlabel}</button>
    </div>
  )
}

export default Button