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
                 Graduate Student At SUNY Binghamton.<br />
               Currently looking for full time opportunities in Frontend development and Software development<br />


                <h4>Skills</h4>
                <ul>
                  <li>Langauges : &nbsp; C++, Java, Javascript(ES6)</li>
                  <li>Operating Sytems : &nbsp; Linux, Windows</li>
                  <li>Tools and Technologies : &nbsp; MySQL, Oracle SQL, Git, JDBC, Eclipse Oxygen,</li>
                  <li>Netbeans</li>
                  <li>Frameworks : &nbsp; React, ReactNative</li>
                  <li>Web : &nbsp; Reactjs, Redux, JavaScript(ES6), HTML5, CSS3</li>
                </ul>

                </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name} phirema1@binghamton.edu</span>
                                       <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
                    <br></br>
                    <span>{resumeData.Phone}</span>
                  </p>

                  </div>
                  <a className = "resume" href = "/images/resume.pdf" target="_blank">Checkout My Resume</a>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
