import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic" src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>

               <p>
                 Completed Masters in Computer Science from SUNY Binghamton University<br />
                 Pursuing full time opportunities in Software development<br />
                 Listing some of my skills below


                <h4>Skills</h4>
                <ul>
                  <li>Langauges : &nbsp; Java, C++, Javascript(ES6)</li>
                  <li>Operating Sytems : &nbsp; Linux, Windows</li>
                  <li>Tools and Technologies : &nbsp; AWS, MySQL, Oracle SQL, PostgreSQL, Git, JDBC</li>
                  <li>Web Technologies : &nbsp; React, ReactNative, HTML5, CSS3</li>
                </ul>

                </p>

            </div>

         </div>
      </section>
    );
  }
}
