<template>
  <div>
    <label :for="label">{{ label }}</label>
    <ion-input
      ref="inputRef"
      fill="outline"
      class="custom"
      :inputmode="inputType"
      :id="`${label}`"
      :error-text="errorText"
      @ion-focus="handleFocus"
      @ion-blur="handleBlur"
    ></ion-input>
  </div>
</template>

<script setup lang="ts">
import { IonInput } from "@ionic/vue";
import { ref } from "vue";

const inputRef = ref();

const props = defineProps<{
  // is this how you are supposed to handle specific types in VUE TS?
  inputType:
    | "text"
    | "email"
    | "tel"
    | "url"
    | "search"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
  label: string;
  errorText?: string;
}>();

const emit = defineEmits<{
  update: [value: string];
}>();

const handleFocus = () => {
  const inputEl = inputRef.value.$el;
  // reset all the classes added during validation
  inputEl.classList.remove("ion-touched", "ion-invalid");
};

// do form validation after the user leaves the input box
const handleBlur = (event: Event) => {
  const input = (event.target as HTMLInputElement).value;
  const inputEl = inputRef.value.$el;

  // if the input box is empty, return
  if (input === "") {
    emit("update", "");
    return;
  }

  // else indicate that the email input box has been touched
  inputEl.classList.add("ion-touched");

  // if the input box is an email, validate its format
  if (props.inputType === "email") {
    if (
      !input.match(
        /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      )
    ) {
      inputEl.classList.add("ion-invalid");
      emit("update", "");
    }
  }

  // it is okay to put the emit here because clicking the login button will also trigger a blur event
  console.log("emitting");
  emit("update", input);
};
</script>

<style scoped>
label {
  display: block;
  padding: 0px 10px;
}

ion-input.custom {
  --highlight-color-focused: blue;
  margin: 10px 0px;
}
</style>
