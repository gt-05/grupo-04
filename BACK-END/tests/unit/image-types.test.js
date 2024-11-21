const {isValidType} = require('../../src/ultils/image-types');

describe("function isValidType on ultils/image-types", () => {

    it("deve retornar true para imagens png", () => {
        let result = isValidType('image/png');
        expect(result).toBe(true);
    });

    it("deve retornar false para video mp4", () => {
        let result = isValidType('video/mp4');
        expect(result).toBe(false);
    });

})