const delayedSuccess = () => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        console.log(success);
    }, 500)
}

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error! delayed exception!');
        } catch (e) {
            console.error(e);
        }
    }, 500);
}


function resolvedPromise(){
    return new Promise((resolve) => {
        let success = {'message': 'delayed success!'};
        resolve(console.log(success));
        setTimeout(resolve, 500);
    })
}


function rejectedPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error('error! delayed exception!');
            } catch (e) {
                console.error(e);
            }
        }, 500);
    })
}

delayedSuccess()
delayedException()
resolvedPromise()
rejectedPromise()