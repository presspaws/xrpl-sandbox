require('dotenv').config();

const TEST_ACCOUNT = {
    address: process.env.TEST_ACCOUNT_ADDRESS,
    secret: process.env.TEST_ACCOUNT_SECRET,
    balance: process.env.TEST_ACCOUNT_BALANCE,
}

const TEST_DEST = {
    address: process.env.TEST_DEST_ADDRESS,
    secret: process.env.TEST_DEST_SECRET,
    balance: process.env.TEST_DEST_BALANCE,
}

module.exports = {
    TEST_ACCOUNT,
    TEST_DEST
}
