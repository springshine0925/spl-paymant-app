import {IdlAccounts, Program} from "@coral-xyz/anchor";
import { IDL } from "./spl_payment";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const ProgramId = new PublicKey("");
const conection = new Connection(clusterApiUrl('devnet'), "confirmed");

export const program = new Program<Counter>(IDL, programId, {
    connection,
});
export const [counterPDA] =  PublicKey.findProgramAddressSync(
    [Buffer.from("counter")],
    program.programId,
)


export type CounterData = IdlAccounts<Counter>['counter'];