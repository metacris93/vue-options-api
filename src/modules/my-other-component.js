export const MyOtherComponent = {
	template: `
		<div class="my-component vue">
			<h1>{{ headline }}</h1>
			<p>you have clicked the button {{ clicks }} times</p>
			<button @click="btnClicked">Button</button>
		</div>
	`,
	data () {
		return {
			headline: 'Hello from my other Vue component',
			clicks: 0
		}
	},
	methods: {
		btnClicked () {
			this.clicks++;
		}
	},
  beforeUnmount() {
    console.log("beforeUnmount my-other-component.js", this.$data, this.$el);
  },
  unmounted() {
    console.log("unmounted my-other-component.js", this.$data, this.$el);
  },
};