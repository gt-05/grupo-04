const supertest = require('supertest');
const app = require('../../../src/app');
const {UserModel} = require('../models');
const {newUser} = require('../ultils');
const PATH = '/users/token'

let request;
let user;
beforeAll(async () => {
    await UserModel.truncate();
    request = await supertest(app);
    user = newUser();
    await UserModel.create(user);
});

describe(`POST ${PATH}`, () => {
    it("deve retornar status code 400 quanto o email ou password estiverem incorretos", async () => {
        let response = await request.post(PATH).send({
            email: 'incorreto',
            password: 'incorreto'
        });
        expect(response.status).toBe(400);
    });
});