import { expect } from "chai";
import * as utils from "../utils";

describe("konnektid-react-status", () => {

    describe("utils", () => {

        describe("pluck", () => {

            it("should be exported", () => {
                expect(utils.pluck).to.be.a("function");
            });

            it("should return the curried function", () => {
                const barPlucker = utils.pluck("bar");
                expect(barPlucker).to.be.a("function");
            });

            it("should pluck the key from te object", () => {

                const barPlucker = utils.pluck("bar");
                const myObject = {
                    foo: "hello",
                    bar: "world",
                    baz: "!!!"
                };

                const bar = barPlucker(myObject);
                expect(bar).to.equal("world");
            });
        });

        describe("max", () => {

            it("should be exported", () => {
                expect(utils.max).to.be.a("function");
            });

            it("should return the maximum value", () => {

                const m1 = utils.max(5, 1);
                expect(m1).to.equal(5);

                const m2 = utils.max(7, 35);
                expect(m2).to.equal(35);

                const m3 = utils.max(-9, -2);
                expect(m3).to.equal(-2);

                const m4 = utils.max(0, 1);
                expect(m4).to.equal(1);

                const m5 = utils.max(12, 12);
                expect(m5).to.equal(12);
            });
        });

        describe("noop", () => {

            it("should be exported", () => {
                expect(utils.noop).to.be.a("function");
            });

            it("should not do anything", () => {
                const res = utils.noop();
                expect(res).to.not.exist;
            });
        });

        describe("exists", () => {

            it("should be exported", () => {
                expect(utils.exists).to.be.a("function");
            });

            it("should return false when null or undefined", () => {

                const a = void 0;
                const b = null;

                const hasA = utils.exists(a);
                const hasB = utils.exists(b);
                const hasNothing = utils.exists();

                expect(hasA).to.equal(false);
                expect(hasB).to.equal(false);
                expect(hasNothing).to.equal(false);
            });

            it("should return true otherwise", () => {
                const a = "";
                const b = 0;
                const c = [];

                const hasA = utils.exists(a);
                const hasB = utils.exists(b);
                const hasC = utils.exists(c);

                expect(hasA).to.equal(true);
                expect(hasB).to.equal(true);
                expect(hasC).to.equal(true);
            });
        });
    });
});
