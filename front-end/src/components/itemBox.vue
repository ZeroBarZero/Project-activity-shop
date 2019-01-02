<template>
 <div class="tile level-right">
    <div class="tile">
      <div class="tile is-parent is-vertical">
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
          <strong>Seong woo Kim</strong>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
          </p>
          </div>
          </div>
          <div class="media-right">
          <b-checkbox v-model="checkboxGroup" native-value="run1">
          </b-checkbox>
          </div>
          </div>
        </article>
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
          <strong>Seong woo Kim</strong>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
          </p>
          </div>
          </div>
          <div class="media-right">
          <b-checkbox v-model="checkboxGroup" native-value="run2">
          </b-checkbox>
          </div>
          </div>
        </article>
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
          <strong>Seong woo Kim</strong>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
          </p>
          </div>
          </div>
          <div class="media-right">
          <b-checkbox v-model="checkboxGroup" native-value="run3">
          </b-checkbox>
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
                checkboxGroup: []
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

</style>