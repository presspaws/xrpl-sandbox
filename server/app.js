const xrpl = require('xrpl');
const { TEST_ACCOUNT, TEST_DEST } = require('./config');

async function main() {
    const client = new xrpl.Client("wss://s.altnet.rippletest.net/");
    await client.connect();
    console.log('CONNECTED!');

    const { address, secret } = TEST_ACCOUNT;
    const { address: dAddress, secret: dSecret } = TEST_DEST;
    
    const {
        publicKey,
        privateKey,
        classicAddress,
    } = xrpl.Wallet.fromSeed(secret);

    const response = await client.request({
        command: 'account_info',
        account: classicAddress,
        ledger_index: 'validated'
    });
    console.log('response', response);

    client.disconnect();
    console.log('DISCONNECTED!')
}

main();