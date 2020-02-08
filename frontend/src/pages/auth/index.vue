<template>
  <div class="auth-card justify-center flex-center">
    <div style="text-align: center">
      <logo />
    </div>

    <vertical-separator />

    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-stepper v-model="step" ref="stepper" color="primary" animated contracted>
        <q-step :name="1" icon="person">
          <q-card-section align="center">
            Добро пожаловать

            <q-btn-toggle
              v-model="mode"
              toggle-color="primary"
              :options="mode_options"
            />
          </q-card-section>
        </q-step>

        <q-step :name="2" icon="account_circle">
          <q-card-section align="center">
            <q-input filled v-model="nickname" label="Псевдоним" hint="Введите псевдоним" required />

            <vertical-separator />

            <q-input filled v-model="name" label="Имя" hint="Введите имя" required />

            <vertical-separator />

            <q-input
              filled
              v-model="email"
              label="Адрес электронной почты"
              hint="Введите адрес электронной почты"
              required
            />
          </q-card-section>
        </q-step>

        <q-step :name="3" icon="language">
          <q-card-section align="center">
            <p>Выберете языки, на которых вы готовы общаться:</p>
            <q-option-group
              type="checkbox"
              :options="languages_options"
              v-model="languages_selected"
            />
          </q-card-section>
        </q-step>

        <q-step :name="4" icon="insert_emoticon">
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
              @click="$refs.stepper.next()"
              color="primary"
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
    </q-form>
  </div>
</template>

<script>
import verticalSeparator from '../../components/common/vertical-separator'
import logo from '../../components/brand/logo'

export default {
  data () {
    return {
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
  components: {
    verticalSeparator,
    logo
  }
}
</script>
