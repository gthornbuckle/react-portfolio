import React from 'react';
import { motion } from "framer-motion";
import githubIcon from "../../assets/github.svg"
import linkedinIcon from "../../assets/linkedin.svg"

function Contact() {
  return (
    <div className="container-fluid backgroundImg">
        <div className="row align-items-center">
            <div className="col-xs-12 col-lg-12">
                <div className="jumbotron">
                    <h1 className="display-3">Contact Me</h1>
                    <p className="lead">You can contact me at the following places:</p>
                    <div className="contactIcons">
                        <motion.a href="https://github.com/gthornbuckle" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><img src={githubIcon}></img></motion.a>
                        <motion.a href="https://linkedin.com/in/gthornbuckle" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><img src={linkedinIcon}></img></motion.a>
                    </div>
                    <hr className="my-4"/>
                    <p>Or alternatively send me an email.</p>
                    <a className="linkCV" href="https://mail.google.com/">gthornbuckle@gmail.com</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;