<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <header-layout name="Home"/>
      <!-- <ExploreContainer name="Tab 1 page" /> -->
      <product-item v-for="n in num" :key="n" :product-name="n.productName" :price="n.price" :image="n.image"/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import HeaderLayout from '../layout/HeaderLayout.vue'
import ProductItem from '../components/ProductItem.vue'
import { ref } from 'vue'
const num = ref([
  {productName: 'Cassava Cake', price: '50.00', image:'/food.jpg'},
  {productName: 'Puto Cake', price: '30.00', image:'/food2.png'},
  {productName: 'Apple Cake', price: '60.00', image:'/food.jpg'}
]);
</script>

