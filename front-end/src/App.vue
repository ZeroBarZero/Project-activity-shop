<template>
  <div id="app">
  <tab></tab>
  <section id="screen2" class="section section-padding-medium">
  <div class="level sect">
  <img class="item-img level-left" src="./assets\img\undraw_finish_line.svg"/>
  <item class="item-box level-right"></item>
  </div>
  </section>
  <section id="screen3" class="section section-padding-medium">
  <div class="level sect">
  <img class="item-img level-left" src="./assets\img\undraw_mindfulness.svg"/>
  <item2 class="item-box level-right"></item2>
  </div>
  </section>
  <section id="screen4" class="section section-padding-medium">
  <div class="level sect">
  <img class="item-img level-left" src="./assets\img\undraw_relax.svg" />
  <item3 class="item-box level-right"></item3>
  </div>
  </section>
  <section id="screen5" class="section section-padding-medium"><cart></cart></section>
  </div>
</template>

<script>
/* eslint-disable */
import Tab from './components/tab'
import itemBox from './components/itemBox'
import itemBox2 from './components/itemBox2'
import itemBox3 from './components/itemBox3'
import Cart from './components/Cart'

export default {
  components: {
	'tab': Tab,
	'item' : itemBox,
	'item2' : itemBox2,
	'item3' : itemBox3,
	'cart' : Cart
  }
};
</script>

<style>
* {margin: 0; padding: 0;}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {text-decoration: none;}

/* This class is added on scroll */
.fixed {
	position: fixed;
	top: 0;
	height: 70px;
	z-index: 1;
}
html {
  scroll-behavior: smooth;
}

body {
	color: #fff;
	font-family: 'open-sans-bold', AvenirNext-Medium, sans-serif;
	font-size: 18px;
	text-align: center;
}

/* Navigation Settings */
nav {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 70px;
	background: #fff;
}

nav li {
	display: inline-block;
	padding: 24px 10px;
}

nav li a {
	color: #757575;
	text-transform: uppercase;
}

section {
	min-height: 100vh;
	margin-bottom: 0;
}

/* Screens Settings */
#screen1 {
	background: #C1C48E;
	margin: 0px;
}

#screen1 p {
	padding-top: 200px;
}

#screen2 {
	background: #82617B;
}

.sect {
	height: 100vh;
	max-width: 1440px;
	margin: auto;
}

#screen3 {
	background: #BCA1B1;
}
#screen4 {
	background: #E2DDD9;
}

#screen5 {
	background: #F7E6D1;
}

.item-img{
	width:48%;
	min-height: 50%;
}
.item-box {
	padding: 3rem;
}

@media (max-width: 768px) {
  .level .item-img{
	width:100%;
	min-height: 30%;
  }

  .item-box{
	padding:0;
  }

  .section {
    padding: 0.8rem 1.5rem;
}
  
}

@media only screen and (max-width: 520px) {
	.level .item-img{
	display: none;
	/*width:100%;
	min-height: 30%;*/
  }
  .item-box{
	padding:0;
  }

  .section {
    padding: 0.8rem 1.5rem;
}

	nav li {
		padding: 24px 4px;
	}

	nav li a {
		font-size: 14px;
	}

}
@media only screen and (max-width: 320px) {
	.media{
		font-size: medium;
	}
	.table{
		font-size: small;
	}
	.media-left {
    display: none;
}
	.level .item-img{
	display: none;
	/*width:100%;
	min-height: 30%;*/
  }
  .item-box{
	padding:0;
  }

  .section {
    padding: 0.8rem 1.5rem;
}

	nav li {
		padding: 24px 4px;
	}

	nav li a {
		font-size: 14px;
	}

}
</style>
