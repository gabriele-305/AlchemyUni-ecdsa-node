import { useState } from "react";
import server from "./server";
import {signMessage, hashMessage} from "../../signMessage";
import * as secp from "ethereum-cryptography/secp256k1";
import { toHex } from "ethereum-cryptography/utils";


function Transfer({ address, setBalance }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function recoverKey(signature, message, recoveryBit) {
    return secp.recoverPublicKey(signature, hashMessage(message), recoveryBit);
  }

  async function transfer(evt) {
    evt.preventDefault();

    const message = address + " send " + recipient + " " + sendAmount;
    const sig = await signMessage(message);
    const expectedPublicKey = sig.recoverPublicKey(hashMessage(message));//await recoverKey(sig, message, recoveryBit);
    console.log(expectedPublicKey.toHex(), address)

    if (address == expectedPublicKey.toHex()) {
      try {
        const {
          data: { balance },
        } = await server.post(`send`, {
          sender: address,
          amount: parseInt(sendAmount),
          recipient,
        });
        setBalance(balance);
      } catch (ex) {
        alert(ex.response.data.message);
      }
    } else {
      alert("TRANSFER FAILED: You don't own this wallet!");
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;
