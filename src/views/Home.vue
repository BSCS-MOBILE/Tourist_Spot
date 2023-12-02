<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <header-layout name="Home"/>
      <div>{{ message }}</div>
      <template v-if="products">
        <!-- <product-item v-for="n in products" ref="num" :key="n.id" :product-name="n.productName" :price="n.price" :image="n.image" :id="n.id"/> -->
        <div v-for="n in products" :key="n.id">{{ n.productName }}</div>
      </template>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, onIonViewWillEnter, onIonViewDidEnter, onIonViewWillLeave, onIonViewDidLeave} from '@ionic/vue';
import HeaderLayout from '../layout/HeaderLayout.vue'
import ProductItem from '../components/ProductItem.vue'
import { ref, watchEffect } from 'vue'
import axios from 'axios';
let products = ref();
let message = ref('hello');

watchEffect(async () => {
  const data = await axios.get("http://localhost:3000/products");
  products = data.data.data;
  console.log(products)
  message = ref("sample") ;
})
    onIonViewDidEnter(async() => {
      console.log('Home page did enter');
      // const data = await axios.get("http://localhost:3000/products");
      // products = data.data.data;
      // console.log(products)
      // message = ref("sample") ;
    });
    
    onIonViewDidLeave(() => {
      console.log('Home page did leave');
    });
    
    onIonViewWillEnter(async () => {
      console.log('Home page will enter');
    });

    onIonViewWillLeave(() => {
      console.log('Home page will leave');
    });
</script>

