import React from 'react'
import '../App.css';
import {WOW} from "wow.js";
function componentDidMount() {
    new WOW.WOW().init();
}

function Contact() {

    return(
        <div className="container-fluid">
            <div  className=" row p-4 animate__animated animate__bounce animate__delay-1s animate__fadeInDown ">

                <form action="#" className=" col-sm-6 col-md-6 col-lg-6 bg-success p-5 border border-1 border-light">


                    <label htmlFor="Name"><b>Enter your name</b></label><br/>
                    <input type="text" id="Name" name="name" placeholder="Name" className="form-control" /><br/>
                    <label htmlFor="Surname"><b>Enter your surname</b></label><br/>
                    <input type="text" name="surname" id="Surname" placeholder="Surname" className="form-control"/><br/>
                    <label htmlFor="phone"><b>Enter your number</b></label><br/>
                    <input type="text" id="phone" name="number" placeholder="Number" className="form-control" /><br/>
                    <label htmlFor="email"><b>Enter your email</b></label><br/>
                    <input type="text" id="email" name="number" placeholder="Email" className="form-control" /><br/>
                    <button className=" btn-outline-light btn-dark text-success float-right p-1 " id="Homebutton"> Submit</button><br/>

                </form>
                <div className=" col-sm-6 col-md-6 col-lg-6 bg-success p-5 animate__animated animate__delay-2s
                 animate__repeat-5 animate__bounceInUp border border-1 border-light ">

                     <div>
                         <span className="text-light font-weight-bold p-4"><h5>Facebook </h5></span>
                         <a href="https://www.facebook.com/alex.trader.980" className=" text-decoration-none" id="LLink">
                             https://www.facebook.com/alex.trader.980</a>

                         <span className="text-light font-weight-bold p-4"><h5 className="mt-3">Instagram </h5>
                         </span><a href="https://www.instagram.com/boburtuychiyev" className=" text-decoration-none" id="LLink">
                         https://www.instagram.com/boburtuychiyev</a>

                         <span className="text-light font-weight-bold p-4"><h5 className="mt-3">LinkedIn </h5></span>
                         <a href="https://www.linkedin.com/in/bobur-tuychiyev-2939751aa" className=" text-decoration-none" id="LLink">
                             https://www.linkedin.com/in/bobur-tuychiyev-2939751aa</a>

                         <span className="text-light font-weight-bold p-4"><h5 className="mt-3">Mobile number </h5></span>
                         <a href="+99891 547 56 40" className=" text-decoration-none" id="LLink">+99891 547 56 40</a>

                         <span className="text-light font-weight-bold p-4"><h5 className="mt-3" >Email address </h5>
                         </span><a href="bobtuychiyev2019@gmail.com" className="text-decoration-none" id="LLink">
                         bobtuychiyev2019@gmail.com</a>
                     </div>

                </div>

            </div>

        </div> );


}export default Contact