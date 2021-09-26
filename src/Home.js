import React from "react";
import web from '../src/images/img1.gif';
 import Comman from "./Comman";

const Home = (proos) => {
    return(
        <>
   <Comman 
   name="Grow Your Business with My"
   visit="/service"
   btn_name="Get Started"
   srcname={web}
   />
    

        </>
    );
    }
    export default Home;