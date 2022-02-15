// MEDIATOR PATTERN
//chat room

const User = function (name) {
  this.name = name;
  this.chatRoom = null;
};
User.prototype = {
  send: function (message, to) {
    this.chatRoom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

const ChatRoom = function () {
  let users = {}; //list of users
  return {
    register: function (user) {
      users[user.name] = user;
      user.chatRoom = this;
    },
    send: function (message, from, to) {
      if (to) {
        //single
        to.receive(message, from);
      } else {
        //mass
       for(key in users){
           if(users[key]!==from){
               users[key].receive(message, from);
           }
       }

        }
      }
    }
  }

  const brad=new User('brad');
  const stoya=new User('stoya');
  const stella=new User('stella');

  const chatRoom =new ChatRoom();
  chatRoom.register(brad)
  chatRoom.register(stoya)
  chatRoom.register(stella)

  brad.send('i want to fuck you',stella);
  brad.send('i want to fuck you');