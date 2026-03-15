import UnixPrint from "unix-print";
import { Printer } from "./AbstractPrinter.mjs";
import { execSync } from "node:child_process";

// Requires : sudo apt-get install cups-client cups


class UnixPrinter extends Printer {
    async getStatus() {
        let answer = execSync("lpstat -p \"" + this.getName() + "\"").toString();
        if (answer.includes("idle")) return "idle";
        else if (answer.includes("printing")) return "printing";
        else return "error";
    }


    async printPDF(filename) {
        let status = await this.getStatus();
        if (status == "idle")
            await UnixPrint.print(filename, this.getName());
        else
            throw new Error("Cannot send file to printer, because current status is: " + status);
    }
}


export class UnixPrinterDriver {
    static async getAvaliablePrinters() {
        let printers = await UnixPrint.getPrinters();
        let printerNames = [];
        for (let i in printers) {
            printerNames.push(printers[i].printer);
        }
        return printerNames;
    }


    static async getPrinter(printerName) {
        let printerNames = await UnixPrinterDriver.getAvaliablePrinters();
        if (printerNames.includes(printerName)) {
            return new UnixPrinter(printerName);
        } else throw new Error("There is no printer with name \"" + printerName + "\". Use one of this: " + JSON.stringify(printerNames));
    }
}