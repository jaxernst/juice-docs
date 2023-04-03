# JB721GlobalGovernance

A tiered 721 delegate where each NFT can be used for on chain governance, with votes delegatable globally across all tiers.

[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/24c33179caef17b169ec5b6eb95923f5da66bf32/contracts/JB721GlobalGovernance.sol)

Inherits: [`Votes`](/dev/extensions/juice-721-delegate/contracts/abstract/votes/), [`JBTiered721Delegate`](/dev/extensions/juice-721-delegate/contracts/jbtiered721delegate/)

## Functions

### _getVotingUnits

The voting units for an account from its NFTs across all tiers. NFTs have a tier-specific preset number of voting units.

```solidity
function _getVotingUnits(address _account) internal view virtual override returns (uint256 units);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_account`|`address`|The account to get voting units for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`units`|`uint256`|The voting units for the account.|

### _afterTokenTransferAccounting

handles the tier voting accounting

```solidity
function _afterTokenTransferAccounting(address _from, address _to, uint256 _tokenId, JB721Tier memory _tier)
    internal
    virtual
    override;
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_from`|`address`|The account to transfer voting units from.|
|`_to`|`address`|The account to transfer voting units to.|
|`_tokenId`|`uint256`|The id of the token for which voting units are being transferred.|
|`_tier`|`JB721Tier`|The tier the token id is part of|

