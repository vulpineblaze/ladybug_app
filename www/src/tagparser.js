module.exports = {

    findPartial: function(db, partial){
		db.collection('taglist').find({tag:{$regex: partial, $options: "$i"}}).toArray((err, taglist) => {
	      if (err) return console.log(err)
	      // console.log(result.length);
	      // res.render('index.ejs', {taglist: taglist, auth:auth})
	      return taglist;
	    });
	}


};