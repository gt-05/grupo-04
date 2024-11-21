
const randomString = () => {
    return Math.random().toString(16).slice(2)
}

const newUser = () => {
    return {
        "firstname": randomString(),
        "surname": randomString(),
        "email": `${randomString()}@mail.com`,
        "password": randomString()
    }
}

const timestampColumns = () => {
    return {
        createdAt: new Date(),
        updatedAt: new Date()
    }
}

module.exports = {
    newUser,
    userData: newUser, 
    randomString,
    timestampColumns
}