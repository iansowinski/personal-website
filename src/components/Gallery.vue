<template>
	<div class="main">
    <div class="row">
      <div class="col-sm-7 col-sm-offset-1">
          <h1><router-link to="/">{{galleryData.title}}</router-link></h1>
          <h2></h2>
          <div class="nav">
            <p>
                <span v-on:click="prev(galleryData.photos.length -1)" class="prev">previous</span>&nbsp;/&nbsp;
                <span v-on:click="next(galleryData.photos.length -1)" class="next">next</span>
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
  	next: function(max){
  		if (this.active === max){
  			this.active = 0
  		}
  		else {
  			this.active += 1
  		}
  	},
  	prev: function(max){
  		if (this.active === 0){
  			this.active = max
  		}
  		else {
	  		this.active -= 1
	  	}
  	}
  },
  data: function() {
  	return {
  		// galleryData: this.folder,
  		galleryData: Data[this.$route.params.item],
  		active: 0
  	}
  }
}
</script>

<style>
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
	 font-family: "Fira Mono", monospace;
	 color: black;
	 font-weight: 700;
	 font-style: normal;
}
h2 {
	border-bottom: 2px solid white;
	margin-top: 10px;
	margin-bottom: 10px;
	display: block;
	width: 100px;
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 1);
}
h3 {
	font-family: "Fira Mono", monospace;
	font-size: 18px;
	color: black;
	font-weight: 700;
}
p {
	 text-transform: inherit;
	 font-size: 12px;
	 font-family: "Fira Mono", monospace;
	 color: black;
	 font-weight: 400;
}
a {
	
	font-family: "Fira Mono", monospace;
	text-decoration: underline;
	color: black;
}
.thumbnail {
	border: none;
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
	font-family: "Fira Mono", monospace;
	color: black;
	font-weight: 400;
	font-style: italic;
}
.nav {
	text-align: right;
}
p,li,h2 {
  font-family: 'Fira Mono', monospace;
  color: #000000;
}
ul {
  list-style-type: none;
   padding-left: 1.5em;
}
a {
  text-decoration: none;
  border-bottom: 1pt solid #0000ff;
  color: #0000ff !important;
  background:transparent;
  transition: all 1s ease;
}
a:hover {
  color: #ffffff !important;
  text-decoration: none;
  background: #ff0090;
  border-bottom: 1pt solid transparent;
}
a:active, a:visited, a:link {
  text-decoration:none;
}
h1 a {
	border: none;
	color: #000000 !important;
}
</style>
