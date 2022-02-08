const express= require('express')

const productos= [{nombre: "Computadora", precio : 1230, foto: "https://www.iconfinder.com/icons/1157727/account_calculator_count_math_sum_icon"},
{nombre: "Mouse", precio : 230,foto:"https://www.iconfinder.com/icons/393554/click_left_mouse_tutorial_icon"},
{nombre: "Camera", precio : 630,foto:"https://www.iconfinder.com/icons/4723671/camera_device_gadget_lens_photo_photography_picture_icon"},
{nombre: "Keyboard",precio: 550, foto:"https://www.iconfinder.com/icons/6579072/and_computers_hardware_keyboard_icon"}
 ];
 
const app= express();

app.use(express.urlencoded({extendend: true}))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('inicio', {productos});
});

app.post('/productos',(req,res)=>{
    personas.push(req.body)
    console.log(productos)
    res.redirect('/')
});

const PORT=8080

const server= app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error=>console.log(`Error en servidor ${error}`));

