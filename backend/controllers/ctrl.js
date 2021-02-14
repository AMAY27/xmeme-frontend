const Meme = require('../model')
insertmeme = (req, res) => {
    console.log('Body : ',req.body);
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a meme',
            message: 'incoorect value',
        })
    }

    const meme = new Meme(body)

    if (!meme) {
        return res.status(400).json({ success: false, error: err })
    }

    meme
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: meme._id,
                message: 'Meme inserted',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Meme not inserted',
            })
        })
}
getMemes = async (req, res) => {
    await Meme.find({}, (err, memes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!memes.length) {
            return res
                .status(404)
                .json({ success: false, error: 'Meme not found' })
        }
        return res.status(200).json(memes)
    }).catch(err => console.log(err))
}
getMemesbyId = async(req, res) => {
    await Meme.findOne({_id: req.params.id},(err, memes) =>{
        if(err){
            return res.status(400).json({error: err})
        }
        if(!memes){
            return res
                 .status(404)
                 .json({error:'Movie not found'})
        }
        return res.status(200).json(memes)
    }).catch(err => console.log(err))
}
module.exports = {
    insertmeme,
    getMemes,
    getMemesbyId,
}