# BotDiscord

Este Bot fue creado en el ámbito del Bootcamp de Plataforma 5, como parte de una TechTalk donde teníamos que seleccionar y desarrollar un tema tecnológico de nuestro gusto y exponerlo frente a todos los compañeros de la cursada comentando como preparamos el proyecto, escribiendo código en vivo con el propósito de practicar ante posibles demos con clientes reales.

Pasos para crear el Bot:

1- CREAR UNA APLICACIÓN
https://discord.com/developers/applications
-Loguearse con nuestro nombre de usuario y contraseña Discord.
-Seleccionar nueva aplicación.
-Nombre de la aplicación.

2- DESCRIPCIÓN GENERAL DEL BOT
-Imagen.
-Nombre del Bot.
-Descripción general de lo que hace nuestro bot.

3-OAuth2
-URL Generator.
-Seleccionamos los alcances permitidos a nuestro bot, "aplication.commands" (permite que los usuarios interactuen con el bot), "administrador" (para darle todo tipo de permisos).
-Nos guardamos el URL generado .

4- URL
-Accedemos a la URL desde el navegador.
-Agregamos al bot al canal que deseemos, debe ser un canal de nuestra autoría.

5-VISUAL STUDIO CODE
-npm init --yes (crea package.json)
-npm i discord.js
-npm i nodedemon -D (instalar como dependencia de desarrollo)

Crear archivo index.js
Crear archivo .env (guardaremos el token generado)

-npm i dotenv (requerir los archivos de .env)
-npm install @discordjs/builders @discordjs/rest discord-api-types (se utiliza para registrar o actualizar los comandos que le pasemos al bot)

-npx nodemon index.js (corre el bot, es npx porque es dependencia)

6-CLIENTID, GUILDID
-clientId es el id del bot, lo encontramos en la misma pagina donde dimos los parámetros generales a nuestro bot.
-guildId es el id del servidor creados, parados en el canal deseado, hacemos click derecho y copiamos el guildId
-Ambos datos los guardamos en el archivo .env
-Requerimos los archivos del .env en el index principal

-Creamos archivo deploy-commands.js
-Lo configuramos para que acepte los comandos barra
-Corremos node deploy-commands.js (solo lo hacemos cada vez que modificamos su estructura)
