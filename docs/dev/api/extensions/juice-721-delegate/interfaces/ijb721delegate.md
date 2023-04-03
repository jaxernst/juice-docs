# IJB721Delegate

[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/24c33179caef17b169ec5b6eb95923f5da66bf32/contracts/interfaces/IJB721Delegate.sol)

## Functions

### projectId

```solidity
function projectId() external view returns (uint256);
```

### directory

```solidity
function directory() external view returns (IJBDirectory);
```

### setBaseUri

```solidity
function setBaseUri(string memory _baseUri) external;
```

### setContractUri

```solidity
function setContractUri(string calldata _contractMetadataUri) external;
```

### setTokenUriResolver

```solidity
function setTokenUriResolver(IJBTokenUriResolver _tokenUriResolver) external;
```

## Events

### SetBaseUri

```solidity
event SetBaseUri(string indexed baseUri, address caller);
```

### SetContractUri

```solidity
event SetContractUri(string indexed contractUri, address caller);
```

### SetTokenUriResolver

```solidity
event SetTokenUriResolver(IJBTokenUriResolver indexed newResolver, address caller);
```

