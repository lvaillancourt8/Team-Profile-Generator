const { expect, it } = require("@jest/globals");
const Employee = require("../lib/Employee");
const Intern = require('../lib/Intern');

describe ('Intern', () => {
    describe('Initialization', () => {
        it("should set the school", () => {
            const school = "University of Minnesota";
            const newIntern = new Intern("name", 1, "email", school);
            expect(newIntern.school).toEqual(school);
        })
        it(`getRole() should return "Intern"`, () => {
            const newIntern = new Intern();
            expect(newIntern.getRole()).toBe("Intern");
        })
        it(`getSchool() should return the school name`, () => {
            const newIntern = new Intern("name", 1, "email", "University of Minnesota");
            expect(newIntern.getSchool()).toEqual("University of Minnesota");
        })
    })
})