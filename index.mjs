import { Printer } from "./src/AbstractPrinter.mjs";
import { UnixPrinterDriver } from "./src/UnixPrint.mjs";
import { WinPrinterDriver } from "./src/WinPrint.mjs";

var isWin = process.platform === "win32";

/**
 * @param {string} printerName 
 * @returns {Promise <Printer>}
 */
export async function getPrinter(printerName) {
    if (isWin)
        return await WinPrinterDriver.getPrinter(printerName);
    else
        return await UnixPrinterDriver.getPrinter(printerName);

}

/**
 * @returns {Promise<string[]>}
 */
export async function getAvaliablePrinters() {
    if (isWin)
        return await WinPrinterDriver.getAvaliablePrinters();
    else
        return await UnixPrinterDriver.getAvaliablePrinters();
}


