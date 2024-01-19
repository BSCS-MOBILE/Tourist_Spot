<template>
  <div class="background">
    <ion-card :href="'/tourist-details/' + id">
      <div class="card-content">
        <div class="name">
          {{ touristName }}
        </div>
        <ion-card-header :style="{ backgroundImage: 'url(' + image + ')', height: '300px', backgroundSize: 'cover' }" class="card-background">
        </ion-card-header>
        <ion-card-content>
          {{ description }}
          <br>
          <br>
          <ion-card-subtitle class="price">PHP {{ price }}</ion-card-subtitle>
        </ion-card-content>
      </div>
    </ion-card>
  </div>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle } from '@ionic/vue';
import { useRouter } from 'vue-router';

defineProps({
  touristName: String,
  description: String,
  price: String,
  image: String,
  id: String,
});

const router = useRouter();
</script>

<style scoped>
.background {
  padding-left: 30px;
  padding-right: 30px;
  margin: 0;
}

.card-content {
  background-color: rgb(57, 119, 173);
  color: antiquewhite;
}

.name {
  font-size: 30px;
  font-weight: bold;
  color: aliceblue;
  text-align: center;
  padding: 10px;
}

.price {
  font-style: italic;
  color: cyan;
}
</style>
