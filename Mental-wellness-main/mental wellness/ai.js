   // Sample responses for the mental wellness AI assistant
   const responses = {
    "hello": "Hi! How can I assist you with your mental wellness today?",
    "stress": "It's normal to feel stressed at times. Try deep breathing exercises or take a short walk to relax.",
    "sad": "I'm sorry you're feeling sad. Remember, talking to someone you trust can help. You’re not alone.",
    "happy": "That's great! Keeping a positive mindset is essential. Keep doing things that make you happy!",
    "default": "I'm here to listen. How can I help you with your mental wellness?"
        "hello": "Hi there How can I help you today?",
        "how are you": "I'm just a program, but I'm here to help you feel better.",
        "help": "Sure! What do you need help with? (e.g., anxiety, depression)",
        "anxiety": "For anxiety, try practicing deep breathing or mindfulness exercises.",
        "depression": "For depression, consider reaching out to a trusted friend or therapist.",
        "default": "I'm sorry, I don't understand. Can you rephrase?",
    
};


// Function to send user input and get response from AI assistant
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();
    const messages = document.getElementById('messages');
    
    if (userInput !== "") {
        // Display user message
        const userMessageDiv = document.createElement('div');
        userMessageDiv.textContent = `You: ${userInput}`;
        userMessageDiv.style.textAlign = "left";
        messages.appendChild(userMessageDiv);

        // Get AI response
        const aiResponse = responses[userInput] || responses["default"];
        const aiMessageDiv = document.createElement('div');
        aiMessageDiv.textContent = `AI: ${aiResponse}`;
        aiMessageDiv.style.textAlign = "right";
        aiMessageDiv.style.fontWeight = "bold";
        messages.appendChild(aiMessageDiv);
        
        // Clear the input field
        document.getElementById('user-input').value = "";
        
        // Scroll to the bottom of the chat window
        messages.scrollTop = messages.scrollHeight;
    }
}
