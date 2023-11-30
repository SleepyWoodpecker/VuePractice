<template>
  <ion-page>
    <ion-content>
      <div id="container">
        <h1>Menu page</h1>
        <div class="icon-bar">
          <ion-icon :icon="exitOutline" size="large"></ion-icon>
          <ion-icon :icon="refreshOutline" size="large"></ion-icon>
        </div>
        <div class="picture-and-name">
          <ion-avatar>
            <ion-img
              src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
              alt="person"
              class="custom-image"
            ></ion-img>
          </ion-avatar>
          <div class="message">
            <h3>Hello</h3>
            <p>Your name</p>
          </div>
        </div>
        <div class="card-container">
          <CardItem
            v-for="card in cardItems"
            :key="card.name"
            :name="card.name"
            :icon="card.icon"
          >
            <template v-slot:menuIcon>
              <ion-icon :icon="card.icon" size="large" />
            </template>
          </CardItem>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon, IonImg, IonAvatar } from "@ionic/vue";
import {
  exitOutline,
  refreshOutline,
  enterOutline,
  listOutline,
  warningOutline,
  locationOutline,
  newspaperOutline,
  peopleOutline,
  eyeOutline,
} from "ionicons/icons";
import CardItem from "@/components/CardItem.vue";

const cardItems = [
  { name: "Clock in", icon: enterOutline },
  { name: "Clock out", icon: exitOutline },
  { name: "Checklist", icon: listOutline },
  { name: "Incident Reporting", icon: warningOutline },
  { name: "Guided Tour", icon: locationOutline },
  { name: "Daily Task List", icon: newspaperOutline },
  { name: "Visitor Management", icon: peopleOutline },
  { name: "Sit Rep", icon: eyeOutline },
];
</script>

<style scoped>
#container {
  padding: 4rem 8rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.icon-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.custom-image {
  height: 5rem;
  width: 5rem;
}

.picture-and-name {
  display: flex;
  gap: 3rem;
  height: 5rem;
}

.message {
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.message * {
  margin-bottom: 0px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>

<!-- .custom-image::part(image) {
  /* height: 5rem;
  width: 5rem; */
  border-radius: 100%;
} -->
