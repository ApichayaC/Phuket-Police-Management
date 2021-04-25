'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PositionSchema extends Schema {
  up () {
    this.create('positions', (table) => {
      table.increments()
      table.string('position')
      table.string('role')
      table.integer('salary')
      table.integer('salary_position')
      table.string('id_position')
      table.timestamps()
    })
  }

  down () {
    this.drop('positions')
  }
}

module.exports = PositionSchema
