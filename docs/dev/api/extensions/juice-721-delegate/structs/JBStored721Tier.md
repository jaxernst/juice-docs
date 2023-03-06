# JBStored721Tier
[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/24c33179caef17b169ec5b6eb95923f5da66bf32/contracts/structs/JBStored721Tier.sol)


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

