const Client = require('bitcoin-core')

const client = new Client({ 
  network: 'regtest', 
  username: 'admin', 
  password: 'admin', 
  port: 18443 
})

export class RPCClient {
  static listWalletDir() {
    return new Promise((resolve, reject) => {
      client.listWalletDir()
        .then((res: any) => resolve(res))
        .catch((err: any) => reject(err))
    })
  }
  static listWallets() {
    return new Promise((resolve, reject) => {
      client.listWallets()
        .then((res: any) => resolve(res))
        .catch((err: any) => reject(err))
    })
  }
  static loadWallet(walletName: string) {
    return new Promise((resolve, reject) => {
      client.loadWallet(walletName)
        .then((res: any) => resolve(res))
        .catch((err: any) => reject(err))
    })
  }
  static getNewAddress() {
    return new Promise((resolve, reject) => {
      client.getNewAddress()
        .then((res: any) => resolve(res))
        .catch((err: any) => reject(err))
    })
  }
  static generateToAddress(blockCount: number, address: string) {
    return new Promise((resolve, reject) => {
      client.generateToAddress(blockCount, address)
        .then((res: any) => resolve(res))
        .catch((err: any) => reject(err))
    })
  }
  static getBalance() {
    return new Promise((resolve, reject) => {
      client.getBalance()
        .then((res: any) => resolve(res))
        .catch((err: any) => reject(err))
    })
  }
  static sendToAddress(address: string, amount: number) {
    return new Promise((resolve, reject) => {
      client.sendToAddress(address, amount)
        .then((res: any) => resolve(res))
        .catch((err: any) => reject(err))
    })
  }
}