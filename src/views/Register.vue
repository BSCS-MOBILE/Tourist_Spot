<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <header-layout name="Register"/>
      <div class="container">
        <h1 class="register">Please Register</h1>

        <ion-item class="custom-item">
          <ion-icon :icon="personIcon" slot="start"></ion-icon>
          <ion-input class="custom-input" placeholder="First Name" v-model="firstName"></ion-input>
        </ion-item>

        <ion-item class="custom-item">
          <ion-icon :icon="personIcon" slot="start"></ion-icon>
          <ion-input class="custom-input" placeholder="Last Name" v-model="lastName"></ion-input>
        </ion-item>

        <ion-item class="custom-item">
          <ion-icon :icon="mailIcon" slot="start"></ion-icon>
          <ion-input class="custom-input" type="email" placeholder="Email" v-model="email"></ion-input>
        </ion-item>

        <ion-item class="custom-item">
          <ion-icon :icon="keyIcon" slot="start"></ion-icon>
          <ion-input class="custom-input" type="password" placeholder="Password" v-model="password"></ion-input>
        </ion-item>

        <ion-item class="custom-item">
          <ion-icon :icon="keyIcon" slot="start"></ion-icon>
          <ion-input class="custom-input" type="password" placeholder="Confirm Password" v-model="confirmPassword"></ion-input>
        </ion-item>

        <ion-button expand="full" class="custom-button" @click="submit">Register</ion-button>
      </div>
    </ion-content>

    <ion-alert
      :is-open="isOpen"
      header="Error"
      :message="errorMessage"
      :buttons="alertButtons"
      @didDismiss="setOpen(false)"
    ></ion-alert>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonInput, IonIcon, IonButton, IonAlert, IonItem } from '@ionic/vue';
import HeaderLayout from '../layout/HeaderLayout.vue';
import axios from 'axios';
import { ref, watchEffect } from 'vue';
import { person, mail, key } from 'ionicons/icons';

const personIcon = person;
const mailIcon = mail;
const keyIcon = key;

const email = ref('');
const password = ref('');
const firstName = ref('');
const lastName = ref('');
const confirmPassword = ref('');
const isOpen = ref(false);
const errorMessage = ref('');
const alertButtons = ['Close'];

const setOpen = (state: boolean) => {
  isOpen.value = state;
};

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function submit() {
  if (!email.value || !password.value || !firstName.value || !lastName.value) {
    errorMessage.value = 'All fields are required';
    setOpen(true);
  } else if (!isValidEmail(email.value)) {
    errorMessage.value = 'Invalid email format';
    setOpen(true);
  } else if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Password and Confirm Password must match';
    setOpen(true);
  } else {
    axios.post('http://localhost:3000/auth/register', {
      email: email.value,
      password: password.value,
      firstName: firstName.value,
      lastName: lastName.value,
    }).then((res) => {
      if (res.data.success) {
        clearFields();
        location.href = 'login';
      } else {
        errorMessage.value = res.data.message;
        setOpen(true);
      }
    }).catch((err) => {
      errorMessage.value = 'An error occurred while processing your request';
      setOpen(true);
    });
  }
}

function clearFields() {
  email.value = '';
  password.value = '';
  firstName.value = '';
  lastName.value = '';
  confirmPassword.value = '';
}

watchEffect(() => {
  // Watch for changes in res.data.success and clear fields
  clearFields();
});
</script>

<style scoped>
.container {
  width: 80%;
  max-width: 400px;
  padding: 20px;
  background-color: #12b3db;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 50px auto;
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
  margin-top: 16px;
  background-color: #4CAF50;
  color: #fff;
  font-weight: bold;
}

.register {
  color: #fff;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
