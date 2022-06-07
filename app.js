import axios from "axios"

export default async function getData(userId) {
    let userData;
    let postsData;
    let comparedJSON;

    return new Promise(async (resolve, reject) => {
        try {
            const user = await axios.get("https://jsonplaceholder.typicode.com/users/" + userId);
            userData = user.data;

            const posts = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
            postsData = posts.data;

            comparedJSON = addArrayIntoJSON(userData, postsData, 'posts')
        }
        catch {
            reject("ERROR")
        }
        //----------------------------------------------
        // let userSliced = JSON.stringify(userData).slice(0,JSON.stringify(userData).length-1)
        // let postsSliced = JSON.stringify({posts: postsData}).slice(1,JSON.stringify({posts: postsData}).length-1)

        // let comparedJSON = JSON.parse(userSliced+","+postsSliced+"}")
        // console.log("----------------------------------------")
        console.log(comparedJSON)

        resolve(1)
    })
}

const addArrayIntoJSON = (json, array, arrayJsonName) => {
    let arraySliced = JSON.stringify(json).slice(0,JSON.stringify(json).length-1)
    let jsonSliced = JSON.stringify({posts: array}).slice(1,JSON.stringify({posts: array}).length-1)

    let comparedJSON = JSON.parse(arraySliced+","+jsonSliced+"}")
    return comparedJSON
}