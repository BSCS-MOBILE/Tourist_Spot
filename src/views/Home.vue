<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <header-layout name="Home"/>
      <template v-if="products">
        <product-item v-for="n in products" ref="num" :key="n.id" :product-name="n.productName" :price="n.price" :image="n.image" :id="n.id"/>
      </template>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, } from '@ionic/vue';
import HeaderLayout from '../layout/HeaderLayout.vue'
import ProductItem from '../components/ProductItem.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/store'
import axios from 'axios';

export default {
  name: 'Home',
  components : {
    IonPage, IonContent, HeaderLayout, ProductItem
  },
  data () {
    return {
      products: []
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      const data = await axios.get("http://localhost:3000/products");
      this.products = data.data.data 
    }
  }
}
// const store = useStore(key)
// let products = [];
// let message = ref('hello');
// import axios from 'axios';

// onIonViewWillEnter(async () => {
//   console.log('Home page will enter');
//   const data = await axios.get("http://localhost:3000/products");
//   store.state.products = data.data.data;
//   products = ref(store.state.products);
// });
//     onIonViewDidEnter(async() => {
//       console.log('Home page did enter');
//     });
    
//     onIonViewDidLeave(() => {
//       console.log('Home page did leave');
//     });
  
//     onIonViewWillLeave(() => {
//       console.log('Home page will leave');
//     });
</script>

