// Post call to send json data to api
export const postReqJsonData = (api, data) => {
    fetch(api, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
}