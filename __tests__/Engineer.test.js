const { expect, it } = require("@jest/globals");
const Employee = require("../lib/Employee");
const Engineer = require('../lib/Engineer');

describe ('Engineer', () => {
    describe('Initialization', () => {
        it("should set the github account", () => {
            const github = "lvaillancourt8";
            const newEngineer = new Engineer("name", 1, "email", github);
            expect(newEngineer.github).toEqual(github);
        })
        it(`getRole() should return "Engineer"`, () => {
            const newEngineer = new Engineer();
            expect(newEngineer.getRole()).toBe("Engineer");
        })
        it(`getGithub() should return the github username`, () => {
            const github = "lvaillancourt8";
            const newEngineer = new Engineer("name", 1, "email", github);
            expect(newEngineer.getGithub()).toEqual(github);
        })
    })
})