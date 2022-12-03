import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { MethCreate } from "../../types/contracts/MethCreate";
import type { MethCreate__factory } from "../../types/factories/contracts/MethCreate__factory";

task("deploy:MethCreate").setAction(async function (taskArguments: TaskArguments, { ethers, run }) {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const methCreateFactory: MethCreate__factory = <MethCreate__factory>await ethers.getContractFactory("MethCreate");
  const methCreate: MethCreate = <MethCreate>await methCreateFactory.connect(signers[0]).deploy();
  await methCreate.deployed();
  console.log("MethCreate deployed to: ", methCreate.address);

  // verify on polygonscan
  const localChainId = 31337;
  const currentChainId = await signers[0].getChainId();
  try {
    if (currentChainId !== localChainId) {
      await run("verify:verify", {
        address: methCreate.address,
      });
    }
  } catch (error) {
    console.error(error);
  }
});
