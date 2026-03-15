import { execSync } from "node:child_process";
import printer from "pdf-to-printer";
import { Printer } from "./AbstractPrinter.mjs";



class WinPrinter extends Printer {

    async getStatus() {
        try {
            let answer = execSync('wmic printer where name="' + this.getName() + '" get printerstatus').toString();
            let status = JSON.stringify(answer.split("\n")[1].trim());
            switch (status) {
                case '"3"': return "idle";
                case '"4"': return "printing";
                case '"5"': return "preparing";
                default: return "error";
            }
        } catch (e) {
            return "offline";
        }
    }

    async printPDF(filename) {
        let status = await this.getStatus();
        if (status == "idle") {
            await printer.print(filename, { printer: this.getName() });
        }
        else throw new Error("Не удалось отправить документ в печать, так как принтер находится в состоянии: " + status);
    }
}

export class WinPrinterDriver {
    static async getPrinter(printerName) {
        let printerNames = await WinPrinterDriver.getAvaliablePrinters();
        if (printerNames.includes(printerName)) {
            return new WinPrinter(printerName);
        } else {
            throw new Error("Не удалось найти принтер с именем \"" + printerName + "\".");
        }
    }

    static async getAvaliablePrinters() {
        let printers = await printer.getPrinters();
        let printerNames = [];
        for (let i in printers) {
            printerNames.push(printers[i].deviceId);
        }
        return printerNames;
    }
}