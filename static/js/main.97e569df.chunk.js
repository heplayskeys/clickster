(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){},10:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(4),o=a.n(n),i=a(5),l=a(6),s=a(8),m=a(7),p=a(9);a(1);var d=function(e){var t;switch(e.correct){case!0:t=e.gameStatus?r.a.createElement("li",{className:"feedback text-center",style:{color:"darkgreen",fontWeight:"bolder",textShadow:"0 8px 6px -6px #000000"}},r.a.createElement("p",null,"You did it! Great Job!"),r.a.createElement("p",{style:{fontSize:"12px"}},"Click an Image to Play Again.")):r.a.createElement("li",{className:"feedback text-center",style:{color:"darkgreen",fontWeight:"bolder"}},"Correct! Keep it Up!");break;case!1:t=r.a.createElement("li",{className:"feedback text-center",style:{color:"darkred",fontWeight:"bold"}},"Game Over! ",window.screen.width>768?"Click an Image to ":"Touch an Image to ","Try Again!");break;default:t=r.a.createElement("li",{className:"feedback text-center"},window.screen.width>768?"Click an Image to Get Started!":"Touch an Image to Start!")}return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-light"},r.a.createElement("ul",{type:"none"},r.a.createElement("li",{className:"brand h1 text-white text-center"},r.a.createElement("a",{href:"http://heplayskeys.github.io/click-apes"},"Clickster")),t,r.a.createElement("li",{className:"text-center"},"Score: ",r.a.createElement("span",{className:"playerScore"},e.score),"\xa0\xa0|\xa0\xa0Top Score: ",r.a.createElement("span",{className:"topScore"},e.topScore)))))};var g=function(){return window.screen.width,r.a.createElement("div",null,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"jumbotron jumbotron-fluid img-thumbnail"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Clickster!"),r.a.createElement("p",{className:"lead"},window.screen.width>768?"Click on an image to earn points, but don't click on any more than once!":"Touch an image to earn points, but don't touch any more than once!")))),r.a.createElement("div",{className:"headerFoot"}))};var h=function(e){return r.a.createElement("li",{"data-id":e.id,className:"gameTile",onClick:function(){return e.handleClick(e.id)}},r.a.createElement("img",{className:"img-thumbnail",src:e.image,alt:"gorilla"}))};var u=function(){return r.a.createElement("div",null,r.a.createElement("footer",{className:"footer"}),r.a.createElement("div",{className:"footerFoot"},r.a.createElement("section",{className:"footBrand"},"Clickster ",r.a.createElement("img",{src:"./favicon.png",alt:"Clickster Icon",style:{opacity:.5}}))))},f=a(2),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={tiles:f,score:0,topScore:0,chosen:[],correct:null,win:!1},a.handleClick=function(e){if(a.state.chosen.includes(e)){var t;t=a.state.score>a.state.topScore?a.state.score:a.state.topScore,a.setState({tiles:f,score:0,topScore:t,chosen:[],correct:!1})}else{var c=a.state.chosen,r=a.state.tiles.sort(function(){return.5-Math.random()}),n=a.state.score+1;c.push(e),a.setState({tiles:r,score:n,chosen:c,correct:!0},function(){a.checkScore()})}},a.checkScore=function(){12===a.state.score?a.setState({win:!0,chosen:[],score:0,topScore:a.state.score}):a.setState({win:!1})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.tiles.map(function(t){return r.a.createElement(h,Object.assign({key:t.id},t,{handleClick:e.handleClick}))});return r.a.createElement("div",{style:{background:'url("https://www.toptal.com/designers/subtlepatterns/patterns/debut_light.png")'}},r.a.createElement(d,{correct:this.state.correct,score:this.state.score,topScore:this.state.topScore,gameStatus:this.state.win}),r.a.createElement(g,null),r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"tileSet text-center"},t)),r.a.createElement(u,null))}}]),t}(r.a.Component);o.a.render(r.a.createElement(w,null),document.getElementById("root"))},2:function(e){e.exports=[{id:1,image:"https://media.gettyimages.com/photos/gorilla-picture-id153096796?b=1&k=6&m=153096796&s=612x612&w=0&h=YQs4xCqd4uOBylpvYqlS4lxg17GgvjjyEYZ0muiav6U="},{id:2,image:"http://francois-roux-photography.com/images/photographs/nature-primates/male-lowland-gorilla-portrait-black-white.jpg"},{id:3,image:"https://storage.needpix.com/thumbs/gorilla-portrait-1421940003sRI.jpg"},{id:4,image:"https://ae01.alicdn.com/kf/HTB1fGgfXHSYBuNjSspfq6AZCpXac/Animals-gorilla-cool-black-face-portrait-modern-decor-art-living-room-home-wall-art-decor-wood.jpg"},{id:5,image:"https://i.pinimg.com/736x/96/4c/cc/964ccc0f7c82517e22fd049385048ef6--mountain-gorilla-animal-portraits.jpg"},{id:6,image:"https://i.pinimg.com/originals/ee/af/07/eeaf0776ede457057e424a896571df9f.jpg"},{id:7,image:"http://www.clevelandphoto.org/BeachwoodExhibit-Selected/slides/Profile%20of%20a%20Gorilla%20-%20Susan%20%20Curtis.jpg"},{id:8,image:"https://imgc.allpostersimages.com/img/Mounting/posters/vaillancourt-photography-gorilla_a-G-12358130-14258395.jpg"},{id:9,image:"https://c1.staticflickr.com/5/4739/24653934697_86dfe9484d_b.jpg"},{id:10,image:"https://jesstaphotography.files.wordpress.com/2015/03/gorilla.jpg"},{id:11,image:"https://assets.saatchiart.com/saatchi/657903/art/3161948/2231839-GPYJVZNL-6.jpg"},{id:12,image:"https://i.pinimg.com/originals/98/01/52/9801525759e5421ba66332eac3cdee6a.jpg"}]}},[[10,1,2]]]);
//# sourceMappingURL=main.97e569df.chunk.js.map