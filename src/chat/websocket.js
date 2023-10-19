class Websocketservice {
  static instance = null;

  callback = {};

  static getInstance() {
    if (!Websocketservice.instance) {
      Websocketservice.instance = new Websocketservice();
    }
    return Websocketservice.instance;
  }

  constructor() {
    this.socketRef = null;
  }

  connect(chatGroup) {
    const path = `wss://api.skzicph.com/ws/chat/${chatGroup}/`;
    if (chatGroup) {
      this.socketRef = new WebSocket(path);
    }

    this.socketRef.onopen = () => {
      console.log("websocket open");
    };

    this.socketRef.onmessage = (e) => {
      this.socketNewMessage(e.data);
    };

    this.socketRef.onerror = (e) => {
      console.log("Error", e.message);
    };

    this.socketRef.onclose = () => {
      console.log("websocket close");
      this.connect(chatGroup);
    };
  }
  socketNewMessage(data) {
    // if (data) alert(data[command]);
    const parsedData = JSON.parse(data);
    // console.log("datttttttttt", data);
    // console.log("parsedData", parsedData);

    const command = parsedData.command;
    if (Object.keys(this.callback).length === 0) {
      return;
    }
    if (command === "messages") {
      this.callback[command](parsedData.messages);
    }
    if (command === "new_message") {
      this.callback[command](parsedData.message);
    }
    // if (command === "userChatGroups") {
    //   this.callback[command](parsedData.session);
    // }
    // if (command === "new_userChatGroups") {
    //   this.callback[command](parsedData.upadted_session);
    // }
  }

  fetchMessages(session) {
    this.data = {
      command: "fetch_messages",
      sessionId: session,
    };
    // console.log(this.data);
    this.sendMessage(JSON.stringify(this.data));
  }

  // fetchUserChatGroups(sessionId) {
  //   this.data = {
  //     command: "userChatGroups",
  //     sessionId: sessionId,
  //   };
  //   this.sendMessage(JSON.stringify(this.data));
  // }

  newChatMessage(message) {
    this.data = {
      command: "new_message",
      from: message.from,
      message: message.content,
      sessionId: message.sessionId,
    };

    this.sendMessage(JSON.stringify(this.data));
  }

  addCallbacks(
    messagesCallback,
    newMessageCallback,
    // userChatGroups,
    // newUserChat
  ) {
    this.callback["messages"] = messagesCallback;
    this.callback["new_message"] = newMessageCallback;
    // this.callback["userChatGroups"] = userChatGroups;
    // this.callback["new_userChatGroups"] = newUserChat;
  }

  sendMessage(data) {
    try {
      this.socketRef.send(data);
    } catch (e) {
      console.log(e.message);
    }
  }

  state() {
    return this.socketRef?.readyState;
  }

  disconnect() {
    console.log("websocket disconnected");
    this.socketRef.close();
  }
}

const WebSocketInstance = Websocketservice.getInstance();

export default WebSocketInstance;
