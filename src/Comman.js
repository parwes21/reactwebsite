import React from "react";
// import web from '../src/images/img1.gif';
import {NavLink} from 'react-router-dom';

const Comman = (props) => {
    return(
        <>
        <section id="header" className="d-flex align-item-center">
        <div className="container-fluid  "> 
           <div className="row" >
             <div className="col-10 mx-auto  pt-5 "> 
             <div className="row" >
               <div className="col-md-6 pt- pt-lg-0 order-2 order-lg-1 d-flex align-item-center flex-column" >
                   <h1> {props.name} <strong className="brand_name">Company</strong></h1>
                   <h2 className="my-3">
                       We Are Web Developer
                   </h2>
                   <div  className="my-3">
                       <NavLink to={props.visit} className="btn-get-started">{props.btn_name}    </NavLink>
                   </div>
               </div>

               <div className="col-md-6 pt-lg-0 order-2 order-lg-1 header-img" >
                <img  src={props.srcname} className="img-fluid animated "style={{height:350}} alt="img"/>
                   </div>
                   </div>                   
            </div>
          </div>
       </div>
        </section>
        </>
    );
    }
    export default Comman;