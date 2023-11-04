<template>
    <ion-card :style="{ backgroundImage: 'url(' + image + ')' }" class="bg-size item-size" :href="'/product-details/'+id">
        <ion-card-header>
          <ion-card-title class="ion-text-center">{{productName}}</ion-card-title>
          <ion-card-subtitle>{{ price }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          short description.
        </ion-card-content>
      </ion-card>
</template>
<script setup lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { useRouter } from 'vue-router';
defineProps({
  productName: String,
  price: String,
  image: String,
  id: Number
});
const router = useRouter();
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
