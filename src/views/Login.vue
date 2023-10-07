<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      <header-layout name="Login"/>
      <div class="container">
        <ion-item>
          <ion-icon :icon="mail"></ion-icon>
          <ion-input type="email" placeholder="Email"></ion-input>
        </ion-item>
  
        <ion-item>
          <ion-icon :icon="key"></ion-icon>
          <ion-input type="password" placeholder="Password"></ion-input>
        </ion-item>
        <ion-button>Login</ion-button><br/>
        <a href="/register">Register</a>
      </div>
  </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonIcon, IonButton} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import HeaderLayout from '../layout/HeaderLayout.vue'
import { mail, key } from "ionicons/icons"
</script>

<style scoped>
.container {
  margin:auto;
  width: 80%;
  padding-top:100px;
}
</style>