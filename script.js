document.getElementById('Google_Search').addEventListener('click', function () {
    var text = document.getElementById('form_search').value;
    window.location.href = 'https://www.google.com/search?q=' + text.split(' ').join('+');
    document.getElementById('form_search').value = '';
});

document.getElementById('Lucky').addEventListener('click', function () {
    var text = document.getElementById('form_search').value;
    window.location.href = 'https://www.google.com/search?btnI=1&q=' + text.split(' ').join('+');
    document.getElementById('form_search').value = '';
});

document.getElementById('form_search').addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("Google_Search").click();
    }
});
