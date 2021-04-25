// 
'use strict'
const Position = use('App/Models/Position')
const Database = use('Database')
class PositionController {
    async showPosition({request, response}){
        const position = await Database.table("positions").select("*") ;
        response.send(position)
    }

    async getIDPosition ({request,response}){
        const position = await Position.find(params.id);
        response.send(position)
    }

    async addPosition({request,response}){
        const position = new Position ()
        const body = request.all()

        position.position = body.position ;
        position.role = body.role ;
        position.salary= body.salary ;
        position.salary_position=body.salary_position ;
        position.id_position = body.id_position ;
        await position.save();
      
        return response.send("PASS");
    }

    async updatePosition({request,response}){
        const position =await Position.find(params.id);
        const body = request.all()

        position.position = body.position ;
        position.role = body.role ;
        position.salary= body.salary ;
        position.salary_position=body.salary_position ;
        position.id_position = body.id_position ;
        await position.save();
      
        return response.send("UPDATE PASS!!");
    }

    async deletePosition ({request ,response,params}){
        const position = await Position.find(params.id);
        await position.delete() ;
        return response.send("OK, Delete PASS!!")
    }
}

module.exports = PositionController
