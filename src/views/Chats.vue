<template>

  <div class="chats">
    <ul id='chatsContactsList' class="w-recent-chats">
      <li v-for="item in chatsContacs" :key="item.name">
        <div class="row">
          <div class="col-1 avatar">
            <!-- <img v-attr="src= item.image"/> -->
            <img src="../image/chat-default.jpg" />
            <!-- <img v-bind:src="item.image" alt=""> -->
          </div>
          <div class="col-7">
            <div class="w-contact-name"><a href="#/chat">{{item.name}}</a> </div>
            <div>{{item.lastMessage}}</div>
          </div>
          <div class="col-1">
            <div class="w-time">{{item.timeMessage}}</div>
            <div></div>
          </div>
        </div>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
  const chatsContact = [{
      name: 'Luis',
      image: '../image/chat1.jpg',
      lastMessage: 'No is Pique!!',
      timeMessage: '10:00'
    },
    {
      name: 'Paco',
      image: '..//image//chat2.jpg',
      lastMessage: 'Hi',
      timeMessage: '02:05'
    },
    {
      name: 'Ana',
      image: '..//image//chat3.jpg',
      lastMessage: 'Hiiii! Ana :3',
      timeMessage: '14:15'
    },
    {
      name: 'Maria',
      image: '..//image//chat4.jpg',
      lastMessage: 'bye!!',
      timeMessage: '18:36'
    },
    {
      name: 'Sandra',
      image: '..//image//chat5.jpg',
      lastMessage: 'hahaha !!',
      timeMessage: '00:05'
    },
  ];

  export default {
    name: 'chats',
    data() {
      return {
        chatsContacs: chatsContact,
      }
    }
  };
</script>

<style type="text/css" scoped>
  .w-recent-chats {
    background-color: white;
  }

  .avatar {
    margin: 0 1em 0 1.2em;
  }

  .avatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .w-contact-name {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    padding-top: 5px;
    color: black;
    font: oblique bold 120% monospace;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  .w-time {
    font-size: 12px;
    color: silver;
  }
</style>