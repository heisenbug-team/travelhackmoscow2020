<template>
  <div class="auth-card justify-center flex-center">
    <vertical-separator />

    <div style="text-align: center">
      <logo style="height: 5em" />
    </div>

    <vertical-separator />

    <q-stepper v-model="step" ref="stepper" color="primary" animated contracted>
      <q-step :name="1" icon="person" title="Приветствие">
        <q-card-section align="center">
          <p><strong>Ищите людей вокруг себя!</strong></p>

          <p>Выберете, Вы путешествуете и хотите пообщаться с местными жителями, или Вы ищете туристов и хотите с ними пообщаться?</p>

          <q-btn-toggle
            v-model="mode"
            toggle-color="primary"
            :options="mode_options"
          />
        </q-card-section>
      </q-step>

      <q-step :name="2" icon="account_circle" title="Личные данные">
        <q-card-section align="center">
          <q-input
            filled
            v-model="credentials.nickname"
            label="Псевдоним"
            hint="Введите псевдоним"
          />

          <vertical-separator />

          <q-input
            filled
            v-model="credentials.name"
            label="Имя"
            hint="Введите имя"
          />

          <vertical-separator />

          <q-input
            filled
            v-model="credentials.email"
            label="Адрес электронной почты"
            hint="Введите адрес электронной почты"
          />

          <vertical-separator />

          <q-input
            filled
            v-model="credentials.password"
            label="Пароль"
            :type="credentials.isPwd ? 'password' : 'text'"
            hint="Введите пароль"
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
      </q-step>

      <q-step :name="3" icon="language" title="Языки">
        <q-card-section align="center">
          <p>Выберете языки, на которых вы готовы общаться:</p>
          <q-option-group
            type="checkbox"
            :options="languages_options"
            v-model="languages_selected"
          />
        </q-card-section>
      </q-step>

      <q-step :name="4" icon="insert_emoticon" title="Интересы">
        <q-card-section align="center">
          <p>Выберете интересы:</p>
          <q-option-group
            label="Интересы"
            type="checkbox"
            :options="interests_options"
            v-model="interests_selected"
          />
        </q-card-section>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation align="center">
          <q-btn
            @click="step === 4 ? submit() : $refs.stepper.next()"
            color="primary"
            type="submit"
            :label="step === 4 ? 'Завершить регистрацию' : 'Продолжить'"
          />
          <q-btn
            v-if="step > 1"
            color="secondary"
            @click="$refs.stepper.previous()"
            label="Назад"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
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
        name: '',
        password: '',
        isPwd: true
      },
      step: 1,
      mode: 'tourist',
      mode_options: [
        { label: 'Турист', value: 'tourist' },
        { label: 'Житель Москвы', value: 'local' }
      ],
      languages_selected: [],
      languages_options: [
        { label: 'Русский язык', value: 'russian' },
        { label: 'Английский язык', value: 'english' },
        { label: 'Китайский язык', value: 'chinese' }
      ],
      interests_selected: [],
      interests_options: [
        { label: 'Информационные технологии', value: 'it' },
        { label: 'Спорт', value: 'english' },
        { label: 'Музыка', value: 'chinese' },
        { label: 'Охота и рыбалка', value: 'chinese' },
        { label: 'Литература', value: 'chinese' },
        { label: 'Философия', value: 'chinese' },
        { label: 'Саморазвитие', value: 'chinese' },
        { label: 'Искусство', value: 'chinese' },
        { label: 'Архитектура', value: 'chinese' },
        { label: 'Благотворительность', value: 'chinese' },
        { label: 'Автомобили', value: 'chinese' },
        { label: 'Автомобили', value: 'chinese' },
        { label: 'Автомобили', value: 'chinese' },
        { label: 'Автомобили', value: 'chinese' }
      ]
    }
  },
  methods: {
    async submit () {
      this.$store.dispatch('register', this.credentials)
        .then(async () => {
          await this.$router.push('/')
          window.location.reload()
        })
        .catch((error) => {
          console.error(error.message)

          this.$q.notify({
            message: '<div style="text-align: center; ">Регистрация не удалась. :(</p>',
            color: 'negative'
          })
        })
    }
  },
  components: {
    verticalSeparator,
    logo
  }
}
</script>
