const { expect, it } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe ('Employee', () => {
    describe('Initialization', () => {
        it("should make an object", () => {
            const newEmployee = new Employee();
            expect(typeof newEmployee).toBe("object");
        })
        it("should set the name", () => {
            const testName = "Leslie";
            const newEmployee = new Employee(testName, 1, "email");
            expect(newEmployee.name).toBe(testName);
        })
        it("should set the id", () => {
            const id = 1;
            const newEmployee = new Employee('name', id, "email");
            expect(newEmployee.id).toEqual(id);
        })
        it("should set the email", () => {
            const email = "Leslie@email.com";
            const newEmployee = new Employee('name', 1, email);
            expect(newEmployee.email).toBe(email);
        })
        it("should get the name", () => {
            const testName = "Leslie";
            const newEmployee = new Employee(testName, 1, "email");
            expect(newEmployee.getName()).toBe(testName);
        })
        it("should get the id", () => {
            const id = 1;
            const newEmployee = new Employee('name', id, "email");
            expect(newEmployee.getId()).toBe(id);
        })
        it("should get the email", () => {
            const email = "Leslie@email.com";
            const newEmployee = new Employee('name', 1, email);
            expect(newEmployee.getEmail()).toBe(email);
        })
        it(`getRole() should return "Employee"`, () => {
            const newEmployee = new Employee();
            expect(newEmployee.getRole()).toBe("Employee");
        })
    })
})