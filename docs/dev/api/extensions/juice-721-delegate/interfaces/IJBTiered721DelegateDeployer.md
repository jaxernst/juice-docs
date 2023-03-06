# IJBTiered721DelegateDeployer
[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/24c33179caef17b169ec5b6eb95923f5da66bf32/contracts/interfaces/IJBTiered721DelegateDeployer.sol)


## Functions
### deployDelegateFor


```solidity
function deployDelegateFor(
    uint256 _projectId,
    JBDeployTiered721DelegateData memory _deployTieredNFTRewardDelegateData,
    IJBDirectory _directory
) external returns (IJBTiered721Delegate delegate);
```

## Events
### DelegateDeployed

```solidity
event DelegateDeployed(
    uint256 indexed projectId,
    IJBTiered721Delegate newDelegate,
    JB721GovernanceType governanceType,
    IJBDirectory directory
);
```

