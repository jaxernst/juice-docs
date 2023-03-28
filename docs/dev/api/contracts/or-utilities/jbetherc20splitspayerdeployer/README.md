# JBETHERC20SplitsPayerDeployer

_Deploys [`JBETHERC20SplitsPayer`](/dev/api/contracts/or-utilities/jbetherc20splitspayer) contracts._

#### Code

https://github.com/jbx-protocol/juice-contracts-v3/blob/main/contracts/JBETHERC20SplitsPayerDeployer.sol

#### Addresses

Ethereum mainnet: [`0xc2faBc1bDDB9Fb7F2C59a0F05ADc0106D82B1f2f`](https://etherscan.io/address/0xc2faBc1bDDB9Fb7F2C59a0F05ADc0106D82B1f2f)

Goerli testnet: [`0xE05605882C3F34B4Ef3586D70dE294f3f9654Ee8`](https://goerli.etherscan.io/address/0xE05605882C3F34B4Ef3586D70dE294f3f9654Ee8)

#### Interfaces

| Name                                                 | Description                                                                                                                              |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [**`IJBETHERC20SplitsPayerDeployer`**](/dev/api/interfaces/ijbetherc20splitspayerdeployer.md) | General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules. |


#### Events

| Name                                                                                                      | Data                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**`DeploySplitsPayer`**](/dev/api/contracts/or-utilities/jbetherc20splitspayerdeployer/events/deploysplitspayer.md)                                                                          | <ul><li><code>[IJBSplitsPayer](/dev/api/interfaces/ijbsplitspayer.md) indexed splitsPayer</code></li><li><code>uint256 indexed defaultSplitsProjectId</code></li><li><code>uint256 defaultSplitsDomain</code></li><li><code>uint256 defaultSplitsGroup</code></li><li><code>[IJBSplitStore](/dev/api/interfaces/ijbsplitsstore.md) splitStore</code></li><li><code>uint256 defaultProjectId</code></li><li><code>address defaultBeneficiary</code></li><li><code>bool defaultPreferClaimedTokens</code></li><li><code>string defaultMemo</code></li><li><code>bytes defaultMetadata</code></li><li><code>bool preferAddToBalance</code></li><li><code>address caller</code></li></ul>                  |


#### Write

| Function                                                                                                     | Definition                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**`deploySplitsPayer`**](/dev/api/contracts/or-utilities/jbetherc20splitspayerdeployer/write/deploysplitspayer.md)                                                                        | <p><strong>Params</strong></p><ul><li><code>uint256 defaultSplitsProjectId</code></li><li><code>uint256 _defaultSplitsDomain</code></li><li><code>uint256 _defaultSplitsGroup</code></li><li><code>[IJBSplitStore](/dev/api/interfaces/ijbsplitsstore.md) _splitsStore</code></li><li><code>uint256 _defaultProjectId</code></li><li><code>address _defaultBeneficiary</code></li><li><code>bool _defaultPreferClaimedTokens</code></li><li><code>string _defaultMemo</code></li><li><code>bytes _defaultMetadata</code></li><li><code>bool _preferAddToBalance</code></li><li><code>address _owner</code></li></ul><p><strong>Returns</strong></p><ul><li><code>[IJBSplitsPayer](/dev/api/interfaces/ijbsplitspayer.md) splitsPayer</code></li></ul>                                            |
                                             |
