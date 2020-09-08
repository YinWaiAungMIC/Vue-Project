<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12 my-5">Your Shopping Cart</div>
		</div>
		<div class="row">
			<div class="col-md-8">
				<table class="table table-bordered">
					<thead class="thead-dark">
						<tr>
							<th>No</th>
							<th>Name</th>
							<th>Price</th>
							<th>Qty</th>
							<th>Subtotal</th>
						</tr>
					</thead>

					<tbody>
						<tr v-for="(item,index) in cart" :key="index">
							<td>{{++index}}</td>
							<td>{{item.name}}</td>
							<td>{{item.price}}</td>
							<td>
								<button class="btn btn-sm px-2 btn-outline-danger" @click="addCart(item.id)">+</button> <input type="number" :value=item.qty class="form-control w-25 d-inline-block" v-if="item.qty>=0">							<button class="btn btn-sm px-2 btn-outline-danger"  @click="reduceCart(item.id)">-</button>

								<button @click="removeFromCart(item.id)" class="btn btn-sm btn-danger mx-2">Remove</button>
								</td>
								<td>
									{{item.price*item.qty}} MMK
								</td>
							
						</tr>
					</tbody>
					
				</table>

				<div class="form-group">
					<textarea class="form-control" placeholder="Your Message Here!" v-model="notes"></textarea>
				</div>
			</div>
			<!-- <div class="col-md-4">
				<ul class="list-group">
					<li class="list-group-item">
						<span class="float-left"><strong>{{cartItemsCount}}</strong> items</span>

						<span class="float-right">{{itemsSubtotal}} MMK</span>
					</li>
					<li class="list-group-item">
						<span class="float-left">Shipping:</span>
						<select v-model="selectedShippingOption" class="float-right">
							<option disabled value="">Please select an option</option>
							<option v-for="option in shippingOptionsArray" :key="option.text" :value="option.rate">{{option.text}} (${{option.rate}})</option>
						</select>
					</li>
					<li class="list-group-item">
						<span class="float-left">Subtotal</span>
						<span class="float-right"> {{Subtotal}} MMK</span>
						
					</li>
					li class="list-group-item">
						<span class="float-left">Tax ({{salesTax *100}}%)</span>
						<span class="float-right"> {{salesTaxApplied }} MMK</span>
						
					</li>
					li class="list-group-item">
						<span class="float-left">Total</span>
						<span class="float-right"> {{total}} MMK</span>
						
					</li>
				</ul>
				<button :disabled="!this.selectedShippingOption" class="btn btn-lg btn-success mt-2" @click="order()">Check out</button>
			</div> -->
		</div>
		
</div>
</template>

<script type="text/javascript">
	/*import ItemService from '@/services/ItemService.js'*/

	export default{
		computed:{
			cart(){
				return this.$store.state.cart;
			},
		},
		methods:{
			removeFromCart(itemId){
				this.$store.dispatch('removeFromCart',itemId)
			},
			addCart(itemId){
				this.$store.dispatch('addCart',itemId)
			},
			reduceCart(itemId){
				this.$store.dispatch('reduceCart',itemId)
			}
		}

	}
</script>