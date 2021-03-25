// let MyHeader = {
// 	template: `<div id="header" style="border: 2px solid red;">我是头部</div>`
// };

Vue.component('todo-item', {
	props: ['todo', 'id'],
	template: '<li>[{{id}}] {{todo.text}}</li>'
});

Vue.component('my-header', {
	template: '#header',
	data() {
		return {
			styleObject: {
				border: '2px solid red',
				height: '60px'
			}
		};
	}
});

Vue.component('my-body', {
	template: '#body',
	data() {
		return {
			styleObject: {
				height: '800px'
			}
		};
	}
});

Vue.component('my-nav', {
	template: '#nav',
	data() {
		return {
			styleObject: {
				navStyle: {
					display: 'inline-block',
					height: '100%',
					width: '10%',
					border: '2px solid blue'
				},
				olStyle: {
					'list-style': 'none',
					padding: '0'
				}
			},
			list: [
				{
					id: 0,
					text: '123'
				},
				{
					id: 1,
					text: '123'
				},
				{
					id: 2,
					text: '123'
				}
			]
		};
	}
});

Vue.component('my-main', {
	template: '#main',
	data() {
		return {
			message1: 'Hello Vue',
			message2: '页面加载于 ' + new Date().toLocaleString(),
			message3: 'abcdefg',
			message4: '123',
			seen: true,
			checked: false,
			checkedNames: [],
			data: [
				{text: 'aaa '},
				{text: 'bbb '},
				{text: 'ccc '}
			],
			styleObject: {
				display: 'inline-block',
				height: '100%',
				width: '89%',
				border: '2px solid green',
				float: 'right'
			}
		}
	},
	methods: {
		reverseMessage: function() {
			this.message3 = this.message3.split('').reverse().join('');
		},
		loadCgi: function() {
			axios.get('http://dev.light.oa.com/cgi-bin/light.py?type=game&module=game&op=get')
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			})
		}
	},
	watch: {
		message4: function(newValue, oldValue) {
			console.log(newValue, oldValue);
		}
	}
});

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/', component: Bar }
];

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

var app = new Vue({
	el: document.getElementById('app'),
	router
});