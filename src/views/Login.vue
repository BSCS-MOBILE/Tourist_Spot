<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      <header-layout name="Login"/>

      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import HeaderLayout from '../layout/HeaderLayout.vue'
</script>
