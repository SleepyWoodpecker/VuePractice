<template>
  <ion-card class="icon-container" :class="{ clickable: isClickable }">
    <ion-icon v-if="icon" :icon="icon" size="large"></ion-icon>
    {{ name }}
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonIcon } from "@ionic/vue";

defineProps<{
  name: string;
  icon?: string;
  isClickable?: boolean;
}>();
</script>

<style scoped>
.icon-container {
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
