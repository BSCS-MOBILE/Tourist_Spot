<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      <header-layout name="Login"/>
      <div class="container">
        <ion-item>
          <ion-icon :icon="mail"></ion-icon>
          <ion-input type="email" v-model="email" placeholder="Email"></ion-input>
        </ion-item>
  
        <ion-item>
          <ion-icon :icon="key"></ion-icon>
          <ion-input type="password" v-model="password" placeholder="Password"></ion-input>
        </ion-item>
        <ion-button @click="submit">Login</ion-button><br/>
        <a href="/register">Register</a>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonIcon, IonButton, IonAlert} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import HeaderLayout from '../layout/HeaderLayout.vue'
import { mail, key } from "ionicons/icons"
import { useRoute, useRouter } from 'vue-router'
import axios from "axios"
import { ref } from 'vue'
let email = ref('');
let password= ref('');
let isOpen = ref(false);
const alertButtons = ['Close'];
const route = useRoute();
const Router = useRouter();
const setOpen = (state: boolean) => {
  isOpen.value = state;
};

    async function submit () {
      if(email.value && password.value) {
        
        axios.post("http://localhost:3000/auth/login", {
          email: email.value,
          password: password.value
        }).then(res => {
            localStorage.setItem('user', JSON.stringify({
              email: email.value,
              password: password.value
            }))
            if(route && route.query.redirect) {
              location.href = String(route.query.redirect)
            } else {
              Router.push({path: 'home'})
            }
        }).catch((err) => {
            setOpen(true);
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