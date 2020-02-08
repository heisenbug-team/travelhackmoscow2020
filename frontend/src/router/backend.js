export default {
  host: 'http://localhost:8080',

  register () {
    return this.host + '/api/v1/auth/register'
  },

  login () {
    return this.host + '/api/v1/auth/login'
  }
}
