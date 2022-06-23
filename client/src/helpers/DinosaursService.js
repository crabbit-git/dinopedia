const baseURL = 'http://localhost:5000/api/dinosaurs/'

export const getDinosaurs = () => {
    return fetch(baseURL)
      .then(res => res.json())
  }