import React from "react";
import "./Images.css";

function Images(props) {
    return (
        <div className="card">
            <img
                onClick={() => props.imageClicked(props.id)}
                className="card-img"
                alt={props.name}
                src={props.image}
            />
        </div>
    );
}

export default Images;