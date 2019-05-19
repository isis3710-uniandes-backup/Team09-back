let jwt = require( 'jsonwebtoken' );
let config = require( './config' );
const users = require("./src/routes/users");
const db = require(__dirname+'/models/');

// Clase encargada de la creación del token
class HandlerGenerator {

  login( req, res ) {
    
    // Extrae el usuario y la contraseña especificados en el cuerpo de la solicitud
    let username = req.params.username;
    let password = req.body.password;
    
    // Este usuario y contraseña, en un ambiente real, deben ser traidos de la BD
    //var obj=users.getUserByName(req,res);
    let mockedUsername = 'admin';
    let mockedPassword = 'password';

    var obj;
    db.Users.findAll({attributes:['userID','username','email','password','profilePicturePath'],where: {username: username}})
        .then((user) => {
          obj=user[0].dataValues;
          console.log(obj);
          // Si se especifico un usuario y contraseña, proceda con la validación
          // de lo contrario, un mensaje de error es retornado
          if( username && password  && obj) {

            // Si los usuarios y las contraseñas coinciden, proceda con la generación del token
            // de lo contrario, un mensaje de error es retornado
            if( username === obj.username && password === obj.password ) {
              
              // Se genera un nuevo token para el nombre de usuario el cuál expira en 24 horas
              let token = jwt.sign( { username: username },
                config.secret, { expiresIn: '24h' } );
              
              // Retorna el token el cuál debe ser usado durante las siguientes solicitudes
              res.json( {
                userID:obj.userID,
                username:obj.username,
                email:obj.email,
                profilePicturePath:obj.profilePicturePath,
                success: true,
                message: 'Authentication successful!',
                token: token
              } );

            } else {
              
              // El error 403 corresponde a Forbidden (Prohibido) de acuerdo al estándar HTTP
              res.sendStatus(403).json( {
                success: false,
                message: 'Incorrect username or password'
              } );

            }

          } else {

            // El error 400 corresponde a Bad Request de acuerdo al estándar HTTP
            res.sendStatus( 400 ).json( {
              success: false,
              message: 'Authentication failed! Please check the request'
            } );

          }
              }
              ).catch((err) => {
                console.log('There was an error querying the user', JSON.stringify(err))
            });
    }

  index( req, res ) {
    
    // Retorna una respuesta exitosa con previa validación del token
    res.json( {
      success: true,
      message: 'Index page'
    } );

  }
}

module.exports = HandlerGenerator;