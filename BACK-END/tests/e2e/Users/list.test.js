const supertest = require('supertest');
const app = require('../../../src/app');
const {UserModel} = require('../models');
const {userData, timestampColumns} = require('../ultils');
const exp = require('constants');

let request;
let users = [];
beforeAll(async () => {
    request = await supertest(app);
    users.push({...userData()});
    users.push({...userData()});
    await UserModel.truncate();
    await UserModel.bulkCreate(users);
})

describe("GET /users", () => {
    it("deve retornar status code 200 e um body com array de usuarios", async () => {
        let {body, status} = await request.get('/users');
        expect(status).toBe(200);
        for(let [index, user] of Object.entries(users)) {
            expect(body[index]).toHaveProperty('createdAt');
            expect(body[index]).toHaveProperty('updatedAt');
            expect(body[index]).toHaveProperty('id');
            expect(body[index]).not.toHaveProperty('password');
            expect(body[index]).toHaveProperty('firstname', user.firstname);
            expect(body[index]).toHaveProperty('surname', user.surname);
            expect(body[index]).toHaveProperty('email', user.email);
        }
    })
});