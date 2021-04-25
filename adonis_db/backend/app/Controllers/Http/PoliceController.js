// 'use strict'

// class PoliceController {
// }

// module.exports = PoliceController
'use strict'
const Police = use ("App/Models/Police") 
const Database =use ("Database")
class PoliceController {
    async show({request, response}){
        //const polices = await Database.table("police").select("*") ;
        //response.send(polices)
         const plc = await Police.query().with('police').fetch()
        response.send(plc)

    }

    //get:id
    async getID({request,response,params}){
        const police = await Police.find(params.id);
        response.send(police)

    }
    //post
    async store({ request, response }) {
        const body = request.all()
        const newPolice = new Police();
        
        newPolice.rank = body.rank ;
        newPolice.name = body.name ;
        newPolice.surname = body.surname ;
        newPolice.idcard = body.idcard ;
        newPolice.dob = body.dob ;
        newPolice.nickname = body.nickname ;
        newPolice.sex = body.sex ;
        newPolice.blood = body.blood ;
        newPolice.reward = body.reward ;
        newPolice.id_position = body.id_position ;

        await newPolice.save();
        return response.send("PASS");
      }

    //update
    async update ({ request, response ,params}){
        const police = await Police.find(params.id);
        const body = request.all()
        police.rank = body.rank ;
        police.name = body.name ;
        police.surname = body.surname ;
        police.idcard = body.idcard ;
        police.dob = body.dob ;
        police.nickname = body.nickname ;
        police.sex = body.sex ;
        police.blood = body.blood ;
        police.reward = body.reward ;
        police.id_position = body.id_position ;

        await police.save()
        return response.send("PASS!!")
    }
    
    //delete
    async delete ({request ,response,params}){
        const police = await Police.find(params.id);
        await police.delete() ;
        return response.send("OK, Delete PASS!!")
    }
}

module.exports = PoliceController
