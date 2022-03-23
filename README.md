
# [Back-end Challenge 🏅 2021 - Space Flight News](https://lab.coodesh.com/public-challenges/back-end-challenge-2021)

Este é o desafio para que VOCÊS possam ver as MINHAS habilidades como [Back-end Developer](https://lab.coodesh.com/public-challenges/back-end-challenge-2021).

## Stack

* Node.js v16.14 - no (or own) framework
* PostgreSQL v14.2
* Docker (+ Docker Compose)

## How to - Production

Setup - PostgreSQL

```sh
docker run --rm -d --name psql_challenge tmvdl/backend_challenge:postgresql
# or
docker run --rm -d --name psql_challenge tmvdl/backend_challenge:database
```

Setup - Back-End

```sh
docker run --rm -d --name backend_challenge tmvdl/backend_challenge
# or
docker run --rm -d --name backend_challenge tmvdl/backend_challenge:app
```

## How to - Development

TODO

## License

[MIT](LICENSE)

- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore)
