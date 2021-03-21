import React from "react";
import {WOW} from "wow.js";
import {NavLink} from "react-router-dom";
import Typewriter from "typewriter-effect";
function componentDidMount() {
    new WOW.WOW().init();
}
function Home() {

    return(
        <div className="container-fluid  ">
                <div className="row " id="Home-background">
                    <div className="col-sm-6 col-md-6 col-lg-6  p-5  ">
                        <div className="row">
                            <Typewriter
                                onInit={(typewriter)=>{
                                    typewriter.typeString("<h3 class='text-danger font-weight-bold ' id='Namee'> Bobur Tuychiev</h3>").start()
                                        .typeString("<h3 class='text-danger font-weight-bold' id='Namee'> Front-end Developer </h3>");
                                }} />

                        </div>
                        <div className="row">
                            <button className=" col-sm-3 col-md-3 col-lg-3 " id="Homebutton">
                                <NavLink to='/about' className=" text-decoration-none" id="kkk">About me</NavLink></button>
                            <button className=" col-sm-3 col-md-3 col-lg-3 " id="Homebutton">
                                <NavLink to='/contact' className=" text-decoration-none" id="kkk">Contact me </NavLink></button>

                        </div>
                        </div>
                    <div className=" col-sm-6 col-md-6 col-lg-6 p-3 ">
                        <div className="row">
                            <img src={"/Images/image1.jpg"} alt="No images" id="Homee"
                                 className="col-sm-7 col-md-7 col-lg-7 animate__animated animate__bounce animate__delay-1s animate__fadeInRight "/>
                        </div>
                    </div>


                    </div>


                </div>
    )
}export default Home