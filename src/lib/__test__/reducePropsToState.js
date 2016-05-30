import { expect } from "chai";
import reducePropsToState from "../reducePropsToState";

describe("konnektid-react-status", () => {

    describe("reducePropsToState", () => {

        it("should be exported", () => {
            expect(reducePropsToState).to.be.an.instanceof(Function);
        });

        it("should reduce a list of props to a single status code", () => {

            const propList = [
                { foo: "hello" },
                { code: 10, message: "foo" },
                { bar: "world", baz: 9001 }
            ];

            const code = reducePropsToState(propList);
            expect(code).to.be.a("number");
            expect(code).to.equal(10);
        });

        it("should return -1 when no code was provided in the props", () => {

            const propList = [
                { foo: "hello" },
                { title: "bar", message: "foo" },
                { bar: "world", baz: 9001 }
            ];

            const code = reducePropsToState(propList);
            expect(code).to.be.a("number");
            expect(code).to.equal(-1);
        });

        it("should return the highest status code from the list of props", () => {

            const propList = [
                { foo: "hello" },
                { code: 20, message: "foo" },
                { bar: "world", baz: 9001 },
                { code: 30, bar: "foo" },
                { code: -25, message: "foo" },
                { code: 10 }
            ];

            const code = reducePropsToState(propList);
            expect(code).to.be.a("number");
            expect(code).to.equal(30);
        });
    });
});
