<template>
  <div class="cart">
    <h1 class="title">Your Cart</h1>
    <p v-show="!products.length">
    <i>Your cart is empty!</i>
    </p>
<table class="table is-fullwidth is-striped" v-show="products.length">
<thead>
<tr>
<td>Name</td>
<td>Price</td>
<td>Quantity</td>
</tr>
</thead>
<tbody>
<tr v-for="p in products" v-bind:key="p.id">
<td>{{ p.name }}</td>
<td>${{ p.price }}</td>
<td>{{ p.quantity }}</td>
</tr>
<tr>
    <td><b>Total:</b></td>
    <td></td>
    <td><b>${{ total }}</b></td>
</tr>
</tbody>
</table>
<VuexplosiveModal :visible="showModal"></VuexplosiveModal>
<p><button v-show="products.length" class='button is-primary' @click="toggleModal" >Checkout</button></p>
</div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex'
import VuexplosiveModal from "./VuexplosiveModal"
export default {
  components: {
    VuexplosiveModal
  },
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    ...mapGetters({
      products: 'cartProducts'
    }),
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  methods: {
  	checkout(){
  		alert('Pay us $' + this.total);
      //this.$http.get('/api/').then(r => {alert(r.data)});
    },
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
}
</script>

<style lang="scss">
</style>