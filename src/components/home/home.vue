<template>
	<div id="home">
		<div class="wrapper">
			<menu-tab :tabs="tabs"></menu-tab>
		</div>
	</div>
</template>

<script>
	import MenuTab from 'components/menu-tab/menu-tab'
	import { getSeller } from 'api'
	import qs from 'query-string'
	import Meal from 'components/meal/meal'
	import Order from 'components/order/order'
	import Mine from 'components/mine/mine'
	
	export default {
		name: 'home',
		data() {
			return {
				seller: {
					id: qs.parse(location.search).id
				}
			}
		},
		computed: {
			tabs() {
				return [
					{
						label: '用餐',
						component: Meal
					},
					{
						label: '订单',
						component: Order
					},
					{
						label: '我的',
						component: Mine
					}
				]
			}
		},
		created() {
			this._getSeller()
		},
		methods: {
			_getSeller() {
				getSeller().then((seller) => {
					this.seller = seller
				})
			}
		},
		components: {
			MenuTab
		}
	}
</script>

<style lang="stylus" scoped>
	#home
		.wrapper
			position: fixed
			top: 0
			left: 0
			right: 0
			bottom: 0
</style>
