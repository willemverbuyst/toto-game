## What is this?

This is a refactor/extension of/on a project started/created by fellow student [Michelle Pesch](https://github.com/mipes4/sportsbetting_fe) at Codaisseur.

---

## Overview

```mermaid
flowchart LR
  A[bash: dummy data seed]
  B[(database: postgres)]
  C(((server: nodejs)))
  D(((client: react)))
  E[e2e-tests: puppeteer]
  F[soccer-api: micro-service with python]
  G[server-tests: postman]
  H[rules-service: micro-service with go]
  I[(database: mongo)]
  J[seed with docker]
  K[api tests]
  L[service tests]
  subgraph docker
  B
  F
  J
  I
  J-->I
  I<-->H
  K-->F
  L-->H
  end
  A-->C
  B<-->C
  F<-->C
  G-->C
  H-->D
  E-->D
  D<-->C
```

[toto-game-client](https://github.com/willemverbuyst/toto-game-client)

[toto-game-server](https://github.com/willemverbuyst/toto-game-server)

[toto-game-soccer-api](https://github.com/willemverbuyst/toto-game-soccer-api)

[toto-game-rules-service](https://github.com/willemverbuyst/toto-game-soccer-api)

[toto-game-postman](https://github.com/willemverbuyst/toto-game-postman)

[toto-game-e2e](https://github.com/willemverbuyst/toto-game-e2e)
