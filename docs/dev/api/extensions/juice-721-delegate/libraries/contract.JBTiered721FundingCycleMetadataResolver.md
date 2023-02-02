# JBTiered721FundingCycleMetadataResolver
[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/2d5cc8b5e5fa5f9438288f074222da0ada454156/contracts/libraries/JBTiered721FundingCycleMetadataResolver.sol)


## Functions
### transfersPaused


```solidity
function transfersPaused(uint256 _data) internal pure returns (bool);
```

### mintingReservesPaused


```solidity
function mintingReservesPaused(uint256 _data) internal pure returns (bool);
```

### packFundingCycleGlobalMetadata


Pack the tiered 721 funding cycle metadata.


```solidity
function packFundingCycleGlobalMetadata(JBTiered721FundingCycleMetadata memory _metadata)
    internal
    pure
    returns (uint256 packed);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_metadata`|`JBTiered721FundingCycleMetadata`|The metadata to validate and pack.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`packed`|`uint256`|The packed uint256 of all tiered 721 metadata params.|


### expandMetadata


Expand the tiered 721 funding cycle metadata.


```solidity
function expandMetadata(uint8 _packedMetadata)
    internal
    pure
    returns (JBTiered721FundingCycleMetadata memory metadata);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_packedMetadata`|`uint8`|The packed metadata to expand.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`metadata`|`JBTiered721FundingCycleMetadata`|The tiered 721 metadata object.|


