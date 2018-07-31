import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Chats from './views/Chats.vue';
import Status from './views/Status.vue';
import Calls from './views/Calls.vue';
import Chat from './views/Chat.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/chats',
          name: 'chats',
          component: Chats,
        },
        {
          path: '/status',
          name: 'status',
          component: Status,
        },
        {
          path: '/calls',
          name: 'calls',
          component: Calls,
        },
      ],
    },
  ],
});
