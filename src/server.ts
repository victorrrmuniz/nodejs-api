import fastify from 'fastify'
import { knex } from 'knex'
import { env } from './env'
const config = require('./../knexfile')

const app = fastify()

app.get('/hello', async () => {

  const conn = knex(config)
  const transactions = await conn('transactions').select('*')

  return transactions

  //  const transaction = await conn('transactions').insert({
  //   id: crypto.randomUUID(),
  //   title: 'Transação de teste',
  //   amount: 1000
  //  })
  //  .returning('*')

  //  return transaction

  // const tables = await conn('sqlite_schema').select('*')

  // return tables
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server')
  })
