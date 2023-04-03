# JBPayDataSourceFundingCycleMetadata

[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/24c33179caef17b169ec5b6eb95923f5da66bf32/contracts/structs/JBPayDataSourceFundingCycleMetadata.sol)

```solidity
struct JBPayDataSourceFundingCycleMetadata {
    JBGlobalFundingCycleMetadata global;
    uint256 reservedRate;
    uint256 redemptionRate;
    uint256 ballotRedemptionRate;
    bool pausePay;
    bool pauseDistributions;
    bool pauseRedeem;
    bool pauseBurn;
    bool allowMinting;
    bool allowTerminalMigration;
    bool allowControllerMigration;
    bool holdFees;
    bool preferClaimedTokenOverride;
    bool useTotalOverflowForRedemptions;
    bool useDataSourceForRedeem;
    uint256 metadata;
}
```

