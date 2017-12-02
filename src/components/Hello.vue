<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
      </div>
    </div>
    <div class="row">
    	<div class="col-md-4">
      <div class="rotate">
        <h1>Ian Sowiński</h1>
        <div class="thumbnail"><img :src='"~@/assets/profile/" + profile + ".jpg"' alt=""></div>
      </div>

      <h2>contact</h2>
        <ul>
          <li>🐦 Twitter: <a href="https://twitter.com/iansowinski" target="_blank">@iansowinski</a></li>
          <li>☎ Tel: <a href="tel:+48692394228" target="_blank">+48 692 394 228</a></li>
          <li>📮 E-Mail: <a href="mailto:sowinj@gmail.com" target="_blank">sowinj@gmail.com</a> (<a target="_blank" href="http://pgp.mit.edu/pks/lookup?op=get&search=0xE65DA5E19E28E9EB">🔑 GPG Key</a>)</li>
          <li class="gray fingerprint">B574 F8B1 8874 0543 E59F  2A9A E65D A5E1 9E28 E9EB</li>
        </ul>
    	</div>
    	<div class="col-md-4">
        <h2>💻 programming & web design</h2>
        <ul>
          <li><a target="_blank" href="https://github.com/iansowinski/poznan_bot">Poznan Bot</a> - my telegram bot (<a target="_blank" href="https://telegram.me/poznan_bot">@poznan_bot</a>) for subscribing to facebook fanpages, geting the weather forecast and cinema timetables</li>
          <li><a href="https://github.com/iansowinski/fotografia">Game of Life</a> - backend for art instalation</li>
          <li><a target="_blank" href="http://contentforces.com">ContentForces</a> - redesign and implementation</li>
          <!-- <li><a target="_blank" href="http://blekitna14.org">Błękitna Czternastka</a> - design and implementation</li> -->
          <li><a target="_blank" href="https://github.com/iansowinski">@iansowinski</a> on github</li>
        </ul>
        <h2>📸 photography & posters</h2>
        <ul>
          <li><router-link target="_blank" to="lancuch-swiatla">Judiciary overhaul in Poland</router-link> (2017, short story)</li>
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
        <h2>🍷 exhibitions</h2>
        <ul>
          <li><router-link target="_blank" to="game-of-life">Game of Life</router-link> (ROTUNDA, Poznań, 2017) - solo</li>
          <li>Street Dogs of Poland (WYSPA, Gdańsk, 2016) - group</li>
          <li>Mój Fyrtel (PIX.HOUSE, Poznań, 2015) - group</li>
        </ul>
      </div>
    	<div class="col-md-4">
        <h2>👨‍💻 about me & resumee</h2>
        <p>
            I am designer and software developer. Studying Graphic Arts at University of Art in Poznań, I consider programming as the field of design. I am passionate about vue.js and ruby language. I also feel quite comfortable in python.
          </p><p>
            Due to my interests in graphic design, front-end development is my key area of concern in IT.
          </p><p>
            I gained a large knowledge and skill set in my nine active years in scouting (inter alia as: guide, promotion manager, photojournalist).
          </p><p>
            After hours I’m documentary photographer. 
          </p>
        <p><router-link to="resumee" target="_blank">📚 Resumee</router-link></p>
        <p class="gray">Yes, this is kinda <a target="_blank" href="http://www.brutalistwebsites.com">brutal</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data: function(){
    return {
      profile: Math.floor(Math.random() * 6)
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&subset=latin-ext');
	body {
		background: #fafafa;
	}
</style>
<style scoped>
.col-md-4:nth-child(2), .col-md-4:nth-child(3) {
  margin-top: 30px;
}
.thumbnail {
  border: none;
}
	p,li,h1,h2 {
	  font-family: 'Helvetica Neue', 'Arial', 'Source Sans Pro', sans-serif;
	}
  p,li {
    color: #4D4D4D;
  }
	h2 {
	  font-weight: 700;
	  font-size: 1em;
    color: #000000;
	}
	h1 {
	  font-weight: 700;
    color: #000000;
  }
  .rotate {
    transform: rotate(-90deg);
    max-height: 100%;
    max-width: 80%;
    margin-left: 20px;
	}
  .rotate img {
    transform: rotate(90deg);
  }
	ul {
	  list-style-type: none;
	  padding-left: 0em;
	}
	a {
	  text-decoration: none;
	  color: #0000ff;
	  background:transparent;
	  transition: all 0.5s ease;
	  border-bottom: 1pt solid transparent;
	}
	a:hover {
	  color: #0000ff;
	  text-decoration: none;
	  border-bottom: 1px solid #0000ff;
	}
	a:active, a:visited, a:link {
	  text-decoration:none;
	  color: #0000ff;
	}
  .gray, .gray a {
    color: #dadada;
  }
  .fingerprint {
    transition: all 0.5s ease;
  }
  .fingerprint:hover {
    color: #4D4D4D;
  }
  .gray a {
    border-bottom: 1px solid #dadada;
  }
  .gray a:hover {
    border-bottom: 1px solid #000000;
  }
  .thumbnail {
    background-color: transparent;
  }
</style>
