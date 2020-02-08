<template>
  <div class="auth-card justify-center flex-center">
    <vertical-separator />

    <div style="text-align: center">
      <logo style="height: 5em" />
    </div>

    <vertical-separator />

    <q-card>
      <q-card-section align="center">
        <p><strong>Войти в систему</strong></p>

        <q-input
          v-model="credentials.nickname"
          label="Псевдоним"
          hint="Введите псевдоним"
          required
        />

        <q-input
          v-model="credentials.password"
          label="Пароль"
          :type="credentials.isPwd ? 'password' : 'text'"
          hint="Введите пароль"
          required
        >
          <template v-slot:append>
            <q-icon
              :name="credentials.isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="credentials.isPwd = !credentials.isPwd"
            />
          </template>
        </q-input>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn color="primary" label="Войти" type=submit />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import verticalSeparator from '../../../components/common/vertical-separator'
import logo from '../../../components/brand/logo'

export default {
  data () {
    return {
      credentials: {
        nickname: '',
        password: '',
        isPwd: true
      }
    }
  },
  components: {
    verticalSeparator,
    logo
  }
}
</script>

<style>

</style>
