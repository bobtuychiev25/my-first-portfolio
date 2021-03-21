import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from "typewriter-effect";
import {WOW} from "wow.js";
import '../App.css';
function componentDidMount() {
    new WOW.WOW().init();
}
function Education() {

    return(

        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="card col-sm-6 col-md-6 col-lg-3 border border-dark mt-3 p-2 ">
                        <div className="card-header bg-dark">
                            <h4 className="text-warning font-weight-bold  "> Educational background</h4>
                        </div>
                        <div className="card-body bg-success">
                            <img src="Images/graduate.jpg" alt="" width="100%" height="100%" className="animate__animated  animate__delay-1s animate__flipInY" />
                        </div>
                        <div className="card-footer bg-light text-danger font-weight-bold">
                            <h4>MDIS in Tashkent</h4>
                        </div>
                    </div>
                    <div className="card col-sm-6 col-md-6 col-lg-6 border border-dark mt-3 p-4 " >
                        <h5 className=" p-4 bg-dark text-light text-center" id="textt" > Years of study in prestigious education centers of Uzbekistan   </h5><br/>
                        <img src="Images/Edu.jpg" alt="Not found" width="100%" height="80%" className=" border border-1 border-primary "/>
                    </div>
                    <div className="card col-sm-6 col-md-6 col-lg-3 border border-dark mt-3 p-2 ">
                        <div className="card-header bg-dark">
                            <h4 className="text-warning font-weight-bold  "> Educational background</h4>
                        </div>
                        <div className="card-body bg-success p-5" >

                            <img src="Images/image2.jpg" alt="" width="100%" height="80%" className="animate__animated animate__delay-2s animate__flipInY" />
                        </div>
                        <div className="card-footer bg-light text-danger font-weight-bold " id="footerr">
                            <h4>MDIS in Tashkent</h4>
                        </div>
                    </div>


                </div>


            </div>



        </div>
    )
}export default Education