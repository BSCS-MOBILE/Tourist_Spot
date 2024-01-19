<template>
  <ion-page>
    <ion-content :fullscreen="true" class="login-page">
      <header-layout name="Login"/>
      <div class="container">
        <h1 class="login">Please Login</h1>
        <ion-item class="custom-item">
          <ion-icon :icon="mail" slot="start"></ion-icon>
          <ion-input class="custom-input-email" type="email" v-model="email" placeholder="Email" id="emailField"></ion-input>
        </ion-item>

        <ion-item class="custom-item">
          <ion-icon :icon="key" slot="start"></ion-icon>
          <ion-input class="custom-input-password" type="password" v-model="password" placeholder="Password" id="passwordField"></ion-input>
        </ion-item>
        <ion-button expand="full" class="custom-button" @click="submit">Login</ion-button>
        <p class="custom-register-link">Don't have an account? <a href="/register" class="register-link">Register</a></p>
      </div>
    </ion-content>

    <ion-alert
      :is-open="isOpen"
      header="Error"
      :message="alertMessage"
      :buttons="alertButtons"
      @didDismiss="setOpen(false, '')"
    ></ion-alert>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonItem, IonInput, IonIcon, IonButton, IonAlert, IonContent } from '@ionic/vue';
import { mail, key } from 'ionicons/icons';
import HeaderLayout from '../layout/HeaderLayout.vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

let email = ref('');
let password = ref('');
let isOpen = ref(false);
let alertMessage = ref('');
const alertButtons = ['Close'];
const route = useRoute();
const Router = useRouter();

const setOpen = (state: boolean, message: string) => {
  isOpen.value = state;
  alertMessage.value = message;
};

if (localStorage.getItem('user')) {
  location.href = 'home';
}

async function submit() {
  if (!email.value || !password.value) {
    setOpen(true, 'Please enter both email and password.');
    return;
  }

  try {
    const res = await axios.post("http://localhost:3000/auth/login", {
      email: email.value,
      password: password.value
    });

    localStorage.setItem('user', JSON.stringify({
      email: email.value,
      password: password.value
    }));

    if (route && route.query.redirect) {
      location.href = String(route.query.redirect);
    } else {
      location.href = 'dashboard';
    }
  } catch (err) {
    setOpen(true, 'Invalid email or password. Please try again.');
  }
}
</script>

<style scoped>
.container {
  width: 80%;
  max-width: 400px;
  padding: 50px;
  background-color: #12b3db;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 150px auto;
}

.custom-item {
  margin-bottom: 20px;
}

.custom-input {
  border-radius: 8px;
  padding: 15px;
}

.custom-button {
  border-radius: 8px;
  margin-top: 20px;
  background-color: #4CAF50;
  color: #fff;
  font-weight: bold;
}

.custom-register-link {
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
}

.register-link {
  color: #fff;
}

.login {
  color: #fff;
  text-align: center;
  font-weight: bold;
}
</style>
