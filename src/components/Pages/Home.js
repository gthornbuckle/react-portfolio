import React from 'react';
import profileImg from '../../assets/photoplaceholder.jpg';

function Home(props) {
  return (
    <div className="container-fluid backgroundImg">
        <div className="avatarImg">
            <img className="img-fluid avatar" src={profileImg}/>
        </div>
        <div className="row align-items-center">
            <div className="col-xs-12 col-lg-12">
                <div className="jumbotron">
                    <h1 className="display-3">Portfolio</h1>
                    <p className="lead">
                        Hello! I am an aspiring coder currently building my knowledge and experience using various languages and systems.
                        This site details some of the various projects I have completed so far on this journey.<br />
                        So far I have created applications using:
                        <ul>
                            <li>HTML</li>
                            <li>CSS (Including Bootstrap)</li>
                            <li>Javascript</li>
                            <li>JQuery</li>
                            <li>React</li>
                        </ul>
                        As well as working with various APIs, Libraries and Frameworks.
                        </p>
                    <hr className="my-4"/>
                    <p>Please browse the projects on this site to see some examples of my work.</p>
                    <p className="lead">
                        <a className="badge badge-info" href="#">Click here to view my CV</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;