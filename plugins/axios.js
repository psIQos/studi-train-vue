export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    // eslint-disable-next-line no-console
    console.log('Making request to ' + config.url)
  }, (error) => {
    return Promise.reject(error)
  })

  $axios.onError((error) => {
    return Promise.resolve(error)
    // const code = parseInt(error.response && error.response.status)
    // if (code === 401) {
    //   redirect('/400')
    // }
  })
}
