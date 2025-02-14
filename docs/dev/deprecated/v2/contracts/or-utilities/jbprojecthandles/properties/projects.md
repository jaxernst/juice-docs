# projects

Contract: [`JBProjectHandles`](/dev/deprecated/v2/contracts/or-utilities/jbprojecthandles/README.md)​‌

Interface: [`IJBProjectHandles`](/dev/deprecated/v2/interfaces/ijbprojecthandles.md)

**Mints ERC-721's that represent project ownership and transfers.**

#### Definition

```
/**
  @notice
  Mints ERC-721's that represent project ownership and transfers.
*/
IJBProjects public immutable override projects;
```

* Once set the value cannot be changed.
* The resulting view function can be accessed externally by anyone.
* The resulting function overrides a function definition from the [`IJBProjectHandles`](/dev/deprecated/v2/interfaces/ijbprojecthandles.md) interface.
