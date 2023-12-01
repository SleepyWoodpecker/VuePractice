<template>
  <ion-avatar>
    <ion-img
      class="custom-image"
      :src="src"
      :alt="alt"
      :style="{ '--size': size }"
    >
    </ion-img>
  </ion-avatar>
</template>

<script setup lang="ts">
import { IonAvatar, IonImg } from "@ionic/vue";

defineProps<{
  src: string;
  alt: string;
  size?: string;
}>();
</script>

<style>
.custom-image {
  height: var(--size);
  width: var(--size);
}
</style>
