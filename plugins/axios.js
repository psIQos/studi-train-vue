export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    // code for each request
  })

  $axios.onError((error) => {
    if (error.config.url === '/users/authenticate')
      // reject errors on authenticate request to prevent falsely logging in
      return Promise.reject(error)
    const code = error.response.status
    if (code === 401)
      return Promise.resolve(error)
  })
}
