
# /*
#  * GET home page.
#  */

# exports.index = function(req, res){
#   res.render('index', { title: 'Kevin Chiu' })
# };

exports.index = (req, res) -> res.render('index', title: 'Kevin Chiu')