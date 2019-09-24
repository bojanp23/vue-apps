import Vue from 'vue'
import Router from 'vue-router'
import ToDo from './views/ToDo.vue'
import Calculator from './views/Calculator.vue'
import ContactForm from './views/ContactForm.vue'
import Chat from './views/Chat.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/todo',
      name: 'todo',
      component: ToDo
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: Calculator
    },
    {
      path: '/contact-form',
      name: 'contact-form',
      component: ContactForm
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    }
  ]
})
