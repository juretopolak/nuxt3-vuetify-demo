<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { mdiMenu } from '@mdi/js'

</script>

<template>
  <v-app>
    <v-app-bar clipped-left app color="test2">
      <v-app-bar-title>App Layout</v-app-bar-title>
      <template #append>
        <UserMenu />
      </template>
    </v-app-bar>
    <v-navigation-drawer permanent>
      <MainMenu />
    </v-navigation-drawer>
    <v-main>
      <div class="pa-3">
        <slot name="default" />
      </div>
    </v-main>
  </v-app>
</template>

<style>

.v-toolbar__prepend{
  margin-inline-start: 8px !important;
}
.v-toolbar__append {
  margin-inline-end: 8px !important;
}
</style>
