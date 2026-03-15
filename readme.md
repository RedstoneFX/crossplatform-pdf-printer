# CROSSPLATFORM PDF PRINTER for NodeJS

## DESCRIPTION
NodeJS library, allowing to send PDF files to printer, regardless of the OS used.

## DEPENDENCIES
This project depends on these Node.JS libraries:
- [pdf-to-printer](https://www.npmjs.com/package/pdf-to-printer) (for WINDOWS 10/11)
- [unix-print](https://www.npmjs.com/package/unix-print) (for UNIX-based OS)

And for **UNIX**, you additionaly need to install this packages:
- *cups-client* (install via `sudo apt-get install cups-client`)
- *cups* (install via `sudo apt-get install cups`)

## FEATURES
```js
/**
 * Creates "Printer" object that allows access to printer
 * @param {string} printerName
 * @returns {Promise <Printer>}
 */
async function getPrinter(printerName);

/**
 * Returns names of all installed printers
 * @returns {Promise<string[]>}
 */
async function getAvaliablePrinters();
```

## Printer METHODS
```js 
class Printer {
    /**
     * Returns name of this printer
     * @returns {string}
     */
    getName();

    /**
     * Returns current status of this printer
     * @returns {"error" | "printing" | "idle" | "preparing"}
    */
    async getStatus();

    /**
     * Starts printing of file, specified by filename or path. Throws error if printer is busy or cant print file.
     * @param {string} filename
     */
    async printPDF(filename);
}
```
## TODO
- improve README.md
- test on UNIX based OS
- implement advanced status checking of specific document

