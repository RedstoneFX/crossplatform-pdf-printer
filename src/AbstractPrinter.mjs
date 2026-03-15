


/**
 * Abstract class for printer representation.
 */
export class Printer {
    #name = "";

    constructor(printerName) {
        this.#name = printerName;
    }

    /**
     * Returns name of this printer
     * @returns {string}
     */
    getName() {
        return this.#name;
    }

    /**
     * Returns current status of this printer
     * @returns {"error" | "printing" | "idle" | "preparing"}
    */
    async getStatus() {
        throw new Error("Not implemented for current OS.");
    }

    /**
     * Starts printing of file, specified by filename or path. Throws error if printer is busy or cant print file.
     * @param {string} filename 
     */
    async printPDF(filename) {
        throw new Error("Not implemented for current OS.");
    }
}