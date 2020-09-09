<template>
   
	<!-- <div class="bbb_deals_featured d"> -->
    <div class="container d">
    	<h1 style="color: #42f542;"><center>Product Detail</center></h1>

        <div class="row my-4 d" >
            <div class="col d-flex flex-lg-row flex-column align-items-center justify-content-center d">
                <!-- bbb_deals -->
                <div class="bbb_deals d">
                    <div class="ribbon ribbon-top-right d"><span>{{item.item_discount}}% OFF</span></div>
                    <div class="bbb_deals_title d">{{item.item_desc}}</div>
                    <div class="bbb_deals_slider_container d">
                        <!-- bbb_deals Item -->
                        <div class=" bbb_deals_item d">
                            <div class="bbb_deals_image d"><img :src="item.item_photo" alt=""></div>
                            <div class="bbb_deals_content d">
                                
                                <div class="bbb_deals_info_line d-flex flex-row justify-content-start d">
                                    <div class="bbb_deals_item_name d">{{item.item_name}}</div>
                                    <div class="bbb_deals_item_price ml-auto d">{{item.item_price}} MMK</div>
                                </div>

                                <div class="bbb_deals_info_line d-flex flex-row justify-content-start my-3 d">
                                    <div class="bbb_deals_item_name d">
                                        <input type="number" name="qty" v-model="qty" class="form-control w-25 d-inline-block" min="1" style="float: left;">
                                    </div>
                                    <div class="bbb_deals_item_price ml-auto d"><button class="btn btn-success" @click="addToCart()" style="float: right;">Add to Cart</button></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div> <!-- Featured -->
            </div>
        </div>
    </div>
<!-- </div> -->


</template>

<script type="text/javascript">
	import ItemService from '@/services/ItemService.js'

	export default{
		data (){
			return{
                qty:1,
				item: {}
			}
		},
		mounted(){
			this.getDetail();
		},
		methods:{
            addToCart(){
                let item={id:this.item.item_id,name:this.item.item_name,price:this.item.item_price,qty:this.qty};

                this.$store.dispatch('addToCart',item)
            },
			getDetail(){
				let id=this.$route.params.id;
				ItemService.getItem(id)
					.then(res=>{
						this.item=res.data.item
					})
					.catch(err=>{
						console.log('There was an error:',err.response)
					})
			}
		}
	}
</script>

<style type="text/css">

	.d {
    display: block;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.ribbon {
    width: 150px;
    height: 150px;
    overflow: hidden;
    position: absolute
}

.ribbon::before,
.ribbon::after {
    position: absolute;
    z-index: -1;
    content: '';
    display: block;
    border: 5px solid #2980b9
}

.ribbon span {
    position: absolute;
    display: block;
    width: 225px;
    padding: 8px 0;
    background-color: #3498db;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
    color: #fff;
    font: 100 18px/1 'Lato', sans-serif;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    text-transform: uppercase;
    text-align: center
}

.ribbon-top-right {
    top: -10px;
    right: -10px
}

.ribbon-top-right::before,
.ribbon-top-right::after {
    border-top-color: transparent;
    border-right-color: transparent
}

.ribbon-top-right::before {
    top: 0;
    left: 17px
}

.ribbon-top-right::after {
    bottom: 17px;
    right: 0
}

.ribbon-top-right span {
    left: -25px;
    top: 30px;
    transform: rotate(45deg)
}

.container {
    margin-top: 20px;
    margin-bottom: 20px
}

.bbb_deals_featured {
    width: 100%
}

.bbb_deals {
    width: 36%;
    margin-right: 7%;
    padding-top: 85px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 35px;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px
}

.bbb_deals_title {
    position: absolute;
    top: 27px;
    left: 40px;
    font-size: 20px;
    font-weight: 500;
    color: #3498db;
}

.bbb_deals_slider_container {
    width: 100%
}

.bbb_deals_item {
    width: 100% !important
}

.bbb_deals_image {
    width: 100%
}

.bbb_deals_image img {
    width: 100%
}

.bbb_deals_content {
    margin-top: 33px
}

.bbb_deals_item_category a {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5)
}

.bbb_deals_item_price_a {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6)
}

.bbb_deals_item_name {
    font-size: 24px;
    font-weight: 400;
    color: #000000
}

.bbb_deals_item_price {
    font-size: 24px;
    font-weight: 500;
    color: #df3b3b
}




@media only screen and (max-width: 1199px) {
    .bbb_deals_timer_box {
        width: 150px
    }

    .bbb_deals_timer_unit {
        font-size: 20px
    }
}

@media only screen and (max-width: 991px) {
    .bbb_deals {
        width: 100%;
        margin-right: 0px
    }
}

@media only screen and (max-width: 575px) {
    .bbb_deals {
        padding-left: 15px;
        padding-right: 15px
    }

    .bbb_deals_title {
        left: 15px;
        font-size: 16px
    }

    .bbb_deals_slider_nav_container {
        right: 5px
    }

    .bbb_deals_item_name,
    .bbb_deals_item_price {
        font-size: 20px
    }

    .bbb_deals_item_category a,
    .bbb_deals_item_price_a {
        font-size: 12px
    }

    .bbb_deals_timer_unit {
        font-size: 16px
    }
}

</style>