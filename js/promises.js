function wait(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                console.log(`you'll see this after ${number.toString()[0]} seconds`);
            } else {
                reject('Network Connection Error!');
            }
        }, number);
    });
}

wait(3000).then((data) => {
    console.log(data);
});


function getCommits(username) {
   let gitAPI = fetch(`https://api.github.com/users/${username}/events`,
       {headers: {'Authorization': ''}
       });

   gitAPI
       .then((response) => response.json())
       .then(data => console.log(data[0].created_at))

}

getCommits('ryan-houpt');
