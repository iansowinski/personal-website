<template>
	<div class="main">
    <div class="row">
      <div class="col-sm-7 col-sm-offset-1">
          <h1><router-link to="/">{{galleryData.title}}</router-link></h1>
          <h2></h2>
          <div class="nav">
            <p>
                <span v-on:click="prev()"  class="prev">previous</span>&nbsp;/&nbsp;
                <span v-on:click="next()"  class="next">next</span>
            </p>
          </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-7 col-sm-offset-1">
        <div class="thumbnail" id="galleryData.active">
          <img :src='"~@/assets/"+galleryData.imagesDir+active+".jpg"'>
          <div class="capition">
            <p>
              {{galleryData.photos[active]}}
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
          <h2 v-if="galleryData.description != ''"></h2>
          <p>{{galleryData.description}}</p>
			</div>
    </div>
  </div>
</template>

<script>
import Data from '@/Data'
export default {
  name: 'gallery',
  methods: {
  	next: function(){
  		if (this.active === this.galleryData.photos.length -1){
  			this.active = 0
  		}
  		else {
  			this.active += 1
  		}
  	},
  	prev: function(){
  		if (this.active === 0){
  			this.active = this.galleryData.photos.length -1
  		}
  		else {
	  		this.active -= 1
	  	}
  	}
  },
  data: function() {
  	return {
  		galleryData: Data[this.$route.params.item],
  		active: 0
  	}
  },
  created: function(){
		window.addEventListener('keydown', function(event) {
			if (event.key === "ArrowRight") {
  			this.next()
  		} else if (event.key === "ArrowLeft") {
  			this.prev()
  		}
    }.bind(this), false);
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,700');
html, body {
	height: 100%;
	width: 100%;
	margin: 0 0 0 0;
}
.main{
	width: 100%;
}
.row {
	margin: 0 0 0 0;
}
/* CZCIONKI */
h1 {
	 text-transform: inherit;
	 line-height: 32px;
	 font-size: 36px;
	 font-family: "Inconsolata", monospace;
	 color: black;
	 font-weight: 700;
	 font-style: normal;
}
h2 {
	border-bottom: 2px solid #fdf6e3;
	margin-top: 10px;
	margin-bottom: 10px;
	display: block;
	width: 100px;
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 1);
}
h3 {
	font-family: "Inconsolata", monospace;
	font-size: 18px;
	color: black;
	font-weight: 700;
}
p {
	 text-transform: inherit;
	 font-size: 12px;
	 font-family: "Inconsolata", monospace;
	 color: black;
	 font-weight: 400;
}
a {
	
	font-family: "Inconsolata", monospace;
	text-decoration: underline;
	color: black;
}
.thumbnail {
	border: none;
	background: transparent;
}
img {
	max-height: 600px;
}
.capition {
	text-align: center;
}
.thumbnail p {
	padding: 5px;
	text-transform: inherit;
	font-size: 13px;
	font-family: "Inconsolata", monospace;
	color: black;
	font-weight: 400;
	font-style: italic;
}
.nav {
	text-align: right;
}
p,li,h2 {
  font-family: 'Inconsolata', monospace;
  color: #000000;
}
ul {
  list-style-type: none;
   padding-left: 1.5em;
}
	a, .prev, .next {
	  text-decoration: none;
	  color: #cb4b16 !important;
	  background:transparent;
	  transition: all 0.5s ease;
	  border-bottom: 1pt solid transparent;
	}
	a:hover, .prev:hover, .next:hover{
		cursor: pointer;
	  color: #cb4b16 !important;
	  text-decoration: none;
	  border-bottom: 1px solid #cb4b16;
	  user-select: none;
	}
	a:active, a:visited, a:link {
	  text-decoration:none;
	  color: #cb4b16;
	}
h1 a {
	border: none;
	color: #000000 !important;
}
</style>
