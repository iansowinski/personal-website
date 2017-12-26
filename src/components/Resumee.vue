<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
      </div>
    </div>
    <div class="row">
    	<div class="col-md-4">
      <div class="rotate">
        <router-link to="/">
          <h1>Ian Sowiński</h1>
          <div class="thumbnail"><img :src='"~@/assets/profile/" + profile + ".jpg"' alt=""></div>
        </router-link>
      </div>
          <p>
          👶 B. 03.12.199
        </p>
        <p>
          <b>🎒 Education:</b> BFA - Graphic Arts, University of Arts in Poznań (2015 - 2018)
        </p>
        <p>
      <h2>contact</h2>
        <ul>
          <li>🐦 Twitter: <a href="https://twitter.com/iansowinski" target="_blank">@iansowinski</a></li>
          <li>☎ Tel: <a href="tel:+48692394228" target="_blank">+48 692 394 228</a></li>
          <li>📮 E-Mail: <a href="mailto:sowinj@gmail.com" target="_blank">sowinj@gmail.com</a> (<a target="_blank" href="http://pgp.mit.edu/pks/lookup?op=get&search=0xE65DA5E19E28E9EB">🔑 GPG Key</a>)</li>
          <li class="gray fingerprint">B574 F8B1 8874 0543 E59F  2A9A E65D A5E1 9E28 E9EB</li>
        </ul>
        </p>
    	</div>
    	<div class="col-md-4">
        <h2>👨‍💻 About me</h2>
        <p>
          I am designer and software developer. Studying Graphic Arts at University of Art in Poznań, I consider programming as the field of design. I am passionate about vue.js and ruby language. I also feel quite comfortable in python.
        </p><p>
          Due to my interests in graphic design, front-end development is my key area of concern in IT.
        </p><p>
          I developed a knowledge and skill set in my nine active years in scouting (inter alia as: guide, promotion manager, photojournalist).
        </p><p>
          After hours I’m documentary photographer. 
        </p>
        <h2>💼 Working expierience</h2>
        <p>02.2017 - now: Designer/Developer in ContentForces:</p>
        <ul>
          <li>Implementing new design to legacy PHP applications (with jquery & bootstrap)</li>
          <li>Redesigning and implementing redesign of landing pages</li>
          <li>Implementing chatbot client (with RESTful API & Vue.js)</li>
          <li>Implementing chatbot server (in Python flask)</li>
          <li>Designing flowcharts of chatbot conversations</li>
          <li>Introducing Docker to company</li>
        </ul>
      </div>
    	<div class="col-md-4">
        <h2>💻 Programming and IT Skills:</h2>
        <ul>
          <li>Programming skills in Ruby, JavaScript and Python languages</li>
          <li>Working knowledge of Vue.js front-end framework</li>
          <li>Working knowledge of object-oriented programming topics</li>
          <li>Understanding of RWD and PWA toppics</li>
          <li>Basic knowledge of Ruby on Rails</li>
          <li>Experience in version control (GIT)</li>
          <li>Brief knowledge of TDD (I use RSpec)</li>
          <li>Skill in using Adobe Creative Suit: Photoshop, Illustrator, Indesign, Lightroom</li>
        </ul>
        <h2>🎨 Skills connected with visual arts:</h2>
        <ul>
          <li>Visual sensitivity developed through studying Graphic Arts in University of Arts in Poznan</li>
          <li>Knowledge in area of psychophysiology of sight</li>
          <li>Experience in photojournalism &amp; photo editing</li>
          <li>Experience in graphic design (fonts, color, formats, etc.)</li>
          <li>Experience in social-media marketing campaign</li>
        </ul>
        <h2>🎈 Social skills:</h2>
        <ul>
          <li>Very good knowledge of English</li>
          <li>Wide experience in teamwork, gained in scouting movement</li>
          <li>Responsibility and attachment to ethic rules</li>
          <li>Experience in organizing massive events, gained in scouting movement</li>
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
.col-md-4:nth-child(2), .col-md-4:nth-child(3) {
  margin-top: 30px;
}
.thumbnail {
  border: none;
}
	p,li,h1,h2 {
	  font-family: 'Helvetica Neue', 'Arial', 'Source Sans Pro', sans-serif;
	}
  p, li {
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
  .fingerprint {
    transition: all 0.5s ease;
  }
  .fingerprint:hover {
    color: #4D4D4D;
  }
  .gray, .gray a {
    color: #dadada;
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
