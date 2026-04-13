function ChatPanel() {
  return (
    <section className="chat-panel">
      <h2>Chat</h2>
      
      <div className="chat-messages">
        <p>No messages yet.</p>
      </div>

      <form className="chat-form">
        <input type="text" placeholder="Write a message..." />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ChatPanel;
/* Temp Chat de test*/