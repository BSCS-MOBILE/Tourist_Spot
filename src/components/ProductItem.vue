<template>
    <ion-card>
        <ion-card-header :style="{ backgroundImage: 'url(' + image + ')' }">
          <ion-card-title>{{productName}}</ion-card-title>
          <ion-card-subtitle>{{ price }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          short description.
        </ion-card-content>
      </ion-card>
</template>
<script setup lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
defineProps({
  productName: String,
  price: String,
  image: String
});
</script>


<style scoped>
.card-background {
  background-image: url('/food.jpg');
}
</style>
