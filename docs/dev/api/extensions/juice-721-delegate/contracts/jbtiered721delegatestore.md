# JBTiered721DelegateStore

The contract that stores and manages the NFT's data.

[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/24c33179caef17b169ec5b6eb95923f5da66bf32/contracts/JBTiered721DelegateStore.sol)

Inherits: [`IJBTiered721DelegateStore`](/dev/api/extensions/juice-721-delegate/interfaces/ijbtiered721delegatestore/)

Adheres to:

- [`IJBTiered721DelegateStore`](/dev/api/extensions/juice-721-delegate/interfaces/ijbtiered721delegatestore/): General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.

## State Variables

### MAX_ROYALTY_RATE

```solidity
uint256 public constant override MAX_ROYALTY_RATE = 200;
```

### _ONE_BILLION

```solidity
uint256 private constant _ONE_BILLION = 1_000_000_000;
```

### _BASE_LOCK_TIMESTAMP

The timestamp to add on to tier lock timestamps.

*Useful so the stored lock timestamp per-tier can fit in a smaller storage slot.*

```solidity
uint256 private constant _BASE_LOCK_TIMESTAMP = 1672531200;
```

### _tierIdAfter

The tier ID that should come after the given tier ID when sorting by contribution floor.

*If empty, assume the next tier ID should come after.

- _nft The NFT contract to get ordered tier ID from.
- _tierId The tier ID to get a tier after relative to.*

```solidity
mapping(address => mapping(uint256 => uint256)) internal _tierIdAfter;
```

### _reservedTokenBeneficiaryOf

An optional beneficiary for the reserved token of a given tier.

- _nft The NFT contract to which the reserved token beneficiary belongs.
- _tierId the ID of the tier.

```solidity
mapping(address => mapping(uint256 => address)) internal _reservedTokenBeneficiaryOf;
```

### _royaltyBeneficiaryOf

An optional beneficiary for the royalty of a given tier.

- _nft The NFT contract to which the royalty beneficiary belongs.
- _tierId the ID of the tier.

```solidity
mapping(address => mapping(uint256 => address)) internal _royaltyBeneficiaryOf;
```

### _storedTierOf

The stored reward tier.

- _nft The NFT contract to which the tiers belong.
- _tierId The incremental ID of the tier, starting with 1.

```solidity
mapping(address => mapping(uint256 => JBStored721Tier)) internal _storedTierOf;
```

### _flagsOf

Flags that influence the behavior of each NFT.

- _nft The NFT for which the flags apply.

```solidity
mapping(address => JBTiered721Flags) internal _flagsOf;
```

### _isTierRemovedBitmapWord

For each tier ID, a bitmap containing flags indicating if the tier has been removed.

- _nft The NFT contract to which the tier belong.
- _depth The bitmap row.
- _word The row content bitmap.

```solidity
mapping(address => mapping(uint256 => uint256)) internal _isTierRemovedBitmapWord;
```

### _trackedLastSortTierIdOf

For each NFT, the tier ID that comes last when sorting.

*If not set, it is assumed the `maxTierIdOf` is the last sorted.

- _nft The NFT contract to which the tier belongs.*

```solidity
mapping(address => uint256) internal _trackedLastSortTierIdOf;
```

### _startingTierIdOfCategory

The ID of the first tier in each category.

- _nft The NFT contract to get the tier ID of.
- _category The category to get the first tier ID of.

```solidity
mapping(address => mapping(uint256 => uint256)) internal _startingTierIdOfCategory;
```

### maxTierIdOf

The biggest tier ID used.

*This may not include the last tier ID if it has been removed.

- _nft The NFT contract to get the number of tiers.*

```solidity
mapping(address => uint256) public override maxTierIdOf;
```

### tierBalanceOf

Each account's balance within a specific tier.

- _nft The NFT contract to which the tier balances belong.
- _owner The address to get a balance for.
- _tierId The ID of the tier to get a balance within.

```solidity
mapping(address => mapping(address => mapping(uint256 => uint256))) public override tierBalanceOf;
```

### numberOfReservesMintedFor

The number of reserved tokens that have been minted for each tier.

- _nft The NFT contract to which the reserve data belong.
- _tierId The ID of the tier to get a minted reserved token count for.

```solidity
mapping(address => mapping(uint256 => uint256)) public override numberOfReservesMintedFor;
```

### numberOfBurnedFor

The number of tokens that have been burned for each tier.

- _nft The NFT contract to which the burned data belong.
- _tierId The ID of the tier to get a burned token count for.

```solidity
mapping(address => mapping(uint256 => uint256)) public override numberOfBurnedFor;
```

### defaultReservedTokenBeneficiaryOf

The beneficiary of reserved tokens when the tier doesn't specify a beneficiary.

- _nft The NFT contract to which the reserved token beneficiary applies.

```solidity
mapping(address => address) public override defaultReservedTokenBeneficiaryOf;
```

### defaultRoyaltyBeneficiaryOf

The beneficiary of royalties when the tier doesn't specify a beneficiary.

- _nft The NFT contract to which the royalty beneficiary applies.

```solidity
mapping(address => address) public override defaultRoyaltyBeneficiaryOf;
```

### firstOwnerOf

The first owner of each token ID, stored on first transfer out.

- _nft The NFT contract to which the token belongs.
- _tokenId The ID of the token to get the stored first owner of.

```solidity
mapping(address => mapping(uint256 => address)) public override firstOwnerOf;
```

### baseUriOf

The common base for the tokenUri's

- _nft The NFT for which the base URI applies.

```solidity
mapping(address => string) public override baseUriOf;
```

### tokenUriResolverOf

Custom token URI resolver, supersedes base URI.

- _nft The NFT for which the token URI resolver applies.

```solidity
mapping(address => IJBTokenUriResolver) public override tokenUriResolverOf;
```

### contractUriOf

Contract metadata uri.

- _nft The NFT for which the contract URI resolver applies.

```solidity
mapping(address => string) public override contractUriOf;
```

### encodedIPFSUriOf

When using this contract to manage token uri's, those are stored as 32bytes, based on IPFS hashes stripped down.

- _nft The NFT contract to which the encoded upfs uri belongs.
- _tierId the ID of the tier

```solidity
mapping(address => mapping(uint256 => bytes32)) public override encodedIPFSUriOf;
```

## Functions

### tiers

Gets an array of all the active tiers.

```solidity
function tiers(address _nft, uint256 _category, uint256 _startingId, uint256 _size)
    external
    view
    override
    returns (JB721Tier[] memory _tiers);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT contract to get tiers for.|
|`_category`|`uint256`|The category of the tiers to get. Send 0 for any category.|
|`_startingId`|`uint256`|The starting tier ID of the array of tiers sorted by contribution floor. Send 0 to start at the beginning.|
|`_size`|`uint256`|The number of tiers to include.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`_tiers`|`JB721Tier[]`|All the tiers.|

### tier

Return the tier for the specified ID.

```solidity
function tier(address _nft, uint256 _id) external view override returns (JB721Tier memory);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT to get a tier within.|
|`_id`|`uint256`|The ID of the tier to get.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`JB721Tier`|The tier.|

### tierOfTokenId

Return the tier for the specified token ID.

```solidity
function tierOfTokenId(address _nft, uint256 _tokenId) external view override returns (JB721Tier memory);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT to get a tier within.|
|`_tokenId`|`uint256`|The ID of token to return the tier of.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`JB721Tier`|The tier.|

### totalSupply

The total supply of issued NFTs from all tiers.

```solidity
function totalSupply(address _nft) external view override returns (uint256 supply);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT to get a total supply of.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`supply`|`uint256`|The total number of NFTs between all tiers.|

### numberOfReservedTokensOutstandingFor

The number of reserved tokens that can currently be minted within the tier.

```solidity
function numberOfReservedTokensOutstandingFor(address _nft, uint256 _tierId) external view override returns (uint256);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT to get a number of reserved tokens outstanding.|
|`_tierId`|`uint256`|The ID of the tier to get a number of reserved tokens outstanding.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The outstanding number of reserved tokens within the tier.|

### votingUnitsOf

The voting units for an account from its NFTs across all tiers. NFTs have a tier-specific preset number of voting units.

```solidity
function votingUnitsOf(address _nft, address _account) external view virtual override returns (uint256 units);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT to get voting units within.|
|`_account`|`address`|The account to get voting units for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`units`|`uint256`|The voting units for the account.|

### tierVotingUnitsOf

The voting units for an account from its NFTs across all tiers. NFTs have a tier-specific preset number of voting units.

```solidity
function tierVotingUnitsOf(address _nft, address _account, uint256 _tierId)
    external
    view
    virtual
    override
    returns (uint256);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT to get voting units within.|
|`_account`|`address`|The account to get voting units for.|
|`_tierId`|`uint256`|The ID of the tier to get voting units for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The voting units for the account.|

### encodedTierIPFSUriOf

Resolves the encoded tier IPFS URI of the tier for the given token.

```solidity
function encodedTierIPFSUriOf(address _nft, uint256 _tokenId) external view override returns (bytes32);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT contract to which the encoded IPFS URI belongs.|
|`_tokenId`|`uint256`|the ID of the token.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The encoded IPFS URI.|

### flagsOf

Flags that influence the behavior of each NFT.

```solidity
function flagsOf(address _nft) external view override returns (JBTiered721Flags memory);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT for which the flags apply.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`JBTiered721Flags`|The flags.|

### isTierRemoved

Tier removed from the current tiering

```solidity
function isTierRemoved(address _nft, uint256 _tierId) external view override returns (bool);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT for which the removed tier is being queried.|
|`_tierId`|`uint256`|The tier ID to check if removed.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|True if the tier has been removed|

### royaltyInfo

Royalty info conforming to EIP-2981.

```solidity
function royaltyInfo(address _nft, uint256 _tokenId, uint256 _salePrice)
    external
    view
    override
    returns (address receiver, uint256 royaltyAmount);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT for which the royalty applies.|
|`_tokenId`|`uint256`|The ID of the token that the royalty is for.|
|`_salePrice`|`uint256`|The price being paid for the token.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address of the royalty's receiver.|
|`royaltyAmount`|`uint256`|The amount of the royalty.|

### balanceOf

The total number of tokens owned by the given owner.

```solidity
function balanceOf(address _nft, address _owner) public view override returns (uint256 balance);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT to get a balance from.|
|`_owner`|`address`|The address to check the balance of.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`balance`|`uint256`|The number of tokens owners by the owner across all tiers.|

### redemptionWeightOf

The cumulative weight the given token IDs have in redemptions compared to the `totalRedemptionWeight`.

```solidity
function redemptionWeightOf(address _nft, uint256[] calldata _tokenIds) public view override returns (uint256 weight);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT for which the redemption weight is being calculated.|
|`_tokenIds`|`uint256[]`|The IDs of the tokens to get the cumulative redemption weight of.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`weight`|`uint256`|The weight.|

### totalRedemptionWeight

The cumulative weight that all token IDs have in redemptions.

```solidity
function totalRedemptionWeight(address _nft) public view override returns (uint256 weight);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT for which the redemption weight is being calculated.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`weight`|`uint256`|The total weight.|

### tierIdOfToken

The tier number of the provided token ID.

*Tier's are 1 indexed from the `tiers` array, meaning the 0th element of the array is tier 1.*

```solidity
function tierIdOfToken(uint256 _tokenId) public pure override returns (uint256);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tokenId`|`uint256`|The ID of the token to get the tier number of.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The tier number of the specified token ID.|

### reservedTokenBeneficiaryOf

The reserved token beneficiary for each tier.

```solidity
function reservedTokenBeneficiaryOf(address _nft, uint256 _tierId) public view override returns (address);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT to get the reserved token beneficiary within.|
|`_tierId`|`uint256`|The ID of the tier to get a reserved token beneficiary of.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The reserved token beneficiary.|

### recordAddTiers

Adds tiers.

```solidity
function recordAddTiers(JB721TierParams[] calldata _tiersToAdd) external override returns (uint256[] memory tierIds);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tiersToAdd`|`JB721TierParams[]`|The tiers to add.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`tierIds`|`uint256[]`|The IDs of the tiers added.|

### recordMintReservesFor

Mint a token within the tier for the provided value.

*Only a project owner can mint tokens.*

```solidity
function recordMintReservesFor(uint256 _tierId, uint256 _count) external override returns (uint256[] memory tokenIds);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tierId`|`uint256`|The ID of the tier to mint within.|
|`_count`|`uint256`|The number of reserved tokens to mint.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`tokenIds`|`uint256[]`|The IDs of the tokens being minted as reserves.|

### recordSetDefaultReservedTokenBeneficiary

Sets the reserved token beneficiary.

```solidity
function recordSetDefaultReservedTokenBeneficiary(address _beneficiary) external override;
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_beneficiary`|`address`|The reserved token beneficiary.|

### recordTransferForTier

Record a token transfer.

```solidity
function recordTransferForTier(uint256 _tierId, address _from, address _to) external override;
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tierId`|`uint256`|The ID the tier being transferred.|
|`_from`|`address`|The sender of the token.|
|`_to`|`address`|The recipient of the token.|

### recordRemoveTierIds

Remove tiers.

```solidity
function recordRemoveTierIds(uint256[] calldata _tierIds) external override;
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tierIds`|`uint256[]`|The tiers IDs to remove.|

### recordMint

Mints a token in all provided tiers.

```solidity
function recordMint(uint256 _amount, uint16[] calldata _tierIds, bool _isManualMint)
    external
    override
    returns (uint256[] memory tokenIds, uint256 leftoverAmount);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_amount`|`uint256`|The amount to base the mints on. All mints' price floors must fit in this amount.|
|`_tierIds`|`uint16[]`|The IDs of the tier to mint from.|
|`_isManualMint`|`bool`|A flag indicating if the mint is being made manually by the NFT's owner.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`tokenIds`|`uint256[]`|The IDs of the tokens minted.|
|`leftoverAmount`|`uint256`|The amount leftover after the mint.|

### recordBurn

Records burned tokens.

```solidity
function recordBurn(uint256[] calldata _tokenIds) external override;
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tokenIds`|`uint256[]`|The IDs of the tokens burned.|

### recordSetFirstOwnerOf

Sets the first owner of a token.

```solidity
function recordSetFirstOwnerOf(uint256 _tokenId, address _owner) external override;
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tokenId`|`uint256`|The ID of the token having the first owner set.|
|`_owner`|`address`|The owner to set as the first owner.|

### recordSetBaseUri

Sets the base URI.

```solidity
function recordSetBaseUri(string calldata _uri) external override;
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_uri`|`string`|The base URI to set.|

### recordSetContractUri

Sets the contract URI.

```solidity
function recordSetContractUri(string calldata _uri) external override;
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_uri`|`string`|The contract URI to set.|

### recordSetTokenUriResolver

Sets the token URI resolver.

```solidity
function recordSetTokenUriResolver(IJBTokenUriResolver _resolver) external override;
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_resolver`|`IJBTokenUriResolver`|The resolver to set.|

### recordSetEncodedIPFSUriOf

Sets the encoded IPFS URI of a tier.

```solidity
function recordSetEncodedIPFSUriOf(uint256 _tierId, bytes32 _encodedIPFSUri) external override;
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tierId`|`uint256`|The ID of the tier to set the encoded IPFS uri of.|
|`_encodedIPFSUri`|`bytes32`|The encoded IPFS uri to set.|

### recordFlags

Sets flags.

```solidity
function recordFlags(JBTiered721Flags calldata _flags) external override;
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_flags`|`JBTiered721Flags`|The flag to sets.|

### cleanTiers

Removes removed tiers from sequencing.

```solidity
function cleanTiers(address _nft) external override;
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT contract to clean tiers for.|

### _resolvedRoyaltyBeneficiaryOf

The royalty beneficiary for each tier.

```solidity
function _resolvedRoyaltyBeneficiaryOf(address _nft, uint256 _tierId) internal view returns (address);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT to get the royalty beneficiary within.|
|`_tierId`|`uint256`|The ID of the tier to get a royalty beneficiary of.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The reserved token beneficiary.|

### _numberOfReservedTokensOutstandingFor

The number of reserved tokens that can currently be minted within the tier.

```solidity
function _numberOfReservedTokensOutstandingFor(address _nft, uint256 _tierId, JBStored721Tier memory _storedTier)
    internal
    view
    returns (uint256);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT to get reserved tokens outstanding.|
|`_tierId`|`uint256`|The ID of the tier to get a number of reserved tokens outstanding.|
|`_storedTier`|`JBStored721Tier`|The tier to get a number of reserved tokens outstanding.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|numberReservedTokensOutstanding The outstanding number of reserved tokens within the tier.|

### _generateTokenId

Finds the token ID and tier given a contribution amount.

```solidity
function _generateTokenId(uint256 _tierId, uint256 _tokenNumber) internal pure returns (uint256);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tierId`|`uint256`|The ID of the tier to generate an ID for.|
|`_tokenNumber`|`uint256`|The number of the token in the tier.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The ID of the token.|

### _nextSortedTierIdOf

The next sorted tier ID.

```solidity
function _nextSortedTierIdOf(address _nft, uint256 _id, uint256 _max) internal view returns (uint256);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT for which the sorted tier ID applies.|
|`_id`|`uint256`|The ID relative to which the next sorted ID will be returned.|
|`_max`|`uint256`|The maximum possible ID.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The ID.|

### _firstSortedTierIdOf

The first sorted tier ID of an NFT.

```solidity
function _firstSortedTierIdOf(address _nft, uint256 _category) internal view returns (uint256 id);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT to get the first sorted tier ID of.|
|`_category`|`uint256`|The category to get the first sorted tier ID of. Send 0 for the first overall sorted ID.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`id`|`uint256`|The first sorted tier ID.|

### _lastSortedTierIdOf

The last sorted tier ID of an NFT.

```solidity
function _lastSortedTierIdOf(address _nft) internal view returns (uint256 id);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_nft`|`address`|The NFT to get the last sorted tier ID of.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`id`|`uint256`|The last sorted tier ID.|

## Errors

### CANT_MINT_MANUALLY

```solidity
error CANT_MINT_MANUALLY();
```

### INSUFFICIENT_AMOUNT

```solidity
error INSUFFICIENT_AMOUNT();
```

### INSUFFICIENT_RESERVES

```solidity
error INSUFFICIENT_RESERVES();
```

### INVALID_CATEGORY_SORT_ORDER

```solidity
error INVALID_CATEGORY_SORT_ORDER();
```

### INVALID_CATEGORY

```solidity
error INVALID_CATEGORY();
```

### INVALID_LOCKED_UNTIL

```solidity
error INVALID_LOCKED_UNTIL();
```

### INVALID_ROYALTY_RATE

```solidity
error INVALID_ROYALTY_RATE();
```

### INVALID_QUANTITY

```solidity
error INVALID_QUANTITY();
```

### INVALID_TIER

```solidity
error INVALID_TIER();
```

### MAX_TIERS_EXCEEDED

```solidity
error MAX_TIERS_EXCEEDED();
```

### NO_QUANTITY

```solidity
error NO_QUANTITY();
```

### OUT

```solidity
error OUT();
```

### RESERVED_RATE_NOT_ALLOWED

```solidity
error RESERVED_RATE_NOT_ALLOWED();
```

### MANUAL_MINTING_NOT_ALLOWED

```solidity
error MANUAL_MINTING_NOT_ALLOWED();
```

### PRICING_RESOLVER_CHANGES_LOCKED

```solidity
error PRICING_RESOLVER_CHANGES_LOCKED();
```

### TIER_LOCKED

```solidity
error TIER_LOCKED();
```

### TIER_REMOVED

```solidity
error TIER_REMOVED();
```

### VOTING_UNITS_NOT_ALLOWED

```solidity
error VOTING_UNITS_NOT_ALLOWED();
```

