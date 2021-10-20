require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remember hole heavy knee tackle skill'; 
let testAccounts = [
"0xbb57b27153ec480cb3c5a043ce485286c9c0c517bef101538a7ae82bf5bed7cb",
"0x047b24cd26a4d38bc3a356e17d6136f146dc408d60023128346b0ccf8a3ea077",
"0x3b527ce3b3f547f5546a59182b9ad74ba70c732616c75a24ed3daed34092caff",
"0x2fbf4159657dc163225a0f03fe839c4edd63fc6fbef83a780e19781ea6c57bf1",
"0xbdb951e66a874bc9819204ad4859cba70edb1518032ddf7762bec26301f1a34f",
"0xf22891e47304b61ce3275e2b59d28fccf548f6db205b54f74dd9773708a2b58c",
"0x9cb189686fb5f996630607656986f5092c44780285560323b7e9babdc581be29",
"0xba05593bd05dd01767ab5275acce8dbd4f7b7ea11cef9d85822d0b35fc3b616c",
"0x04485a2f449c17dbd3cd5f71f0375980b778ee203aaa1d622c80f830e0a4d9d9",
"0x76a829cc2ae53da63e333813b74f00ad37689c8193a863f528605fb461517aec"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

