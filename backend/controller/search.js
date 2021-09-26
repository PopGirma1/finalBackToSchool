var event = mongoose.model('event');
var path = require('path');

function search(req, res) {
    console.log(req.query);
    const keyword = new RegExp(req.query.q, 'i');
    event.find({listingStatus: "Active", location:{$regex: keyword}}, function (err, docs) {
        if(err){
            console.log(err);
        }else{
            const finalDocs = [];

            docs.forEach(function (doc) {
                const directoryPath = path.join(__dirname, '../public/images/products/' + doc.ownerEmail + '/' + doc._id);
                if (fs.existsSync(directoryPath)) {
                    fs.readdir(directoryPath, function (err, files) {
                        if (err) {
                            return console.log('Unable to scan directory: ' + err);
                        }
                        doc['Img']=files[0];
                        let thedocs = {...doc};
                        finalDocs.push(thedocs)
                    });
                }

            });
            setTimeout(function () {
            res.send(finalDocs)
            },1000)


        }
    })




}

module.exports = search;