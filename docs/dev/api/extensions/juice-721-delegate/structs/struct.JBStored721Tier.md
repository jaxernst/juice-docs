# JBStored721Tier
[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/2d5cc8b5e5fa5f9438288f074222da0ada454156/contracts/structs/JBStored721Tier.sol)


```solidity
struct JBStored721Tier {
    uint80 contributionFloor;
    uint40 lockedUntil;
    uint40 remainingQuantity;
    uint40 initialQuantity;
    uint16 votingUnits;
    uint16 reservedRate;
    uint8 royaltyRate;
    uint8 category;
    bool allowManualMint;
    bool transfersPausable;
}
```

