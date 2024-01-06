<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/home">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/dashboard">
          <ion-icon aria-hidden="true" :icon="book" />
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" @click="submit">
          <ion-icon aria-hidden="true" :icon="person" />
          <ion-label v-if="!isLoggedIn">LogIn</ion-label>
          <ion-label v-if="isLoggedIn">LogOut</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, onIonViewWillEnter } from '@ionic/vue';
import { home, person, book, logIn } from 'ionicons/icons';
import { ref } from 'vue'

const isLoggedIn = ref(false)
if(localStorage.getItem('user')) {
  isLoggedIn.value = true
}

function submit() {
  if(isLoggedIn.value) {
    isLoggedIn.value = false
  }
  location.href = '/login'
}
</script>
