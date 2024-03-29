const express = require('express')
const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs')
const _ = require('underscore')

const app = express()


app.get('/usuario', function(req, res) {

    Usuario.find({})
        .exec((err, usuario) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }

            res.json({
                ok: true,
                usuario
            })

        })


})

app.post('/usuario', function(req, res) {

    let body = req.body

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        //img: body.img,
        role: body.role
    });

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        //usuarioDB.password = null

        return res.json({
            ok: true,
            usuario: usuarioDB
        })
    });

})

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);


    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        return res.json({
            ok: true,
            usuario: usuarioDB
        })
    })
})

app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
})



module.exports = app;