// Promise 1
// Promise to do something

const doSomething = "Cleaning"

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (doSomething === "") {
            resolve("You fullfiled your promise")
        } else {
            reject("You dont fulfill your promise")
        }
    }, 2000)
})

promise.then((resolve) => {
    console.log(resolve)
}).catch((reject) => {
    console.log(reject)
})


// Promise 2 
// Comparing a youtuber with memes 

const userLeft = true
const userPreferMemes = true


function youtubeSubcriber() {
  return new Promise((resolve, reject) => {
      if (userLeft) {
        reject({
          name: 'User Left', 
          message: 'User has left the video'
        })
      } else if (userPreferMemes) {
        reject({
          name: 'User Prefer Memes',
          message: 'Memes > Youtuber'
        })
      } else {
        resolve ('User watch and subscribe')
      }
  })
}

youtubeSubcriber().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})
