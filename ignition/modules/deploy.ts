import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Deployment", (m) => {
  const token = m.contract("Token");
  const ethSwap = m.contract("EthSwap");
  return { token, ethSwap };
});
