// Simple chatbot that returns a random string of letters
const chatbot = {
  name: "Monkey",
  /**
   * Generate a random response consisting of 20 characters.
   * The question argument is ignored but kept for potential future use.
   */
  reply(question) {
    const letters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let response = "";
    for (let i = 0; i < 20; i++) {
      const index = Math.floor(Math.random() * letters.length);
      response += letters[index];
    }
    return response;
  }
};

// DOM element references
const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");
const sendBtn = document.querySelector(".send-button");

// Automatically scroll to the bottom of the chatbot
const chatbotContainer = document.getElementById("chatbot-container");

// Add an event listener to the input element to listen for user input
// Send message when Enter is pressed
inputEl.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

// Send message when the send button is clicked
sendBtn.addEventListener("click", sendMessage);

function sendMessage() {
  const userInput = inputEl.value.trim();

  // Don't send empty messages
  if (!userInput) return;

  // Clear the input field
  inputEl.value = "";

  // Display the user's message
  outputEl.innerHTML +=
    `<p><strong class='blue-text'>You:</strong> ${userInput}</p>`;

  // Indicate that Monkey is typing
  outputEl.innerHTML +=
    "<p><strong>Monkey:</strong> Monkey is typing...</p>";

  chatbotContainer.scrollTop = chatbotContainer.scrollHeight;

  // Generate the chatbot's response after a brief pause
  setTimeout(() => {
    const chatbotResponse = chatbot.reply(userInput);

    outputEl.innerHTML = outputEl.innerHTML.replace(
      "<p><strong>Monkey:</strong> Monkey is typing...</p>",
      `<p><strong>Monkey:</strong> ${chatbotResponse}</p>`
    );

    chatbotContainer.scrollTop = chatbotContainer.scrollHeight;
  }, 1000);
}

// Open pop-up form
// Show the chat window
function openForm() {
  document.getElementById("chatbotForm").style.display = "block";
}

// Close pop-up form
// Hide the chat window
function closeForm() {
  document.getElementById("chatbotForm").style.display = "none";
}

// close if Esc is pressed on the keyboard
// Allow closing the chat with the Escape key
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeForm();
  }
});

