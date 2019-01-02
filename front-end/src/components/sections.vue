<template>
<div>
  <tab></tab>
  <section id="screen2">
  <item></item>
  </section>
  <section id="screen3"></section>
</div>
</template>

<script>
/* eslint-disable */
import Tab from './tab'
import itemBox from './itembox'
export default {
  name: 'sections',
  components: {
	'tab': Tab,
	'item' : itemBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

* {margin: 0; padding: 0;}

a {text-decoration: none;}

/* This class is added on scroll */
.fixed {
	position: fixed;
	top: 0;
	height: 70px;
	z-index: 1;
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
	height: 100vh;
}

/* Screens Settings */
#screen1 {
	background: #43b29d;
}

#screen1 p {
	padding-top: 200px;
}

#screen2 {
	background: #efc94d;
}

#screen3 {
	background: #e1793d;
}

@media only screen and (max-width: 520px) {

	nav li {
		padding: 24px 4px;
	}

	nav li a {
		font-size: 14px;
	}

}
</style>
