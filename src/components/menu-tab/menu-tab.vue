<template>
	<div class="menu-tab">
	  <div class="slide-wrapper">
	    <cube-slide
	      :loop=false
	      :auto-play=false
	      :show-dots=false
	      :initial-index="index"
	      ref="slide"
	      @change="onChange"
	      @scroll="onScroll"
	      :options="slideOptions"
	    >
	      <cube-slide-item v-for="(tab,index) in tabs" :key="index">
	        <component :is="tab.component" :data="tab.data"
						ref="component"></component>
	      </cube-slide-item>
	    </cube-slide>
	  </div>
		<cube-tab-bar
		  :showSlider=true
		  :useTransition=false
		  v-model="selectedLabel"
		  :data="tabs"
		  ref="tabBar"
		  class="border-top-1px"
		>
		</cube-tab-bar>
	</div>
</template>

<script>
	export default {
	  name: 'menu-tab',
	  props: {
	  	tabs: {
	  		type: Array,
	  		default() {
	  			return []
	  		}
	  	},
	  	initialIndex: {
	  		type: Number,
	  		default: 0
	  	}
	  },
	  data() {
	    return {
	      index: this.initialIndex,
	      slideOptions: {
	      	listenScroll: true,
	      	probeType: 3,
	      	directionLockThreshold: 0
	      }
	    }
	  },
	  computed: {
	    selectedLabel: {
	      get() {
	        return this.tabs[this.index].label
	      },
	      set(newVal) {
	        this.index = this.tabs.findIndex((value) => {
	          return value.label === newVal
	        })
	      }
	    }
	  },
		mounted() {
			this.onChange(this.index)
		},
	  methods: {
	  	onChange(current) {
	  		this.index = current
				const component = this.$refs.component[current]
				component.fetch && component.fetch()
	  	},
	  	onScroll(pos) {
	  		const tabBarWidth = this.$refs.tabBar.$el.clientWidth
	  		const slideWidth = this.$refs.slide.slide.scrollerWidth
	  		const transform = -pos.x / slideWidth * tabBarWidth
	  		this.$refs.tabBar.setSliderTransform(transform)
	  	}
	  }
	}
</script>

<style lang="stylus" scoped>
	@import "~common/stylus/variable"
	
	.menu-tab
	  display: flex
	  flex-direction: column
	  height: 100%
	  >>> .cube-tab
	    padding: 10px 0
	  .slide-wrapper
	    flex: 1
	    overflow: hidden
</style>
