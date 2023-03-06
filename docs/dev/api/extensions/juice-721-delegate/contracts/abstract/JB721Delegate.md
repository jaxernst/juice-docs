# JB721Delegate

Delegate that offers project contributors NFTs upon payment and the ability to redeem NFTs for treasury assets.

---

[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/24c33179caef17b169ec5b6eb95923f5da66bf32/contracts/abstract/JB721Delegate.sol)

**Inherits:**
[`IJB721Delegate`](/dev/api/extensions/juice-721-delegate/interfaces/IJB721Delegate.md), [`IJBFundingCycleDataSource`](/dev/api/interfaces/ijbfundingcycledatasource/), [`IJBPayDelegate`](/dev/api/interfaces/ijbpaydelegate/), [`IJBRedemptionDelegate`](/dev/api/interfaces/ijbredemptiondelegate/), [`ERC721`](/dev/api/extensions/juice-721-delegate/contracts/abstract/ERC721.md)

Adheres to -
- IJB721Delegate: General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.
- IJBFundingCycleDataSource: Allows this contract to be attached to a funding cycle to have its methods called during regular protocol operations.
- IJBPayDelegate: Allows this contract to receive callbacks when a project receives a payment.
IJBRedemptionDelegate: Allows this contract to receive callbacks when a token holder redeems.

Inherits from -
- ERC721: A standard definition for non-fungible tokens (NFTs).


## State Variables
### projectId

The ID of the project this contract's functionality applies to.


```solidity
uint256 public override projectId;
```


### directory

The directory of terminals and controllers for projects.


```solidity
IJBDirectory public override directory;
```


## Functions
### payParams


Part of IJBFundingCycleDataSource, this function gets called when the project receives a payment. It will set itself as the delegate to get a callback from the terminal.


```solidity
function payParams(JBPayParamsData calldata _data)
    public
    view
    virtual
    override
    returns (uint256 weight, string memory memo, JBPayDelegateAllocation[] memory delegateAllocations);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_data`|`JBPayParamsData`|The Juicebox standard project payment data.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`weight`|`uint256`|The weight that tokens should get minted in accordance with.|
|`memo`|`string`|The memo that should be forwarded to the event.|
|`delegateAllocations`|`JBPayDelegateAllocation[]`|The amount to send to delegates instead of adding to the local balance.|


### redeemParams


Part of IJBFundingCycleDataSource, this function gets called when a project's token holders redeem.


```solidity
function redeemParams(JBRedeemParamsData calldata _data)
    public
    view
    virtual
    override
    returns (uint256 reclaimAmount, string memory memo, JBRedemptionDelegateAllocation[] memory delegateAllocations);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_data`|`JBRedeemParamsData`|The Juicebox standard project redemption data.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`reclaimAmount`|`uint256`|The amount that should be reclaimed from the treasury.|
|`memo`|`string`|The memo that should be forwarded to the event.|
|`delegateAllocations`|`JBRedemptionDelegateAllocation[]`|The amount to send to delegates instead of adding to the beneficiary.|


### redemptionWeightOf


The cumulative weight the given token IDs have in redemptions compared to the `totalRedemptionWeight`.


```solidity
function redemptionWeightOf(uint256[] memory _tokenIds, JBRedeemParamsData calldata _data)
    public
    view
    virtual
    returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tokenIds`|`uint256[]`|The IDs of the tokens to get the cumulative redemption weight of.|
|`_data`|`JBRedeemParamsData`|The Juicebox standard project redemption data.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The weight.|


### totalRedemptionWeight


The cumulative weight that all token IDs have in redemptions.


```solidity
function totalRedemptionWeight(JBRedeemParamsData calldata _data) public view virtual returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_data`|`JBRedeemParamsData`|The Juicebox standard project redemption data.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total weight.|


### supportsInterface


Indicates if this contract adheres to the specified interface.

*See [`IERC165-supportsInterface`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/introspection/IERC165.sol).*


```solidity
function supportsInterface(bytes4 _interfaceId) public view virtual override(ERC721, IERC165) returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_interfaceId`|`bytes4`|The ID of the interface to check for adherence to.|


### _initialize


```solidity
function _initialize(uint256 _projectId, IJBDirectory _directory, string memory _name, string memory _symbol)
    internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_projectId`|`uint256`|The ID of the project this contract's functionality applies to.|
|`_directory`|`IJBDirectory`|The directory of terminals and controllers for projects.|
|`_name`|`string`|The name of the token.|
|`_symbol`|`string`|The symbol that the token should be represented by.|


### didPay


Part of IJBPayDelegate, this function gets called when the project receives a payment. It will mint an NFT to the contributor (_data.beneficiary) if conditions are met.

*This function will revert if the contract calling is not one of the project's terminals.*


```solidity
function didPay(JBDidPayData calldata _data) external payable virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_data`|`JBDidPayData`|The Juicebox standard project payment data.|


### didRedeem


Part of IJBRedeemDelegate, this function gets called when the token holder redeems. It will burn the specified NFTs to reclaim from the treasury to the _data.beneficiary.

*This function will revert if the contract calling is not one of the project's terminals.*


```solidity
function didRedeem(JBDidRedeemData calldata _data) external payable virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_data`|`JBDidRedeemData`|The Juicebox standard project redemption data.|


### _processPayment


Process a received payment.


```solidity
function _processPayment(JBDidPayData calldata _data) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_data`|`JBDidPayData`|The Juicebox standard project payment data.|


### _didBurn


A function that will run when tokens are burned via redemption.


```solidity
function _didBurn(uint256[] memory _tokenIds) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tokenIds`|`uint256[]`|The IDs of the tokens that were burned.|


## Errors
### INVALID_PAYMENT_EVENT

```solidity
error INVALID_PAYMENT_EVENT();
```

### INVALID_REDEMPTION_EVENT

```solidity
error INVALID_REDEMPTION_EVENT();
```

### UNAUTHORIZED

```solidity
error UNAUTHORIZED();
```

### UNEXPECTED_TOKEN_REDEEMED

```solidity
error UNEXPECTED_TOKEN_REDEEMED();
```

### INVALID_REDEMPTION_METADATA

```solidity
error INVALID_REDEMPTION_METADATA();
```

