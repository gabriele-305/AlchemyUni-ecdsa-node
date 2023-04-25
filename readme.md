## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions

For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4

### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder
2. Run `npm install` to install all the depedencies
3. Run `node index` to start the server

The application should connect to the default server port (3042) automatically!

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.

### Usage

You should go in `signMessage.js` and change the `PRIVATE_KEY` variable based on the private key you own, this is made to simulate that you and only you own the private key and the other account don't know what is your private key.

Once you do that you can send transaction **to** any address you want but you can't sign or send transaction using other accounts. In this case an alert is showned up saying that you don't own the address!

The are currently 3 accounts loaded (public keys):

1. 020911d20b5ad1c8e77105173e23686af5287e01e65e8d260ffcfb4d4103c4451f (100 starting ETH)
2. 02dcfddef7ae16c6f55382897cf2a5471eac754fba305d4898b57f33226ae65bd5 (50 starting ETH)
3. 02a6e053458f129ce08a6a1257fe2a7fd2a60d3ae85cb85b8902be54a881655b0b (75 starting ETH)
