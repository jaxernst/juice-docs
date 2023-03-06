# JB721Tier
[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/24c33179caef17b169ec5b6eb95923f5da66bf32/contracts/structs/JB721Tier.sol)


```solidity
struct JB721Tier {
    uint256 id;
    uint256 contributionFloor;
    uint256 lockedUntil;
    uint256 remainingQuantity;
    uint256 initialQuantity;
    uint256 votingUnits;
    uint256 reservedRate;
    address reservedTokenBeneficiary;
    uint256 royaltyRate;
    address royaltyBeneficiary;
    bytes32 encodedIPFSUri;
    uint256 category;
    bool allowManualMint;
    bool transfersPausable;
}
```

