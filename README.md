# Unhandled Exception in Node.js HTTP Server

This repository demonstrates a common error in Node.js HTTP servers: improper handling of large requests, leading to potential memory leaks and unexpected behavior.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version.

## Problem
The original code lacks error handling and efficient stream management.  When receiving large requests, it might buffer the entire request body in memory before processing, leading to memory exhaustion for very large files or requests.  It also lacks mechanisms for handling potential errors during request processing.

## Solution
The solution leverages stream processing to handle large requests efficiently. It avoids loading the entire request body into memory at once.  Robust error handling is implemented to gracefully manage unexpected situations, ensuring the server's stability and preventing crashes.