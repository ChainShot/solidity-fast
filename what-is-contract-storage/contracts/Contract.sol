// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

// DEPLOYMENT FLOW: compile -> deploy -> 0xabc...

// CONTRACT STORAGE (0xabc...)
// position -> value 
// 0x0 -> 5
// 0x1 -> 15 
// 0x2 -> 27 

contract ExampleContract {
  uint x = 5; // 0x0 
  uint y = 15; // 0x1
  uint z = 27; // 0x2
}
