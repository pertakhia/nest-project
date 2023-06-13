recomended chatgpt nest js folder structure

//
project/
├─ src/
│ ├─ app.module.ts
│ ├─ main.ts
│ ├─ controllers/
│ │ ├─ cats.controller.ts
│ │ ├─ auth.controller.ts
│ │ ├─ orders.controller.ts
│ │ └─ products.controller.ts
│ ├─ services/
│ │ ├─ cats.service.ts
│ │ ├─ auth.service.ts
│ │ ├─ orders.service.ts
│ │ └─ products.service.ts
│ ├─ dtos/
│ │ ├─ create-cat.dto.ts
│ │ ├─ login.dto.ts
│ │ ├─ create-order.dto.ts
│ │ ├─ update-order.dto.ts
│ │ ├─ create-product.dto.ts
│ │ └─ update-product.dto.ts
│ ├─ entities/
│ │ ├─ cat.entity.ts
│ │ ├─ order.entity.ts
│ │ └─ product.entity.ts
│ ├─ modules/
│ │ ├─ auth/
│ │ │ ├─ auth.module.ts
│ │ │ ├─ auth.controller.ts
│ │ │ ├─ auth.service.ts
│ │ │ ├─ dtos/
│ │ │ │ ├─ register.dto.ts
│ │ │ │ └─ login.dto.ts
│ │ │ └─ entities/
│ │ │ └─ user.entity.ts
│ │ ├─ orders/
│ │ │ ├─ orders.module.ts
│ │ │ ├─ orders.controller.ts
│ │ │ ├─ orders.service.ts
│ │ │ ├─ dtos/
│ │ │ │ ├─ create-order.dto.ts
│ │ │ │ └─ update-order.dto.ts
│ │ │ └─ entities/
│ │ │ └─ order.entity.ts
│ │ └─ products/
│ │ ├─ products.module.ts
│ │ ├─ products.controller.ts
│ │ ├─ products.service.ts
│ │ ├─ dtos/
│ │ │ ├─ create-product.dto.ts
│ │ │ └─ update-product.dto.ts
│ │ └─ entities/
│ │ └─ product.entity.ts
├─ test/
│ ├─ cats.controller.spec.ts
│ ├─ auth.controller.spec.ts
│ ├─ orders.controller.spec.ts
│ └─ products.controller.spec.ts
├─ node_modules/
├─ package.json
├─ tsconfig.json
└─ nest-cli.json

//

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
