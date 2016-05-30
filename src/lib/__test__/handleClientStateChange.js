import { expect } from "chai";
import handleClientStateChange from "../handleClientStateChange";

describe("konnektid-react-status", () => {

    describe("handleClientStateChange", () => {

        it("should be exported", () => {
            expect(handleClientStateChange).to.be.an.instanceof(Function);
        });

        it("should do nothing", () => {
            const res = handleClientStateChange();
            expect(res).to.not.exist;
        });
    });
});
