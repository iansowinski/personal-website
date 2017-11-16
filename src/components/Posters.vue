<template>
<div class="main">
    <div class="row">
      <div class="col-sm-4 col-sm-offset-1">
          <h1><router-link to="/">Posters</router-link></h1>
          <h2></h2>
          <div class="nav">
            <p>
                <span v-on:click="prev(8)" class="prev">previous</span>&nbsp;/&nbsp;<span v-on:click="next(8)" class="next">next</span>
                 ({{active + 1}} / {{getGalleryLength()}})
            </p>
          </div>
      </div>
    </div>
    <div class="row">
    <div class="col-sm-4 col-sm-offset-1">
      <div class="thumbnail">
        <img :src='"~@/assets/"+imagesDir+galleryData[active].title.split(" ").join("").toLowerCase()+".jpg"'>
      </div>
	  </div>
    <div class="col-sm-4">
      <h3>{{galleryData[active].title}}</h3>
      <p>{{galleryData[active].description}}</p>
    </div>
  </div>
</div>
</template>

<script>
import Data from '@/Data'
export default {
  name: 'posters',
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
  	},
    getGalleryLength: function(){
      return 9
    }
  },
  data: function() {
  	return {
  		galleryData: [
  			{
	  			"title":"Refugees",
					"description":"refugees in europe.On this poster I tried to reflect the problem of perspective - can Europeans express their opinion on people who}have nothing, from position of people who have everything?"
				},
				{
					"title":"Autopromotion",
					"description":"Poster created in Univeristy of Art in Poznań.Our task was to create poster for potential exhibiotion of our own art."
				},
				{
					"title":"Wine, Women and Dance",
					"description":"Poster created in Univeristy of Art in Poznań.Our task was to create poster for subject \"Wine, Women and Dance\". This hedonistic}motto have different shades, I decided just to create visual representation."
				},
				{
					"title":"Freedom of speech",
					"description":"Poster created in Univeristy of Art in Poznań.Our task was to create poster about freedom of speech. Modern world is full of threat}on our freedoms. I tried to express the problem of press cenzorship."
				},
				{
					"title":"Money",
					"description":"Poster created in Univeristy of Art in Poznań.Our task was to create poster about \"Money\". This time, i tried to play with the form."
				},
				{
					"title":"Mr Rude",
					"description":"Poster created in Univeristy of Art in Poznań.Our task was to create poster on given subject \"Mr. Rude\". I tried to express problem}of vulgarity among higher class.Printed in seriography class at Univeristy of Art in Poznań. "
				},
				{
					"title":"Emigration",
					"description":"Printed in seriography class at Univeristy of Art in Poznań."
				},
				{
					"title":"The Last Family",
					"description":"Poster for the polish movie about Beksiński family (\"The Last Family\", 2016)."
				},
				{
					"title":"Trump",
					"description":"Poster created after US ellection, when Donald Trump took office."
				}
			],
			imagesDir: 'posters/',
  		active: 0
  	}
  },
  created: function(){
		window.addEventListener('keydown', function(event) {
			if (event.key === "ArrowRight") {
  			this.next(8)
  		} else if (event.key === "ArrowLeft") {
  			this.prev(8)
  		}
    }.bind(this), false);
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&subset=latin-ext');
html, body {
  height: 100%;
  width: 100%;
  margin: 0 0 0 0;
  background: #fafafa;
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
   font-family: 'Helvetica Neue', 'Arial', 'Source Sans Pro', sans-serif;
   color: black;
   font-weight: 700;
   font-style: normal;
   color: #000000;
}
h2 {
  border-bottom: 2px solid #fdf6e3;
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
  width: 100px;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 1);
  color: #000000;
}
h3 {
  font-family: 'Helvetica Neue', 'Arial', 'Source Sans Pro', sans-serif;
  font-size: 18px;
  color: black;
  font-weight: 700;
  color: #000000;
}
p {
   text-transform: inherit;
   font-size: 12px;
   font-family: 'Helvetica Neue', 'Arial', 'Source Sans Pro', sans-serif;
   color: black;
   font-weight: 400;
   white-space: pre-line;
   color: #4D4D4D;
}
a {
  
  font-family: 'Helvetica Neue', 'Arial', 'Source Sans Pro', sans-serif;
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
  font-family: 'Helvetica Neue', 'Arial', 'Source Sans Pro', sans-serif;
  color: black;
  font-weight: 400;
  font-style: italic;
}
.nav {
  text-align: right;
}
p,li,h2 {
  font-family: 'Helvetica Neue', 'Arial', 'Source Sans Pro', sans-serif;
  color: #4D4D4D;
}
ul {
  list-style-type: none;
   padding-left: 1.5em;
}
a, .prev, .next {
  text-decoration: none;
  color: #0000ff !important;
  background:transparent;
  transition: all 0.5s ease;
  border-bottom: 1pt solid transparent;
}
a:hover, .prev:hover, .next:hover{
  cursor: pointer;
  color: #0000ff !important;
  text-decoration: none;
  border-bottom: 1px solid #0000ff;
  user-select: none;
}
a:active, a:visited, a:link {
  text-decoration:none;
  color: #0000ff;
}
h1 a {
  border: none;
  color: #000000 !important;
}
h1 a:hover {
  border-bottom: none;
}
</style>
