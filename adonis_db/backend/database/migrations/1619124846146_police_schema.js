'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PoliceSchema extends Schema {
  up () {
    this.create('police', (table) => {
      table.increments()
      table.string('rank')
      table.string('name')
      table.string('surname')
      table.string('idcard')
      table.string('dob')
      table.string('nickname')
      table.string('sex')
      table.string('blood')
      table.string('reward')
      table.string('id_position')
      table.timestamps()
    })
  }

  down () {
    this.drop('police')
  }
}

module.exports = PoliceSchema
