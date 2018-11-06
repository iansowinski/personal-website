<template>
	<div class="main">
    <div class="row">
      <div class="col-sm-8 col-sm-offset-2">
        <h1><a href="../index.html">Game of Life </a></h1>
        <h2></h2>
          <div class="nav">
            <p class="click">
              <span v-on:click="prev(3)" class="prev">previous</span>&nbsp;/&nbsp;<span v-on:click="next(3)" class="next">next</span>
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2">
          <div class="row" v-if="active==0">
            <div class="col-sm-6" style="padding-left: 0;">
              <p style="font-weight: 700;">
                No Boresight Installed
              </p>
              <p>
                In order to shoot with any type of weapon, the sight must be calibrated with the barrel. „Boresight” is a term used to describe the calibration of a weapon so that an object seen in a target is on the shooting line.
              </p>
              <p>
                The title was taken from one of the videos used to create the installation. The weapon sights in a part of military aircraft are set to be used with the missiles by default. Majority of the weapons installed on bo- ard are ususally incompatible with the standard tar- geting system, which causes ‚No boresight installed’ error seen by machine operators.
              </p>
              <p>
                In mid-2017 I found a film published on Wikileaks en- titled <i>„Collateral Murder”</i> - a black and white recor- ding made from the perspective of a weapon operator on a military plane shooting to civilians in Baghdad. It reminded me one experience - playing the <i>„Call of Duty 4: Modern Warfare”</i> game, more precisely: „De- ath from above” chapter. Ironically, the bombing that took place in the same year as the game’s premie- re. This was the beginning of the process that ended with this installation.
              </p>
              <p>
                Initially I was thinking about creating a graphic chro- nicle of wars in the Middle East, but after number of sketches, consultations with professors and collec- ting various materials, I became more and more in- terested in the resemblance of what I saw on military recordings with how people experience gameplay in action games, set in the war realities. It was this su- perficial similarity of the reality of video game and the reality of war that became the main thread of the work presented here.
              </p>
              <p>
                Both graphic prints and the film are aimed at making it difficult to find the recipient of the border between the real and the fictitious.
              </p>
            </div>
            <div class="col-sm-6">
              <div class="thumbnail">
                <img src="/static/game-of-life/chart.jpg">
                <div class="capition">
                  <p style="font-size: 10px;float: left;">source: Wolfram MathWorld</p>
                </div>
              </div>
              <div class="thumbnail" style="margin-top: 100px;">
                <img src="/static/game-of-life/shell.jpg">
                <div class="capition">
                  <p style="font-size: 10px; float: left;">source: Wikimedia Commons</p>
                </div>
              </div>
              <br>
              <p>
                Instalation was exhibited at <a target="_blank" href="http://uap.edu.pl/ctg/wystawy/">University of Arts in Poznań</a> (Poland) 8-10.06.2018.
              </p>
            </div>
        </div>
        <div class="thumbnail" v-if="active==1">
          <img src="/static/no-boresight-installed/0.jpg">
        </div>
        <div class="thumbnail" v-if="active==2">
          <img src="/static/no-boresight-installed/1.jpg">
        </div>
        <div class="thumbnail" v-if="active==3">
          <img src="/static/no-boresight-installed/2.jpg">
        </div>
        <div class="thumbnail" v-if="active==4">
          <img src="/static/no-boresight-installed/3.jpg">
        </div>
        <div class="thumbnail" v-if="active==5">
          <img src="/static/no-boresight-installed/4.jpg">
        </div>
        <div class="thumbnail" v-if="active==6">
          <img src="/static/no-boresight-installed/5.jpg">
        </div>
        <div class="thumbnail" v-if="active==7">
          <img src="/static/no-boresight-installed/6.jpg">
        </div>
        <div class="thumbnail" v-if="active==8">
          <img src="/static/no-boresight-installed/7.jpg">
        </div>
        <div class="thumbnail" v-if="active==9">
          <img src="/static/no-boresight-installed/8.jpg">
        </div>
        <div class="thumbnail" v-if="active==10">
          <img src="/static/no-boresight-installed/9.jpg">
        </div>
        <div class="thumbnail" v-if="active==11">
          <img src="/static/no-boresight-installed/10.jpg">
        </div>
        <div class="thumbnail" v-if="active==12">
          <img src="/static/no-boresight-installed/11.jpg">
        </div>
        <div class="thumbnail" v-if="active==13">
          <img src="/static/no-boresight-installed/12.jpg">
        </div>
        <div class="thumbnail" v-if="active==14">
          <img src="/static/no-boresight-installed/13.jpg">
        </div>
        <div class="thumbnail" v-if="active==15">
          <img src="/static/no-boresight-installed/14.jpg">
        </div>
        <div align="center" class="embed-responsive embed-responsive-16by9" v-if="active==16">
          <video autoplay loop class="embed-responsive-item">
            <source src="h/static/no-boresight-installed/video.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Data from '@/Data'
export default {
  name: 'noBoresight',
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
	},
  created: function(){
		window.addEventListener('keydown', function(event) {
			if (event.key === "ArrowRight") {
  			this.next(15)
  		} else if (event.key === "ArrowLeft") {
  			this.prev(15)
  		}
    }.bind(this), false);
  },
  mounted: function(){
    var images = new Array()
    for (let i = 0; i < this.galleryData.photos.length; i++) {
      images[i] = new Image()
      images[i].src = "/static/" + this.galleryData.imagesDir + i + ".jpg"
    }
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
   color: #4D4D4D;
}
h2 {
  border-bottom: 2px solid #fdf6e3;
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
  width: 100px;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 1);
  color: #4D4D4D;
}
h3 {
  font-family: 'Helvetica Neue', 'Arial', 'Source Sans Pro', sans-serif;
  font-size: 18px;
  color: black;
  font-weight: 700;
  color: #4D4D4D;
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
