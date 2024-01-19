<template>
  <ion-page>
    <ion-content :fullscreen="true" class="dashboard">
      <header-layout name="Dashboard" />
      
      <div class="total-spots">Total Tourist Spots: {{ touristSpots.length }}</div>

      <!-- Display a list of tourist spots -->
      <ion-list class="spot-list">
      
        <ion-item v-for="spot in touristSpots" :key="spot._id" :style="{ 'background-color': 'lightblue' }">
          {{ spot.touristName }}
        </ion-item>
           
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IonPage, IonContent, IonList, IonItem } from '@ionic/vue';
import HeaderLayout from '../layout/HeaderLayout.vue';
import axios from 'axios';

const touristSpots = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/tourist');
    touristSpots.value = response.data.data; // Assuming the tourist spots are in the 'data' property
  } catch (error) {
    console.error('Error fetching tourist spots:', error.message);
  }
});
</script>

<style scoped>
.dashboard {
  padding: 20px;
  padding-top: 40px; /* Add top padding */
}

.total-spots {
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
  padding: 20px; /* Add padding */
}

.spot-list {
  padding: 0;
}

/*.spot-list ion-item {
  --background: cyan;
}*/
</style>
