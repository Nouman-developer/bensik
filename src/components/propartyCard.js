import React from 'react'

export default function PropartyCard(props) {
    return (
        <div style={{
            display: "flex",
            width:546,
            marginTop: 48,
        }}>
            <img style={{
                width: 216,
                height: 216,
                marginLeft: 14,
                marginTop: 14,

            }} src={props.img} alt="" />
            <div>

                <p style={{
                    fontFamily: "Inter",
                    fontSize: 24,
                    fontWeight: "600",
                    color: "#2289FF",
                    marginLeft: 25,
                    marginTop: 25,
                    marginBottom: 18,
                }}>{props.price}
                </p>

                <p style={{
                    fontFamily: "Inter",
                    fontSize: 22,
                    fontWeight: "500",
                    color: "#0F2B4A",
                    marginLeft: 25,
                    marginBottom: 8,
                }}>{props.heading}</p>
                <p style={{
                    fontFamily: "Roboto",
                    fontSize: 16,
                    fontWeight: "300",
                    color: "#576B81",
                    marginLeft: 25,
                }}>{props.detail}</p>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                }}> <img style={{
                    width: 16,
                    height: 9.96,
                    marginLeft: 25,
                }} src={props.Bed} alt="" />
                    <p style={{
                        marginLeft: 8,
                        fontFamily: "Roboto",
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#576B81",
                    }}>2 Beds</p>
                    <img style={{
                        width: 16,
                        height: 15.66,
                        marginLeft: 40,
                    }} src={props.Tub} alt="" />
                    <p style={{
                        marginLeft: 8,
                        fontFamily: "Roboto",
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#576B81",
                    }}>2 Bath</p>
                </div>
                <button style={{
                    width: 84,
                    height: 30,
                    marginLeft: 25,
                    border: "none",
                    backgroundColor: "#2289FF",
                    borderRadius: 6,
                    fontFamily: "Roboto",
                    fontSize: 10,
                    fontWeight: "400",
                    color: "#FFFFFF",

                }}>View Details</button>
            </div>
        </div>
    )
}

