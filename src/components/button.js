import React from 'react'

export default function Button(props) {
  return (
    <p className='in' style={{
        backgroundColor:props.bgColor,
        color:props.color,
        marginLeft:props.mgLeft
    }}>{props.text}</p>
  )
}
