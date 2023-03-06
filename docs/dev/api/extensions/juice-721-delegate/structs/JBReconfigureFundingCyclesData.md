# JBReconfigureFundingCyclesData
[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/24c33179caef17b169ec5b6eb95923f5da66bf32/contracts/structs/JBReconfigureFundingCyclesData.sol)


```solidity
struct JBReconfigureFundingCyclesData {
    JBFundingCycleData data;
    JBPayDataSourceFundingCycleMetadata metadata;
    uint256 mustStartAtOrAfter;
    JBGroupedSplits[] groupedSplits;
    JBFundAccessConstraints[] fundAccessConstraints;
    string memo;
}
```

