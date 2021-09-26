import React from "react";
import web from '../src/images/img1.gif';
import Sdata from "./Sdata";

const Card = (props) => {
    return(
        <>
             <div className="col-md-4 col-10 mx-auto">
               <div className="card">
                <img className="card-img-top respon" src={props.imgsrc} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div> 
             </div>
    </>
    );
    }
    export default Card;