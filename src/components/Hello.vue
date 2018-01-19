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
          <li>🐦 Twitter: <a href="https://twitter.com/iansowinski">@iansowinski</a></li>
          <li>☎ Tel: <a href="tel:+48692394228">+48 692 394 228</a></li>
          <li>📮 E-Mail: <a href="mailto:sowinj@gmail.com">sowinj@gmail.com</a> (<a href="http://pgp.mit.edu/pks/lookup?op=get&search=0xE65DA5E19E28E9EB">🔑 GPG Key</a>)</li>
          <li class="gray fingerprint">B574 F8B1 8874 0543 E59F  2A9A E65D A5E1 9E28 E9EB</li>
        </ul>
    	</div>
    	<div class="col-md-4">
        <h2>👨‍💻 about me</h2>
        <p>
          Ruby and Vue enthusiast. Documentary photographer. Former scouting guide. Studying Graphic Arts at University of Arts in Poznań. 汉语学生 wannabe.
        </p>
        <h2>💻 programming & web design</h2>
        <ul>
          <li><a href="https://github.com/iansowinski/poznan_bot">Poznan Bot</a> - my telegram bot (<a href="https://telegram.me/poznan_bot">@poznan_bot</a>) for subscribing to facebook fanpages, geting the weather forecast and cinema timetables</li>
          <li><a href="https://github.com/iansowinski/fotografia">Game of Life</a> - backend for art instalation</li>
          <li><a href="http://contentforces.com">ContentForces</a> - redesign and implementation</li>
          <!-- <li><a href="http://blekitna14.org">Błękitna Czternastka</a> - design and implementation</li> -->
          <li><a href="https://github.com/iansowinski">@iansowinski</a> on github</li>
        </ul>
      </div>
    	<div class="col-md-4">
        <h2>📸 photography (long-term projects)</h2>
        <ul>
          <li><router-link to="argument-against-the-divinity-of-men">Argument against the divinity of men</router-link> (2015-2017)</li>
          <li><router-link to="game-of-life">Game of Life</router-link> (2017, instalation)</li>
          <li><router-link to="east-meets-east">East meets East</router-link> (2011-present)</li>
          <li><router-link to="endless-summer">Endless Summer</router-link> (2011-2016)</li>
          <li><router-link to="presence">Self-portraits</router-link> (2012-present)</li>
        </ul>
        <h2>📸 photography (short stories)</h2>
        <ul>
          <li><router-link to="lancuch-swiatla">Judiciary overhaul in Poland</router-link> (2017, short story)</li>
          <li><router-link to="kod">Anti-government protest in Warsaw</router-link> (2016, short story)</li>
          <li><router-link to="grom">Scouting Extreme Race</router-link> (2016, short story)</li>
          <li><router-link to="tymek-and-jagoda">Wedding</router-link> (2016, short story)</li>
          <li><a href="https://instagram.com/iansowinski">@iansowinski</a> on instagram</li>
        </ul>
        <h2>🍷 exhibitions</h2>
        <ul>
          <li><router-link to="game-of-life">Game of Life</router-link> (ROTUNDA, Poznań, 2017) - solo</li>
          <li>Street Dogs of Poland (WYSPA, Gdańsk, 2016) - group</li>
          <li>Mój Fyrtel (PIX.HOUSE, Poznań, 2015) - group</li>
        </ul>
        <h2><router-link to="posters">🖼 Posters</router-link> (2015-present)</h2>
        <p class="gray">Yes, this is kinda <a href="http://www.brutalistwebsites.com">brutal</a></p>
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
