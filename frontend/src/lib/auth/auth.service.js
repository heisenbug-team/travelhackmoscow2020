import axios from 'axios'
import crypto from 'crypto'

import router from './../../router/backend'

class AuthService {
  login (user) {
    return axios
      .post(router.login(), {
        username: user.username,
        password: crypto
          .createHash('sha1')
          .update(user.password, 'binary')
          .digest('hex')
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('token', JSON.stringify(response.data.token))
          localStorage.setItem('username', user.username)
          localStorage.setItem('name', response.data.name)
        }
      })
      .catch(error => {
        console.error(`Error: ${error}`)
      })
  }

  logout () {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('name')
  }

  register (credentials) {
    return axios.post(router.register(), {
      mode: credentials.mode,
      username: credentials.username,
      name: credentials.name,
      password: crypto
        .createHash('sha1')
        .update(credentials.password, 'binary')
        .digest('hex'),
      languages: credentials.languages,
      interests: credentials.interests
    })
  }
}

export default new AuthService()
