<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="drawer = !drawer"
          icon="menu"
          color="secondary"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Discover Moscow
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      bordered
    >
      <q-scroll-area class="menu">
        <q-list padding>
          <q-item clickable v-ripple v-if="!getCurrentUsername" to='/login'>
            <q-item-section avatar>
              <q-icon name="exit_to_app" />
            </q-item-section>

            <q-item-section>
              Войти
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple v-if="!getCurrentUsername" to='/register'>
            <q-item-section avatar>
              <q-icon name="contacts" />
            </q-item-section>

            <q-item-section>
              Регистрация
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple v-if="getCurrentUsername" to='/chat'>
            <q-item-section avatar>
              <q-icon name="chat" />
            </q-item-section>

            <q-item-section>
              Чат
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple v-if="getCurrentUsername" to='/chat'>
            <q-item-section avatar>
              <q-icon name="profile" />
            </q-item-section>

            <q-item-section>
              Профиль
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top menu-header" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">{{ getCurrentName ? getCurrentName : "Гость" }}</div>
          <div>{{ getCurrentUsername ? '@' + getCurrentUsername : ""}}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'mainLayout',

  data () {
    return {
      drawer: false
    }
  },

  computed: {
    getCurrentUsername () {
      return localStorage.getItem('username')
    },
    getCurrentName () {
      return localStorage.getItem('name')
    }
  }
}
</script>

<style lang="stylus">
.menu {
  height calc(100% - 150px);
  margin-top 150px;
  border-right 1px solid #ddd;

  &-header {
    background $primary;
    padding 10px;
  }
}
</style>
