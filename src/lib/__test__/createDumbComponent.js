import { expect } from "chai";
import createDumbComponent from "../createDumbComponent";
import { isValidElement } from "react";

describe("konnektid-react-status", () => {

    describe("createDumbComponent", () => {

        it("should be exported", () => {
            expect(createDumbComponent).to.be.an.instanceof(Function);
        });

        it("should return a valid React component", () => {
            const res = createDumbComponent();
            expect(res).to.be.a("function");
            const elem = res({});
            expect(isValidElement(elem)).to.equal(true);
        });
    });
});
