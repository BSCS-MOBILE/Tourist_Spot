<template>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ name }}</ion-title>
      </ion-toolbar>
    </ion-header>
  </template>
  
  <script setup lang="ts">
  defineProps({
    name: String,
  });
  </script>
  
  