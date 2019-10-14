(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(7),r=t.n(i),s=(t(14),t(1)),c=t(2),o=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h2",{className:"responsive-headline"},"Hi I am ",e.name),l.a.createElement("h3",{className:"h3",style:{color:"#FFF",fontFamily:"sans-serif "}},"Software Developer (React Enthusiast)"),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,"Completed Masters in Computer Science from SUNY Binghamton University",l.a.createElement("br",null),"Pursuing full time opportunities in Software development",l.a.createElement("br",null),"Listing some of my skills below",l.a.createElement("h4",null,"Skills"),l.a.createElement("ul",null,l.a.createElement("li",null,"Langauges : \xa0 Java, C++, Javascript(ES6)"),l.a.createElement("li",null,"Operating Sytems : \xa0 Linux, Windows"),l.a.createElement("li",null,"Tools and Technologies : \xa0 AWS, MySQL, Oracle SQL, PostgreSQL, Git, JDBC"),l.a.createElement("li",null,"Web Technologies : \xa0 React, ReactNative, HTML5, CSS3"))))))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName,"  "),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),d=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.link,target:"_blank"},l.a.createElement("img",{className:"image",src:e.imgurl}))),l.a.createElement("a",{href:e.link,target:"_blank",className:"name"},e.name))})))))}}]),a}(n.Component),f=(n.Component,function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component)),g={name:"Priyanka",role:"Frontend Developer",linkedinId:"https://www.linkedin.com/in/priyanka-hiremath-8728b9b0/",skypeid:"Your skypeid",roleDescription:"I like dabbling in various parts of frontend development and like to learn about new technologies",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/priyanka-hiremath-8728b9b0/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/piyu0809",className:"fa fa-github"}],address:"Binghamton NY USA",aboutme:"Graduate Student At SUNY Binghamton. Currently looking for full time opportunities in software development",website:"https://piyu0809.github.io",Phone:"607-232-8719",education:[{UniversityName:"State Univarsity of New York at Binghamton",specialization:"Computer Science",MonthOfPassing:"May",YearOfPassing:"2019"}],skillsDescription:"HTML5, CSS3, React.js, Javascript(ES6), Java, C++, MySql",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"},{skillname:"Javascript_ES6"},{skillname:"Java"},{skillname:"Cpp"},{skillname:"SQL"}],portfolio:[{name:"Mr Akountant",description:"A google assistant to track your personal expenses",imgurl:"images/portfolio/expense.jpg",link:"https://www.youtube.com/watch?v=y9J4cQ_F8Og"},{name:"ChatAll",description:"ChatApp in Reactjs and chatkit api",imgurl:"images/portfolio/chatapp.png",link:"https://piyu0809.github.io/ChatAll/"},{name:"Lazy Caption",description:"Get perfect caption for your image",imgurl:"images/portfolio/lazy2.jpg",link:"https://github.com/piyu0809/LazyCaptions"},{name:"GitMeAProfile",description:"GITHUB Profile Searcher",imgurl:"images/portfolio/gitt.png",link:"https://piyu0809.github.io/GitMeAProfile/"},{name:"Slack_Notification",description:"",imgurl:"images/portfolio/amazon_sns.png",link:"https://github.com/piyu0809/Slack_Notification"},{name:"TapToFlash",description:"",imgurl:"images/portfolio/torch1.png",link:"https://github.com/piyu0809/Slack_Notification"},{name:"Retail Business Management System",description:"",imgurl:"images/portfolio/Oracle-PL-SQL.jpg",link:"https://github.com/piyu0809/Slack_Notification"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},b=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:g}),l.a.createElement(h,{resumeData:g}),l.a.createElement(E,{resumeData:g}),l.a.createElement(d,{resumeData:g}),l.a.createElement(f,{resumeData:g}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.9e0e51e2.chunk.js.map