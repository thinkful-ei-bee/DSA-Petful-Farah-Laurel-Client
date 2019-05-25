
const ApiService = {
  getDog() {
    return fetch(`http://localhost:8000/api/dog`, {
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  deleteDog() {
    return fetch(`http://localhost:8000/api/dog/delete`, {
        method: "DELETE"
      })
  },

  getCat() {
    return fetch(`http://localhost:8000/api/cat`, {
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  deleteCat() {
    return fetch(`http://localhost:8000/api/cat/delete`, {
        method: "DELETE"
      })
  },
}

export default ApiService;