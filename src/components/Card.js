import React from "react"


export default function Card(props) {
   
    return (

        <div className="card">
            <img className="card--image" src={props.imageUrl} alt="imgrs" />
            <div className="card--info">
                <img src="https://www.pinclipart.com/picdir/big/363-3639653_location-pin-transparent-location-logo-png-vector-clipart.png" alt = "marker" className="card--marker"></img>
                <span className="card--loc">{props.location} </span>
                <span className="card--link"> {props.googleMapsUrl} </span>
                <h2 className="card--title">{props.title} </h2>
                <h3 className="card--date">{props.startDate} - {props.endDate}</h3>
                <p className="card--details">{props.description}</p>
            </div>

        </div>


    )
}