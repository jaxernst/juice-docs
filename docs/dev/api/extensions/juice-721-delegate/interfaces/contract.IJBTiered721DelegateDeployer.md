# IJBTiered721DelegateDeployer
[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/2d5cc8b5e5fa5f9438288f074222da0ada454156/contracts/interfaces/IJBTiered721DelegateDeployer.sol)


## Functions
### deployDelegateFor


```solidity
function deployDelegateFor(uint256 _projectId, JBDeployTiered721DelegateData memory _deployTieredNFTRewardDelegateData)
    external
    returns (IJBTiered721Delegate delegate);
```

## Events
### DelegateDeployed

```solidity
event DelegateDeployed(uint256 indexed projectId, IJBTiered721Delegate newDelegate, JB721GovernanceType governanceType);
```

