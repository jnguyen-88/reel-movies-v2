(this["webpackJsonpreel-movies"]=this["webpackJsonpreel-movies"]||[]).push([[0],{35:function(e,t,a){e.exports=a(77)},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),s=a.n(c),i=a(7),l=a(10),o=a(31),m=a(1),u=a(2),p=a(4),b=a(3),d=a(5),f=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{action:"#",class:"search"},r.a.createElement("input",{type:"text",className:"search-input",placeholder:"Search movie title"}),r.a.createElement("input",{type:"submit",className:"search-submit",value:"Search"}))}}]),t}(n.Component),v=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},r.a.createElement("i",{className:"fas fa-film",style:{fontSize:"2.25rem"}})),r.a.createElement(f,null),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#",tabIndex:"-1","aria-disabled":"true"},"Signup")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Login"))))}}]),t}(n.Component),h=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"btn"},this.props.text)}}]),t}(n.Component),g=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{id:"carouselExampleFade",className:"carousel slide carousel-fade","data-ride":"carousel","data-interval":"6100","data-pause":"false"},r.a.createElement("div",{className:"hero"},r.a.createElement("h1",null,"Reel Movies"),r.a.createElement("p",null,"Browse and rate the latest and greatest movies."),r.a.createElement(h,{text:"Login"})),r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{className:"d-block w-100",src:"https://image.tmdb.org/t/p/original/u3MpvNI4zWemXpLZBjhmbA2sSBC.jpg",alt:"First slide"})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100",src:"https://image.tmdb.org/t/p/original/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",alt:"Second slide"})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100",src:"https://image.tmdb.org/t/p/original/hkotG0lTzS5O0wfihbukOb2e7dS.jpg",alt:"Third slide"})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100",src:"https://image.tmdb.org/t/p/original/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg",alt:"Second slide"}))))}}]),t}(n.Component),E=a(9),O=a.n(E),j=a(13),y=a(32),N=a.n(y).a.create({baseURL:"https://api.themoviedb.org/3"}),w="369ab6a13a497677f3e99e9c51172547",k=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(c)))).renderList=function(){return a.props.popMovies.slice(2,5).map((function(e,t){return r.a.createElement("div",{className:"popMovies",key:t},r.a.createElement("div",{className:"popMovies-text"},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.overview.substring(0,125)+"...")),r.a.createElement("img",{className:"movie-img",src:"http://image.tmdb.org/t/p/w780".concat(e.backdrop_path),alt:e.title}))}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPopMovies()}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderList())}}]),t}(n.Component),M=Object(i.b)((function(e){return{popMovies:e.movies.popMoviesArr}}),{fetchPopMovies:function(){return function(){var e=Object(j.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/movie/popular?api_key=".concat(w,"&language=en-US&page=1"));case 2:a=e.sent,t({type:"FETCH_POP_MOVIES",payload:a.data.results});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(k),S=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"popMovies"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original/cCVsewbQIdR8LsY3EGZNlpbiqK9.jpg",className:"movie-img img-img"}),r.a.createElement("div",{className:"popMovies-text"},r.a.createElement("h4",null,"The Mandalorian (2019)"),r.a.createElement("p",null,"This will be a User comment once backend is implemented")))}}]),t}(n.Component),_=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-mid"},r.a.createElement("section",{className:"section-popular"},r.a.createElement(M,null)),r.a.createElement("section",{className:"section-review"},r.a.createElement("h3",{className:"heading-ter"},"Latest Reviews"),r.a.createElement("div",{className:"do"},r.a.createElement(S,null),r.a.createElement(S,null))))}}]),t}(n.Component),P=a(33),x=a.n(P),C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).genre=function(e){return a.props.genres.filter((function(t){return t.id===e}))[0].name},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"slick-item-box"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w154".concat(this.props.image)}),r.a.createElement("h5",null,this.props.title),r.a.createElement("p",{className:"genre-text"},this.genre(this.props.genreId)))}}]),t}(n.Component),T=Object(i.b)((function(e){return{genres:e.movies.listOfGenres}}))(C),I=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getGenres()}},{key:"render",value:function(){var e=this.props.movies.map((function(e,t){return r.a.createElement(T,{id:t,image:e.poster_path,title:e.original_title,genreId:e.genre_ids[0]})}));return r.a.createElement("div",{className:"slick-container",style:{padding:"40px"}},r.a.createElement("h3",null,this.props.sectionName),r.a.createElement(x.a,{dots:!1,slidesToShow:6,slidesToScroll:5,responsive:[{breakpoint:950,settings:{slidesToShow:4,slidesToScroll:3}},{breakpoint:765,settings:{slidesToShow:3,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:350,settings:{slidesToShow:1,slidesToScroll:1}}]},e))}}]),t}(n.Component),A=Object(i.b)(null,{getGenres:function(){return function(){var e=Object(j.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/genre/movie/list?api_key=".concat(w,"&language=en-US"));case 2:a=e.sent,t({type:"GET_GENRES",payload:a.data.genres});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(I),G=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchNowPlayingMovies()}},{key:"render",value:function(){return r.a.createElement(A,{sectionName:"Now Playing",movies:this.props.moviesPlaying})}}]),t}(n.Component),U=Object(i.b)((function(e){return{moviesPlaying:e.movies.nowPlayingMoviesArr}}),{fetchNowPlayingMovies:function(){return function(){var e=Object(j.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/movie/now_playing?api_key=".concat(w,"&language=en-US&page=1"));case 2:a=e.sent,t({type:"FETCH_NOW_PLAYING_MOVIES",payload:a.data.results});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(G),L=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchUpcomingMovies()}},{key:"render",value:function(){return r.a.createElement(A,{sectionName:"Upcoming",movies:this.props.upcomingMovies})}}]),t}(n.Component),D=Object(i.b)((function(e){return{upcomingMovies:e.movies.upcomingMoviesArr}}),{fetchUpcomingMovies:function(){return function(){var e=Object(j.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/movie/upcoming?api_key=".concat(w,"&language=en-US&page=1"));case 2:a=e.sent,t({type:"FETCH_UPCOMING_MOVIES",payload:a.data.results});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(L),V=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"section-now-playing"},r.a.createElement(U,null)),r.a.createElement("hr",{className:"style14"}),"\n",r.a.createElement("section",{className:"section-upcoming"},r.a.createElement(D,null)),r.a.createElement("hr",{className:"style14"}),"\n")}}]),t}(n.Component),F=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer-box"},r.a.createElement("div",{className:"footer-left"},r.a.createElement("div",{className:"footer-inner-left"},r.a.createElement("div",{className:"footer-contact"},r.a.createElement("a",null,"About Us"),r.a.createElement("a",null,"Blog"),r.a.createElement("a",null,"Contact Us"),r.a.createElement("a",null,"Press")),r.a.createElement("div",{className:"moviedb-box"},r.a.createElement("img",{style:{width:"30%"},src:"https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"})))),r.a.createElement("div",{className:"footer-right"},r.a.createElement("div",{className:"footer-sm"},r.a.createElement("i",{className:"fab fa-facebook-f"}),r.a.createElement("i",{className:"fab fa-twitter"}),r.a.createElement("i",{className:"fab fa-google-plus-g"}),r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement("span",{style:{fontWeight:"300"}},"\xa9 This webpage was designed by Justin Nguyen and built with"," ",r.a.createElement("i",{style:{color:"red"},className:"fas fa-heart"})," in Sacramento, CA."))))};var H=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(g,null),r.a.createElement("main",null,r.a.createElement(_,null),r.a.createElement(V,null)),r.a.createElement(F,null))},R=a(34);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(R.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W={searchText:"",popMoviesArr:[],nowPlayingMoviesArr:[],upcomingMoviesArr:[],listOfGenres:[]},X=Object(l.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POP_MOVIES":return z({},e,{popMoviesArr:t.payload});case"FETCH_NOW_PLAYING_MOVIES":return z({},e,{nowPlayingMoviesArr:t.payload});case"FETCH_UPCOMING_MOVIES":return z({},e,{upcomingMoviesArr:t.payload});case"GET_GENRES":return z({},e,{listOfGenres:t.payload});default:return e}}}),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,Y=Object(l.e)(X,J(Object(l.a)(o.a)));s.a.render(r.a.createElement(i.a,{store:Y},r.a.createElement(H,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.c66b37cc.chunk.js.map