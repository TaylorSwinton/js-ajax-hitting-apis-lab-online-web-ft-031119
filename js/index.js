const URL = 'https://api.github.com';

function getRepositories() {
    const name = document.getElementById('username').value;
    const uri = URL + '/users/' + name + '/repos';
    const req = new HMLHttpRequest();
    req.open('GET', uri)
    req.send();
}