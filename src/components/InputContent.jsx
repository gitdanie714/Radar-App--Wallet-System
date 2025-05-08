import React from 'react'

import "../styles/InputContent.css"

export default function InputContent(props) {
    const {type,placeholder,icon, inputStyle, changetext,value} = props;
  return (
  <div className='inputcontent'>
    <div className='iconcontainer'>
    {icon}
      </div>
      <input value={value} style={inputStyle} onChange={changetext} type={type} placeholder={placeholder} className='inputtext'/>

  </div>
  )
}
