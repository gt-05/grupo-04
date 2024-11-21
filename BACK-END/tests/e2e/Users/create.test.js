const supertest = require('supertest');
const app = require('../../../src/app');
const {UserModel} = require('../models');
const {userData} = require('../ultils');

let request;
beforeAll(async () => {
    await UserModel.truncate();
    request = await supertest(app)
})

describe("POST /users", () => {
    
    it("deve retornar status code 400 quando não receber pelo menos um campos obrigatorio", async () => {
        const {firstname} = userData()
        let response = await request.post('/users').send({firstname});
        expect(response.status).toBe(400);
    });

    it("deve retornar status code 201 quando enviado todos os campos obrigatorios", async () => {
        let response = await request.post('/users').send(userData());
        expect(response.status).toBe(201);
    })
    
    it("deve retornar status code 400 quando receber um email ja cadastrado", async () => {
        const user = userData();
        let response = await request.post('/users').send(user);
        expect(response.status).toBe(201);
        response = await request.post('/users').send(user);
        expect(response.status).toBe(400);
    })
});