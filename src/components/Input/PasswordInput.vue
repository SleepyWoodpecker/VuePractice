<template>
  <InputBox
    ref="passwordInputRef"
    label="Password"
    error-text="Password cannot be empty"
    @focus="handlePasswordFocus"
    @change="handlePasswordChange"
  />
</template>

<script setup lang="ts">
import InputBox from "./InputBox.vue";
import { ref } from "vue";

const passwordInputRef = ref();

const handlePasswordFocus = () => {
  const childInput = passwordInputRef.value.$el.children[1];
  childInput.classList.remove("ion-invalid");
};

const handlePasswordChange = (content: string) => {
  const childInput = passwordInputRef.value.$el.children[1];
  childInput.classList.add("ion-touched");
  // show error if the password box is empty
  if (content === "") {
    childInput.classList.add("ion-invalid");
  }
};
</script>
