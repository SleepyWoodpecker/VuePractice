<template>
  <ion-card class="card-container">
    <!-- <div class="card-container"> -->
    <slot v-if="icon" name="menuIcon"></slot>
    {{ name }}
    <!-- </div> -->
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard } from "@ionic/vue";

defineProps<{
  name: string;
  icon?: string;
}>();
</script>

<style scoped>
.card-container {
  /* margin: 0px; */
  --color: #29ac8b;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
