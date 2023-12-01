<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- <strong>This is a login page</strong> -->
      <div id="container">
        <EmailInput @change="handleEmailUpdate" />
        <PasswordInput @change="handlePasswordUpdate" />
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
import PasswordInput from "@/components/Input/PasswordInput.vue";
import EmailInput from "@/components/Input/EmailInput.vue";
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
  if (
    emailInput.value.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    ) &&
    passwordInput.value
  ) {
    loginDisabled.value = false;
  }
};

const handleLogin = async () => {
  const loginDetails: LoginDetails = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  const loginResponse = await login(loginDetails);
  if ("token" in loginResponse) {
    await Preferences.set({
      key: "user",
      value: JSON.stringify(loginResponse),
    });
    router.replace("/menu");
  } else {
    alert("login failed");
  }

  // ASK ABOUT THIS -> why TS gives me an error when I do this!
  // if (loginResponse.token) {
  //   console.log("log in success");
  // } else {
  //   console.log("failed log in");
  // }
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
