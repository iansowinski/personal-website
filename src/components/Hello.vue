<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>Ian Sowiński</h1><br>
      </div>
    </div>
    <div class="row">
    	<div class="col-md-4">
    		<br>
          <p>
            I am designer and software developer. Studying Graphic Arts at University of Art in Poznań, I consider programming as the field of design. I am passionate about vue.js and ruby language. I also feel quite comfortable in python.
          </p><p>
            Due to my interests in graphic design, front-end development is my key area of concern in IT.
          </p><p>
            I gained a large knowledge and skill set in my nine active years in scouting (inter alia as: guide, promotion manager, photojournalist).
          </p><p>
            After hours I’m documentary photographer. 
          </p>
        <h2>contact</h2>
        <ul>
          <li><a target="_blank" href="https://twitter.com/iansowinski">@iansowinski</a> on twitter</li>
          <li>sowinj@gmail.com</li>
        </ul>
    	</div>
    	<div class="col-md-4">
        <h2>programming & web design</h2>
        <ul>
          <li><a target="_blank" href="https://github.com/iansowinski/poznan_bot">Poznan Bot</a> - my telegram bot for subscribing to facebook fanpages, geting the weather forecast and cinema timetables</li>
          <li><a href="https://github.com/iansowinski/fotografia">Game of Life</a> - backend for art instalation</li>
          <li><a target="_blank" href="http://contentforces.com">ContentForces</a> - redesign and implementation</li>
          <li><a target="_blank" href="http://blekitna14.org">Błękitna Czternastka</a> - design and implementation</li>
          <li><a target="_blank" href="https://github.com/iansowinski">@iansowinski</a> on github</li>
        </ul>
        <h2>photography & posters</h2>
        <ul>
          <li><router-link target="_blank" to="argument-against-the-divinity-of-men">Argument against the divinity of men</router-link> (2015-2017)</li>
          <li><router-link target="_blank" to="game-of-life">Game of Life</router-link> (2017, instalation)</li>
          <li><router-link target="_blank" to="endless-summer">Endless Summer</router-link> (2011-2016)</li>
          <li><router-link target="_blank" to="east-meets-east">East meets East</router-link> (2011-present)</li>
          <li><router-link target="_blank" to="presence">Presence</router-link> (2012-present)</li>
          <li><router-link target="_blank" to="kod">Anti-government protest in Warsaw</router-link> (2016, short story)</li>
          <li><router-link target="_blank" to="grom">Scouting Extreme Race</router-link> (2016, short story)</li>
          <li><router-link target="_blank" to="tymek-and-jagoda">Wedding</router-link> (2016, short story)</li>
          <li><router-link target="_blank" to="posters">Posters</router-link> (2015-present)</li>
          <li><a target="_blank" href="https://instagram.com/iansowinski">@iansowinski</a> on instagram</li>
        </ul>
      </div>
    	<div class="col-md-4">
        <h2>exhibitions</h2>
        <ul>
          <li><router-link target="_blank" to="game-of-life">Game of Life</router-link> (ROTUNDA, Poznań, 2017) - solo</li>
          <li>Street Dogs of Poland (WYSPA, Gdańsk, 2016) - group</li>
          <li>Mój Fyrtel (PIX.HOUSE, Poznań, 2015) - group</li>
        </ul>
        <h2>education</h2>
        <ul>
          <li>2015-2018 BFA, Graphic Arts (University of Fine Arts in Poznań)</li>
        </ul>
        <p><a href="/static/CV_Jan_Sowinski.pdf" target="_blank">Resumee</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<style>
	body {
		background: #fdf6e3;
	}
</style>
<style scoped>
	p,li,h1,h2 {
	  font-family: 'Inconsolata', monospace;
	  color: #626262;
	}
	h2 {
	  font-weight: 700;
	  font-size: 1em;
	}
	h1 {
	  font-weight: 700;
	}
	ul {
	  list-style-type: none;
	  padding-left: 0em;
	}
	a {
	  text-decoration: none;
	  color: #cb4b16 !important;
	  background:transparent;
	  transition: all 0.5s ease;
	  border-bottom: 1pt solid transparent;
	}
	a:hover {
	  color: #cb4b16 !important;
	  text-decoration: none;
	  border-bottom: 1px solid #cb4b16;
	}
	a:active, a:visited, a:link {
	  text-decoration:none;
	  color: #cb4b16;
	}
</style>
