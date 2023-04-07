import React from 'react'

export default function FindCards(props) {
  return (
    <div style={{
        width:372,
        height: 382,
        marginLeft: 135,
        marginTop: 66,
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
    }}>
      <img src={props.imgSrc} alt="" />
      <h3 style={{
        fontFamily: 'Inter', 
        fontWeight: 500,
        fontSize: 26,
        color: "#0F2B4A",
        marginBottom: 0,
        

      }}>{props.text}</h3>
      <p style={{
        width: 259,
        height: 78,
        marginTop: 22,
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: 400,
        color: "#576B81",
        textAlign: "center",
      }}> {props.desc}

      </p>
    </div>
  )
}
