<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <header-layout name="Home"/>
      <template v-if="products">
        <product-item v-for="n in products" ref="num" :key="n.id" :product-name="n.productName" :price="n.price" :image="url+n.image" :id="n.id"/>
      </template>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, } from '@ionic/vue';
import HeaderLayout from '../layout/HeaderLayout.vue'
import ProductItem from '../components/ProductItem.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/store'
import axios from 'axios';

export default {
  name: 'Home',
  components : {
    IonPage, IonContent, HeaderLayout, ProductItem
  },
  data () {
    return {
      products: [],
      url: "http://localhost:3000/photos/"
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      const data = await axios.get("http://localhost:3000/products");
      this.products = data.data.data 
    }
  }
}
</script>

