


/**
 * Abstract class for printer representation.
 */
export class Printer {
    #name = "";

    constructor(printerName) {
        this.#name = printerName;
    }

    getName() {
        return this.#name;
    }

    /**
     * @returns {"error" | "printing" | "idle" | "preparing"}
    */
    async getStatus() {
        throw new Error("Not implemented for current OS.");
    }

    async printPDF(filename) {
        throw new Error("Not implemented for current OS.");
    }
}