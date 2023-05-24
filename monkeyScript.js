// The chatbot object
const chatbot = {
  name: "Monkey",
  reply: function (question) {
    // Generate a random string of lowercase and uppercase characters
    let response = "";
    for (let i = 0; i < 20; i++) {
      response += Math.random() < 0.5 ?
        String.fromCharCode(Math.floor(Math.random() * 26) + 97) :
        String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    return response;
  }
};

// Get references to the input and output elements
const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");

// automatically scroll to the bottom of the chatbot
const chatbotContainer = document.getElementById("chatbot-container");

// Add an event listener to the input element to listen for user input
inputEl.addEventListener("keydown", function (event) {
    // If the user presses the Enter key, get the user's input and generate a response
    if (event.keyCode === 13) {
        sendMessage();
    }
});

// Add an event listener to the send button
sendBtn.addEventListener("click", function () {
    sendMessage();
});

function sendMessage() {
    // Get the user's input
    const userInput = inputEl.value;

    // If the user's input is empty, return without sending the message
    if (!userInput) {
        return;
    }

    // Clear the input element
    inputEl.value = "";

  // Append the user's input to the output element
  outputEl.innerHTML += "<p><strong class='blue-text'>You:</strong> " + userInput + "</p>";

  // Append the "Monkey is typing" message
  outputEl.innerHTML += "<p><strong>Monkey:</strong> Monkey is typing...</p>";

  // Scroll to the bottom of the chatbot container
  chatbotContainer.scrollTop = chatbotContainer.scrollHeight;

  // Delay for 2 seconds before generating the chatbot's response
  setTimeout(() => {
    // Generate a response from the chatbot
    const chatbotResponse = chatbot.reply(userInput);

    // Replace the "Monkey is typing" message with the chatbot's response
    outputEl.innerHTML = outputEl.innerHTML.replace("<p><strong>Monkey:</strong> Monkey is typing...</p>", "<p><strong>Monkey:</strong> " + chatbotResponse + "</p>");

    // Scroll to the bottom of the chatbot container
    chatbotContainer.scrollTop = chatbotContainer.scrollHeight;
  }, 1000);
}

// Open pop-up form
function openForm() {
  document.getElementById("chatbotForm").style.display = "block";
}

// Close pop-up form
function closeForm() {
  document.getElementById("chatbotForm").style.display = "none";
}

// close if Esc is pressed on the keyboard
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    closeForm();
  }
});