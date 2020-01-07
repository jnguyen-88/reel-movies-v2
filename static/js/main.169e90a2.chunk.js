(this["webpackJsonpreel-movies"]=this["webpackJsonpreel-movies"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),s=a(7),o=a(16),l=a(49),m=a(20),u=a(1),p=a(2),d=a(4),v=a(3),h=a(5),b=a(17),f=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{action:"#",className:"search"},r.a.createElement("input",{type:"text",className:"search-input",placeholder:"Search movie title"}),r.a.createElement("input",{type:"submit",className:"search-submit",value:"Search"}))}}]),t}(n.Component),E=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},r.a.createElement("a",{className:"navbar-brand",href:"/reel-movies-v2"},r.a.createElement("i",{className:"fas fa-film",style:{fontSize:"2.25rem"}})),r.a.createElement(f,null),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/reel-movies-v2"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/reel-movies-v2",tabIndex:"-1","aria-disabled":"true"},"Signup")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/reel-movies-v2/login"},"Login"))))}}]),t}(n.Component),g=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"btn"},this.props.text)}}]),t}(n.Component),O=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{id:"carouselExampleFade",className:"carousel slide carousel-fade","data-ride":"carousel","data-interval":"6100","data-pause":"false"},r.a.createElement("div",{className:"hero"},r.a.createElement("h1",null,"Reel Movies"),r.a.createElement("p",null,"Browse and rate the latest and greatest movies."),r.a.createElement(g,{text:"Login"})),r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{className:"d-block w-100",src:"https://image.tmdb.org/t/p/original/u3MpvNI4zWemXpLZBjhmbA2sSBC.jpg",alt:"First slide"})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100",src:"https://image.tmdb.org/t/p/original/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",alt:"Second slide"})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100",src:"https://image.tmdb.org/t/p/original/hkotG0lTzS5O0wfihbukOb2e7dS.jpg",alt:"Third slide"})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100",src:"https://image.tmdb.org/t/p/original/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg",alt:"Second slide"}))))}}]),t}(n.Component),y=a(9),j=a.n(y),N=a(18),w=a(50),k=a.n(w).a.create({baseURL:"https://api.themoviedb.org/3"}),M=a(10),_=Object(M.a)({basename:"/reel-movies-v2"}),C="369ab6a13a497677f3e99e9c51172547",x=function(e){return function(){var t=Object(N.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.get("/movie/".concat(e,"?api_key=").concat(C,"&language=en-US"));case 2:n=t.sent,a({type:"FETCH_MOVIE",payload:n.data}),_.push("/".concat(e));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(N.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.get("/movie/".concat(e,"/recommendations?api_key=").concat(C,"&language=en-US&page=1"));case 2:n=t.sent,a({type:"FETCH_RECOMMENDATIONS",payload:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).handleId=function(e){var t=a.props.movieId;a.props.fetchMovie(t)},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"popMovies",onClick:this.handleId,key:this.props.id},r.a.createElement("div",{className:"popMovies-text"},r.a.createElement("h3",null,this.props.title),r.a.createElement("p",null,this.props.overview.substring(0,125)+"...")),r.a.createElement("img",{className:"movie-img",src:"http://image.tmdb.org/t/p/w780".concat(this.props.image),alt:this.props.title}))}}]),t}(n.Component),P=Object(s.b)(null,{fetchMovie:x})(T),I=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPopMovies()}},{key:"render",value:function(){var e=this.props.popMovies.slice(0,3).map((function(e,t){return r.a.createElement(P,{key:e.id,id:t,image:e.backdrop_path,title:e.original_title,genreId:e.genre_ids[0],overview:e.overview,movieId:e.id})}));return r.a.createElement("div",null,e)}}]),t}(n.Component),A=Object(s.b)((function(e){return{popMovies:e.movies.popMoviesArr}}),{fetchPopMovies:function(){return function(){var e=Object(N.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/movie/popular?api_key=".concat(C,"&language=en-US&page=1"));case 2:a=e.sent,t({type:"FETCH_POP_MOVIES",payload:a.data.results});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(I),D=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"popMovies"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original/cCVsewbQIdR8LsY3EGZNlpbiqK9.jpg",className:"movie-img img-img",alt:"The mando"}),r.a.createElement("div",{className:"popMovies-text"},r.a.createElement("h4",null,"The Mandalorian (2019)"),r.a.createElement("p",null,"This will be a User comment once backend is implemented")))}}]),t}(n.Component),R=a(51),G=a.n(R),U=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).genre=function(e){return a.props.genres.filter((function(t){return t.id===e}))[0].name},a.handleId=function(e){var t=a.props.movieId;a.props.fetchMovie(t)},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"slick-item-box",onClick:this.handleId},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w154".concat(this.props.image),alt:this.props.title}),r.a.createElement("h5",null,this.props.title),r.a.createElement("p",{className:"genre-text"},this.genre(this.props.genreId)))}}]),t}(n.Component),F=Object(s.b)((function(e){return{genres:e.movies.listOfGenres}}),{fetchMovie:x})(U),H=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.getGenres()}},{key:"render",value:function(){var e=this.props.movies.map((function(e,t){return r.a.createElement(F,{key:e.id,id:t,image:e.poster_path,title:e.original_title,genreId:e.genre_ids[0],movieId:e.id})}));return r.a.createElement("div",{className:"slick-container",style:{padding:"40px"}},r.a.createElement("h3",null,this.props.sectionName),r.a.createElement(G.a,{dots:!1,slidesToShow:6,slidesToScroll:5,responsive:[{breakpoint:950,settings:{slidesToShow:4,slidesToScroll:3}},{breakpoint:765,settings:{slidesToShow:3,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:350,settings:{slidesToShow:1,slidesToScroll:1}}]},e))}}]),t}(n.Component),L=Object(s.b)(null,{getGenres:function(){return function(){var e=Object(N.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/genre/movie/list?api_key=".concat(C,"&language=en-US"));case 2:a=e.sent,t({type:"GET_GENRES",payload:a.data.genres});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(H),V=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchNowPlayingMovies()}},{key:"render",value:function(){return r.a.createElement(L,{sectionName:"Now Playing",movies:this.props.moviesPlaying})}}]),t}(n.Component),B=Object(s.b)((function(e){return{moviesPlaying:e.movies.nowPlayingMoviesArr}}),{fetchNowPlayingMovies:function(){return function(){var e=Object(N.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("movie/now_playing?api_key=".concat(C,"&language=en-US&page=1"));case 2:a=e.sent,t({type:"FETCH_NOW_PLAYING_MOVIES",payload:a.data.results});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(V),z=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchUpcomingMovies()}},{key:"render",value:function(){return r.a.createElement(L,{sectionName:"Upcoming",movies:this.props.upcomingMovies})}}]),t}(n.Component),W=Object(s.b)((function(e){return{upcomingMovies:e.movies.upcomingMoviesArr}}),{fetchUpcomingMovies:function(){return function(){var e=Object(N.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/movie/upcoming?api_key=".concat(C,"&language=en-US&page=1"));case 2:a=e.sent,t({type:"FETCH_UPCOMING_MOVIES",payload:a.data.results});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(z),X=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer-box"},r.a.createElement("div",{className:"footer-left"},r.a.createElement("div",{className:"footer-inner-left"},r.a.createElement("div",{className:"footer-contact"},r.a.createElement("a",null,"About Us"),r.a.createElement("a",null,"Blog"),r.a.createElement("a",null,"Contact Us"),r.a.createElement("a",null,"Press")),r.a.createElement("div",{className:"moviedb-box"},r.a.createElement("img",{style:{width:"30%"},alt:"the moviedb logo",src:"https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"})))),r.a.createElement("div",{className:"footer-right"},r.a.createElement("div",{className:"footer-sm"},r.a.createElement("i",{className:"fab fa-facebook-f"}),r.a.createElement("i",{className:"fab fa-twitter"}),r.a.createElement("i",{className:"fab fa-google-plus-g"}),r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement("span",{style:{fontWeight:"300"}},"\xa9 This webpage was designed by Justin Nguyen and built with"," ",r.a.createElement("i",{style:{color:"red"},className:"fas fa-heart"})," in Sacramento, CA."))))},J=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("main",null,r.a.createElement("div",{className:"main-mid"},r.a.createElement("section",{className:"section-popular"},r.a.createElement(A,null)),r.a.createElement("section",{className:"section-review"},r.a.createElement("h3",{className:"heading-ter"},"Latest Reviews"),r.a.createElement("div",{className:"do"},r.a.createElement(D,null),r.a.createElement(D,null)))),r.a.createElement("div",null,r.a.createElement("section",{className:"section-now-playing"},r.a.createElement(B,null)),r.a.createElement("hr",{className:"style14"}),"\n",r.a.createElement("section",{className:"section-upcoming"},r.a.createElement(W,null)),r.a.createElement("hr",{className:"style14"}),"\n")),r.a.createElement(X,null))}}]),t}(n.Component),Y=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Login Page"),r.a.createElement(X,null))}}]),t}(n.Component),Z=Object(b.f)(Y),q=a(26),K=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return this.props.cast.slice(0,5).map((function(t){return r.a.createElement("div",{key:e.props.cast.name,className:"cast-box"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w154".concat(t.profile_path),alt:t.name}),r.a.createElement("p",{className:"cast-actor"},t.name),r.a.createElement("p",{className:"cast-character"},t.character))}))}}]),t}(n.Component),Q=Object(s.b)((function(e){return{cast:e.movies.cast}}))(K),$=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(L,{sectionName:"Recommendations",movies:this.props.recommended})}}]),t}(n.Component),ee=Object(s.b)((function(e){return{recommended:e.movies.recommendedMovies}}),{fetchRecommendations:S})($),te=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchMovie(this.props.match.params.id),this.props.fetchCast(this.props.match.params.id),this.props.fetchRecommendations(this.props.match.params.id)}},{key:"componentWillReceiveProps",value:function(e){e.match.params.id!==this.props.match.params.id&&this.props.fetchCast(e.params.id)}},{key:"render",value:function(){var e=this;return r.a.createElement(q.Parallax,{pages:2.05,ref:function(t){return e.parallax=t},style:{overflow:"hidden scroll"}},r.a.createElement(q.ParallaxLayer,{offset:0,speed:0,factor:1},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original".concat(this.props.selectedMovie.backdrop_path),alt:this.props.selectedMovie.id,style:{width:"100%"}})),r.a.createElement(q.ParallaxLayer,{offset:.65,speed:.5,factor:1.05},r.a.createElement("div",{className:"movieDetail-wrapper"},r.a.createElement("div",{className:"movieDetail-box"},r.a.createElement("h1",null,this.props.selectedMovie.original_title),r.a.createElement("div",{className:"movieDetail-ratings-box"},r.a.createElement("div",{className:"box db-movie"},this.props.selectedMovie.vote_average),r.a.createElement("div",{className:"box db-reel"},"9.3")),r.a.createElement("div",null,"Runtime: ",this.props.selectedMovie.runtime," mins. | Release Date: ",this.props.selectedMovie.release_date),r.a.createElement("br",null),r.a.createElement("p",{className:"p-detail"},this.props.selectedMovie.overview),r.a.createElement("hr",{className:"style14"}),r.a.createElement("section",{className:"section-cast"},r.a.createElement("h3",null,"Top Billed Cast"),r.a.createElement("div",{className:"cast-wrapper"},r.a.createElement(Q,null))),r.a.createElement("hr",{className:"style14"}),r.a.createElement("section",{className:"section-reviews"},r.a.createElement("h3",null,"Reviews"),r.a.createElement("div",null,"This will be a review"),r.a.createElement("div",null,"This will be a review"),r.a.createElement("div",null,"This will be a review")),r.a.createElement("hr",{className:"style14"})),r.a.createElement(ee,null),r.a.createElement(X,null))))}}]),t}(n.Component),ae=Object(b.f)(Object(s.b)((function(e,t){return{selectedMovie:e.movies.movieDetail,cast:e.movies.cast}}),{fetchCast:function(e){return function(){var t=Object(N.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.get("movie/".concat(e,"/credits?api_key=").concat(C));case 2:n=t.sent,a({type:"FETCH_CAST",payload:n.data.cast});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchMovie:x,fetchRecommendations:S})(te)),ne=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.b,{history:_},r.a.createElement(E,null),r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:J}),r.a.createElement(b.a,{exact:!0,path:"/login",component:Z}),r.a.createElement(b.a,{path:"/:id",render:function(e){var t=e.match;return r.a.createElement(ae,{key:t.params.id})}}))))}}]),t}(r.a.Component),re=a(53);function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ie(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(a,!0).forEach((function(t){Object(re.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var se={searchText:"",popMoviesArr:[],nowPlayingMoviesArr:[],upcomingMoviesArr:[],listOfGenres:[],cast:[],recommendedMovies:[],movieDetail:[]},oe=Object(o.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POP_MOVIES":return ie({},e,{popMoviesArr:t.payload});case"FETCH_NOW_PLAYING_MOVIES":return ie({},e,{nowPlayingMoviesArr:t.payload});case"FETCH_UPCOMING_MOVIES":return ie({},e,{upcomingMoviesArr:t.payload});case"GET_GENRES":return ie({},e,{listOfGenres:t.payload});case"FETCH_CAST":return ie({},e,{cast:t.payload});case"FETCH_RECOMMENDATIONS":return ie({},e,{recommendedMovies:t.payload});case"FETCH_MOVIE":return ie({},e,{movieDetail:t.payload});default:return e}}}),le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,me=Object(o.e)(oe,le(Object(o.a)(l.a)));i.a.render(r.a.createElement(s.a,{store:me},r.a.createElement(m.a,null,r.a.createElement(ne,null))),document.getElementById("root"))},54:function(e,t,a){e.exports=a(104)}},[[54,1,2]]]);
//# sourceMappingURL=main.169e90a2.chunk.js.map