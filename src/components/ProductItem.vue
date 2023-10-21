<template>
    <ion-card :style="{ backgroundImage: 'url(' + image + ')' }" class="bg-size item-size">
      <a :href="'/product-details/'+id">
        <ion-card-header>
          <ion-card-title class="ion-text-center">{{productName}}</ion-card-title>
          <ion-card-subtitle>{{ price }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          short description.
        </ion-card-content>
      </a>
      </ion-card>
</template>
<script setup lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
defineProps({
  productName: String,
  price: String,
  image: String,
  id: Number
});
</script>


<style scoped>
.item-size {
  height: 200px;
  margin: 20px;
}
.bg-size {
  background-size: cover;
}
</style>
