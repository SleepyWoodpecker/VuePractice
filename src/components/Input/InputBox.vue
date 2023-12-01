<!-- check understanding of why event emitting is used in vue instead of passing down functions -->

<template>
  <div>
    <label :for="label">{{ label }}</label>
    <ion-input
      ref="inputRef"
      class="custom"
      fill="outline"
      :inputmode="inputType"
      :id="label"
      :error-text="errorText"
      @ion-change="handleChange"
      @ion-focus="handleFocus"
    ></ion-input>
  </div>
</template>

<script setup lang="ts">
import { IonInput } from "@ionic/vue";
import { ref } from "vue";

const inputRef = ref("");

const emit = defineEmits<{
  change: [content: string];
  focus: [content: string];
}>();

// figure out how to make a default value
defineProps<{
  label: string;
  inputType?:
    | "text"
    | "email"
    | "tel"
    | "url"
    | "search"
    | "none"
    | "numeric"
    | "decimal";
  errorText?: string;
}>();

const handleChange = (event: Event) => {
  const input = (event.target as HTMLInputElement).value;
  emit("change", input);
};

const handleFocus = () => {
  emit("focus", "");
};
</script>

<style scoped>
label {
  display: block;
  padding: 0px 10px;
}

ion-input.custom {
  margin: 10px 0px;
}
</style>
