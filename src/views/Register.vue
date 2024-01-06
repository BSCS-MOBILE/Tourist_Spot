<template>
    <ion-page>
      
      <ion-content :fullscreen="true">
        <header-layout name="Register"/>
        <div class="container">
          <ion-item>
          <ion-input type="text" v-model="firstName" placeholder="First Name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input type="text" v-model="lastName" placeholder="Last Name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input type="email" v-model="email" placeholder="Email"></ion-input>
        </ion-item>
  
        <ion-item>
          <ion-input type="password" v-model="password" placeholder="Password"></ion-input>
        </ion-item>
        <ion-button @click="submit">Register</ion-button><br/>
      </div>
    </ion-content>
    </ion-page>
    <ion-alert
      :is-open="isOpen"
      header="Error"
      message="Invalid User Account"
      :buttons="alertButtons"
    @didDismiss="setOpen(false)"
  ></ion-alert>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonContent, IonLabel,IonInput, IonButton, IonAlert} from '@ionic/vue';
  import HeaderLayout from '../layout/HeaderLayout.vue';
  import axios from "axios"
  import { ref } from 'vue'
  let  email= ref('')
  let  password= ref('')
  let  firstName= ref('')
  let lastName= ref('')
  let isOpen = ref(false)
  const alertButtons = ['Close'];

  const setOpen = (state: boolean) => {
  isOpen.value = state;
  };
  
  function submit() {
    if(!email.value || !password.value || !firstName.value || !lastName.value) {
      console.log(password)
      setOpen(true);
    } else {
      axios.post("http://localhost:3000/auth/register", {
          email: email.value,
          password: password.value,
          firstName: firstName.value,
          lastName: lastName.value
        }).then(res => {
            location.href = 'login'
        }).catch((err) => {
        });
    }
  }
  
  </script>
  
  <style scoped>
  .container {
    margin:auto;
    width: 80%;
    padding-top:100px;
  }
  </style>