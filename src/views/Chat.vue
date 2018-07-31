<template>
    <div class="chat w-chat-panel">
        <div class="row w-header">
            <div class="col-1">
                <img src="../image/backspace.png">
            </div>
            <div class="col-1 avatar">
                <img src="../image/chat-default.jpg">
            </div>
            <div class="col-4 w-title">
                <div>Juan Perez</div>
                <div>online</div>
            </div>
            <div class="col-1">
                <img src="../image/videocam.png">
            </div>
            <div class="col-1">
                <img src="../image/call.png">
            </div>
            <div class="col-1">
                <img src="../image/more.png">
            </div>
        </div>

        <div class="w-chat-panel">
            <div class="w-message-list clearfix" id="chat">
                <div class="w-message w-message-in">
                    <div class="w-message-text">
                        <p>Hola clase Dev25!</p>
                        <div class="time">11:30</div>
                    </div>
                </div>
                <div class="w-message w-message-in">
                    <div class="w-message-text">
                        <p>no se pude diseñar</p>
                        <div class="time">11:31</div>
                    </div>
                </div>

                <div class="w-message w-message-out">
                    <div class="w-message-text">
                        <p>Jajajaja</p>
                        <div class="time">11:32</div>
                    </div>
                </div>

                <div class="w-message w-message-in">
                    <div class="w-message-text">
                        <p>Dale dale!</p>
                        <div class="time">14:25</div>
                    </div>
                </div>
                <div class="w-message w-message-out">
                    <div class="w-message-text">
                        <p>Jajaja</p>
                        <div class="time">14:26</div>
                    </div>
                </div>
                <div class="w-message w-message-out">
                    <div class="w-message-text">
                        <p>No se!!</p>
                        <div class="time">14:27</div>
                    </div>
                </div>
                <!-- <div v-for="item in chatsContac[1].allMessage" :key="item.name">>
                    <!-- <div v-bind:class="{item.styleMessage}"> 
                    <div class="w-message w-message-out">
                        <div class="w-message-text">
                            <p>{{ item.message }}</p>
                        <div class="time">14:27</div>
                        </div>
                    </div>
                </div> -->
                <div id="conversation">

                </div>
            </div>

        </div>
        <footer class="">
            <ul class="">
                <li></li>
                <li>
                    <input type="text" name="w-message-input" placeholder="Type a message" id="message">
                </li>
                <li></li>
            </ul>
        </footer>

        <!-- <router-view style="border:3px solid blue;"/> -->
    </div>
</template>

<script>
    export default {
        name: 'chat',
        data() {
		return {
			chatContac:[
				{id:1, name: 'Luis', image: '../image/chat1.jpg', allMessage: [{timeMessage:'01:01' ,message:'hola', styleMessage:'w-message w-message-out' },{timeMessage:'01:01' ,message:'hola', styleMessage:'w-message w-message-in' }]},
				{id:2, name: 'Paco', image: '../image/chat2.jpg', allMessage: [{timeMessage:'01:01' ,message:'hola', styleMessage:'w-message w-message-out' },{timeMessage:'01:01' ,message:'hola', styleMessage:'w-message w-message-in' }]},
				{id:3, name: 'Ana', image: '../image/chat3.jpg', allMessage: [{timeMessage:'01:01' ,message:'hola', styleMessage:'w-message w-message-out' },{timeMessage:'01:01' ,message:'hola', styleMessage:'w-message w-message-in' }]},
				{id:4, name: 'Maria', image: '../image/chat4.jpg', allMessage: [{timeMessage:'01:01' ,message:'hola', styleMessage:'w-message w-message-out' },{timeMessage:'01:01' ,message:'hola', styleMessage:'w-message w-message-in' }]},
				{id:5, name: 'Sandra', image: '../image/chat5.jpg', allMessage: [{timeMessage:'01:01' ,message:'hola', styleMessage:'w-message w-message-out' },{timeMessage:'01:01' ,message:'hola', styleMessage:'w-message w-message-in' }]},
			]}
	    }
    };
</script>

<style type="text/css" scoped>
    @import '../css/style.css';
    .w-chat-panel {
        background: #EDE9E4 url("../image/chat-panel-bg.png");
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
    
    .chat {
        /*background-color:  #009688;*/
        background-color: #fefefe;
        min-height: 600px;
    }
    
    ul {
        margin: 0;
    }
    
    .w-header {
        height: 50px;
        background-color: #009688;
    }
    
    .w-title {
        padding: 5px;
        color: white;
    }
    
    .w-options-button {
        padding: 15px;
        color: silver;
    }
    
    .clearfix:after {
        clear: both;
        content: ' ';
        display: block;
        visibility: none;
        font-size: 0;
        width: 0;
    }
    
    .w-messages {
        background: #e0dad6;
        position: relative;
    }
    
    .w-users-messages {
        color: rgba(0, 0, 0, 0.6);
    }
    
    .w-users-messages li {
        display: inline-block;
        vertical-align: top;
    }
    
    .w-chat-panel {
        background: #EDE9E4 url("../image/chat-panel-bg.png");
    }
    
    .w-message-list {
        padding: 30px 0 10px 0;
        position: relative;
        height: 600px;
        overflow-y: scroll;
    }
    
    .w-message {
        font-weight: normal;
        margin: 2px 50px 2px 30px;
        border-radius: 5px;
        position: relative;
    }
    
    .w-message .time {
        position: absolute;
        right: 7px;
        bottom: 0px;
        color: rgba(0, 0, 0, 0.6);
        font-size: 12px;
    }
    
    .w-message:after {
        content: '';
        display: table;
        clear: both;
    }
    
    .w-message-text {
        padding: 8px 15px;
        position: relative;
    }
    
    .w-message-text h5 {
        margin: 5px 0px;
    }
    
    .w-message-text p {
        color: rgba(0, 0, 0, 0.6);
    }
    
    .w-message:after {
        display: block;
        content: ' ';
        clear: both;
    }
    
    .w-message-out .w-message-text {
        float: right;
        background: #dcf8c6;
    }
    
    .w-message-in .w-message-text,
    .w-message-out .w-message-text {
        max-width: 336px;
        border-radius: 5px;
    }
    
    .w-message-in .w-message-text {
        background-color: #fff;
    }
</style>