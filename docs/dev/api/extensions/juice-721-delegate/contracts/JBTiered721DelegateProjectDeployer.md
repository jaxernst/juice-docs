# JBTiered721DelegateProjectDeployer

Deploys a project with a tiered tier delegate.

---

[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/24c33179caef17b169ec5b6eb95923f5da66bf32/contracts/JBTiered721DelegateProjectDeployer.sol)

**Inherits:**
[`JBOperatable`](/dev/api/contracts/or-abstract/jboperatable/), [`IJBTiered721DelegateProjectDeployer`](/dev/api/extensions/juice-721-delegate/interfaces/IJBTiered721DelegateProjectDeployer.md)

Adheres to -
- IJBTiered721DelegateProjectDeployer: General interface for the generic controller methods in this contract that interacts with funding cycles and tokens according to the protocol's rules.*

Inherits from -
- JBOperatable: Several functions in this contract can only be accessed by a project owner, or an address that has been preconfigured to be an operator of the project.*

## State Variables
### directory

The directory of terminals and controllers for projects.


```solidity
IJBDirectory public immutable override directory;
```


### delegateDeployer

The contract responsible for deploying the delegate.


```solidity
IJBTiered721DelegateDeployer public immutable override delegateDeployer;
```


## Functions
### constructor


```solidity
constructor(IJBDirectory _directory, IJBTiered721DelegateDeployer _delegateDeployer, IJBOperatorStore _operatorStore)
    JBOperatable(_operatorStore);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_directory`|`IJBDirectory`|The directory of terminals and controllers for projects.|
|`_delegateDeployer`|`IJBTiered721DelegateDeployer`|The deployer of delegates.|
|`_operatorStore`|`IJBOperatorStore`|A contract storing operator assignments.|


### launchProjectFor


Launches a new project with a tiered 721 delegate attached.


```solidity
function launchProjectFor(
    address _owner,
    JBDeployTiered721DelegateData memory _deployTiered721DelegateData,
    JBLaunchProjectData memory _launchProjectData,
    IJBController3_1 _controller
) external override returns (uint256 projectId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|The address to set as the owner of the project. The project ERC-721 will be owned by this address.|
|`_deployTiered721DelegateData`|`JBDeployTiered721DelegateData`|Data necessary to fulfill the transaction to deploy a delegate.|
|`_launchProjectData`|`JBLaunchProjectData`|Data necessary to fulfill the transaction to launch a project.|
|`_controller`|`IJBController3_1`|The controller with which the funding cycles should be configured.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`projectId`|`uint256`|The ID of the newly configured project.|


### launchFundingCyclesFor


Launches funding cycle's for a project with a delegate attached.

*
Only a project owner or operator can launch its funding cycles.*


```solidity
function launchFundingCyclesFor(
    uint256 _projectId,
    JBDeployTiered721DelegateData memory _deployTiered721DelegateData,
    JBLaunchFundingCyclesData memory _launchFundingCyclesData,
    IJBController3_1 _controller
)
    external
    override
    requirePermission(directory.projects().ownerOf(_projectId), _projectId, JBOperations.RECONFIGURE)
    returns (uint256 configuration);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_projectId`|`uint256`|The ID of the project having funding cycles launched.|
|`_deployTiered721DelegateData`|`JBDeployTiered721DelegateData`|Data necessary to fulfill the transaction to deploy a delegate.|
|`_launchFundingCyclesData`|`JBLaunchFundingCyclesData`|Data necessary to fulfill the transaction to launch funding cycles for the project.|
|`_controller`|`IJBController3_1`|The controller with which the funding cycles should be configured.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`configuration`|`uint256`|The configuration of the funding cycle that was successfully created.|


### reconfigureFundingCyclesOf


Reconfigures funding cycles for a project with a delegate attached.

*
Only a project's owner or a designated operator can configure its funding cycles.*


```solidity
function reconfigureFundingCyclesOf(
    uint256 _projectId,
    JBDeployTiered721DelegateData memory _deployTiered721DelegateData,
    JBReconfigureFundingCyclesData memory _reconfigureFundingCyclesData,
    IJBController3_1 _controller
)
    external
    override
    requirePermission(directory.projects().ownerOf(_projectId), _projectId, JBOperations.RECONFIGURE)
    returns (uint256 configuration);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_projectId`|`uint256`|The ID of the project having funding cycles reconfigured.|
|`_deployTiered721DelegateData`|`JBDeployTiered721DelegateData`|Data necessary to fulfill the transaction to deploy a delegate.|
|`_reconfigureFundingCyclesData`|`JBReconfigureFundingCyclesData`|Data necessary to fulfill the transaction to reconfigure funding cycles for the project.|
|`_controller`|`IJBController3_1`|The controller with which the funding cycles should be configured.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`configuration`|`uint256`|The configuration of the funding cycle that was successfully reconfigured.|


### _launchProjectFor


Launches a project.


```solidity
function _launchProjectFor(
    address _owner,
    JBLaunchProjectData memory _launchProjectData,
    IJBTiered721Delegate _dataSource,
    IJBController3_1 _controller
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|The address to set as the owner of the project.|
|`_launchProjectData`|`JBLaunchProjectData`|Data necessary to fulfill the transaction to launch the project.|
|`_dataSource`|`IJBTiered721Delegate`|The data source to set.|
|`_controller`|`IJBController3_1`|The controller with which the funding cycles should be configured.|


### _launchFundingCyclesFor


Launches funding cycles for a project.


```solidity
function _launchFundingCyclesFor(
    uint256 _projectId,
    JBLaunchFundingCyclesData memory _launchFundingCyclesData,
    IJBTiered721Delegate _dataSource,
    IJBController3_1 _controller
) internal returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_projectId`|`uint256`|The ID of the project having funding cycles launched.|
|`_launchFundingCyclesData`|`JBLaunchFundingCyclesData`|Data necessary to fulfill the transaction to launch funding cycles for the project.|
|`_dataSource`|`IJBTiered721Delegate`|The data source to set.|
|`_controller`|`IJBController3_1`|The controller with which the funding cycles should be configured.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|configuration The configuration of the funding cycle that was successfully created.|


### _reconfigureFundingCyclesOf


Reconfigure funding cycles for a project.


```solidity
function _reconfigureFundingCyclesOf(
    uint256 _projectId,
    JBReconfigureFundingCyclesData memory _reconfigureFundingCyclesData,
    IJBTiered721Delegate _dataSource,
    IJBController3_1 _controller
) internal returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_projectId`|`uint256`|The ID of the project having funding cycles launched.|
|`_reconfigureFundingCyclesData`|`JBReconfigureFundingCyclesData`|Data necessary to fulfill the transaction to launch funding cycles for the project.|
|`_dataSource`|`IJBTiered721Delegate`|The data source to set.|
|`_controller`|`IJBController3_1`|The controller with which the funding cycles should be configured.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The configuration of the funding cycle that was successfully reconfigured.|


