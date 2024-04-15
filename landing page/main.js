document.getElementById("chatbotTrigger").addEventListener("click", function(event) {
    event.preventDefault();
    openChatbot();
});

function openChatbot() {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://github.com/muhiris/wgpt.git'; // https://github.com/muhiris/wgpt.git
    iframe.style.width = '300px'; // Adjust width as needed
    iframe.style.height = '400px'; // Adjust height as needed
    iframe.style.border = 'none';
    document.body.appendChild(iframe);
}