<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
      </div>
    </div>
    <div class="row">
    	<div class="col-sm-4">
        <div class="rotate" width="100%" height="100%">
          <h1>Ian Sowiński</h1>
          <div class="thumbnail"><img :src='"~@/assets/profile/" + profile + ".jpg"' alt="" width="100%" height="100%"></div>
        </div>
        <p>
         I am focused mainly on Front-End development and UX/UI design. There is some space in my work for branding projects. But here you can see the effects of my lifetime passion: photography.
        </p>
      </div>
    	<div class="col-sm-4">
        <h2>long-term projects</h2>
        <ul>
          <li><router-link to="no-boresight-installed">No Boresight Installed</router-link> (2017-2018, installation)</li>
          <li><router-link to="argument-against-the-divinity-of-men">Argument against the divinity of men</router-link> (2015-2017)</li>
          <li><router-link to="game-of-life">Game of Life</router-link> (2017, instalation)</li>
          <li><router-link to="east-meets-east">East meets East</router-link> (2011-present)</li>
          <li><router-link to="endless-summer">Endless Summer</router-link> (2011-2016)</li>
          <li><router-link to="self-portraits">Self-portraits</router-link> (2012-present)</li>
        </ul>
        <h2>short stories</h2>
        <ul>
          <li><router-link to="lancuch-swiatla">Judiciary overhaul in Poland</router-link> (2017, short story)</li>
          <li><router-link to="kod">Anti-government protest in Warsaw</router-link> (2016, short story)</li>
          <li><router-link to="grom">Scouting Extreme Race</router-link> (2016, short story)</li>
          <li><router-link to="tymek-and-jagoda">Wedding</router-link> (2016, short story)</li>
        </ul>
        <h2><router-link to="posters">Posters</router-link> (2015-present)</h2>
      </div>
      <div class="col-sm-4">
        <h2>contact</h2>
        <ul>
          <li>Twitter: <a href="https://twitter.com/iansowinski">@iansowinski</a></li>
          <li>Instagram: <a href="https://instagram.com/iansowinski">@iansowinski</a></li>
          <li>Github: <a href="https://github.com/iansowinski">@iansowinski</a></li>
          <li>Tel: <a href="tel:+48692394228">+48 692 394 228</a></li>
          <li>E-Mail: <a href="mailto:sowinj@gmail.com">sowinj@gmail.com</a></li>
        </ul>
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
.col-sm-4:nth-child(2), .col-sm-4:nth-child(3) {
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
