<template>
  <ion-content class="background">
    <h1 class="title">Details</h1>
    
    <!-- Your existing ion-card component -->
    <ion-card>
      <ion-card-header :style="{ backgroundImage: 'url(' + image + ')', height: '245px', backgroundSize: 'cover' }" class="card-background"></ion-card-header>
      <div class="card-content">
        <ion-card-content>
          <h4>{{ description }}</h4>
          <ion-card-subtitle class="price">PHP {{ price }}</ion-card-subtitle>
        </ion-card-content>
      </div>
    </ion-card>
  </ion-content>
</template>

<script>
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonContent, IonButton } from '@ionic/vue';
import axios from "axios";

export default {
  name: 'Details',
  components: {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonButton, // Added IonButton in components
    IonContent,
  },
  data() {
    return {
      touristName: '',
      description: '',
      price: '',
      image: '',
    };
  },
  created() {
    this.getTourist();
  },
  methods: {
    getTourist() {
      const id = this.$route.params.id;
      axios.get(`http://localhost:3000/tourist/${id}`)
        .then(res => {
          const item = res.data.data;
          this.touristName = item.touristName;
          this.description = item.description;
          this.price = item.price;
          this.image = `http://localhost:3000/photos/product/${item.image}`;
        })
        .catch((err) => {
          // Handle error
        });
    },
  }
};
</script>

<style scoped>
.background {
  padding-left: 30px;
  padding-right: 30px;
  margin: 0;
}
.card-content {
  background-color: rgb(57, 119, 173);
  color: antiquewhite;
}
.name {
  font-size: 30px;
  font-weight: bold;
  color: aliceblue;
  text-align: center;
  padding: 10px;
}
.title {
  font-size: 30px;
  font-weight: bold;
  color: aliceblue;
  text-align: center;
  padding: 10px;
  background-color: rgb(57, 119, 173);
}
.price {
  font-style: italic;
  color: cyan;
}
</style>
