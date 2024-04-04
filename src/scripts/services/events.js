import { baseUrl, eventsQuatity } from "../variables.js"

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_pages=${eventsQuatity}`)
    return await response.json()
}

export {getEvents}