require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture stove cost payment unaware gesture canoe army gauge'; 
let testAccounts = [
"0x7a041db3259fbc4638611f99143d4e4a95a29c904ebe4d0977ea6bfad46eb7e4",
"0xfbd5fbb694db6669a6e037309f0db9a127eb36081247062fde1a98df61c3c63c",
"0x720bf40035b72b941421206c2ec639a84b6e6a952ccb8076722eb739b6640388",
"0xb5b95813181eb65a09a7541e56ddfda29dbe6df0341cadca47d13f1548e427c3",
"0xda483909bc398a0a3647ba848ee2dd175ca171cac5ef9e8330f8afcd8178f990",
"0x22db6934ca803beec338b2c485f7d2f1b553a8c68274e18d85fea2e212ccf203",
"0x2ca30bf6933ebefa15a64a666bf40448fd80b7a973cb0a56e5bafbd00247be6c",
"0xdc654ca8f1d479686605b900f37ef2df5a461e4a67d73d4ff5b4aa7d8eaf1f5d",
"0x4fe126bd3a9a5590e0db5459e9118ec544bfb82fc685fea2ae917f0f6c500026",
"0x2cfc722499cfe510e3ea7a0810f4d13a1136f12e208f44cb452e1bc2419490e3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
