const URL = 'https://api.github.com';

function getRepositories() {
    const name = document.getElementById('username').value;
    const uri = URL + '/users/' + name + '/repos';
    const xhr = new HMLHttpRequest();
    xhr.addEventListener('load', displayRepositories);
    xhr.open('GET', uri)
    xhr.send();
      return false;
}

function displayRepositories() {
    var repos = JSON.parse(this.resoponseText);
    console.log(repos);
    const repoList = `<ul>
      ${repos.map(
        r =>
          '<li>' +
          r.name +
          ' - <a href="#" data-repo="' +
          r.name +
          '""'
      ).join('')}</ul>`;
      document.getElementById('repositories').innerHTML = repoList;
}
