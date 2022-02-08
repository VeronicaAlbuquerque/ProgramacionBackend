const express = require('express');
const app= express();

const productos=[
{nombre: "Computadora", precio : 1230, foto: "https://www.iconfinder.com/icons/1157727/account_calculator_count_math_sum_icon"},
{nombre: "Mouse", precio : 230,foto:"https://www.iconfinder.com/icons/393554/click_left_mouse_tutorial_icon"},
{nombre: "Camera", precio : 630,foto:"https://www.iconfinder.com/icons/4723671/camera_device_gadget_lens_photo_photography_picture_icon"},
{nombre: "Keyboard",precio: 550, foto:"https://www.iconfinder.com/icons/6579072/and_computers_hardware_keyboard_icon"}
 ];

app.use('/static', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('views','./views');
app.set('view engine', 'pug');

app.get('/inicio',(req,res)=>{
    res.render('inicio.pug',{message:'Este es el el inicio de formulario pug'})
})


app.post('/productos', (req,res)=>{
res.render('formulario.pug', {message: productos})
productos.push(req.body)
console.log(productos)
res.redirect('/')

})

app.get('/productos',(req,res)=>{
    res.send(productos)
//mostrar todos los productos cargados 

})





app.listen(8080);