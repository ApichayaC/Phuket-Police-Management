'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Position extends Model {
    // police () {
    //     return this.belongsTo('App/Models/Police', 'id_position')
    //   }
    // police () {
    //     return this
    //       .belongsTo('App/Models/Police',"id","position")
    //       .withPivot(['position'])
    //   }
}

module.exports = Position
