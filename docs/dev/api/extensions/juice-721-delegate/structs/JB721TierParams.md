# JB721TierParams
[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/24c33179caef17b169ec5b6eb95923f5da66bf32/contracts/structs/JB721TierParams.sol)


```solidity
struct JB721TierParams {
    uint80 contributionFloor;
    uint48 lockedUntil;
    uint40 initialQuantity;
    uint16 votingUnits;
    uint16 reservedRate;
    address reservedTokenBeneficiary;
    uint8 royaltyRate;
    address royaltyBeneficiary;
    bytes32 encodedIPFSUri;
    uint8 category;
    bool allowManualMint;
    bool shouldUseReservedTokenBeneficiaryAsDefault;
    bool shouldUseRoyaltyBeneficiaryAsDefault;
    bool transfersPausable;
}
```

