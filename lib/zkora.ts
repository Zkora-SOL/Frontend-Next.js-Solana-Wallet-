import { Connection, PublicKey } from '@solana/web3.js';
import { ZKoraClient } from '@zkora/sdk';


export function createZKoraClient(connection: Connection) {
return new ZKoraClient(connection, {
zkPay: new PublicKey('ZKPay1111111111111111111111111111111111'),
zkIdentity: new PublicKey('ZKID11111111111111111111111111111111111'),
zkStorage: new PublicKey('ZKST11111111111111111111111111111111111'),
});
}
