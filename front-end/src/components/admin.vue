<template>
<div>
hello
</div>
</template>

<script>
/* eslint-disable */
export default {
	name: 'admin'
};
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
	background: #43b29d;
	margin: 0px;
}

#screen1 p {
	padding-top: 200px;
}

#screen2 {
	background: gray;
}

.sect {
	height: 100vh;
	max-width: 1440px;
	margin: auto;
}

#screen3 {
	background: darkgrey;
}

#screen4 {
	background: gray;
}

#screen5 {
	background: lightgray;
}

.item-img{
	width:48%;
	min-height: 50%;
}
.item-box{
	padding:3rem;
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
</style>
