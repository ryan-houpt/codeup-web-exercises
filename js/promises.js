function wait(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(console.log(`you'll see this after ${number / 1000} seconds`));
        }, number);
    });
}

wait(1000).then((data) => {
    console.log(data);
});


function getCommits(username) {
   let gitAPI = fetch(`https://api.github.com/users/${username}/events`,
       {headers: {'Authorization': 'f907b87e3b272f0253def3b25179852312e1e868'}
       });

   gitAPI
       .then((response) => response.json())
       .then(data => console.log(data[0].created_at))

}

getCommits('ryan-houpt');
