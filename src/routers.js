import Home from 'components/home/home'
import Host from 'components/host/host'

const routers = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/host',
		name: 'host',
		component: Host
	}
]
export default routers
