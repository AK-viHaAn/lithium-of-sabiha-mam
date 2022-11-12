const axios = require("axios")

const createMemes = async function(req, res){
    try{
    const template_Id = req.query.template_id
    const uText = req.query.text0
    const lText = req.query.text1
    const userName = req.query.username
    const password = req.query.password

    const meme = {
        method: "post",
        url: `https://api.imgflip.com/caption_image?template_id=${template_Id}&text0=${uText}&text1=${lText}&username=${userName}&password=${password}`
    }
    const response = await axios (meme)
        res.status(200).send ({result: response.data})
}catch(error){
    res.status(500).send({status : false, msg: "INTERNAL SERVER ERROR"})
} 
}




module.exports.createMemes = createMemes