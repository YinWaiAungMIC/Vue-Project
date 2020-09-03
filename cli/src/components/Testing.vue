<template>
	<div>
		<h1>{{title}}</h1>
		<p>{{msg}}</p>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:{
			msg:null
		},
		data (){
			return {
				title: 'Testing Vue'

			}
		}
	}
	
</script>