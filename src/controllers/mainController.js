module.exports = {
    index: (req, res) => {
        return res.render('index')
    },
    servicio: (req, res) => {
        return res.render('service')
    },
    about: (req, res) => {
        return res.render('about')
    },
    contacto: (req, res) => {
        return res.render('contact')
    },
    admin: (req, res) => {
        return res.render('admin',{
            user : req.query.user,

        })
    },
    login: (req, res) => {
        return res.render('login',{
            msg : req.query.error ? 'no puedes ingresar' : null
        })
    }

}