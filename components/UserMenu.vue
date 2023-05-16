<script setup type="ts">
import { mdiAccountEdit, mdiLogoutVariant, mdiAccount } from '@mdi/js'
const items = reactive([
  {
    title: 'User settings',
    icon: mdiAccountEdit,
    to: '/user/edit'
  },
  {
    title: 'Logout',
    icon: mdiLogoutVariant
  }
])
</script>
<template>
  <client-only>
    <v-menu>
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          :icon="mdiAccount"
          color="default"
          variant="tonal"
        />
      </template>
      <v-card min-width="200">
        <v-list density="compact">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :to="item.to"
            router
            exact
          >
            <template #prepend>
              <v-icon class="ml-2 mr-6" :icon="item.icon" />
            </template>

            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </client-only>
</template>
