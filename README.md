## What is this?

This is a refactor/extension of/on a project started/created by fellow student [Michelle Pesch](https://github.com/mipes4/sportsbetting_fe) at Codaisseur.

---

## Overview

```mermaid
flowchart LR
  A[seed]
  B[(postgres database)]
  C(((nodejs-server)))
  D(((react-client)))
  E[puppeteer e2e]
  F[api with python]
  G[postman tests]
  H[micro-service with go]
  I[(mongo database)]
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
