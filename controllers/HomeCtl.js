module.exports = {
    index: function (req, res) {
        res.render("common/index", {
            header: 'May Node and Express be with you. jitendra pathak'
        });
    }
}