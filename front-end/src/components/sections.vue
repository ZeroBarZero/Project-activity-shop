<template>
<div>
<section id="screen2" class="section section-padding-medium">
<div class="level sect">
<img class="item-img level-left" src="..\assets\img\undraw_finish_line.svg"/>
<item class="item-box level-right" v-bind:_category="'a'"></item>
</div>
</section>
<section id="screen3" class="section section-padding-medium">
<div class="level sect">
<img class="item-img level-left" src="..\assets\img\undraw_mindfulness.svg"/>
<item class="item-box level-right" v-bind:_category="'b'"></item>
</div>
</section>
<section id="screen4" class="section section-padding-medium">
<div class="level sect">
<img class="item-img level-left" src="..\assets\img\undraw_relax.svg" />
<item class="item-box level-right" v-bind:_category="'c'"></item>
</div>
</section>
<section id="screen5" class="section section-padding-medium">
<cart></cart>
</section>
</div>
</template>

<script>
/* eslint-disable */
import itemBox from './itemBox'
import Cart from './Cart'

export default {
	name: 'sections',
  components: {
	'item' : itemBox,
	'cart' : Cart
  }
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
.sect {
	height: 100vh;
	max-width: 1440px;
	margin: auto;
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
