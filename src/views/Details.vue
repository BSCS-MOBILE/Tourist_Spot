<template>
    <div id="container">
      <h1>Details</h1>
      <h1>{{ productName }}</h1>
      <h2>{{ price }}</h2>
      <img :src="image" />
    </div>
  </template>

<script>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import axios from "axios"

export default {
  name: 'Details',
  data () {
    return {
      productName: '',
      price: '',
      image: '',
    }
  },
  created() {
    const route = useRoute()
    console.log(route)
    const id = route.params.id
    console.log(id)
    this.getProduct(id)
  },
  methods: {
    getProduct(id) {
      axios.get(`http://localhost:3000/products/${id}`)
      .then(res => {
        const item = res.data.data
        console.log(item)
        
        this.productName = item.productName;
        this.price = item.price;
        this.image = `http://localhost:3000/photos/product/${item.image}`;
      })
      .catch((err) => {
      }); 
    }
  }
}
</script>