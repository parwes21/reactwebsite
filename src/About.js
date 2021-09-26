import React from "react";
import about from '../src/images/about.jpg';
import {NavLink} from 'react-router-dom';
import Comman from "./Comman";

const About = () => {
    return(
        <>
    <Comman 
   name="Welcome To About Page"
   visit="/contact"
   btn_name="Contact Us"
   srcname={about}
   />
        </>
    );
    }
    export default About;