<template>
    <ion-page>
      
      <ion-content :fullscreen="true">
        <header-layout name="Register"/>
      
    </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonContent} from '@ionic/vue';
  import HeaderLayout from '../layout/HeaderLayout.vue'
  </script>
  
  <style scoped>
  /* .container {
    margin:auto;
    width: 80%;
    padding-top:100px;
  } */
  </style>