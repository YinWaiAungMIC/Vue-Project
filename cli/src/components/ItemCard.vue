<template>
	<div class="card bg-light" style="width:200px">
		<img :src="item.item_photo" class="card-img-top" alt="Card image" style="width:100%;height: 150px">
		<div class="card-body">
			<div class="card-title">{{item.item_name}}</div>
		</div>
		
		<div class="card-footer">
			<router-link class="btn btn-success" :to="{name:'detail',params:{id:item.item_id}}">Detail</router-link>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:{
			item:Object
		},
	}
</script>