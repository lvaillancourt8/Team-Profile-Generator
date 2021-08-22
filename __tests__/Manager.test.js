const { expect, it } = require("@jest/globals");
const Employee = require("../lib/Employee");
const Manager = require('../lib/Manager');

describe ('Manager', () => {
    describe('Initialization', () => {
        it("should set the office number", () => {
            const office = 123;
            const newManager = new Manager("name", 1, "email", office);
            expect(newManager.officeNumber).toEqual(office);
        })
        it(`getRole() should return "Manager"`, () => {
            const newManager = new Manager();
            expect(newManager.getRole()).toBe("Manager");
        })
        it(`getOfficeNumber() should return office number`, () => {
            const newManager = new Manager("name", 1, "email", 123);
            expect(newManager.getOfficeNumber()).toEqual(123);
        })
    })
})