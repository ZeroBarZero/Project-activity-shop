<template>
 <div class="is-half level-right">
    <div>
      <div v-for="item in items" :key="item.id" class="tile is-parent is-vertical">
        <article class="tile is-child box">
          <div class="media">
          <figure class="media-left">
          <p class="image is-64x64">
           <img src="https://bulma.io/images/placeholders/128x128.png">
          </p>
          </figure>
          <div class="media-content">
          <div class="content">
          <p>
          <strong>{{ item.title }}</strong>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br>
          price: {{ item.price }} won
          </p>
          </div>
          </div>
          <div class="media-right">
          <button class="button"  @click="addToCart(item)" name="run1">
            <span class="icon is-small">
            <i class="fas fa-plus"></i>
            </span>
          </button>
          </div>
          </div>
        </article>
      </div>
    </div>
 </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
        return {
            items: [
                {
                    id: 1,
                    title: 'Children of Bodom - Hatebreeder',
                    price: 9.99
                },
                {
                    id: 2,
                    title: 'Emperor - Anthems to the Welkin at Dusk',
                    price: 6.66
                },
                {
                    id: 3,
                    title: 'Epica - The Quantum Enigma',
                    price: 15.99
                },
            ]
        }},
   methods: {
    addToCart(item) {
      console.log ( 'event dropped')// This Works 
        this.$store.commit('addToCart', item.title);
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title .subtitle{
  color:black;
}
.box{
  max-width:900px;
}

@media screen and (max-width: 768px)
{
  .media-content {
      font-size: smaller;
  }
}
</style>