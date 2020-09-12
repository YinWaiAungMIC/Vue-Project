import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: [],
    token: null,
    authStatus: '',
  },
  mutations: {
  	addToCart(state,payload){
  		let item=state.cart.find(item=>item.id==payload.id);
  		if(item){
  			item.qty+=Number(payload.qty);
  		}else{
  			state.cart.push(payload);
  		}

  	},
  	removeFromCart(state,payload){
  		let indexToDelete=state.cart.find(item=>item.id==payload)
  		state.cart.splice(indexToDelete,1);
  	},
  	saveCart(state){
  		localStorage.setItem('cart',JSON.stringify(state.cart));

  	},
  	addCart(state,payload){
  		let indexToAdd=state.cart.find(item=>item.id==payload)
  		if(indexToAdd){
  		indexToAdd.qty+=1;
  	}
  	},
  	reduceCart(state,payload){
  		let indexToReduce=state.cart.find(item=>item.id==payload)
  		
  			if(indexToReduce.qty==1){
  		state.cart.splice(indexToReduce,1);
  	}else{
      indexToReduce.qty-=1;
    }
  	},

  	getData(state){
  		if(localStorage.getItem('cart')){
  			state.cart=JSON.parse(localStorage.getItem('cart'));
  		}else{
  			state.cart=[];
  		}

  	},
    auth_success(state,token){
      state.authStatus = 'success'
      localStorage.setItem('token',token)
      state.token = token
    },
    auth_fail(state){
      state.authStatus = 'fail'
    },
    logout(state){
      localStorage.removeItem('token')
      state.token=null
}
    
  },
  actions:{
  	addToCart({commit},payload){
 	commit('addToCart',payload)
 	commit('saveCart')

  	},
  	removeFromCart({commit},payload){
  		commit('removeFromCart',payload)
  		commit('saveCart')
  	},
  	addCart({commit},payload){
  		commit('addCart',payload)
  		commit('saveCart')
  	},
  	reduceCart({commit},payload){
  		commit('reduceCart',payload)
  		commit('saveCart')
  	},

  	getData({commit}){
  		commit('getData')

  	},

    login({commit,dispatch},user){
      return new Promise((resolve, reject) => {
          commit('auth_request');
          let data = {
              client_id: 2,
              client_secret: 'PPSENHFBsgndexrv5ynlMNnKP7soTjFUFt3VCr1h',
              grant_type: 'password',
              username: user.username,
              password: user.password
          };
          axios.post('http://127.0.0.1:8000/oauth/token', data)
              .then(res => {
                  const token = res.data.access_token;
                  localStorage.setItem('token', token);

                  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                  commit('auth_success', token);
                  dispatch('getUser');
                  resolve(res);
              })
              .catch(err => {
                  commit('auth_fail');
                  localStorage.removeItem('token');
                  reject(err);
              });
      });
},
    loginSuccess({commit},token){
      commit('auth_success',token)
    },
    loginFail({commit}){
      commit('auth_fail')
    },
    logout({commit}){
      commit('logout')
}

  },
  getters:{
    isLoggedIn(state){
      return state.token
    },
    authStatus(state){
      return state.authStatus
} 

  }
})

export default store