const comman = async(Schema,data)=>{
    let response ={
        status:null,
        message:null
    }
    let validate =Schema.validate(data);
    if(validate && validate.error ){
        response.status = "ERROR",
        response.message = validate.error.data[0].message
    }
    return response
}

module.exports = { comman };