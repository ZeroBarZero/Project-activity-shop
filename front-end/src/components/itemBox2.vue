<template>
 <div class="is-half level-right">
    <div>
      <div v-for="product in products" :key="product.id" class="is-parent is-vertical">
        <article v-if="product.category == 'b'"  class="tile is-child box ">
          <div class="media">
          <figure class="media-left">
          <p class="image is-64x64">
           <img src="https://bulma.io/images/placeholders/128x128.png">
          </p>
          </figure>
          <div class="media-content">
          <div class="content">
          <p>
          <strong>{{ product.name }}</strong>
          <br>
          {{product.description}}
          <br>
          price:{{product.price}}won
          </p>
          </div>
          </div>
          <div class="media-right">
          <button class="button"  @click='addToCart(product)' >
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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  computed: mapGetters({
    products: 'allProducts',
    length: 'getNumberOfProducts'
  }),
  methods: mapActions([
    'addToCart'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title .subtitle{
  color:black;
}
.box{
  max-width:600px;
  margin-top:1em !important;
}

@media screen and (max-width: 768px)
{
  .media-content {
      font-size: smaller;
  }

  .box{
  max-width:900px;
}
}
</style>