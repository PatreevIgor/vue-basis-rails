/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import App from '../app.vue'

export const eventEmitter = new Vue
  console.log('====================')
  console.log(eventEmitter._uid)
  console.log('====================')

import counter from '../components/counter'
import argumentComponent from '../components/argument-component'
import validateArguments from '../components/validate-arguments'
import sendParamToParent from '../components/send-param-to-parent'
import sendFunctionFromParentToChild from '../components/send-function-from-parent-to-child'
import childFirst from '../components/child-first'
import childSecond from '../components/child-second'
import eventEmitterChildFirst from '../components/event-emitter-child-first'
import eventEmitterChildSecond from '../components/event-emitter-child-second'


Vue.component('app-counter', counter);
Vue.component('app-argument-component', argumentComponent);
Vue.component('app-validate-arguments', validateArguments);
Vue.component('app-send-param-to-parent', sendParamToParent);
Vue.component('app-send-function-from-parent-to-child', sendFunctionFromParentToChild);
Vue.component('app-child-first', childFirst);
Vue.component('app-child-second', childSecond);
Vue.component('app-event-emitter-child-first', eventEmitterChildFirst);
Vue.component('app-event-emitter-child-second', eventEmitterChildSecond);

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)

  console.log(app)
})

// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>

// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the project is using turbolinks, install 'vue-turbolinks':
//
// yarn add vue-turbolinks
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: () => {
//       return {
//         message: "Can you say hello?"
//       }
//     },
//     components: { App }
//   })
// })
