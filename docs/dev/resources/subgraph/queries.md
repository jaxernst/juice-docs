---
sidebar_position: 3
title: Sample Queries
---

Below are some sample queries you can use to gather information from the Juicebox contracts.

You can build your own queries using a [GraphQL Explorer](https://graphiql-online.com/graphiql)—enter your endpoint to limit your queries to the exact data desired.

### Get Project Metrics By Owner

Get your Project ID.

```graphql
query ProjectByOwner(
  $Owner: String! = "0xaf28bcb48c40dbc86f52d459a6562f658fc94b1e"
) {
  projects(where: { owner: $Owner }, first: 10) {
    createdAt
    id
    owner
    projectId
    totalPaid
    totalRedeemed
    metadataUri
    handle
    terminal
    currentBalance
    cv
  }
}
```

### Project Metrics

Get the latest metrics for your project.

```graphql
query ProjectMetrics($Project: String! = "1-1") {
  projects(where: { id: $Project }) {
    createdAt
    id
    owner
    projectId
    totalPaid
    totalRedeemed
    metadataUri
    handle
    terminal
    currentBalance
    cv
  }
}
```

### Project Payments

Get the 20 latest payments into your project.

```graphql
query ProjectPayments($ProjectId: String! = "2-1") {
  projects(where: { id: $ProjectId }, first: 10) {
    handle
    payEvents(first: 20, orderBy: timestamp, orderDirection: desc) {
      amount
      caller
      note
      timestamp
      txHash
    }
  }
}
```
