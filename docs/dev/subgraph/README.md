---
sidebar_position: 1
title: Subgraph Introduction
---

# Subgraph

[juicebox.money](https://juicebox.money) uses [The Graph](https://thegraph.com/) to load data from Juicebox protocol contracts without directly querying the blockchain.

Multiple subgraphs are maintained by [Peel](https://discord.gg/b4rpjgGPHX) in a Graph Studio owned by the [Peel Gnosis safe](https://gnosis-safe.io/app/eth:0x0e9D15e28e3De9bB3CF64FFbC2f2F49Da9Ac545B). Only the primary Juicebox subgraph has been published to the Graph Network; others are available to use for free with rate-limited queries.

| Name        | URL                                                                                                            | Description                                                                    |
| ----------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| juicebox    | [View on Graph explorer](https://thegraph.com/explorer/subgraph?id=FVmuv3TndQDNd2BWARV8Y27yuKKukryKXPzvAS5E7htC&view=Overview) | The primary mainnet subgraph used by [juicebox.money](https://juicebox.money). |
| mainnet-dev | Queries: https://api.studio.thegraph.com/query/30654/mainnet-dev/6.1.0                                      | Indexes mainnet Juicebox protocol contracts.                                   |
| goerli-dev | Queries: https://api.studio.thegraph.com/query/30654/goerli-dev/6.1.0                                      | Indexes goerli Juicebox protocol contracts. (Does not include v1 & v2 contracts, except for v2 JBProjects)                                  |

<br/>

:::note Querying the subgraph
**The Juicebox subgraph schema is the same on all networks**, and can be found on the following page. For information on structuring Graph queries, read the [Graph docs](https://thegraph.com/docs/en/querying/querying-the-graph/). You can also reference the [tools used for juicebox.money](https://github.com/jbx-protocol/juice-interface/blob/5117545d17c7c2336207381be5b1c46f67fad459/src/utils/graph.ts#L240).
:::

## Avoid Rate-Limiting

To use the mainnet Juicebox subgraph without being rate-limited:

1. Create your API key on [Subgraph Studio API Keys](https://thegraph.com/studio/apikeys/).
2. Fund your billing balance on [Subgraph Studio Billing](https://thegraph.com/studio/billing/).
3. Query the mainnet Juicebox subgraph using `https://gateway.thegraph.com/api/<your-api-key>/subgraphs/id/FVmuv3TndQDNd2BWARV8Y27yuKKukryKXPzvAS5E7htC`.

You can also follow the [Video Tutorial](https://www.youtube.com/watch?v=UrfIpm-Vlgs).

*For more info on Graph query billing, visit [Billing on the Subgraph Studio - The Graph Docs](https://thegraph.com/docs/en/querying/billing/) and [Managing your API Key & Setting your indexer preferences](https://thegraph.com/docs/en/studio/managing-api-keys/).*
