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
import { LoginDetails } from "@/types";
import { login } from "@/services";
import { Preferences } from "@capacitor/preferences";
import { useRouter } from "vue-router";

const emailInput = ref("");
const passwordInput = ref("");
const loginDisabled = ref(true);
const router = useRouter();

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

const handleLogin = async () => {
  const loginDetails: LoginDetails = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  const loginResponse = await login(loginDetails);

  // ASK ABOUT THIS -> why TS gives me an error when I do this!
  // if (loginResponse.token) {
  //   console.log("log in success");
  // } else {
  //   console.log("failed log in");
  // }
  console.log(loginResponse);
  if ("token" in loginResponse) {
    await Preferences.set({
      key: "user",
      value: JSON.stringify(loginResponse),
    });
    router.replace("/menu");
  } else {
    console.log("nay");
  }
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
