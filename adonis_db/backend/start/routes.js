'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.post('posts', 'PoliceController.store')
Route.get('shows','PoliceController.show')
Route.get('get/:id','PoliceController.getID')
Route.put('update/:id','PoliceController.update')
Route.delete('delete/:id','PoliceController.delete')

//position
Route.post('add', 'PositionController.addPosition')
Route.get('showsPosition','PositionController.showPosition')
Route.get('showPosition/:id','PositionController.getIDPosition')
Route.put('updatePos/:id','PositionController.updatePosition')
Route.delete('deletePos/:id','PositionController.deletePosition')