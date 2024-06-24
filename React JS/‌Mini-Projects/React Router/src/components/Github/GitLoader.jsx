//function to fetch data from API and return it in json format for use in components

export const GitLoader = async () => {
    const response = await fetch('https://api.github.com/users/Dervin29')
    const data = await response.json()
    return data
}