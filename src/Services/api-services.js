import config from '../config'

const ApiService = {
  getDog() {
    return fetch(config.REACT_APP_API_BASE+'/dog', {
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  deleteDog() {
    return fetch(config.REACT_APP_API_BASE+'/dog/delete', {
        method: "DELETE"
      })
  },

  getCat() {
    return fetch(config.REACT_APP_API_BASE+'/cat', {
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  deleteCat() {
    return fetch(config.REACT_APP_API_BASE+'/cat/delete', {
        method: "DELETE"
      })
  },
}

export default ApiService;