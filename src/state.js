
// state with subscribers
const appState = new Map();
const subscribersMap = new Map();

export const getState = (stateKey) => {
    return appState.get(stateKey)
}

export const hasState = (stateKey) => {
    return appState.has(stateKey)
}

export const setState = (stateKey, value) => {
    appState.set(stateKey, value)

    if(subscribersMap.has(stateKey)){
        subscribersMap.get(stateKey).forEach(cb => {
            cb(appState.get(stateKey))
        });
    }
    return appState;
}

export const subscribeToState = (stateKey, cb) => {
    if(!subscribersMap[stateKey]){
        subscribersMap.set(stateKey, new Set())
    };
    subscribersMap.get(stateKey).add(cb)
    return unSubscribe(subscribersMap[stateKey], cb)
}

const unSubscribe = (set, cb) => () => {
    return set.delete(cb)
}


