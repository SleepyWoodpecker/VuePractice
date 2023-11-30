<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- <strong>This is a login page</strong> -->
      <div id="container">
        <InputBox
          label="Email"
          input-type="email"
          error-text="Enter a valid email"
          v-model="emailInput"
          @update="handleEmailUpdate"
        />
        <InputBox
          label="Password"
          input-type="text"
          @update="handlePasswordUpdate"
        />
        <ion-button
          expand="full"
          class="login"
          @click="handleLogin"
          :disabled="loginDisabled"
          >Login</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonButton } from "@ionic/vue";
import InputBox from "@/components/InputBox.vue";
import { ref } from "vue";

const emailInput = ref("");
const passwordInput = ref("");
const loginDisabled = ref(true);

const handleEmailUpdate = (content: string) => {
  emailInput.value = content;
  checkEnableButton();
};

const handlePasswordUpdate = (content: string) => {
  passwordInput.value = content;
  checkEnableButton();
};

const checkEnableButton = () => {
  if (emailInput.value && passwordInput.value) {
    loginDisabled.value = false;
  }
};

const handleLogin = () => {
  alert("Logged in!")
};
</script>

<style scoped>
#container {
  padding: 4rem 8rem;
}

ion-button.login {
  margin-top: 18px;
}
</style>
