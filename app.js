slowMath.add(6, 2).then(num => {
    console.log(num);
    return slowMath.multiply(num, 2);
}).then(num => {
    console.log(num);
    return slowMath.divide(num, 4);
}).then(num => {
    console.log(num);
    return slowMath.subtract(num, 3);
}).then(num => {
    console.log(num);
    return slowMath.add(num, 98);
}).then(num => {
    console.log(num);
    return slowMath.remainder(num, 2);
}).then(num => {
    console.log(num);
    return slowMath.multiply(num, 50);
}).then(num => {
    console.log(num);
    return slowMath.remainder(num, 40);
}).then(num => {
    console.log(num);
    return slowMath.add(num, 32);
}).then(num => {
    console.log(`The final result is ${num}.`)
}).catch(err => {
    console.log(err);
});
 

const doMath = () => {
    return new Promise((resolve, reject) => {
        resolve(slowMath.add(6, 2));
        reject(new Error('Oops! Something went wrong!'));
    }).then((result) => {
        console.log(result)
        return new Promise((resolve, reject) => {
            resolve(slowMath.multiply(result, 2));
            reject(new Error('Oops! Something went wrong!'));
        })
    }).then((result) => {
        console.log(result)
        return new Promise((resolve, reject) => {
            resolve(slowMath.divide(result, 4));
            reject(new Error('Oops! Something went wrong!'));
        })
    }).then((result) => {
        console.log(result)
        return new Promise((resolve, reject) => {
            resolve(slowMath.subtract(result, 3));
            reject(new Error('Oops! Something went wrong!'));
        })
    }).then((result) => {
        console.log(result)
        return new Promise((resolve, reject) => {
            resolve(slowMath.add(result, 98));
            reject(new Error('Oops! Something went wrong!'));
        })
    }).then((result) => {
        console.log(result)
        return new Promise((resolve, reject) => {
            resolve(slowMath.remainder(result, 2));
            reject(new Error('Oops! Something went wrong!'));
        })
    }).then((result) => {
        console.log(result)
        return new Promise((resolve, reject) => {
            resolve(slowMath.multiply(result, 50));
            reject(new Error('Oops! Something went wrong!'));
        })
    }).then((result) => {
        console.log(result)
        return new Promise((resolve, reject) => {
            resolve(slowMath.remainder(result, 40));
            reject(new Error('Oops! Something went wrong!'));
        })
    }).then((result) => {
        console.log(result)
        return new Promise((resolve, reject) => {
            resolve(slowMath.add(result, 32));
            reject(new Error('Oops! Something went wrong!'));
        })
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(

        )
        console.log(error)
    })
}

doMath();


