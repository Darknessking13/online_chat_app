function sendMessage() {
  var messageInput = document.getElementById("messageInput");
  var avatarInput = document.getElementById("avatarInput");
  var usernameInput = document.getElementById("usernameInput");
  var chatBox = document.getElementById("chatBox");
  var message = messageInput.value;
  var avatar = avatarInput.files[0];
  var username = usernameInput.value || "Anonymous"; // Default to "Anonymous" if no username provided

  // Clear input fields
  messageInput.value = "";
  avatarInput.value = "";

  // Display message with avatar and username
  var reader = new FileReader();
  reader.onload = function(event) {
    var avatarImg = document.createElement("img");
    avatarImg.src = event.target.result;
    avatarImg.className = "avatar";

    var usernameDiv = document.createElement("div");
    usernameDiv.textContent = username;
    usernameDiv.className = "username";

    var messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.className = "message";

    var messageContainer = document.createElement("div");
    messageContainer.className = "chatMessage";
    messageContainer.appendChild(avatarImg);
    messageContainer.appendChild(usernameDiv);
    messageContainer.appendChild(messageDiv);

    chatBox.appendChild(messageContainer);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
  };

  reader.readAsDataURL(avatar);
}
