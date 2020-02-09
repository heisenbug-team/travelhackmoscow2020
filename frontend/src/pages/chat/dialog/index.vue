<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        v-for="message in this.dialog"
        :key="message.id"
        color="primary"
        :name="getName(message.me)"
        :avatar="getAvatar(message.me)"
        :text="getText(message.text)"
        :sent="message.me"
        :stamp="getStamp(message.time)"
      />
    </div>
  </div>
</template>

<script>
import users from './../users'

let dialog
let user

export default {
  mounted () {
    const id = this.$router.history.current.params.id

    user = users[id]
    dialog = user.dialog
  },
  updated () {
    const id = this.$router.history.current.params.id

    this.user = users[id]
    this.dialog = user.dialog
  },
  data () {
    return {
      dialog,
      user
    }
  },
  methods: {
    getName (isMe) {
      return isMe ? 'Я' : this.user.name
    },
    getAvatar (isMe) {
      return isMe ? 'https://cdn.quasar.dev/img/avatar3.jpg' : this.user.avatar
    },
    getText (text) {
      let arr = []
      arr.push(text)

      return arr
    },
    getStamp (time) {
      if (time === 0 || (time >= 5 && time <= 10)) {
        return `${time} минут назад`
      } else if (time === 1) {
        return `${time} минуту назад`
      } else if (time >= 2 || time <= 4) {
        return `${time} минуты назад`
      }
    }
  }
}
</script>
