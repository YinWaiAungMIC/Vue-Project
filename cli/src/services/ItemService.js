import axios from 'axios'
let token = localStorage.getItem('token')

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
  }
})

export default{
	//index for Exercise.vue
	getItems(){
		return apiClient.get('/items')
	},
	//detail for Detail.vue
	getItem(id){
		return apiClient.get('/items/'+id)
	},
	createOrder(data){
		return apiClient.post('/orders',data)
	},
	getOrders(){
    return apiClient.get('/orders')
  },
  getOrder(id){
    return apiClient.get('/orders/'+id)
  },
  login(user){
    return axios.post('http://127.0.0.1:8000/oauth/token',user)
}
}
