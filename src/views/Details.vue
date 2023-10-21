<template>
    <div id="container">
      <h1>Details</h1>
      <h1>{{ productName }}</h1>
      <h2>{{ price }}</h2>
      <img :src="image" />
    </div>
  </template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const items = ref([
  {id: 1, productName: 'Cassava Cake', price: '50.00', image:'/food.jpg'},
  {id: 2, productName: 'Puto Cake', price: '30.00', image:'/food2.png'},
  {id: 3, productName: 'Apple Cake', price: '60.00', image:'/food.jpg'}
]);
const route = useRoute()
const id = route.params.id
let productName = ref('');
let price = ref(0);
let image = ref('');

items.value.forEach(item => {
 if(item.id.toString() === id.toString()) {
    productName = item.productName;
    price = item.price;
    image = item.image;
 }
})


</script>