# Next.js: 'process' is not defined error

This repository demonstrates a common error in Next.js applications where attempting to access Node.js-specific objects like `process` in client-side components leads to runtime errors.

## Problem

The `about.js` file tries to access `process.env.MY_VARIABLE`.  `process` is a Node.js global object and is not available in the browser environment where client-side JavaScript runs.  This causes a runtime error:  `ReferenceError: process is not defined`.

## Solution

The solution is to avoid accessing `process` or other Node.js globals directly in client-side components.  Instead, pass necessary data from the server-side to the client-side via props or other mechanisms.

The `aboutSolution.js` demonstrates a corrected approach by fetching and using environment variables on the server and passing this data to the client side as props.