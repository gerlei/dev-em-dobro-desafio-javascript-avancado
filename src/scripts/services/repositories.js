import { baseUrl, repositoriesQuantity } from "../variables.js"

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_pages=${repositoriesQuantity}`)
    return await response.json()
}

export {getRepositories}