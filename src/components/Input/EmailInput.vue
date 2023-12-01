<template>
  <InputBox
    ref="emailInputRef"
    label="Email"
    input-type="email"
    error-text="Email invalid"
    @change="handleEmailInputChange"
    @focus="handleEmailInputFocus"
  />
</template>

<script setup lang="ts">
import InputBox from "./InputBox.vue";
import { ref } from "vue";

const emailInputRef = ref();

const handleEmailInputFocus = () => {
  const childInput = emailInputRef.value.$el.children[1];
  childInput.classList.remove("ion-invalid");
};

const handleEmailInputChange = (content: string) => {
  // i think it is okay to index it since I know the layout of the child element
  const childInput = emailInputRef.value.$el.children[1];

  // as long as the user has clicked the box before and has left it blank, I will consider it touched
  childInput.classList.add("ion-touched");

  if (
    !content.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    )
  ) {
    childInput.classList.add("ion-invalid");
  }
};
</script>
