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
				  The Game of Life*
				</p>
				<p>
          A cellular automaton is a system consisting of cells placed next to each other, and a set of rules describing their evolution. Their layout resembles a checkerboard or a sheet of squared paper. Each cell can adopt one of two states - it can be dead or alive (1 or 0). The cell’s state is updated in each time step, according to the rules, which describe how the cell’s state is dependant on its current state and the state of its neighbours.
				</p><p>
          Attached table shows some sample rulesets. As you can see, each of the rules has 8 different arrangements. This is due to the number of possible settings of three cells with two possible states (2 to the power of 3). In the first row from the top, you can see the initial setting of three cells, and in the next one - the state of the middle cell in the next time step.
				</p><p>
          In the second image, you can see the effect of different rulesets. Every row represents on timestep. Some rulesets evolve into random systems (i.e. ruleset 30), others form more schematic, fractal-like structures (i.e. 161). The outcome heavily depends on the initial state - even the change of a single cell can have a drastic impact on the evolution of the whole system.
				</p><p>
          Cellular automata, whose structures are described by a grid of cells, their states, and the rules governing their transitions, are mathematical models. John von Neumann - a prominent mathematician, the creator of the game theory  and the concept of self-replicating machines - is considered the creator of cellular automata.
				</p><p>
          Despite a certain dose of abstraction that characterizes mathematics, it turns out that cellular automata are common in nature. One of the more interesting examples are patterns on the shells of some sea snails.
				</p><p>
          This mechanism is also used by plants, which regulate the absorption and loss of gasses this way (each stoma on the leaf behaves like a cell). Automata are also used in researching neurons (during learning) and in cryptography (due to the randomness of some rulesets).
				</p><p>
          Although cellular automata were created in the forties, they were more precisely described and classified only in the eighties, by Stephen Wolfram, who wrote more about them in his controversial “A New Kind of Science”. In this publication, he expresses the need to study simple systems, that might help us understand the complex laws of nature on an elementary level.
				</p><p>
          *Game of life - most famous cellular automata, created in 1970 by british mathematician John Conway.
				</p>
        </div>
        <div class="col-sm-6">
          <div class="thumbnail">
            <img src="~@/assets/game-of-life/chart.jpg">
            <div class="capition">
              <p style="font-size: 10px;float: left;">source: Wolfram MathWorld</p>
            </div>
          </div>
          <div class="thumbnail" style="margin-top: 100px;">
            <img src="~@/assets/game-of-life/shell.jpg">
            <div class="capition">
              <p style="font-size: 10px; float: left;">source: Wikimedia Commons</p>
            </div>
          </div>
          <br>
          <p>
            Instalation was exhibited at <a target="_blank" href="http://uap.edu.pl/ctg/wystawy/">Rotunda gallery</a> (Poznań, Poland) 21-22.02.2017.
          </p>
          <p><a target="_blank" href="https://github.com/iansowinski/fotografia">Link</a> to epository with code, description, posters and other things connected with development of this instalation.</p>
        </div>
      </div>
        <div class="thumbnail" v-if="active==1">
          <img src="~@/assets/game-of-life/game-1.jpg">
        </div>
        <div class="thumbnail" v-if="active==2">
            <img src="~@/assets/game-of-life/game-2.jpg">
        </div>
        <div class="thumbnail" v-if="active==3">
          <img src="~@/assets/game-of-life/game-3.jpg">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Data from '@/Data'
export default {
  name: 'game',
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
  			this.next(3)
  		} else if (event.key === "ArrowLeft") {
  			this.prev(3)
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
