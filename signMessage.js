import * as secp from "ethereum-cryptography/secp256k1";
import { keccak256 } from "ethereum-cryptography/keccak";
import { utf8ToBytes } from "ethereum-cryptography/utils";
// import * as dotenv from "dotenv";
// dotenv.config();

const PRIVATE_KEY1 =
  "7033e2afd793f4de5e3b6796577f1ddd704f82badaff197d910937ae452c2877";
const PRIVATE_KEY2 =
  "65d768e93a995f1975622b79b5068a28f9aca4b2b8a2650b96dd031671e07034";
const PRIVATE_KEY3 =
  "4f4f2ab85ac039b5785d4b88b07d168cc2244d565a4c10e8b191e6b0d84fce84";

// MANUALLY ADD THE PRIVATE KEY OF THE ACCOUNT WHO WANTS TO TRANSFER!
const PRIVATE_KEY = PRIVATE_KEY1;

export function hashMessage(message) {
  return keccak256(utf8ToBytes(message.toString()));
}

export async function signMessage(msg) {
  console.log();
  return secp.secp256k1.sign(hashMessage(msg), PRIVATE_KEY, {
    extraEntropy: true,
    recoveryBit: true,
  });
}
