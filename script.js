function showMessage() {
    var message = document.getElementById('surpriseMessage');
    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
    } else {
        message.classList.add('hidden');
    }
}
