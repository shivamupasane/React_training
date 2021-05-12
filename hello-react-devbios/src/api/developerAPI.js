export const getDevelopers = () => {
    return fetch("https://tech-services-1000201953.uc.r.appspot.com/developers")
        .then(response=>response.json());
}
export const addDeveloper = (dev) => {
    return fetch("https://tech-services-1000201953.uc.r.appspot.com/developer",
    {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dev)
    }
)
}