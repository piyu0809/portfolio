import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={item.link} target="_blank">
                      <img className="image" src={item.imgurl}/>
                    </a>
                  </div>
                  <a href={item.link} target="_blank" className="name">{item.name}</a>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
