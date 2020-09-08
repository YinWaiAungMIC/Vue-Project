<template>
	<div class="card bg-light" style="width:200px">
		<img :src="item.item_photo" class="card-img-top" alt="Card image" style="width:100%;height: 150px">
		<div class="card-body">
			<div class="card-title">{{item.item_name}}</div>
		</div>
		
		<div class="card-footer">
			<router-link class="btn btn-success" :to="{name:'detail',params:{id:item.item_id}}">Detail</router-link>
			<button class="btn btn-info ml-3" @click="addToCart()">Add to Cart</button>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:{
			item:Object
		},
		methods:{
			addToCart(){
				let myitem={id:this.item.item_id,name:this.item.item_name,price:this.item.item_price,qty:1}

				this.$store.dispatch('addToCart',myitem)


			}
		}
	}
</script>