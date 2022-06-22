const getmonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        if(!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}

const callback = (err, month) => {
    if (err) {
        console.log(err)
        return 
    } 
    const answer = month.map(value => console.log(value))
}

getmonth(callback)