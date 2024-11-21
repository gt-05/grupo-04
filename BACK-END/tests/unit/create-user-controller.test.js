jest.mock('../../src/models/UserModel', () => {
    return {
        create: jest.fn()
    }
})

const createUserController = require('../../src/controllers/User/CreateController');
const UserModel = require('../../src/models/UserModel');

let request = {
    body: {
        "firstname": "Test",
        "email": "test@mail.com"
    }
}

let response = {
    json: jest.fn()
}

describe("Create User Controller", () => {
    it("", async () => {
        response.json.mockReturnValue(request.body);
        response.json.mockImplementationOnce();
        UserModel.create.mockImplementationOnce();
        UserModel.create.mockReturnValue(request.body);
        let result = await createUserController(request, response);
        console.log(result);
        expect(JSON.stringify(result)).toBe(JSON.stringify(request.body))
    })
})