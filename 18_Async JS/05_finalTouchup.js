// // callback
// getData('1st data', () => {
//     console.log("fetching 2nd data...")
//     getData('2nd data', () => {
//         console.log("fetching 3rd data...")
//         getData('3rd data', () => {
//             console.log("fetching 4rth data...")
//             getData('4rth data')
//         })
//     });
// });

// // promise
// fetchData()
//     .then((data) => {
//         console.log('fetching the data....');
//         console.log(data);
//         return fetchData2()
//     })
//     .then((data) => {
//         console.log('fetching the data....');
//         console.log(data);
//         return fetchData2()
//     })
//     .then((data)=>{
//         console.log('fetching the data....');
//         console.log(data);
//         return fetchData2()
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// // async await syntax
// async function fetchData(){
//     let data1 = await getData(1);
//     console.log(data1);
//     let data2 = await getData(2);
//     console.log(data2);
//     let data3 = await getData(3);
//     console.log(data3);
// }




// practical callback
function getUsers(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.onload = function () {
        if (xhr.status === 200) {
            const users = JSON.parse(xhr.responseText);
            callback(null, users);
        } else {
            callback(`Error: ${xhr.status}`);
        }
    };

    xhr.onerror = function () {
        callback('Network error');
    };

    xhr.send();
}


function showData(err, data) {
    if (err) {
        console.log("Failed:", err);
    } else {
        console.log("Success:", data);
    }
}

// Using the function
getUsers(showData);


// practical promises syntax
let response = fetch('https://jsonplaceholder.typicode.com/users');
response
    .then(data => {
        console.log(data)
        return fetch('https://jsonplaceholder.typicode.com/users');
    })
    .catch(err => {
        console.log(err);
    })

    // practical async syntax


    (async function () {
        try {
            let data = await fetch('https://jsonplaceholder.typicode.com/users')
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    })()
