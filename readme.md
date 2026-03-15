# CROSSPLATFORM PDF PRINTER for NodeJS

## DESCRIPTION
NodeJS library, allowing to send PDF files to printer, regardless of the OS used.

## DEPENDENCIES
This project depends on these Node.JS libraries:
- [pdf-to-printer](https://www.npmjs.com/package/pdf-to-printer) (for WINDOWS 10/11)
- [unix-print](https://www.npmjs.com/package/unix-print) (for UNIX-based OS)

And for **UNIX**, you additionaly need to install this packages:
- *cups-client* (install via `sudo apt-get install cups-client`)
- *cups* (install via `sudo apt-get install cups)

## TODO
- test on UNIX based OS
- implement advanced status checking of specific document