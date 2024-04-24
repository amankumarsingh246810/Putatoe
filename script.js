

document.addEventListener("DOMContentLoaded", function() {
    const newsList = document.getElementById('news-list');

    fetch('https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'text/xml');
            const items = xml.querySelectorAll('item');

            items.forEach(item => {
                const title = item.querySelector('title').textContent;
                const link = item.querySelector('link').textContent;

                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');

                const titleElement = document.createElement('h3');
                const linkElement = document.createElement('a');

                titleElement.textContent = title;
                linkElement.textContent = 'Read more';
                linkElement.href = link;
                linkElement.target = '_blank'; // Open link in a new tab

                articleDiv.appendChild(titleElement);
                articleDiv.appendChild(linkElement);

                newsList.appendChild(articleDiv);
            });
        })
        .catch(error => console.log(error));
});
// script for chat section

document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatBox = document.getElementById('chat-box');

    // Function to add a new message to the chat box
    function addMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }

    // Event listener for send button
    sendButton.addEventListener('click', function() {
        const message = messageInput.value;
        if (message.trim() !== '') {
            addMessage(message);
            messageInput.value = ''; // Clear input field
        }
    });

    // Simulate initial messages
    addMessage('Welcome to the chat!');
    
});

