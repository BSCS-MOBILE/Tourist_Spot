<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <header-layout name="Home"/>
      <template v-if="tourists">
         <tourist-spot v-for="n in tourists" ref="num" :key="n.id" :tourist-name="n.touristName" :description="n.description" :price="n.price" :image="url+n.image" :id="n.id"/>
      </template>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, } from '@ionic/vue';
import HeaderLayout from '../layout/HeaderLayout.vue'
import TouristSpot from '../components/TouristSpot.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/store'
import axios from 'axios';

export default {
  name: 'Home',
  components : {
    IonPage, IonContent, HeaderLayout, TouristSpot
  },
  data () {
    return {
      tourists: [],
      url: "http://localhost:3000/photos/product/"
    }
  },
  created() {
    this.getTourists()
  },
  methods: {
    async getTourists() {
      const data = await axios.get("http://localhost:3000/tourist");
      this.tourists = data.data.data 
    }
  }
}
</script>