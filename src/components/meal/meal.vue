<template>
	<cube-scroll :options="scrollOptions">
		<div class="meal">
			<div class="scroll-nav-wrapper">
				<cube-scroll-nav>
					<ul>
						<split></split>
						<router-link
							:to="{path:'/host'}"
							tag="li"
							class="shop-item border-bottom-1px"
							v-for="shop in shops"
							:key="shop.seller.name"
						>
							<div class="icon">
								<img width="64" height="64" :src="shop.seller.avatar">
							</div>
							<div class="content">
								<h2 class="name">{{shop.seller.name}}</h2>
								<p class="desc">{{shop.seller.description}} / {{shop.seller.deliveryTime}}分钟送达</p>
								<div class="extra">
									<span class="count"><span>月售{{shop.seller.sellCount}}单</span><span> 起送价{{shop.seller.minPrice}}元</span></span>
								</div>
							</div>
						</router-link>
					</ul>
				</cube-scroll-nav>
			</div>
		</div>
	</cube-scroll>
</template>

<script>
	import { getSeller } from 'api'
	import Split from 'components/split/split'
	import Host from 'components/host/host'
	import shopData from '../../../data.json'
	
	export default {
		name: 'meal',
		props: {
			data: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				shops: [],
				seller: {},
				scrollOptions: {
					click: false,
					directionLockThreshold: 0	//防止横向竖向冲突
				}
			}
		},
		computed: {
			
		},
		created() {
			this.shops = shopData.shops
		},
		components: {
			Split,
			Host
		}
	}
</script>

<style lang="stylus" scoped>
	@import "~common/stylus/variable"
	.meal
		position: relative
		text-align: left
		height: 100%
		.shop-item
			display: flex
			margin: 18px
			padding-bottom: 18px
			position: relative
			&:last-child
				border-none()
				margin-bottom: 0
			.icon
				flex: 0 0 64px
				width: 64px
				margin-right: 16px
				img
					border-radius: 2px
			.content
				flex: 1
				.name
					margin: 2px 0 8px 0
					height: 14px
					line-height: 14px
					font-size: $fontsize-medium
					color: $color-dark-grey
				.desc, .extra
					line-height: 10px
					font-size: $fontsize-small-s
					color: $color-light-grey
				.desc
					line-height: 12px
					margin-bottom: 8px
					text-align: right
				.extra
					.count
						margin-right: 12px
</style>
