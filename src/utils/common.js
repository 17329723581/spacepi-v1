const Wb3 = require('web3')

export const web3 = new Wb3(window.ethereum);

export const accounts = web3.eth.getAccounts()

