import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getDishes() {
    return apiClient.get('/dishes')
  },
  getBlogs() {
    return apiClient.get('/blogs')
  },
  getBlogById(id) {
    return apiClient.get('/blogs/' + id)
  }
}
