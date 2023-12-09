<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      <header-layout name="Login"/>
      <div class="container">
        <p>{{ email }}</p>
        <ion-item>
          <ion-icon :icon="mail"></ion-icon>
          <ion-input type="email" v-model="email" @input="update" placeholder="Email"></ion-input>
        </ion-item>
  
        <ion-item>
          <ion-icon :icon="key"></ion-icon>
          <ion-input type="password" placeholder="Password"></ion-input>
        </ion-item>
        <ion-button @click="update">Login</ion-button><br/>
        <a href="/register">Register</a>
      </div>
  </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonIcon, IonButton} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import HeaderLayout from '../layout/HeaderLayout.vue'
import { mail, key } from "ionicons/icons"
import axios from "axios"
import { ref } from 'vue'

export default {
  name: "Login",
  components: [
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonIcon, IonButton,
  HeaderLayout
  ],
  data () {
    return {
      email: "",
      password: ""
    }
  },
  created () {
    this.submit()
  },
  methods: {
    async submit () {
      const data = await axios.post("http://localhost:3000/auth/login", {
        email: this.email,
        password: this.password
      });
      console.log(data);
    }
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