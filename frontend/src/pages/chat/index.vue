<template>
  <div>
    <q-list bordered>
      <q-separator />
      <q-item-label header>Контакты</q-item-label>

      <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ contact.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.last_message }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import contacts from './users'

export default {
  data () {
    return {
      contacts
    }
  }
}
</script>

<style>

</style>
