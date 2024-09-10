require('dotenv').config();

/**
 * Module dependencies.
 */

const app = require('./app');
const http = require('http');

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('App started. Listening on ' + bind);
}

// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'


/* VARIABLES */


/* ROOM */

const HaxballJS = require('haxball.js');
const fs = require('fs');
const fetch = require('node-fetch');
const FormData = require('form-data');
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

// './scratch' is the directory where data will be stored

const roomName = "maydrekch zkek";
const botName = "Zoklil";
const maxPlayers = 30;
const roomPublic = true;
// const geo = [{ code: 'MA', lat: 37.592993, lon: -7.669099 }];

HaxballJS.then(HBInit => {

	const room = HBInit({
		roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName,
		//geo: geo[0], 
    token: "thr1.AAAAAGbgwlNEGnGbxaYt_g.hYAJV9sRRWA"
	});


	const scoreLimitClassic = 3;
	const scoreLimitBig = 3;
	const timeLimitClassic = 3;
	const timeLimitBig = 3;
	room.setTeamsLock(true);


	var msg1 = setInterval(function () {
		room.sendAnnouncement("Don't Forget !discord", null, 0xff8a4a, "normal");
	}, 240000);

	var automsg = setInterval(function () {
		room.sendAnnouncement("Use !celeblist to choose your scorer celebration!", null, 0xEAC274, "bold");
	}, 180000);


	room.setTeamColors(1, 60, 0x000000, [0x8F1A22, 0x8F1A22, 0x8F1A22]);
	room.setTeamColors(2, 60, 0x000000, [0x046F8F, 0x046F8F, 0x046F8F]);


	let Cor = { Vermelho: 0xFA5646, Laranja: 0xFFC12F, Verde: 0x7DFA89, Azul: 0x05C5FF, Amarelo: 0xFFFF17, Cinza: 0xCCCCCC, Branco: 0xFFFFFF, Azulclaro: 0x6ECAFF, Powderblue: 0xB0E0E6, Roxo: 0x800080, Platinum: 0xE5E4E2, Gold: 0xffd700, Silver: 0xd5d5d5, Bronze: 0x896728, Thistle: 0xD8BFD8, Khaki: 0xF0E68C, AliceBlue: 0xF0F8FF, GhostWhite: 0xF8F8FF, Snow: 0xFFFAFA, Seashell: 0xFFF5EE, FloralWhite: 0xFFFAF0, WhiteSmoke: 0xF5F5F5, Beige: 0xF5F5DC, OldLace: 0xFDF5E6, Ivory: 0xFFFFF0, Linen: 0xFAF0E6, Cornsilk: 0xFFF8DC, AntiqueWhite: 0xFAEBD7, BlanchedAlmond: 0xFFEBCD, Bisque: 0xFFE4C4, LightYellow: 0xFFFFE0, LemonChiffon: 0xFFFACD, LightGoldenrodYellow: 0xFAFAD2, PapayaWhip: 0xFFEFD5, PeachPuff: 0xFFDAB9, Moccasin: 0xFFE4B5, PaleGoldenrod: 0xEEE8AA, Azulescuro: 0x426AD6, Warn: 0xff9966 };



	const Negrito = 'bold';
	const Normal = 'normal';
	const resetarAvatarEm = 3;




	var adminPassword = 7770;
	console.log("adminPassword : " + adminPassword);


	/* STADIUM */
	var chatLock = false;
	var automsg;
	var ballRadius = 6.25;
	var color_team1_a = 60, color_team2_a = 60, color_team1_t = "0x000000", color_team2_t = "0x000000";
	var color_team1 = ["0x8F1A22", "0x8F1A22", "0x8F1A22"], color_team2 = ["0x046F8F", "0x046F8F", "0x046F8F"];
	const playerRadius = 15;
	var ballRadius = 10;
	const triggerDistance = playerRadius + ballRadius + 0.01;
	const aloneMap = '{"name":"MA | SOLO by Simo","width":200,"height":130,"bg":{"kickOffRadius":45,"color":"34414B"},"vertexes":[{"x":176.5,"y":-100,"cMask":[]},{"x":175,"y":-101.5,"cMask":[]},{"x":-176.5,"y":-100,"cMask":[]},{"x":-175,"y":-101.5,"cMask":[]},{"x":-176.5,"y":100,"cMask":[]},{"x":-175,"y":101.5,"cMask":[]},{"x":176.5,"y":100,"cMask":[]},{"x":175,"y":101.5,"cMask":[]},{"x":0,"y":-98.6,"cMask":[],"color":"a3acc2"},{"x":0,"y":-46,"cMask":[],"color":"a3acc2"},{"x":0,"y":-45,"cMask":[],"color":"a3acc2"},{"x":0,"y":45,"cMask":[],"color":"a3acc2"},{"x":0,"y":46,"cMask":[],"color":"a3acc2"},{"x":0,"y":98.6,"cMask":[],"color":"a3acc2"},{"x":0,"y":1.5,"cMask":["wall"],"cGroup":["wall"],"curve":180},{"x":0,"y":-1.5,"cMask":["wall"],"cGroup":["wall"],"curve":180},{"x":0,"y":-1.5,"cMask":["wall"],"cGroup":["wall"],"curve":180},{"x":0,"y":1.5,"cMask":["wall"],"cGroup":["wall"],"curve":180}],"segments":[{"v0":0,"v1":2,"color":"151A1E","cMask":["ball"],"bias":10},{"v0":3,"v1":5,"color":"151A1E","cMask":["ball"],"bias":10},{"v0":4,"v1":6,"color":"151A1E","cMask":["ball"],"bias":10},{"v0":7,"v1":1,"color":"151A1E","cMask":["ball"],"bias":10},{"v0":8,"v1":9,"color":"a3acc2","cMask":[]},{"v0":12,"v1":13,"color":"a3acc2","cMask":[]},{"v0":10,"v1":11,"curve":180,"color":"a3acc2","cMask":[],"curveF":6.123233995736766e-17},{"v0":11,"v1":10,"curve":180,"color":"a3acc2","cMask":[],"curveF":6.123233995736766e-17},{"v0":14,"v1":15,"curve":180,"color":"a3acc2","cMask":["wall"],"cGroup":["wall"]},{"v0":16,"v1":17,"curve":180,"color":"a3acc2","cMask":["wall"],"cGroup":["wall"]}],"planes":[],"goals":[],"discs":[],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.2},"ballPhysics":{"radius":5.8,"invMass":1.5,"color":"FFF26D","bCoef":0.412,"cGroup":["ball","kick","score"]},"traits":[],"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}';
	const classicMap = `{"name":"MA | SMALL by Adl","width":430,"height":200,"bg":{"type":"","color":"34414B","width":0,"height":0},"vertexes":[{"x":0,"y":200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a3acc2"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a3acc2"},{"x":0,"y":-200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-368,"y":-65,"bCoef":0.1,"cMask":["ball"],"bias":2,"color":"ffffff"},{"x":-400,"y":-65,"bCoef":0.1,"cMask":["ball"],"bias":0},{"x":-400,"y":65,"bCoef":0.1,"cMask":["ball"],"bias":0},{"x":-368,"y":65,"bCoef":0.1,"cMask":["ball"],"bias":2,"color":"ffffff"},{"x":368,"y":-65,"bCoef":0.1,"cMask":["ball"],"bias":-2,"color":"ffffff"},{"x":400,"y":-65,"bCoef":0.1,"cMask":["ball"],"bias":0},{"x":400,"y":65,"bCoef":0.1,"cMask":["ball"],"bias":0},{"x":368,"y":65,"bCoef":0.1,"cMask":["ball"],"bias":-2,"color":"ffffff"},{"x":-368,"y":65,"bCoef":1.1,"cMask":["ball"],"color":"ffffff","bias":32},{"x":-368,"y":171.5,"bCoef":1.1,"cMask":["ball"],"color":"151A1E","bias":32},{"x":-368,"y":-65,"bCoef":1.1,"cMask":["ball"],"color":"ffffff","bias":-32},{"x":-368,"y":-171.5,"bCoef":1.1,"cMask":["ball"],"color":"151A1E","bias":-32},{"x":-368,"y":170,"bCoef":1.3,"cMask":["ball"],"color":"151A1E"},{"x":368,"y":170,"bCoef":1.3,"cMask":["ball"],"color":"151A1E"},{"x":368,"y":65,"bCoef":1.1,"cMask":["ball"],"color":"ffffff","bias":-32},{"x":368,"y":171.5,"bCoef":1.1,"cMask":["ball"],"color":"151A1E","bias":-32},{"x":368,"y":-171.5,"bCoef":1.1,"cMask":["ball"],"color":"151A1E","bias":-32},{"x":368,"y":-65,"bCoef":1.1,"cMask":["ball"],"color":"ffffff","bias":-32},{"x":-368,"y":-170,"cMask":["ball"],"color":"151A1E"},{"x":368,"y":-170,"cMask":["ball"],"color":"151A1E"},{"x":0,"y":-170,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a3acc2"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a3acc2","curve":0},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a3acc2"},{"x":0,"y":170,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a3acc2"},{"x":-366.5,"y":122,"bCoef":0.1,"cMask":[],"color":"a3acc2"},{"x":-366.5,"y":-122,"bCoef":0.1,"cMask":[],"color":"a3acc2"},{"x":366.5,"y":122,"bCoef":0.1,"cMask":[],"color":"a3acc2"},{"x":366.5,"y":-122,"bCoef":0.1,"cMask":[],"color":"a3acc2"},{"x":-368,"y":65,"bCoef":0.1,"cMask":[],"color":"ffffff","curve":0},{"x":-368,"y":-65,"bCoef":0.1,"cMask":[],"color":"ffffff","curve":0},{"x":368,"y":65,"bCoef":0.1,"cMask":[],"color":"ffffff","curve":0},{"x":368,"y":-65,"bCoef":0.1,"cMask":[],"color":"ffffff","curve":0},{"x":0,"y":1.5,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"x":0,"y":-1.5,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"x":0,"y":-1.5,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"x":0,"y":1.5,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]}],"segments":[{"v0":4,"v1":5,"color":"DB7F89","bCoef":0.1,"cMask":["ball"],"bias":2,"y":-65},{"v0":5,"v1":6,"color":"DB7F89","bCoef":0.1,"cMask":["ball"],"bias":0,"x":-400},{"v0":6,"v1":7,"color":"DB7F89","bCoef":0.1,"cMask":["ball"],"bias":2,"y":65},{"v0":8,"v1":9,"color":"7FA8DB","bCoef":0.1,"cMask":["ball"],"bias":-2,"y":-65},{"v0":9,"v1":10,"color":"7FA8DB","bCoef":0.1,"cMask":["ball"],"bias":0},{"v0":10,"v1":11,"color":"7FA8DB","bCoef":0.1,"cMask":["ball"],"bias":-2,"y":65},{"v0":0,"v1":1,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":1,"v1":2,"curve":180,"color":"a3acc2","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":2,"v1":1,"curve":180,"color":"a3acc2","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":2,"v1":3,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":12,"v1":13,"color":"151A1E","bCoef":1.1,"cMask":["ball"],"bias":32,"x":-368},{"v0":14,"v1":15,"color":"151A1E","bCoef":1.1,"cMask":["ball"],"bias":-32,"x":-368},{"v0":16,"v1":17,"color":"151A1E","cMask":["ball"],"y":170},{"v0":18,"v1":19,"color":"151A1E","bCoef":1.1,"cMask":["ball"],"bias":-32,"x":368},{"v0":20,"v1":21,"color":"151A1E","bCoef":1.1,"cMask":["ball"],"bias":-32,"x":368},{"v0":22,"v1":23,"color":"151A1E","bCoef":2,"cMask":["ball"],"y":-170},{"v0":24,"v1":25,"color":"a3acc2","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":26,"v1":27,"color":"a3acc2","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":29,"v1":28,"curve":180,"color":"a3acc2","bCoef":0.1,"cMask":[]},{"v0":30,"v1":31,"curve":180,"color":"a3acc2","bCoef":0.1,"cMask":[]},{"v0":33,"v1":32,"curve":0,"color":"ffffff","bCoef":0.1,"cMask":[]},{"v0":35,"v1":34,"curve":0,"color":"ffffff","bCoef":0.1,"cMask":[],"x":368},{"v0":36,"v1":37,"curve":180,"color":"a3acc2","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":38,"v1":39,"curve":180,"color":"a3acc2","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]}],"planes":[{"normal":[0,1],"dist":-170,"bCoef":1.1,"cMask":["ball"],"_data":{"extremes":{"normal":[0,1],"dist":-170,"canvas_rect":[-1132,-448,1132,448],"a":[-1132,-170],"b":[1132,-170]}}},{"normal":[0,-1],"dist":-170,"bCoef":1.1,"cMask":["ball"],"_data":{"extremes":{"normal":[0,-1],"dist":-170,"canvas_rect":[-1132,-448,1132,448],"a":[-1132,170],"b":[1132,170]}}},{"normal":[0,1],"dist":-200,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-200,"canvas_rect":[-1132,-448,1132,448],"a":[-1132,-200],"b":[1132,-200]}}},{"normal":[0,-1],"dist":-200,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-200,"canvas_rect":[-1132,-448,1132,448],"a":[-1132,200],"b":[1132,200]}}},{"normal":[1,0],"dist":-430,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-430,"canvas_rect":[-1132,-448,1132,448],"a":[-430,-448],"b":[-430,448]}}},{"normal":[-1,0],"dist":-430,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-430,"canvas_rect":[-1132,-448,1132,448],"a":[430,-448],"b":[430,448]}}},{"normal":[1,0],"dist":-400,"bCoef":0.1,"cMask":["ball"],"_data":{"extremes":{"normal":[1,0],"dist":-400,"canvas_rect":[-1132,-448,1132,448],"a":[-400,-448],"b":[-400,448]}}},{"normal":[-1,0],"dist":-400,"bCoef":0.1,"cMask":["ball"],"_data":{"extremes":{"normal":[-1,0],"dist":-400,"canvas_rect":[-1132,-448,1132,448],"a":[400,-448],"b":[400,448]}}}],"goals":[{"p0":[-368,-65],"p1":[-368,65],"team":"red","color":"ffffff"},{"p0":[368,65],"p1":[368,-65],"team":"blue","color":"ffffff"}],"discs":[{"radius":4.5,"invMass":0,"pos":[-368,65],"color":"ffffff"},{"radius":4.5,"invMass":0,"pos":[-368,-65],"color":"ffffff"},{"radius":4.5,"invMass":0,"pos":[368,65],"color":"ffffff"},{"radius":4.5,"invMass":0,"pos":[368,-65],"color":"ffffff"}],"playerPhysics":{"bCoef":0.15,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.6},"ballPhysics":{"radius":5.8,"invMass":1.5,"color":"FFF26D","bCoef":0.412,"cGroup":["ball","kick","score"]},"spawnDistance":180,"traits":{},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}`;
	const bigMap = `{"name":"HHL 3V3 by Bnz","width":620,"height":280,"bg":{"type":"","color":"27343E","width":0,"height":0},"vertexes":[{"x":-551.5,"y":-240,"cMask":[],"cGroup":[],"color":"FFFFFF","_data":{"mirror":{}},"bias":-20},{"x":551.5,"y":-240,"cMask":[],"cGroup":[],"color":"FFFFFF","_data":{"mirror":{}},"bias":-20},{"x":551.5,"y":240,"cMask":[],"cGroup":[],"color":"FFFFFF","_data":{"mirror":{}},"bias":-20},{"x":-551.5,"y":240,"cMask":[],"cGroup":[],"color":"FFFFFF","_data":{"mirror":{}},"bias":-20},{"x":0,"y":240,"cMask":[],"cGroup":[],"color":"747F90"},{"x":0,"y":-240,"cMask":[],"cGroup":[],"color":"747F90"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["redKO","blueKO"],"cGroup":["wall"],"color":"747F90","bias":0,"vis":true,"_data":{"mirror":{}}},{"x":0,"y":80,"bCoef":0.1,"cMask":["redKO","blueKO"],"cGroup":["wall"],"color":"747F90","bias":0,"vis":true,"_data":{"mirror":{}}},{"x":-551.5,"y":77.99192490572226,"cMask":[],"cGroup":[],"color":"747F90","_data":{"mirror":{}},"bias":-20},{"x":-551.5,"y":-77.99192490572226,"cMask":[],"cGroup":[],"color":"747F90","_data":{"mirror":{}},"bias":-20},{"x":551.5,"y":-77.77897922062681,"cMask":[],"cGroup":[],"color":"747F90","_data":{"mirror":{}},"bias":-20},{"x":551.5,"y":77.77897922062681,"cMask":[],"cGroup":[],"color":"747F90","_data":{"mirror":{}},"bias":-20},{"x":584.4362808923063,"y":-77.77897922062681,"bCoef":10,"cMask":["c2","ball"],"cGroup":["wall"],"color":"747F90","bias":-9},{"x":584.4362808923063,"y":77.77897922062681,"bCoef":10,"cMask":["c2","ball"],"cGroup":["wall"],"color":"747F90","bias":-9,"_data":{"mirror":{}}},{"x":-581.124178198774,"y":-77.99192490572226,"bCoef":10,"cMask":["c2","ball"],"cGroup":["wall"],"color":"747F90","bias":9},{"x":-581.124178198774,"y":77.99192490572226,"bCoef":10,"cMask":["c2","ball"],"cGroup":["wall"],"color":"747F90","bias":9},{"x":-330,"y":-239.40939597315437,"cMask":[],"cGroup":[],"trait":"threeDefLine","color":"747F90","vis":true,"bias":0},{"x":-330,"y":239.40939597315437,"cMask":[],"cGroup":[],"trait":"threeDefLine","color":"747F90","vis":true,"bias":0},{"x":330,"y":-239.40939597315437,"cMask":[],"cGroup":[],"trait":"threeDefLine","color":"747F90","vis":true,"bias":0},{"x":330,"y":239.40939597315437,"cMask":[],"cGroup":[],"trait":"threeDefLine","color":"747F90","vis":true,"bias":0},{"x":550.2571942446043,"y":125,"cMask":["c1"],"cGroup":["c1"],"color":"747F90","bias":10},{"x":550.2571942446043,"y":-125,"cMask":["all"],"cGroup":[],"color":"747F90","bias":10,"_data":{"mirror":{}}},{"x":495.19208633093524,"y":-125,"cMask":[],"cGroup":[],"color":"747F90"},{"x":495.19208633093524,"y":125,"cMask":["wall"],"cGroup":["wall"],"color":"747F90"},{"x":330,"y":-101.47651006711409,"cMask":[],"cGroup":[],"color":"747F90"},{"x":330,"y":101.47651006711409,"cMask":[],"cGroup":[],"color":"747F90"},{"x":-330,"y":-101.47651006711409,"cMask":[],"cGroup":[],"color":"747F90","_data":{"mirror":{}}},{"x":-330,"y":101.47651006711409,"cMask":[],"cGroup":[],"color":"747F90","_data":{"mirror":{}}},{"x":-550.8328416912487,"y":125,"cMask":["all"],"cGroup":[],"color":"747F90","vis":false},{"x":-495.55240904621434,"y":125,"cMask":[],"cGroup":[],"color":"747F90"},{"x":-495.71012782694197,"y":-125,"cMask":[],"cGroup":[],"color":"747F90"},{"x":-550.8328416912487,"y":-125,"cMask":["all"],"cGroup":[],"color":"747F90","vis":false},{"x":-460,"y":1.5,"cMask":[],"cGroup":[],"color":"a3acc2"},{"x":-460,"y":-1.5,"cMask":[],"cGroup":[],"color":"a3acc2"},{"x":460,"y":1.5,"cMask":[],"cGroup":[],"color":"a3acc2"},{"x":460,"y":-1.5,"cMask":[],"cGroup":[],"color":"a3acc2"},{"x":-551.5,"y":-240,"cMask":[],"cGroup":[],"color":"FFFFFF","_data":{"mirror":{}},"bias":-20},{"x":551.5,"y":-240,"cMask":[],"cGroup":[],"color":"FFFFFF","_data":{"mirror":{}},"bias":-20},{"x":551.5,"y":240,"cMask":[],"cGroup":[],"color":"FFFFFF","_data":{"mirror":{}},"bias":-20},{"x":-551.5,"y":240,"cMask":[],"cGroup":[],"color":"FFFFFF","_data":{"mirror":{}},"bias":-20},{"x":-496.8141592920354,"y":-126.4,"cMask":[],"cGroup":[],"color":"747F90"},{"x":-496.8141592920354,"y":126.4,"cMask":[],"cGroup":[],"color":"747F90"},{"x":496.294964028777,"y":-126.4,"cMask":[],"cGroup":[],"color":"747F90"},{"x":496.294964028777,"y":126.4,"cMask":[],"cGroup":[],"color":"747F90"},{"x":593.642501503864,"y":-78.07736405139647,"cMask":["red","blue"],"curve":0,"bias":0},{"x":593.642501503864,"y":78.07736405139647,"cMask":["red","blue"],"curve":0,"bias":0},{"x":-590.2782255468264,"y":-78.29112666367259,"cMask":["red","blue"],"curve":0,"bias":0},{"x":-590.2782255468264,"y":78.29112666367259,"cMask":["red","blue"],"curve":0,"bias":0},{"x":0,"y":80,"bCoef":0.1,"cMask":["c3"],"cGroup":["c3"],"color":"747F90","bias":0,"curve":0},{"x":0,"y":69.9172859698703,"bCoef":0.1,"cMask":["redKO","blueKO"],"cGroup":["wall"],"color":"A8B707","bias":0,"curve":0},{"x":0,"y":400,"cMask":[],"cGroup":[],"color":"DBF808","curve":0},{"x":0,"y":-80,"bCoef":0.1,"cMask":["c3"],"cGroup":["c3"],"color":"747F90","bias":0},{"x":0,"y":-70.99551859163374,"bCoef":0.1,"cMask":["redKO","blueKO"],"cGroup":["wall"],"color":"A8B707","bias":0,"curve":0},{"x":0,"y":-400,"cMask":[],"cGroup":[],"color":"ffffff","curve":0},{"x":0,"y":111.61106698577682,"bCoef":0,"cMask":["c3"],"cGroup":["c3"],"trait":"threeDefLine","color":"747F90","curve":0},{"x":0,"y":-111.44587440155155,"cMask":["c3"],"cGroup":["c3"],"color":"747F90"},{"x":646.3746095740169,"y":284.69496021220164,"cMask":["red","blue"]},{"x":-645.7116843001736,"y":284.69496021220164,"cMask":["red","blue"]},{"x":648.3236316786663,"y":-284.69496021220164,"cMask":["red","blue"]},{"x":-648.3236316786663,"y":-284.69496021220164,"cMask":["red","blue"]},{"x":72.85866285171647,"y":48.68592891493204,"_data":{"mirror":{}},"cMask":["c3"],"cGroup":["c3"],"color":"555F67","curve":0},{"x":140.9508711243487,"y":47.66454579084256,"_data":{"mirror":{}},"cMask":["c3"],"cGroup":["c3"],"color":"555F67","curve":0},{"cMask":["c3"],"cGroup":["c3"],"x":150.48378028251722,"y":28.258266433142374,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":120.18274760119587,"y":28.258266433142374,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":124.26828009755381,"y":18.3848962336107,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":154.228851737512,"y":18.725357274973863,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":164.78314401977,"y":-1.7023052068158055,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":131.4179619661802,"y":-1.0213831240894833,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":134.14165029708548,"y":-9.532909158168511,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":168.1877544334016,"y":-9.532909158168511,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":179.76342983974908,"y":-35.0674872604056,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":94.98863054032195,"y":-34.04610413631611,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":86.13664346487977,"y":-35.0674872604056,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":76.60373430671126,"y":11.575675406347479,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":44.60039641857411,"y":26.215500184963407,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":42.55763017039514,"y":46.983623708116234,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":1.7023052068158055,"y":48.005006832205716,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":4.085532496357933,"y":-35.0674872604056,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-4.425993537721094,"y":-35.407948301768755,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-2.383227289542128,"y":14.299363737252767,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-19.406279357700186,"y":26.555961226326566,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-17.703974150884378,"y":48.005006832205716,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-52.09053932856365,"y":48.68592891493204,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-54.47376661810578,"y":27.577344350416052,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-73.88004597580597,"y":12.597058530436962,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-82.391572009885,"y":-35.407948301768755,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-47.3240847494794,"y":-34.38656517767927,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-44.259935377210944,"y":-6.128298744536901,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-39.83394183948985,"y":-2.0427662481789666,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-35.0674872604056,"y":-7.149681868626383,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-37.450714549947726,"y":-35.407948301768755,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":51.40961724583733,"y":-19.065818316337023,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":46.983623708116234,"y":6.128298744536901,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":55.154688700832104,"y":2.723688330905289,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":59.24022119719004,"y":-19.746740399063345,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-133.120267172996,"y":-34.38656517767927,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-91.24355908532718,"y":-34.38656517767927,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-73.19912389307964,"y":48.68592891493204,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-104.86200073985363,"y":48.34546787356888,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-113.0330657325695,"y":24.17273393678444,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-123.58735801482749,"y":25.194117060873925,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-115.07583198074846,"y":48.005006832205716,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-148.78147507570142,"y":47.66454579084256,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-187.25357274973862,"y":-34.727026219042436,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-144.01502049661715,"y":-34.727026219042436,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-133.120267172996,"y":-4.425993537721094,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-122.90643593210116,"y":-5.106915620447417,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":70.81589660353751,"y":54.47376661810578,"_data":{"mirror":{}},"color":"234251"},{"cMask":["c3"],"cGroup":["c3"],"x":74.22050701716913,"y":59.92114327991636,"_data":{"mirror":{}},"color":"234251"},{"cMask":["c3"],"cGroup":["c3"],"x":156.6120790270541,"y":64.00667577627429,"_data":{"mirror":{}},"color":"234251"},{"cMask":["c3"],"cGroup":["c3"],"x":160.01668944068572,"y":29.62011059859502,"_data":{"mirror":{}},"color":"234251"},{"cMask":["c3"],"cGroup":["c3"],"x":149.12193611706456,"y":55.83561078355842,"_data":{"mirror":{}},"color":"234251"},{"cMask":["c3"],"cGroup":["c3"],"x":165.4640661024963,"y":18.725357274973863,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":197.8078650319966,"y":-43.91947433584779,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":94.30770845759564,"y":-42.21716912903198,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":89.88171491987454,"y":-47.3240847494794,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":220.61875480332841,"y":-56.856993907647905,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":84.77479929942712,"y":-41.1957860049425,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":79.6678836789797,"y":-50.04777308038469,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":6.128298744536901,"y":-40.51486392221617,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-39.49348079812669,"y":-41.536247046305654,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-35.74840934313192,"y":-48.68592891493204,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-1.7023052068158055,"y":-41.87670808766882,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-47.3240847494794,"y":-41.1957860049425,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-78.98696159625338,"y":-51.06915620447417,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-83.75341617533763,"y":-43.23855225312146,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-90.56263700260087,"y":-42.8980912117583,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-94.30770845759564,"y":-51.40961724583733,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-131.4179619661802,"y":-41.87670808766882,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-139.2485659175329,"y":-41.1957860049425,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-225.0447483410495,"y":-56.51653286628475,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-169.8900596402174,"y":23.151350812694957,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-204.957546900623,"y":-44.94085745993727,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-164.44268297840682,"y":33.705643094952954,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-154.9097738202383,"y":57.19745494901107,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-113.37352677393265,"y":53.452383494016296,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-162.74037777159103,"y":64.00667577627429,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-104.52153969849047,"y":54.13330557674262,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-101.45739032622201,"y":62.98529265218481,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-64.00667577627429,"y":54.47376661810578,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-55.154688700832104,"y":53.79284453537946,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-50.38823412174785,"y":61.282987445369,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-13.958902695889606,"y":52.77146141128998,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":1.7023052068158055,"y":53.11192245265313,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":6.468759785900061,"y":59.24022119719004,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":48.68592891493204,"y":57.19745494901107,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":59.24022119719004,"y":49.707312039021524,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":43.579013294484625,"y":54.81422765946894,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-61.09358614664966,"y":-51.463114278786485,"color":"27343E","curve":-88,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-53.507870207185135,"y":59.50482716328073,"color":"27343E","curve":-88,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":61.26432258625574,"y":-51.60693672328841,"color":"27343E","curve":87.4,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":53.65740707064817,"y":59.67112354511116,"color":"27343E","curve":87.4,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-61.09358614664966,"y":-51.463114278786485,"color":"27343E","curve":-88,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-53.507870207185135,"y":59.50482716328073,"color":"27343E","curve":-88,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":61.26432258625574,"y":-51.60693672328841,"color":"27343E","curve":87.4,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":53.65740707064817,"y":59.67112354511116,"color":"27343E","curve":87.4,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-61.09358614664966,"y":-51.463114278786485,"color":"27343E","curve":-88,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-53.507870207185135,"y":59.50482716328073,"color":"27343E","curve":-88,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":61.26432258625574,"y":-51.60693672328841,"color":"27343E","curve":87.4,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":53.65740707064817,"y":59.67112354511116,"color":"27343E","curve":87.4,"_data":{"mirror":{}}},{"x":72.85866285171647,"y":48.68592891493204,"cMask":["c3"],"cGroup":["c3"],"color":"555F67","curve":0,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":94.98863054032195,"y":-34.04610413631611,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":86.13664346487977,"y":-35.0674872604056,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":76.60373430671126,"y":11.575675406347479,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":4.085532496357933,"y":-35.0674872604056,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-73.88004597580597,"y":12.597058530436962,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-82.391572009885,"y":-35.407948301768755,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-47.3240847494794,"y":-34.38656517767927,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-91.24355908532718,"y":-34.38656517767927,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-73.19912389307964,"y":48.68592891493204,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":84.77479929942712,"y":-41.1957860049425,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":79.6678836789797,"y":-50.04777308038469,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":6.128298744536901,"y":-40.51486392221617,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-47.3240847494794,"y":-41.1957860049425,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-78.98696159625338,"y":-51.06915620447417,"_data":{"mirror":{}}},{"cMask":["c3"],"cGroup":["c3"],"x":-83.75341617533763,"y":-43.23855225312146,"_data":{"mirror":{}}},{"x":566.9258031291163,"y":234.12061977961105,"_data":{"mirror":{}},"vis":false},{"x":549.9112232032725,"y":253.17694929655613,"_data":{"mirror":{}},"vis":false},{"x":549.0459694822582,"y":-254.820378180761,"_data":{"mirror":{}},"vis":false},{"x":563.6404928603087,"y":-238.47451199734448,"_data":{"mirror":{}},"vis":false},{"x":-549.4662917555461,"y":-253.4543307925755,"_data":{"mirror":{}},"bias":20,"vis":false},{"x":-563.0216850690794,"y":-237.0617621343492,"_data":{"mirror":{}},"bias":20,"vis":false},{"x":-563.5044235186615,"y":237.07691391165673,"_data":{"mirror":{}},"bias":20,"vis":false},{"x":-549.2083282074059,"y":251.77012298155842,"_data":{"mirror":{}},"bias":20,"vis":false}],"segments":[{"v0":0,"v1":1,"color":"FFFFFF","cMask":["ball"],"bias":-20,"_data":{"mirror":{},"arc":{"a":[-551.5,-240],"b":[551.5,-240],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":37,"v1":10,"color":"FFFFFF","cMask":["ball"],"bias":-20,"_data":{"mirror":{},"arc":{"a":[551.5,-240],"b":[551.5,-77.77897922062681],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":11,"v1":38,"color":"FFFFFF","cMask":["ball"],"bias":-20,"_data":{"mirror":{},"arc":{"a":[551.5,77.77897922062681],"b":[551.5,240],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":2,"v1":3,"color":"FFFFFF","cMask":["ball"],"bias":-20,"_data":{"mirror":{},"arc":{"a":[551.5,240],"b":[-551.5,240],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":39,"v1":8,"color":"FFFFFF","cMask":["ball"],"bias":-20,"_data":{"mirror":{},"arc":{"a":[-551.5,240],"b":[-551.5,77.99192490572226],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":5,"v1":6,"color":"747F90","bCoef":0,"cMask":[],"cGroup":[]},{"v0":4,"v1":7,"color":"747F90","bCoef":0,"cMask":[],"cGroup":[]},{"v0":9,"v1":36,"color":"FFFFFF","cMask":["ball"],"bias":-20,"_data":{"mirror":{},"arc":{"a":[-551.5,-77.99192490572226],"b":[-551.5,-240],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":6,"v1":7,"curve":180,"vis":true,"color":"747F90","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"bias":0,"curveF":6.123233995736766e-17,"_data":{"mirror":{},"arc":{"a":[0,-80],"b":[0,80],"curve":180,"radius":80,"center":[0,0],"from":-1.5707963267948966,"to":1.5707963267948966}}},{"v0":7,"v1":6,"curve":180,"vis":true,"color":"747F90","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"curveF":6.123233995736766e-17},{"v0":17,"v1":16,"vis":true,"color":"747F90","bCoef":0,"cMask":[],"trait":"threeDefLine","bias":0},{"v0":19,"v1":18,"vis":true,"color":"747F90","bCoef":0,"cMask":[],"trait":"threeDefLine","bias":0},{"v0":21,"v1":22,"color":"747F90","bCoef":0,"cMask":[]},{"v0":23,"v1":20,"color":"747F90","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":25,"v1":24,"curve":106.13725243894305,"color":"747F90","bCoef":0,"cMask":[],"curveF":1.0000000000000002},{"v0":26,"v1":27,"curve":106.13725243894305,"color":"747F90","bCoef":0,"cMask":[],"curveF":1.0000000000000002,"_data":{"mirror":{},"arc":{"a":[-330,-101.47651006711409],"b":[-330,101.47651006711409],"curve":106.13725243894305,"radius":126.9478682184194,"center":[-406.2776451511193,0],"from":-0.926222257039969,"to":0.926222257039969}}},{"v0":28,"v1":29,"color":"747F90","bCoef":0,"cMask":[]},{"v0":31,"v1":30,"color":"747F90","bCoef":0,"cMask":[]},{"v0":33,"v1":32,"curve":180,"color":"a3acc2","cMask":[],"curveF":6.123233995736766e-17},{"v0":32,"v1":33,"curve":180,"color":"a3acc2","cMask":[],"curveF":6.123233995736766e-17},{"v0":35,"v1":34,"curve":180,"color":"a3acc2","cMask":[],"curveF":6.123233995736766e-17},{"v0":34,"v1":35,"curve":180,"color":"a3acc2","cMask":[],"curveF":6.123233995736766e-17},{"v0":10,"v1":12,"color":"747F90","bCoef":0.1,"cMask":["ball"],"bias":-10},{"v0":13,"v1":11,"color":"747F90","bCoef":0.1,"cMask":["ball"],"bias":-10,"_data":{"mirror":{},"arc":{"a":[584.4362808923063,77.77897922062681],"b":[551.5,77.77897922062681],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":8,"v1":15,"color":"747F90","bCoef":0.1,"cMask":["ball"],"bias":-10},{"v0":14,"v1":9,"color":"747F90","bCoef":0.1,"cMask":["ball"],"bias":-10},{"v0":9,"v1":8,"color":"5B5B5B","bCoef":0,"cMask":[]},{"v0":10,"v1":11,"color":"5B5B5B","bCoef":0,"cMask":[]},{"v0":40,"v1":41,"color":"747F90","bCoef":0,"cMask":[]},{"v0":43,"v1":42,"color":"747F90","bCoef":0,"cMask":[]},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"151A1E","cMask":["red","blue"],"bias":0},{"v0":46,"v1":47,"curve":0,"vis":false,"color":"151A1E","cMask":["red","blue"],"bias":0},{"v0":49,"v1":50,"curve":0,"vis":false,"color":"DBF808","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":52,"v1":53,"curve":0,"vis":false,"color":"DBF808","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0},{"v0":48,"v1":54,"curve":0,"vis":true,"color":"747F90","bCoef":0,"cMask":["c3"],"cGroup":["c3"],"trait":"threeDefLine","bias":0},{"v0":51,"v1":55,"vis":true,"color":"747F90","cMask":["c3"],"cGroup":["c3"],"bias":0},{"v0":14,"v1":15,"color":"747F90","bCoef":10,"cMask":["c2","ball"],"cGroup":["wall"],"bias":9},{"v0":12,"v1":13,"color":"747F90","bCoef":10,"cMask":["c2","ball"],"cGroup":["wall"],"bias":-9},{"v0":56,"v1":57,"curve":0,"vis":false,"color":"151A1E","cMask":["red","blue"],"bias":0},{"v0":58,"v1":59,"curve":0,"vis":false,"color":"151A1E","cMask":["red","blue"],"bias":0},{"curve":0,"color":"555F67","v0":60,"v1":61,"_data":{"mirror":{},"arc":{"a":[72.85866285171647,48.68592891493204],"b":[140.9508711243487,47.66454579084256],"curve":0}},"cMask":["c3"],"cGroup":["c3"]},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":61,"v1":62,"_data":{"mirror":{},"arc":{"a":[140.9508711243487,47.66454579084256],"b":[150.48378028251722,28.258266433142374],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":62,"v1":63,"_data":{"mirror":{},"arc":{"a":[150.48378028251722,28.258266433142374],"b":[120.18274760119587,28.258266433142374],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":63,"v1":64,"_data":{"mirror":{},"arc":{"a":[120.18274760119587,28.258266433142374],"b":[124.26828009755381,18.3848962336107],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":64,"v1":65,"_data":{"mirror":{},"arc":{"a":[124.26828009755381,18.3848962336107],"b":[154.228851737512,18.725357274973863],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":65,"v1":66,"_data":{"mirror":{},"arc":{"a":[154.228851737512,18.725357274973863],"b":[164.78314401977,-1.7023052068158055],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":66,"v1":67,"_data":{"mirror":{},"arc":{"a":[164.78314401977,-1.7023052068158055],"b":[131.4179619661802,-1.0213831240894833],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":67,"v1":68,"_data":{"mirror":{},"arc":{"a":[131.4179619661802,-1.0213831240894833],"b":[134.14165029708548,-9.532909158168511],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":68,"v1":69,"_data":{"mirror":{},"arc":{"a":[134.14165029708548,-9.532909158168511],"b":[168.1877544334016,-9.532909158168511],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":69,"v1":70,"_data":{"mirror":{},"arc":{"a":[168.1877544334016,-9.532909158168511],"b":[179.76342983974908,-35.0674872604056],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":70,"v1":71,"_data":{"mirror":{},"arc":{"a":[179.76342983974908,-35.0674872604056],"b":[94.98863054032195,-34.04610413631611],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":73,"v1":74,"_data":{"mirror":{},"arc":{"a":[76.60373430671126,11.575675406347479],"b":[44.60039641857411,26.215500184963407],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":74,"v1":75,"_data":{"mirror":{},"arc":{"a":[44.60039641857411,26.215500184963407],"b":[42.55763017039514,46.983623708116234],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":75,"v1":76,"_data":{"mirror":{},"arc":{"a":[42.55763017039514,46.983623708116234],"b":[1.7023052068158055,48.005006832205716],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":76,"v1":77,"_data":{"mirror":{},"arc":{"a":[1.7023052068158055,48.005006832205716],"b":[4.085532496357933,-35.0674872604056],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":78,"v1":79,"_data":{"mirror":{},"arc":{"a":[-4.425993537721094,-35.407948301768755],"b":[-2.383227289542128,14.299363737252767],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":79,"v1":80,"_data":{"mirror":{},"arc":{"a":[-2.383227289542128,14.299363737252767],"b":[-19.406279357700186,26.555961226326566],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":80,"v1":81,"_data":{"mirror":{},"arc":{"a":[-19.406279357700186,26.555961226326566],"b":[-17.703974150884378,48.005006832205716],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":81,"v1":82,"_data":{"mirror":{},"arc":{"a":[-17.703974150884378,48.005006832205716],"b":[-52.09053932856365,48.68592891493204],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":82,"v1":83,"_data":{"mirror":{},"arc":{"a":[-52.09053932856365,48.68592891493204],"b":[-54.47376661810578,27.577344350416052],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":83,"v1":84,"_data":{"mirror":{},"arc":{"a":[-54.47376661810578,27.577344350416052],"b":[-73.88004597580597,12.597058530436962],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":86,"v1":87,"_data":{"mirror":{},"arc":{"a":[-47.3240847494794,-34.38656517767927],"b":[-44.259935377210944,-6.128298744536901],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":87,"v1":87,"_data":{"mirror":{},"arc":{"a":[-44.259935377210944,-6.128298744536901],"b":[-44.259935377210944,-6.128298744536901],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":87,"v1":88,"_data":{"mirror":{},"arc":{"a":[-44.259935377210944,-6.128298744536901],"b":[-39.83394183948985,-2.0427662481789666],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":88,"v1":89,"_data":{"mirror":{},"arc":{"a":[-39.83394183948985,-2.0427662481789666],"b":[-35.0674872604056,-7.149681868626383],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":89,"v1":90,"_data":{"mirror":{},"arc":{"a":[-35.0674872604056,-7.149681868626383],"b":[-37.450714549947726,-35.407948301768755],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":90,"v1":78,"_data":{"mirror":{},"arc":{"a":[-37.450714549947726,-35.407948301768755],"b":[-4.425993537721094,-35.407948301768755],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":91,"v1":92,"_data":{"mirror":{},"arc":{"a":[51.40961724583733,-19.065818316337023],"b":[46.983623708116234,6.128298744536901],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":92,"v1":93,"_data":{"mirror":{},"arc":{"a":[46.983623708116234,6.128298744536901],"b":[55.154688700832104,2.723688330905289],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":93,"v1":94,"_data":{"mirror":{},"arc":{"a":[55.154688700832104,2.723688330905289],"b":[59.24022119719004,-19.746740399063345],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":94,"v1":91,"_data":{"mirror":{},"arc":{"a":[59.24022119719004,-19.746740399063345],"b":[51.40961724583733,-19.065818316337023],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":95,"v1":96,"_data":{"mirror":{},"arc":{"a":[-133.120267172996,-34.38656517767927],"b":[-91.24355908532718,-34.38656517767927],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":97,"v1":98,"_data":{"mirror":{},"arc":{"a":[-73.19912389307964,48.68592891493204],"b":[-104.86200073985363,48.34546787356888],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":98,"v1":99,"_data":{"mirror":{},"arc":{"a":[-104.86200073985363,48.34546787356888],"b":[-113.0330657325695,24.17273393678444],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":99,"v1":100,"_data":{"mirror":{},"arc":{"a":[-113.0330657325695,24.17273393678444],"b":[-123.58735801482749,25.194117060873925],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":100,"v1":101,"_data":{"mirror":{},"arc":{"a":[-123.58735801482749,25.194117060873925],"b":[-115.07583198074846,48.005006832205716],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":101,"v1":102,"_data":{"mirror":{},"arc":{"a":[-115.07583198074846,48.005006832205716],"b":[-148.78147507570142,47.66454579084256],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":102,"v1":103,"_data":{"mirror":{},"arc":{"a":[-148.78147507570142,47.66454579084256],"b":[-187.25357274973862,-34.727026219042436],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":103,"v1":104,"_data":{"mirror":{},"arc":{"a":[-187.25357274973862,-34.727026219042436],"b":[-144.01502049661715,-34.727026219042436],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":104,"v1":105,"_data":{"mirror":{},"arc":{"a":[-144.01502049661715,-34.727026219042436],"b":[-133.120267172996,-4.425993537721094],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":105,"v1":106,"_data":{"mirror":{},"arc":{"a":[-133.120267172996,-4.425993537721094],"b":[-122.90643593210116,-5.106915620447417],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":106,"v1":95,"_data":{"mirror":{},"arc":{"a":[-122.90643593210116,-5.106915620447417],"b":[-133.120267172996,-34.38656517767927],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":107,"v1":108,"_data":{"mirror":{},"arc":{"a":[70.81589660353751,54.47376661810578],"b":[74.22050701716913,59.92114327991636],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":108,"v1":109,"_data":{"mirror":{},"arc":{"a":[74.22050701716913,59.92114327991636],"b":[156.6120790270541,64.00667577627429],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":109,"v1":110,"_data":{"mirror":{},"arc":{"a":[156.6120790270541,64.00667577627429],"b":[160.01668944068572,29.62011059859502],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":110,"v1":111,"_data":{"mirror":{},"arc":{"a":[160.01668944068572,29.62011059859502],"b":[149.12193611706456,55.83561078355842],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":111,"v1":107,"_data":{"mirror":{},"arc":{"a":[149.12193611706456,55.83561078355842],"b":[70.81589660353751,54.47376661810578],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":112,"v1":113,"_data":{"mirror":{},"arc":{"a":[165.4640661024963,18.725357274973863],"b":[197.8078650319966,-43.91947433584779],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":113,"v1":114,"_data":{"mirror":{},"arc":{"a":[197.8078650319966,-43.91947433584779],"b":[94.30770845759564,-42.21716912903198],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":114,"v1":115,"_data":{"mirror":{},"arc":{"a":[94.30770845759564,-42.21716912903198],"b":[89.88171491987454,-47.3240847494794],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":115,"v1":116,"_data":{"mirror":{},"arc":{"a":[89.88171491987454,-47.3240847494794],"b":[220.61875480332841,-56.856993907647905],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":116,"v1":112,"_data":{"mirror":{},"arc":{"a":[220.61875480332841,-56.856993907647905],"b":[165.4640661024963,18.725357274973863],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":117,"v1":118,"_data":{"mirror":{},"arc":{"a":[84.77479929942712,-41.1957860049425],"b":[79.6678836789797,-50.04777308038469],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":120,"v1":121,"_data":{"mirror":{},"arc":{"a":[-39.49348079812669,-41.536247046305654],"b":[-35.74840934313192,-48.68592891493204],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":121,"v1":122,"_data":{"mirror":{},"arc":{"a":[-35.74840934313192,-48.68592891493204],"b":[-1.7023052068158055,-41.87670808766882],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":122,"v1":120,"_data":{"mirror":{},"arc":{"a":[-1.7023052068158055,-41.87670808766882],"b":[-39.49348079812669,-41.536247046305654],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":124,"v1":125,"_data":{"mirror":{},"arc":{"a":[-78.98696159625338,-51.06915620447417],"b":[-83.75341617533763,-43.23855225312146],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":126,"v1":127,"_data":{"mirror":{},"arc":{"a":[-90.56263700260087,-42.8980912117583],"b":[-94.30770845759564,-51.40961724583733],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":127,"v1":128,"_data":{"mirror":{},"arc":{"a":[-94.30770845759564,-51.40961724583733],"b":[-131.4179619661802,-41.87670808766882],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":128,"v1":126,"_data":{"mirror":{},"arc":{"a":[-131.4179619661802,-41.87670808766882],"b":[-90.56263700260087,-42.8980912117583],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":129,"v1":130,"_data":{"mirror":{},"arc":{"a":[-139.2485659175329,-41.1957860049425],"b":[-225.0447483410495,-56.51653286628475],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":130,"v1":131,"_data":{"mirror":{},"arc":{"a":[-225.0447483410495,-56.51653286628475],"b":[-169.8900596402174,23.151350812694957],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":131,"v1":132,"_data":{"mirror":{},"arc":{"a":[-169.8900596402174,23.151350812694957],"b":[-204.957546900623,-44.94085745993727],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":132,"v1":129,"_data":{"mirror":{},"arc":{"a":[-204.957546900623,-44.94085745993727],"b":[-139.2485659175329,-41.1957860049425],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":133,"v1":134,"_data":{"mirror":{},"arc":{"a":[-164.44268297840682,33.705643094952954],"b":[-154.9097738202383,57.19745494901107],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":134,"v1":135,"_data":{"mirror":{},"arc":{"a":[-154.9097738202383,57.19745494901107],"b":[-113.37352677393265,53.452383494016296],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":135,"v1":136,"_data":{"mirror":{},"arc":{"a":[-113.37352677393265,53.452383494016296],"b":[-162.74037777159103,64.00667577627429],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":136,"v1":133,"_data":{"mirror":{},"arc":{"a":[-162.74037777159103,64.00667577627429],"b":[-164.44268297840682,33.705643094952954],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":137,"v1":138,"_data":{"mirror":{},"arc":{"a":[-104.52153969849047,54.13330557674262],"b":[-101.45739032622201,62.98529265218481],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":138,"v1":139,"_data":{"mirror":{},"arc":{"a":[-101.45739032622201,62.98529265218481],"b":[-64.00667577627429,54.47376661810578],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":139,"v1":137,"_data":{"mirror":{},"arc":{"a":[-64.00667577627429,54.47376661810578],"b":[-104.52153969849047,54.13330557674262],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":140,"v1":141,"_data":{"mirror":{},"arc":{"a":[-55.154688700832104,53.79284453537946],"b":[-50.38823412174785,61.282987445369],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":141,"v1":142,"_data":{"mirror":{},"arc":{"a":[-50.38823412174785,61.282987445369],"b":[-13.958902695889606,52.77146141128998],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":142,"v1":140,"_data":{"mirror":{},"arc":{"a":[-13.958902695889606,52.77146141128998],"b":[-55.154688700832104,53.79284453537946],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":143,"v1":144,"_data":{"mirror":{},"arc":{"a":[1.7023052068158055,53.11192245265313],"b":[6.468759785900061,59.24022119719004],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":144,"v1":145,"_data":{"mirror":{},"arc":{"a":[6.468759785900061,59.24022119719004],"b":[48.68592891493204,57.19745494901107],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":145,"v1":146,"_data":{"mirror":{},"arc":{"a":[48.68592891493204,57.19745494901107],"b":[59.24022119719004,49.707312039021524],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":146,"v1":147,"_data":{"mirror":{},"arc":{"a":[59.24022119719004,49.707312039021524],"b":[43.579013294484625,54.81422765946894],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":147,"v1":143,"_data":{"mirror":{},"arc":{"a":[43.579013294484625,54.81422765946894],"b":[1.7023052068158055,53.11192245265313],"curve":0}}},{"curve":-84.33102019114926,"color":"27343E","cMask":["c3"],"cGroup":["c3"],"v0":152,"v1":153,"_data":{"mirror":{},"arc":{"a":[-61.09358614664966,-51.463114278786485],"b":[-53.507870207185135,59.50482716328073],"curve":-84.33102019114926,"radius":82.8475624052793,"center":[3.9636370674520833,-0.16714656038596587],"from":2.337412329446694,"to":-2.47391901383152}}},{"curve":85.2893514687044,"color":"27343E","cMask":["c3"],"cGroup":["c3"],"v0":154,"v1":155,"_data":{"mirror":{},"arc":{"a":[61.26432258625574,-51.60693672328841],"b":[53.65740707064817,59.67112354511116],"curve":85.2893514687044,"radius":82.32179844313221,"center":[-2.951514716833607,-0.09766825270299861],"from":-0.6760366578173636,"to":0.8125433422021898}}},{"curve":-93.82633399180797,"color":"27343E","cMask":["c3"],"cGroup":["c3"],"v0":156,"v1":157,"_data":{"mirror":{},"arc":{"a":[-61.09358614664966,-51.463114278786485],"b":[-53.507870207185135,59.50482716328073],"curve":-93.82633399180797,"radius":76.14951464324697,"center":[-5.4036577748195995,0.4731972801076516],"from":2.2545500847809183,"to":-2.3910567691657447}}},{"curve":91.76321281974091,"color":"27343E","cMask":["c3"],"cGroup":["c3"],"v0":158,"v1":159,"_data":{"mirror":{},"arc":{"a":[61.26432258625574,-51.60693672328841],"b":[53.65740707064817,59.67112354511116],"curve":91.76321281974091,"radius":77.68304539172259,"center":[3.5082472976006542,0.3439180202443448],"from":-0.7325317557639615,"to":0.8690384401487875}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":161,"v1":160,"_data":{"mirror":{},"arc":{"a":[94.98863054032195,-34.04610413631611],"b":[72.85866285171647,48.68592891493204],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":162,"v1":163,"_data":{"mirror":{},"arc":{"a":[86.13664346487977,-35.0674872604056],"b":[76.60373430671126,11.575675406347479],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":164,"v1":162,"_data":{"mirror":{},"arc":{"a":[4.085532496357933,-35.0674872604056],"b":[86.13664346487977,-35.0674872604056],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":165,"v1":166,"_data":{"mirror":{},"arc":{"a":[-73.88004597580597,12.597058530436962],"b":[-82.391572009885,-35.407948301768755],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":166,"v1":167,"_data":{"mirror":{},"arc":{"a":[-82.391572009885,-35.407948301768755],"b":[-47.3240847494794,-34.38656517767927],"curve":0}}},{"curve":0,"color":"555F67","cMask":["c3"],"cGroup":["c3"],"v0":168,"v1":169,"_data":{"mirror":{},"arc":{"a":[-91.24355908532718,-34.38656517767927],"b":[-73.19912389307964,48.68592891493204],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":171,"v1":172,"_data":{"mirror":{},"arc":{"a":[79.6678836789797,-50.04777308038469],"b":[6.128298744536901,-40.51486392221617],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":172,"v1":170,"_data":{"mirror":{},"arc":{"a":[6.128298744536901,-40.51486392221617],"b":[84.77479929942712,-41.1957860049425],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":173,"v1":174,"_data":{"mirror":{},"arc":{"a":[-47.3240847494794,-41.1957860049425],"b":[-78.98696159625338,-51.06915620447417],"curve":0}}},{"curve":0,"color":"234251","cMask":["c3"],"cGroup":["c3"],"v0":175,"v1":173,"_data":{"mirror":{},"arc":{"a":[-83.75341617533763,-43.23855225312146],"b":[-47.3240847494794,-41.1957860049425],"curve":0}}},{"color":"FFFFFF","bias":-20,"v0":176,"v1":177,"_data":{"mirror":{},"arc":{"a":[566.9258031291163,234.12061977961105],"b":[549.9112232032725,253.17694929655613],"radius":null,"center":[null,null],"from":null,"to":null}},"vis":false},{"color":"FFFFFF","bias":-20,"v0":178,"v1":179,"_data":{"mirror":{},"arc":{"a":[549.0459694822582,-254.820378180761],"b":[563.6404928603087,-238.47451199734448],"radius":null,"center":[null,null],"from":null,"to":null}},"vis":false},{"color":"FFFFFF","bias":20,"v0":180,"v1":181,"_data":{"mirror":{},"arc":{"a":[-549.4662917555461,-253.4543307925755],"b":[-563.0216850690794,-237.0617621343492],"radius":null,"center":[null,null],"from":null,"to":null}},"vis":false},{"color":"FFFFFF","bias":20,"v0":182,"v1":183,"_data":{"mirror":{},"arc":{"a":[-563.5044235186615,237.07691391165673],"b":[-549.2083282074059,251.77012298155842],"radius":null,"center":[null,null],"from":null,"to":null}},"vis":false}],"planes":[{"normal":[1,0],"dist":-619.9106456572113,"bCoef":0,"_data":{"extremes":{"normal":[1,0],"dist":-619.9106456572113,"canvas_rect":[-963.36,-432,964.44,432],"a":[-619.9106456572113,-432],"b":[-619.9106456572113,432]}}},{"normal":[-1,0],"dist":-619.744420356372,"bCoef":0,"_data":{"extremes":{"normal":[-1,0],"dist":-619.744420356372,"canvas_rect":[-963.36,-432,964.44,432],"a":[619.744420356372,-432],"b":[619.744420356372,432]}}},{"normal":[-1,0],"dist":-330,"bCoef":0,"cMask":["c1"],"_data":{"extremes":{"normal":[-1,0],"dist":-330,"canvas_rect":[-963.36,-432,964.44,432],"a":[330,-432],"b":[330,432]}}},{"normal":[1,0],"dist":-330,"bCoef":0,"cMask":["c0"],"_data":{"extremes":{"normal":[1,0],"dist":-330,"canvas_rect":[-963.36,-432,964.44,432],"a":[-330,-432],"b":[-330,432]}}}],"goals":[{"p0":[-557.1023403023538,76.1568207902935],"p1":[-557.1023403023538,-79.827029021151],"team":"red","_data":{"mirror":{}}},{"p0":[557.1032734802562,80.52411966370775],"p1":[557.1032734802562,-75.03383877754587],"team":"blue"}],"discs":[{"radius":5.8,"invMass":1.5,"pos":[0,0],"color":"FFDFCF","bCoef":0.412,"cGroup":["ball","kick","score","c2"],"_data":{"mirror":{}}},{"radius":4.595012521416365,"invMass":0,"pos":[-551.5,77.99192490572226],"color":"BDBDBD","_data":{"mirror":{}}},{"radius":4.595012521416365,"invMass":0,"pos":[-551.5,-77.99192490572226],"color":"BDBDBD","_data":{"mirror":{}}},{"radius":4.601793335765144,"invMass":0,"pos":[551.5,77.77897922062681],"color":"BDBDBD","_data":{"mirror":{}}},{"radius":4.601793335765144,"invMass":0,"pos":[551.5,-77.77897922062681],"color":"BDBDBD","_data":{"mirror":{}}}],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.545,"cGroup":["red","blue"]},"ballPhysics":"disc0","spawnDistance":350,"joints":[],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"threeDefLine":{"bCoef":0,"cGroup":["wall"],"bias":-300,"vis":false},"threeDefLineBall_RedFirst":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"threeDefLineBall_RedSecond":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"threeDefLineBall_BlueFirst":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"threeDefLineBall_BlueSecond":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]}},"canBeStored":false,"redSpawnPoints":[],"blueSpawnPoints":[]}`;


	/* OPTIONS */


	var afkLimit = 12;
	var drawTimeLimit = Infinity;
	var maxTeamSize = 3; // This works for 1 (you might want to adapt things to remove some useless stats in 1v1 like assist or cs), 2, 3 or 4
	var slowMode = 1;


	var slowModeTime = 1;//slow chat mode time (seconds)
	var SlowMode = [];


	/* PLAYERS */


	const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
	var extendedP = [];
	const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
	const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11, OG: 12, CL: 13 }
	var players;
	var teamR;
	var teamB;
	var teamS;


	/* GAME */


	var lastTeamTouched;
	var lastPlayersTouched; // These allow to get good goal notifications (it should be lastPlayersKicked, waiting on a next update to get better track of shots on target)
	var countAFK = false; // Created to get better track of activity
	var activePlay = false; // Created to get better track of the possession
	var goldenGoal = false;
	var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
	var banList = []; // Getting track of the bans, so we can unban ppl if we want


	/* STATS */


	var game;
	var GKList = ["", ""];
	var Rposs = 0;
	var Bposs = 0;
	var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }]; // created to get ball speed
	var ballSpeed;
	var vcgbsdbf = 7865;
	var lastWinner = Team.SPECTATORS;
	var streak = 0;
	var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
	var allReds = []; // ... those who came in a very unequal game.


	/* BALANCE & CHOOSE */


	var inChooseMode = false; // This variable enables to distinguish the 2 phases of playing and choosing which should be dealt with very differently
	var redCaptainChoice = "";
	var blueCaptainChoice = "";
	var chooseTime = 20;
	var timeOutCap;


	/* AUXILIARY */


	var checkTimeVariable = false; // This is created so the chat doesn't get spammed when a game is ending via timeLimit
	var statNumber = 0; // This allows the room to be given stat information every X minutes
	var endGameVariable = true; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
	var resettingTeams = false;
	var capLeft = false;
	var statInterval = 6;


	loadMap(aloneMap, 0, 0);


	/* OBJECTS */


	function Goal(time, team, striker, assist) {
		this.time = time;
		this.team = team;
		this.striker = striker;
		this.assist = assist;
	}


	function Game(date, scores, goals) {
		this.date = date;
		this.scores = scores;
		this.goals = goals;
	}


	var frasesGOL = [" {player1} KAY9DEEEF WAAAAAAA", " L7WAY {player1} T9BHOOM WE3", " ZAML {player1} KHCHAHA WALA", " NARI {player1} 79ED 9WDTOHA", " GOL YA SALAM WALA FIL A7LAM A77 3LA {player1}", " DRARI LI MCOTI 3LA {player1} YDOZ YTKHLESS", " {player1} Y3TIK TRMTO O MAY3TIKCH ASSIST M9WED", " {player1} LKFAYTI LYOMA REPOS WILII", " FIN YBAN CHI MPAPI TA RA 3NDNA {player1}"];
	var frasesASS = [", O Y3TIH {player2}", ", W YPASSILO {player2}", ", PASSAT LMLA7 {player2}", ", W YJIBHA LIH {player2}", ", KOUNMA SOUNTRAHA {player2}", ", KDB OVERATED 3NDNA {player2}"];
	var golcontra = [" HANIA KHAY {player1} MERA JAYA MAT3AWDCH", " WE3 WD9 MAKHLSAH LFER9A LAKHRA {player1}", " WITI WITI WITI O {player1} T7WITI", " CHO WA7ED L7MAR {player1} HHHHHH", " 9WAD GHA 9WAD {player1}", " {player1} DARHA, MATCH MBYO3 AJMI GHYROHA", " HADA MADY3TIHCH AWD9 {player1}", " {player1} ZL9ATLO MN TRMTO ZAML"];
	function updatePhrases(player1, player2 = "") {
		frasesGOL = frasesGOL.map(phrase => phrase.replace("{player1}", player1));

		if (player2) {
			frasesASS = frasesASS.map(phrase => phrase.replace("{player2}", player2));
		}

		golcontra = golcontra.map(phrase => phrase.replace("{player1}", player1));
	}
	function resetPhrases(player1, player2 = "") {
		frasesGOL = frasesGOL.map(phrase => phrase.replace(player1, "{player1}"));

		if (player2) {
			frasesASS = frasesASS.map(phrase => phrase.replace(player2, "{player2}"));
		}

		golcontra = golcontra.map(phrase => phrase.replace(player1, "{player1}"));
	}
	const goleiro = [" it's a man? no, it's a barrier! ", " don't let one pass ", " is the best GK in the world? "]; // Goalkeeper phrases


	function getDate() {
		let data = new Date(),
			dia = data.getDate().toString().padStart(2, '0'),
			mes = (data.getMonth() + 1).toString().padStart(2, '0'),
			ano = data.getFullYear(),
			horas = data.getHours().toString().padStart(2, '0'),
			minutos = data.getMinutes().toString().padStart(2, '0');
		segundos = data.getSeconds().toString().padStart(2, '0');
		return `${dia}${minutos}${segundos}`;
	}

	async function code_change(user, code) {
		let payload = {
			avatar_url: '',
			username: 'League BOT',
			content: '```' + `${user} changed code to: ${code}` + '```'
		};

		try {
			const response = await fetch("https://discord.com/api/webhooks/1273061742750072872/yXuMFB2psox27kcZf8qoKGdI95WYoC6lPEm3x26M3BjiY6jWD2hCOs2Tpev6dUmkVHbt", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			console.log('Message sent successfully.');
		} catch (error) {
			console.error('Error sending message:', error);
		}
	}

	async function log_cmd_used(user, auth, cmd, to) {
		let payload = {
			avatar_url: 'https://cdn.discordapp.com/icons/1060893277525643304/43e8a52fc7a6788bcbd5b3e9d1ebd1e2.webp?size=96',
			username: 'HHL BOT',
			content: '```' + `${user.name} used command: ${auth} to: ${to},\n[📢]Auth: ${cmd}` + '```'
		};

		try {
			const response = await fetch(adminLogWebhookUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			console.log('Message sent successfully.');
		} catch (error) {
			console.error('Error sending message:', error);
		}
	}
	async function discord_chat_log(announcement, player, originalMessage) {
		let payload = {
			avatar_url: 'https://cdn.discordapp.com/icons/1060893277525643304/43e8a52fc7a6788bcbd5b3e9d1ebd1e2.webp?size=96',
			username: 'HHL BOT',
			content: `**${announcement} ${player.name}:** ${originalMessage}\n`
		};

		try {
			const response = await fetch("https://discord.com/api/webhooks/1225045480451346505/b_4rU6kOex9-sZYmJJi8teC17Or1uX82yktxCBH_AmmJlGrMyLRdhKkoeCDpsnfFCFLE", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			// console.log('Message sent successfully.');
		} catch (error) {
			console.error('Error sending message:', error);
		}
	}

	/* FUNCTIONS */


	/* AUXILIARY FUNCTIONS */


	async function sendAnnouncementToDiscord(message) {

		let payload = {
			avatar_url: '',
			username: 'HHL BOT',
			content: message
		};

		try {
			const response = await fetch("https://discord.com/api/webhooks/1225052698538410074/GxzmYkW0SCB0van22buhT-r_Xx28DdOoCSati1gY3TivPlpqucz8Jgf6saQ-wwRaEA5u", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			// console.log('Message sent successfully.');
		} catch (error) {
			console.error('Error sending message:', error);
		}
	}

	function getPlayerRank(player) {
		if (localStorage.getItem(getAuth(player))) {
			var stats;
			localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name, 0, "none"];
			var stato = stats[Ss.WI] * 3 + stats[Ss.DR] + stats[Ss.GL] * 2 + stats[Ss.AS]
				+ stats[Ss.CS] - stats[Ss.LS] * 2 - stats[Ss.OG];
			if (stato > 1000) return '「The Legend of x3」';
			else if (stato > 850) return '「Diamond IV」'
			else if (stato > 700) return '「Diamond III」'
			else if (stato > 560) return '「Diamond II」'
			else if (stato > 460) return '「Diamond I」'
			else if (stato > 380) return '「Platinum III」'
			else if (stato > 320) return '「Platinum II」'
			else if (stato > 260) return '「Platinum I」'
			else if (stato > 200) return '「Gold III」'
			else if (stato > 160) return '「Gold II」'
			else if (stato > 130) return '「Gold I」'
			else if (stato > 90) return '「Silver III」'
			else if (stato > 70) return '「Silver II」'
			else if (stato > 50) return '「Silver I」'
			else if (stato > 30) return '「Bronze III」'
			else if (stato > 20) return '「Bronze II」'
			else if (stato > 10) return '「Bronze I」'
			else return '「No rank」'
		} else {
			stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name, 0, "none"];
			localStorage.setItem(getAuth(player), JSON.stringify(stats));
		}
	}


function discord_scores_log(game, scores, winner, Rposs, Bposs, GK1, GK2, report) {
    const currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentSecond = currentDate.getSeconds();
    currentHour = (currentHour < 10 ? '0' : '') + currentHour;
    currentMinute = (currentMinute < 10 ? '0' : '') + currentMinute;
    currentSecond = (currentSecond < 10 ? '0' : '') + currentSecond;
    const currentDateFormatted = currentDate.toISOString().slice(0, 10);

    const form = new FormData();

    const fields = [
        {
            name: '🔴   **RED TEAM STATS**',
            value: '=====================\n',
            inline: true,
        },
        {
            name: '🔵   **BLUE TEAM STATS**',
            value: '=====================\n',
            inline: true,
        },
    ];

    for (const goal of game.goals) {
        const time = getTime(goal);
        if (goal.assist === "own") {
            fields[(goal.team == 1) ? 1 : 0].value += `\`\`\`${time} 🤡 Owngoal: \n${getPlayerRank(goal.striker)} ${goal.striker.name}\`\`\`\n`;
        } else if (goal.assist !== null) {
            fields[(goal.team == 1) ? 0 : 1].value += `\`\`\`${time} ⚽ Goal: \n${getPlayerRank(goal.striker)} ${goal.striker.name}, 👟 Assist: ${goal.assist.name}\`\`\`\n`;
        } else {
            fields[goal.team == 1 ? 0 : 1].value += `\`\`\`${time} ⚽ Goal: \n${getPlayerRank(goal.striker)} ${goal.striker.name}\`\`\`\n`;
        }
    }

    const gkier = [scores.red === 0 ? GK1 : '', scores.blue === 0 ? GK2 : ''];
    if (gkier[0]) fields[0].value += `\`\`\`🥅 Clean Sheet: ${gkier[0]}\`\`\``;
    if (gkier[1]) fields[1].value += `\`\`\`🥅 Clean Sheet: ${gkier[1]}\`\`\``;

    const params = {
        avatar_url: 'https://cdn.discordapp.com/icons/1060893277525643304/43e8a52fc7a6788bcbd5b3e9d1ebd1e2.webp?size=96',
        username: 'HHL BOT',
        embeds: [
            {
                title: `📝 MATCH REPORT: **${report}**`,
                description: `**${getTime(game.scores)}** ${winner === 1 ? '🏆 **Red Team** ' : 'Red Team '}${winner === 1 ? `**${scores.red}**` : `${scores.red}`} - ${winner === 2 ? `**${scores.blue}**` : `${scores.blue}`}${winner === 2 ? ' **Blue Team** 🏆' : ' Blue Team'}\n\`\`\`c\nPossession: ${Math.floor(Rposs * 100)}% - ${Math.floor(Bposs * 100)}%\`\`\``,
                color: 0x000000,
                fields: fields,
                footer: {
                    text: `Recording: ${currentDateFormatted}_${currentHour}:${currentMinute}:${currentSecond}`,
                },
            }
        ],
    };

    form.append("payload_json", JSON.stringify(params));

    // Generate the file name and create a stream for the file content
    const replayFileName = `HBReplay-${currentDateFormatted}_${currentHour}:${currentMinute}:${currentSecond}.hbr2`;
    const fileContent = room.stopRecording();  // Assuming this returns the recording data
    fs.writeFileSync(replayFileName, fileContent); // Save the file to disk

    // Append the file to the FormData
    form.append('file', fs.createReadStream(replayFileName), replayFileName);

    // Send the request using node-fetch
    fetch("https://discord.com/api/webhooks/1225045480451346505/b_4rU6kOex9-sZYmJJi8teC17Or1uX82yktxCBH_AmmJlGrMyLRdhKkoeCDpsnfFCFLE", {
        method: 'POST',
        body: form,
        headers: form.getHeaders(), // Important: add the correct headers
    }).then(response => {
        if (response.ok) {
            console.log('Scores sent successfully');
        } else {
            console.error('Failed to send webhook');
        }
    }).catch(error => {
        console.error('Error sending webhook:', error);
    });
}




	function getRandomInt(max) { // returns a random number from 0 to max-1
		return Math.floor(Math.random() * Math.floor(max));
	}


	function getTime(scores) { // returns the current time of the game
		return "[" + Math.floor(Math.floor(scores.time / 60) / 10).toString() + Math.floor(Math.floor(scores.time / 60) % 10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) / 10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) % 10).toString() + "]"
	}


	function pointDistance(p1, p2) {
		var d1 = p1.x - p2.x;
		var d2 = p1.y - p2.y;
		return Math.sqrt(d1 * d1 + d2 * d2);
	}


	/* BUTTONS */


	function topBtn() {
		if (teamS.length == 0) {
			return;
		}
		else {
			if (teamR.length == teamB.length) {
				if (teamS.length > 1) {
					room.setPlayerTeam(teamS[0].id, Team.RED);
					room.setPlayerTeam(teamS[1].id, Team.BLUE);
				}
				return;
			}
			else if (teamR.length < teamB.length) {
				room.setPlayerTeam(teamS[0].id, Team.RED);
			}
			else {
				room.setPlayerTeam(teamS[0].id, Team.BLUE);
			}
		}
	}


	function randomBtn() {
		if (teamS.length == 0) {
			return;
		}
		else {
			if (teamR.length == teamB.length) {
				if (teamS.length > 1) {
					var r = getRandomInt(teamS.length);
					room.setPlayerTeam(teamS[r].id, Team.RED);
					teamS = teamS.filter((spec) => spec.id != teamS[r].id);
					room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
				}
				return;
			}
			else if (teamR.length < teamB.length) {
				room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
			}
			else {
				room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
			}
		}
	}


	function blueToSpecBtn() {
		resettingTeams = true;
		setTimeout(() => { resettingTeams = false; }, 100);
		for (var i = 0; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
		}
	}


	function redToSpecBtn() {
		resettingTeams = true;
		setTimeout(() => { resettingTeams = false; }, 100);
		for (var i = 0; i < teamR.length; i++) {
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
	}


	function resetBtn() {
		resettingTeams = true;
		setTimeout(() => { resettingTeams = false; }, 100);
		if (teamR.length <= teamB.length) {
			for (var i = 0; i < teamR.length; i++) {
				room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
				room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
			}
			for (var i = teamR.length; i < teamB.length; i++) {
				room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
			}
		}
		else {
			for (var i = 0; i < teamB.length; i++) {
				room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
				room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
			}
			for (var i = teamB.length; i < teamR.length; i++) {
				room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
			}
		}
	}




	function blueToRedBtn() {
		resettingTeams = true;
		setTimeout(() => { resettingTeams = false; }, 100);
		for (var i = 0; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[i].id, Team.RED);
		}
	}


	/* GAME FUNCTIONS */


	function checkTime() {
		const scores = room.getScores();
		game.scores = scores;
		if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
			if (scores.red != scores.blue) {
				if (checkTimeVariable == false) {
					checkTimeVariable = true;
					setTimeout(() => { checkTimeVariable = false; }, 3000);
					scores.red > scores.blue ? endGame(Team.RED, "Win") : endGame(Team.BLUE, "Win");
					setTimeout(() => { room.stopGame(); }, 2000);
				}
				return;
			}
			goldenGoal = true;
			room.sendChat("⏱️ Let's go, you wooden legs! The guys want to play");
		}
		if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
			if (checkTimeVariable == false) {
				checkTimeVariable = true;
				setTimeout(() => { checkTimeVariable = false; }, 10);
				room.sendChat("⌛ Leaving ends..");
			}
		}
		if (Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 && players.length > 2) {
			if (checkTimeVariable == false) {
				checkTimeVariable = true;
				setTimeout(() => { checkTimeVariable = false; }, 10);
				endGame(Team.SPECTATORS, "Draw");
				room.stopGame();
				goldenGoal = false;
			}
		}
	}


	function endGame(winner, report) { // handles the end of a game : no stopGame function inside
		players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
		const scores = room.getScores();
		game.scores = scores;
		Rposs = Rposs / (Rposs + Bposs);
		Bposs = 1 - Rposs;
		lastWinner = winner;
		endGameVariable = true;
		if (winner == Team.RED) {
			streak++;
			room.sendAnnouncement("🏆 Red team won! [" + scores.red + " - " + scores.blue + "] | Winning streak: " + streak + " 🏆", null, 0xFDC43A);
		}
		else if (winner == Team.BLUE) {
			streak = 1;
			room.sendAnnouncement("🏆 Blue team won! [" + scores.blue + " - " + scores.red + "] | Winning streak: " + streak + " 🏆", null, 0xFDC43A);
		}
		else {
			streak = 0;
			room.sendAnnouncement("💤 Timeout reached");
		}
		room.sendAnnouncement("📊 Ball possession: 🔴 " + (Rposs * 100).toPrecision(3).toString() + "% | " + (Bposs * 100).toPrecision(3).toString() + "% 🔵", null, 0xFDC43A);
		scores.red == 0 ? (scores.blue == 0 ? room.sendAnnouncement("🥅 " + GKList[0].name + " it's a man? no, it's a barrier! " + GKList[1].name + " did not score. ", null, 0xFDC43A) : room.sendAnnouncement("🥅 it's a man? no, it's a barrier! " + GKList[1].name + " didn't concede a goal ", null, 0xFDC43A)) : scores.blue == 0 ? room.sendAnnouncement("🥅 it's a man? no, it's a barrier! " + GKList[0].name + " didn't concede a goal ", null, 0xFDC43A) : null;
		updateStats();
		discord_scores_log(game, scores, winner, Rposs, Bposs, GKList[0].name, GKList[1].name, report);
		room.sendAnnouncement("The match was recorded and sent on our Discord. ID: " + `${getDate()}`, null, Cor.Amarelo, Negrito);


	}


	function quickRestart() {
		room.stopGame();
		setTimeout(() => { room.startGame(); }, 2000);
	}


	function resumeGame() {
		setTimeout(() => { room.startGame(); }, 2000);
		setTimeout(() => { room.pauseGame(false); }, 1000);
	}


	function activateChooseMode() {
		inChooseMode = true;
		slowMode = 2;
		room.sendChat("🙋‍♂️ Recruitment mode started!");
	}


	function deactivateChooseMode() {
		inChooseMode = false;
		clearTimeout(timeOutCap);
		if (slowMode != 0) {
			slowMode = 0;
			room.sendChat("🙋‍♂️ Recruitment mode has ended.");
		}
		redCaptainChoice = "";
		blueCaptainChoice = "";
	}


	function loadMap(map, scoreLim, timeLim) {
		if (map == aloneMap) {
			room.setCustomStadium(aloneMap);
		}
		else if (map == classicMap) {
			(classicMap != '') ? room.setCustomStadium(classicMap) : room.setDefaultStadium("Classic");
		}
		else if (map == bigMap) {
			(bigMap != '.') ? room.setCustomStadium(bigMap) : room.setDefaultStadium("Big");
		}
		else {
			room.setCustomStadium(map);
		}
		room.setScoreLimit(scoreLim);
		room.setTimeLimit(timeLim);
	}


	/* PLAYER FUNCTIONS */


	function clonekick(player) {
		players = room.getPlayerList();
		for (i = 0; i < players.length - 1; i++) {
			if (player.name == players[i].name) {
				room.kickPlayer(player.id, "❌A Player With This Name Already Exists", false);
			}
		}
	}


	function updateTeams() { // update the players' list and all the teams' list
		players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
		teamR = players.filter(p => p.team === Team.RED);
		teamB = players.filter(p => p.team === Team.BLUE);
		teamS = players.filter(p => p.team === Team.SPECTATORS);
	}


	function handleInactivity() { // handles inactivity : players will be kicked after afkLimit
		if (countAFK && (teamR.length + teamB.length) > 1) {
			for (var i = 0; i < teamR.length; i++) {
				setActivity(teamR[i], getActivity(teamR[i]) + 1);
			}
			for (var i = 0; i < teamB.length; i++) {
				setActivity(teamB[i], getActivity(teamB[i]) + 1);
			}
		}
		for (var i = 0; i < extendedP.length; i++) {
			if (extendedP[i][eP.ACT] == 60 * (2 / 3 * afkLimit)) {
				room.sendAnnouncement("[PV] ⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", if you don't move in the next " + Math.floor(afkLimit / 3) + " seconds, you will be kicked!", extendedP[i][eP.ID]);
			}
			if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
				extendedP[i][eP.ACT] = 0;
				if (room.getScores().time <= afkLimit - 0.5) {
					setTimeout(() => { !inChooseMode ? quickRestart() : room.stopGame(); }, 10);
				}
				room.kickPlayer(extendedP[i][eP.ID], "AFK", false);
			}
		}
	}


	function getAuth(player) {
		return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
	}


	function getAFK(player) {
		return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
	}


	function setAFK(player, value) {
		extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
	}


	function getActivity(player) {
		return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
	}


	function setActivity(player, value) {
		extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
	}


	function getGK(player) {
		return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
	}


	function setGK(player, value) {
		extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
	}


	function getMute(player) {
		return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
	}


	function setMute(player, value) {
		extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
	}


	/* BALANCE & CHOOSE FUNCTIONS */


	function updateRoleOnPlayerIn() {
		updateTeams();
		if (inChooseMode) {
			if (players.length == 6) {
				loadMap(bigMap, scoreLimitBig, timeLimitBig);
			}
			getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
		}
		balanceTeams();
	}


	function updateRoleOnPlayerOut() {
		updateTeams();
		if (room.getScores() != null) {
			var scores = room.getScores();
			if (players.length >= 2 * maxTeamSize && scores.time >= (5 / 6) * game.scores.timeLimit && teamR.length != teamB.length) {
				if (teamR.length < teamB.length) {
					if (scores.blue - scores.red == 2) {
						endGame(Team.BLUE, "Ragequit");
						room.sendChat("🤖 Ragequit detected. The game is over");
						setTimeout(() => { room.stopGame(); }, 100);
						return;
					}
				}
				else {
					if (scores.red - scores.blue == 2) {
						endGame(Team.RED, "Ragequit");
						room.sendChat("🤖 Ragequit detected. The game is over");
						setTimeout(() => { room.stopGame(); }, 100);
						return;
					}
				}
			}
		}
		if (inChooseMode) {
			if (players.length == 5) {
				loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
			}
			if (teamR.length == 0 || teamB.length == 0) {
				teamR.length == 0 ? room.setPlayerTeam(teamS[0].id, Team.RED) : room.setPlayerTeam(teamS[0].id, Team.BLUE);
				return;
			}
			if (Math.abs(teamR.length - teamB.length) == teamS.length) {
				room.sendChat("🤖 No choices let me handle this situation");
				deactivateChooseMode();
				resumeGame();
				var b = teamS.length;
				if (teamR.length > teamB.length) {
					for (var i = 0; i < b; i++) {
						setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 5 * i);
					}
				}
				else {
					for (var i = 0; i < b; i++) {
						setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 5 * i);
					}
				}
				return;
			}
			if (streak == 0 && room.getScores() == null) {
				if (Math.abs(teamR.length - teamB.length) == 2) { // if someone left a team has 2 more players than the other one, put the last chosen guy back in his place so it's fair
					room.sendChat("🤖 Balancing teams...");
					teamR.length > teamB.length ? room.setPlayerTeam(teamR[teamR.length - 1].id, Team.SPECTATORS) : room.setPlayerTeam(teamB[teamB.length - 1].id, Team.SPECTATORS);
				}
			}
			if (teamR.length == teamB.length && teamS.length < 2) {
				deactivateChooseMode();
				resumeGame();
				return;
			}
			capLeft ? choosePlayer() : getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
		}
		balanceTeams();
	}


	function balanceTeams() {
		if (!inChooseMode) {
			if (players.length == 1 && teamR.length == 0) {
				quickRestart();
				loadMap(aloneMap, 0, 0);
				room.setPlayerTeam(players[0].id, Team.RED);
			}
			else if (Math.abs(teamR.length - teamB.length) == teamS.length && teamS.length > 0) {
				const n = Math.abs(teamR.length - teamB.length);
				if (players.length == 2) {
					quickRestart();
					loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
				}
				if (teamR.length > teamB.length) {
					for (var i = 0; i < n; i++) {
						room.setPlayerTeam(teamS[i].id, Team.BLUE);
					}
				}
				else {
					for (var i = 0; i < n; i++) {
						room.setPlayerTeam(teamS[i].id, Team.RED);
					}
				}
			}
			else if (Math.abs(teamR.length - teamB.length) > teamS.length) {
				const n = Math.abs(teamR.length - teamB.length);
				if (players.length == 1) {
					quickRestart();
					loadMap(aloneMap, 0, 0);
					room.setPlayerTeam(players[0].id, Team.RED);
					return;
				}
				else if (players.length == 5) {
					quickRestart();
					loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
				}
				if (players.length == maxTeamSize * 2 - 1) {
					allReds = [];
					allBlues = [];
				}
				if (teamR.length > teamB.length) {
					for (var i = 0; i < n; i++) {
						room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
					}
				}
				else {
					for (var i = 0; i < n; i++) {
						room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
					}
				}
			}
			else if (Math.abs(teamR.length - teamB.length) < teamS.length && teamR.length != teamB.length) {
				room.pauseGame(true);
				activateChooseMode();
				choosePlayer();
			}
			else if (teamS.length >= 2 && teamR.length == teamB.length && teamR.length < maxTeamSize) {
				if (teamR.length == 2) {
					quickRestart();
					loadMap(bigMap, scoreLimitBig, timeLimitBig);
				}
				topBtn();
			}
		}
	}


	function choosePlayer() {
		clearTimeout(timeOutCap);
		if (teamR.length <= teamB.length && teamR.length != 0) {
			room.sendChat("[PV] To choose a player, enter his number from the provided list or use'top', 'random' or 'bottom'.", teamR[0].id);
			timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Hurry up @" + player.name + ", you have only " + Number.parseInt(chooseTime / 2) + " seconds left to choose!", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "You didn't choose in time!", false); }, chooseTime * 500, teamR[0]); }, chooseTime * 1000, teamR[0]);
		}
		else if (teamB.length < teamR.length && teamB.length != 0) {
			room.sendChat("[PV] To choose a player, enter his number from the provided list or use'top', 'random' or 'bottom'.", teamB[0].id);
			timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Hurry up @" + player.name + ", you have only " + Number.parseInt(chooseTime / 2) + " seconds left to choose!", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "You didn't choose in time!", false); }, chooseTime * 500, teamB[0]); }, chooseTime * 1000, teamB[0]);
		}
		if (teamR.length != 0 && teamB.length != 0) getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
	}


	function getSpecList(player) {
		var cstm = "[PV] Players: ";
		for (var i = 0; i < teamS.length; i++) {
			if (140 - cstm.length < (teamS[i].name + "[" + (i + 1) + "], ").length) {
				room.sendChat(cstm, player.id);
				cstm = "... ";
			}
			cstm += teamS[i].name + "[" + (i + 1) + "], ";
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendChat(cstm, player.id);
	}


	/* STATS FUNCTIONS */


	function getLastTouchOfTheBall() {
		const ballPosition = room.getBallPosition();
		updateTeams();
		for (var i = 0; i < players.length; i++) {
			if (players[i].position != null) {
				var distanceToBall = pointDistance(players[i].position, ballPosition);
				if (distanceToBall < triggerDistance) {
					!activePlay ? activePlay = true : null;
					if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
						lastPlayersTouched[1] = lastPlayersTouched[0];
						lastPlayersTouched[0] = players[i];
					}
					lastTeamTouched = players[i].team;
				}
			}
		}
	}


	function getStats() { // gives possession, ball speed and GK of each team
		if (activePlay) {
			updateTeams();
			lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
			var ballPosition = room.getBallPosition();
			point[1] = point[0];
			point[0] = ballPosition;
			ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
			var k = [-1, Infinity];
			for (var i = 0; i < teamR.length; i++) {
				if (teamR[i].position.x < k[1]) {
					k[0] = teamR[i];
					k[1] = teamR[i].position.x;
				}
			}
			k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
			k = [-1, -Infinity];
			for (var i = 0; i < teamB.length; i++) {
				if (teamB[i].position.x > k[1]) {
					k[0] = teamB[i];
					k[1] = teamB[i].position.x;
				}
			}
			k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
			findGK();
		}
	}


	function updateStats() {
		if (players.length >= 2 * maxTeamSize && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.scoreLimit || game.scores.blue == game.scores.scoreLimit) && allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize) {
			var stats;
			for (var i = 0; i < allReds.length; i++) {
				localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allReds[i].name, 0, "none"];
				stats[Ss.GA]++;
				lastWinner == Team.RED ? stats[Ss.WI]++ : lastWinner == Team.BLUE ? stats[Ss.LS]++ : stats[Ss.DR]++;
				stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
				localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
			}
			for (var i = 0; i < allBlues.length; i++) {
				localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allBlues[i].name, 0, "none"];
				stats[Ss.GA]++;
				lastWinner == Team.BLUE ? stats[Ss.WI]++ : lastWinner == Team.RED ? stats[Ss.LS]++ : stats[Ss.DR]++;
				stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
				localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
			}
			for (var i = 0; i < game.goals.length; i++) {
				if (game.goals[i].striker != null) {
					if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1 && game.goals[i].assist == null) {
						stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
						stats[Ss.GL]++;
						localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
					}
					else if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1 && game.goals[i].assist != null) {
						stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
						stats[Ss.OG]++;
						localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
					}
				}
				if (game.goals[i].assist != null) {
					if ((allBlues.concat(allReds)).findIndex((player) => player.name == game.goals[i].assist.name) != -1) {
						stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].assist)));
						stats[Ss.AS]++;
						localStorage.setItem(getAuth(game.goals[i].assist), JSON.stringify(stats));
					}
				}
			}
			if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
				stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
				stats[Ss.GK]++;
				game.scores.blue == 0 ? stats[Ss.CS]++ : null;
				stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
				localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
			}
			if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
				stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
				stats[Ss.GK]++;
				game.scores.red == 0 ? stats[Ss.CS]++ : null;
				stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
				localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
			}
		}
	}


	function findGK() {
		var tab = [[-1, ""], [-1, ""]];
		for (var i = 0; i < extendedP.length; i++) {
			if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
				if (tab[0][0] < extendedP[i][eP.GK]) {
					tab[0][0] = extendedP[i][eP.GK];
					tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
				}
			}
			else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
				if (tab[1][0] < extendedP[i][eP.GK]) {
					tab[1][0] = extendedP[i][eP.GK];
					tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
				}
			}
		}
		GKList = [tab[0][1], tab[1][1]];
	}



	/* EVENTS */


	var PlayerAuth = {};
	var PlayerConn = {};


	/* PLAYER MOVEMENT */


	room.onPlayerJoin = function (player) {

		for (var i in PlayerAuth) {
			//checking by using auth
			if (PlayerAuth[i].auth == player.auth) {
				room.kickPlayer(PlayerAuth[i].id, "❌Tab detection is blocked. Don't! Your tab in the room: " + player.name, false);
			}
		}
		PlayerAuth[player.auth] = player;
		for (var i in PlayerConn) {
			//checking by using conn
			if (PlayerConn[i].conn == player.conn) {
				room.kickPlayer(PlayerConn[i].id, "❌Tab detection is blocked. Don't! Your tab in the room: " + player.name, false);
			}
		}
		extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
		updateRoleOnPlayerIn();
		sendAnnouncementToDiscord(
			"```" + "[📝] Player info, conn, auth and data ⏰" + "\n" +


			"The player " + player.name + " came into the room." + "\n" +
			"conn: " + player.conn + " 🌎" +
			"\n" + "auth: " + player.auth + " 💻" + "\n" +
			"Date: " + `${getDateInfo()}` + "```");
		clonekick(player);//kicks the second player that he has same name with a diffrent player
		//room.sendChat("👋🏼 And there, " + player.name + "! Welcome to HCA Futsal ! ", player.id, welcomeColor, 'bold',);
		//room.sendAnnouncement("👋🏼And there, " , player.id , "! Welcome to HCA Futsal ! ", 0x00BFF , "bold", 1);
		room.sendAnnouncement("👋🏼 Hi there, " + player.name + "!", null, 0x5EE7FF, "bold");
		room.sendAnnouncement("                                        💬 Discord Link: ➡ https://discord.gg/zWQM4kd7Yd ⬅", null, 0xF6FF43, 'bold');
	}


	room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
		if (changedPlayer.id == 0) {
			room.setPlayerTeam(0, Team.SPECTATORS);
			return;
		}
		if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
			room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
			room.sendAnnouncement(changedPlayer.name + " it's AFK! 😴", Cor.Laranja, bold);
			return;
		}
		updateTeams();
		if (room.getScores() != null) {
			var scores = room.getScores();
			if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3 / 4) * scores.timeLimit && Math.abs(scores.blue - scores.red) < 2) {
				(changedPlayer.team == Team.RED) ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);
			}
		}
		if (changedPlayer.team == Team.SPECTATORS) {
			setActivity(changedPlayer, 0);
		}
		if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
			if (Math.abs(teamR.length - teamB.length) == teamS.length) {
				deactivateChooseMode();
				resumeGame();
				var b = teamS.length;
				if (teamR.length > teamB.length) {
					for (var i = 0; i < b; i++) {
						setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 200 * i);
					}
				}
				else {
					for (var i = 0; i < b; i++) {
						setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 200 * i);
					}
				}
				return;
			}
			else if ((teamR.length == maxTeamSize && teamB.length == maxTeamSize) || (teamR.length == teamB.length && teamS.length < 2)) {
				deactivateChooseMode();
				resumeGame();
			}
			else if (teamR.length <= teamB.length && redCaptainChoice != "") { // choice remembered
				redCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.RED) : redCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
				return;
			}
			else if (teamB.length < teamR.length && blueCaptainChoice != "") {
				blueCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.BLUE) : blueCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
				return;
			}
			else {
				choosePlayer();
			}
		}
	}


	room.onPlayerLeave = function (player) {
		if (teamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && teamR.length <= teamB.length) {
			choosePlayer();
			capLeft = true; setTimeout(() => { capLeft = false; }, 10);
		}
		if (teamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && teamB.length < teamR.length) {
			choosePlayer();
			capLeft = true; setTimeout(() => { capLeft = false; }, 10);
		}
		setActivity(player, 0);
		updateRoleOnPlayerOut();
	}


	room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
		ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
	}


	/* PLAYER ACTIVITY */


	let
		palavras = ["fdp", "porra", "arrombado"], //swearing filter
		regex = new RegExp(palavras.join("|"), 'gi');


	var emojis = [
		'😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '👂', '👀', '👃', '👅', '👄', '👍', '👎', '👌', '👊', '✊', '✌', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '☝', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🙆', '🙅', '💁', '🙋', '💆', '💇', '💅', '👰', '🙎', '🙍', '🙇', '🎩', '👑', '💄', '💛', '💙', '💜', '💚', '❤', '💔', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼', '🌐', '🌞', '🌝', '🌚', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌜', '🌛', '🌙', '🌍', '🌎', '🌏', '🌋', '🌌', '🌠', '⭐', '☀', '⛅', '☁', '⚡', '☔', '❄', '⛄', '🌀', '🌁', '🌈', '🌊', '🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '💰', '💴', '💵', '💷', '💶', '💳', '💸', '📛', '🔬', '🔭', '📰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '👾', '🎮', '🃏', '🎴', '🀄', '🎲', '🎯', '🏈', '🏀', '⚽', '⚾', '🎾', '🎱', '🏉', '🎳', '⛳', '🚵', '🚴', '🏁', '🏇', '🏆', '🎿', '🏂', '🏊', '🏄', '🎣', '☕', '🍵', '🍶', '🍼', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅'
	];

	function randomColor() {
		var letters = '6789ABCDEF'.split('');
		var color = '0x';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * letters.length)];
		}
		return color;
	}
	var celebo = false;
	var celebPlayer = 1;
	var celebTeam = 1;
	var celebrat = "none";
	var celebrationCounter = 0;
	const celebrationDuration = 120; // 2 seconds * 60 ticks per second
	const colorChangeInterval = 1;   // Change color every 2 ticks (120ms)

	function celebrate(player, celeb) {

		switch (celeb) {
			case 'none':
				if (celebrationCounter === 0) {
					room.setPlayerAvatar(player, "🎯");
					setTimeout(() => {
						room.setPlayerAvatar(player, "⚽");
						setTimeout(() => {
							room.setPlayerAvatar(player, null);
							celebrationCounter = 0;
							celebo = false;
						}, 3000);
					}, 1200);
					celebrationCounter = celebrationDuration; // Skip to end of duration
				}
				break;

			case 'small':
			case 'big':
			case 'gone':
			case 'rgb':
			case 'nigga':
			case 'emoji':
			case 'lag':
				if (celebrationCounter === 0 && celeb === 'nigga') {
					room.setTeamColors(celebTeam, 0.00, 0x0000000, [0x000000, 0x000000, 0x000000]);
				}
				else if (celebrationCounter % colorChangeInterval === 0) {
					switch (celeb) {
						case 'small':
							room.setPlayerDiscProperties(player, { radius: 10 });
							break;
						case 'big':
							room.setPlayerDiscProperties(player, { radius: 60 });
							break;
						case 'gone':
							room.setPlayerDiscProperties(player, { radius: 0 });
							break;
						case 'rgb':
							room.setTeamColors(celebTeam, 0.00, 0x0000000, [randomColor()]);
							break;
						case 'emoji':
							room.setPlayerAvatar(player, emojis[Math.floor(Math.random() * emojis.length)]);
							break;
						case 'lag':
							room.setPlayerDiscProperties(player, {
								xspeed: Math.random() * (1.5 - (-1.5)) - 1.5,
								yspeed: Math.random() * (1.5 - (-1.5)) - 1.5
							});
							break;
					}
				}
				celebrationCounter++;

				if (celebrationCounter >= celebrationDuration) {
					if (celeb === 'rgb' || celeb === 'nigga') {
						room.setTeamColors(celebTeam, celebTeam == 1 ? color_team1_a : color_team2_a, celebTeam == 1 ? color_team1_t : color_team2_t, celebTeam == 1 ? color_team1 : color_team2);
					} else if (celeb === 'emoji') {
						room.setPlayerAvatar(player, null);
					} else if (celeb === 'lag') {
						room.setPlayerDiscProperties(player, { xspeed: 0, yspeed: 0 });
					} else if (celeb === 'small' || celeb === 'big' || celeb === 'gone') {
						room.setPlayerDiscProperties(player, { radius: 15 });
					}
					celebo = false;
					celebrationCounter = 0;
				}
				break;

			default:
				console.log("Unknown celebration type:", celeb);
				celebo = false;
				break;
		}
	}

	room.onPlayerChat = function (player, message) {
		var originalMessage = message;

		//if (SlowMode.includes(player.id) == true) {
		//	room.sendAnnouncement("[💬] Slow Mode Is Active. You Can Only Send 1 Message Every 3 Seconds. ⏱", player.id, 0x00FF00, "bold", 2);

		//	return false;

		//}
		// if (player.admin == false && SlowMode.includes(player.id) == false) {
		//	SlowMode.push(player.id);


		//	setTimeout(function () {
				// SlowMode.splice(SlowMode.indexOf(player.id), 1);
//			}, slowModeTime * 1000);

//		}



		if (message.length > 1 && message[0].toLowerCase() == 't' && message[1] == ' ') {
			if (player.team != 0) {
				room.getPlayerList().forEach((element) => { if (element.team == player.team) room.sendAnnouncement("[TEAM CHAT] " + player.name + ": " + message.substr(2), element.id, (player.team == 1 ? 16725591 : 3261685), "bold", 0) })
				return false
			}
			else {
				room.getPlayerList().forEach((element) => { if (element.team == player.team) room.sendAnnouncement("[TEAM CHAT] " + player.name + ": " + message.substr(2), element.id, 0xF0F0F0, "bold", 0) })
				return false;
			}
		}


		if (message.match(regex)) {
			room.sendAnnouncement("Without cursing.", player.id);
			return false;
		}
		msg = message;
		originalMessage = message;
		message = message.split(/ +/);
		player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
		if (["!help"].includes(message[0].toLowerCase())) {
			room.sendChat("[PV] Player commands: !me, !showme, !celeb, !games, !wins, !goals, !assists, !cs, !afks, !mutes, !bans.", player.id);
			player.admin ? room.sendChat("[PV] Admin : !lock, !unclock, !mute <duration = 3> #<id>, !unmute all/#<id>, !clearbans <number = all>, !slow <duration>, !endslow", player.id) : null;
		}


		if (message == '!limparchat' && player.admin) {
			setTimeout(_ => { room.sendAnnouncement(`${player.name} cleared the chat`, null, 0xFFFFFF, 'italic') }, 1000)
		}
		if (message == '!limparchat' && player.admin) {
			i = 50
			while (i >= 0) {
				room.sendAnnouncement("", null)
				i--
			}
		}


		else if (["!afk"].includes(message[0].toLowerCase())) {
			if (players.length != 1 && player.team != Team.SPECTATORS) {
				if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
					room.setPlayerTeam(player.id, Team.SPECTATORS);
				}
				else {
					room.sendChat("❌ You cannot go AFK in the middle of a match!", player.id);
					return false;
				}
			}
			else if (players.length == 1 && !getAFK(player)) {
				room.setPlayerTeam(player.id, Team.SPECTATORS);
			}
			setAFK(player, !getAFK(player));
			room.sendAnnouncement(player.name + (getAFK(player) ? " it's AFK! 😴" : " is no longer AFK!"), null, (getAFK(player) ? 0xFF5E3B :
				0x26DF17));
			getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
		}


		else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
			var cstm = "[PV] List of AFK players: ";
			for (var i = 0; i < extendedP.length; i++) {
				if (room.getPlayer(extendedP[i][eP.ID]) != null && getAFK(room.getPlayer(extendedP[i][eP.ID]))) {
					if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length) {
						room.sendChat(cstm, player.id);
						cstm = "... ";
					}
					cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
				}
			}
			if (cstm == "[PV] List of AFK players: ") {
				room.sendChat("[PV] There is no one on the AFK list!", player.id);
				return false;
			}
			cstm = cstm.substring(0, cstm.length - 2);
			cstm += ".";
			room.sendChat(cstm, player.id);
		}

		if (["!ranks"].includes(message[0].toLowerCase())) {
			room.sendAnnouncement("_______________________________________", player.id, Cor.Amarelo, "bold");
			room.sendAnnouncement("Ranks per points:", player.id, Cor.Amarelo, "bold");
			room.sendAnnouncement("Bronze I - [🪙:10] | Bronze II - [🪙:20] | Bronze III - [🪙:30]", player.id, 0xbc5e00, "normal");
			room.sendAnnouncement("Silver I - [🪙:50] | Silver II - [🪙:70] | Silver III - [🪙:90]", player.id, 0xA2A2A2, "normal");
			room.sendAnnouncement("Gold I - [🪙:130] | Gold II - [🪙:160] | Gold III - [🪙:200]", player.id, 0xEAC274, "normal");
			room.sendAnnouncement("Type '!ranks2' to see more", player.id, Cor.Amarelo, "bold");
			room.sendAnnouncement("_______________________________________", player.id, Cor.Amarelo, "bold");
		}
		if (["!ranks2"].includes(message[0].toLowerCase())) {
			room.sendAnnouncement("_______________________________________", player.id, Cor.Amarelo, "bold");
			room.sendAnnouncement("Ranks per points (2 page):", player.id, Cor.Amarelo, "bold");
			room.sendAnnouncement("Platinum I - [🪙:260] | Platinum II - [🪙:320] | Platinum III - [🪙:380]", player.id, 0x62AEE3, "normal");
			room.sendAnnouncement("Diamond I - [🪙:460] | Diamond II - [🪙:560] | Diamond III - [🪙:700]", player.id, 0x7cd3fa, "normal");
			room.sendAnnouncement("Diamond VI - [🪙:850]", player.id, 0x7cd3fa, "normal");
			room.sendAnnouncement("Last rank: Legend of x3 - [🪙:1000]", player.id, 0xf77104, "bold");
			room.sendAnnouncement("_______________________________________", player.id, Cor.Amarelo, "bold");
		}

		else if (["!rank"].includes(message[0].toLowerCase())) {
			var stats;
			localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name, 0, "none"];
			room.sendAnnouncement("[🏆] Your stats: 🎮 Games: " + stats[Ss.GA] + ", ✅ Wins: " + stats[Ss.WI] + ", ⭕ Ties: " + stats[Ss.DR] + ", ❌ Defeats: " + stats[Ss.LS] + ", Percentage of wins: " + stats[Ss.WR] + "%, ⚽️ Goals: " + stats[Ss.GL] + ", 👟 Assists: " + stats[Ss.AS] + ", 🤚 GK: " + stats[Ss.GK] + ", 🤚 CS: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%" + " 🤡 OG: " + stats[Ss.OG], player.id, 0x73EC59, "bold");
		}


		else if (["!me"].includes(message[0].toLowerCase())) {
			var stats;
			localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name, 0, "none"];
			room.sendAnnouncement("[🏆] Your stats: 🎮 Games: " + stats[Ss.GA] + ", ✅ Wins: " + stats[Ss.WI] + ", ⭕ Ties: " + stats[Ss.DR] + ", ❌ Defeats: " + stats[Ss.LS] + ", Percentage of wins: " + stats[Ss.WR] + "%, ⚽️ Goals: " + stats[Ss.GL] + ", 👟 Assists: " + stats[Ss.AS] + ", 🤚 GK: " + stats[Ss.GK] + ", 🤚 CS: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%" + " 🤡 OG: " + stats[Ss.OG], player.id, 0x73EC59, "bold");
		}


		else if (["!showme"].includes(message[0].toLowerCase())) {
			var stats;
			localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name, 0, "none"];
			room.sendAnnouncement("[🏆] Stats of " + player.name + ": 🎮 Games: " + stats[Ss.GA] + ", ✅ Wins: " + stats[Ss.WI] + ", ⭕ Ties: " + stats[Ss.DR] + ", ❌ Defeats: " + stats[Ss.LS] + ", Percentage of wins: " + stats[Ss.WR] + "%, ⚽️ Goals: " + stats[Ss.GL] + ", 👟 Assists: " + stats[Ss.AS] + ", 🤚 GK: " + stats[Ss.GK] + ", 🤚 CS: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%" + " 🤡 OG: " + stats[Ss.OG], null, 0x73EC59, "bold");
		}


		else if (["!games"].includes(message[0].toLowerCase())) { // mostra o ranking de partidas jogadas
			var tableau = [];
			try {
				Object.keys(localStorage).forEach(function (key) {
					if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
						includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); }
				});
			}
			catch {


			}
			if (tableau.length < 5) {
				room.sendAnnouncement("[PV] Not enough games have been played yet.", player.id, 0xFF0000);
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendAnnouncement("[🏆] 🎮 Matches Played> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " +
				tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " +
				tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);
			return false;
		}


		else if (["!wins"].includes(message[0].toLowerCase())) { // mostra o ranking de vitórias jogadas
			var tableau = [];
			try {
				Object.keys(localStorage).forEach(function (key) {
					if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
						includes(key)) {
						tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI]
						)]);
					}
				});
			}
			catch {


			}
			if (tableau.length < 5) {
				room.sendAnnouncement("[PV] Not enough games played yet.", player.id, 0x73EC59);
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendAnnouncement("[🏆] ✅ Wins> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau
			[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);


			return false;
		}


		else if (["!goals"].includes(message[0].toLowerCase())) {
			var tableau = [];
			try {
				Object.keys(localStorage).forEach(function (key) {
					if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
						includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); }
				});
			}
			catch {


			}
			if (tableau.length < 5) {
				room.sendAnnouncement("[PV] Not enough games have been played yet.", player.id, 0x73EC59);
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendAnnouncement("[🏆] ⚽️ Goals> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1]
			[1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4]
				[0] + ": " + tableau[4][1], player.id, 0x73EC59);
			return false;
		}


		else if (["!assists"].includes(message[0].toLowerCase())) { // mostra o ranking de assistencias
			var tableau = [];
			try {
				Object.keys(localStorage).forEach(function (key) {
					if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
						includes(key)) {
						tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS]
						)]);
					}
				});
			}
			catch {


			}
			if (tableau.length < 5) {
				room.sendAnnouncement("[PV] Not enough games have been played yet.", player.id);
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendAnnouncement("[🏆] 👟 Assists> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " +
				tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " +
				tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);
			return false;
		}

		else if (["!owns"].includes(message[0].toLowerCase())) { // mostra o ranking de assistencias
			var tableau = [];
			try {
				Object.keys(localStorage).forEach(function (key) {
					if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
						includes(key)) {
						tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.OG]
						)]);
					}
				});
			}
			catch {


			}
			if (tableau.length < 5) {
				room.sendAnnouncement("[PV] Not enough games have been played yet.", player.id);
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendAnnouncement("[🏆] 👟 Assists> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " +
				tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " +
				tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);
			return false;
		}

		else if (["!cs"].includes(message[0].toLowerCase())) { // mostra o ranking de defesas [GK]
			var tableau = [];
			try {
				Object.keys(localStorage).forEach(function (key) {
					if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
						includes(key)) {
						tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS]
						)]);
					}
				});
			}
			catch {


			}
			if (tableau.length < 5) {
				room.sendAnnouncement("[PV] Not enough games have been played yet.", player.id, 0x73EC59);
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendAnnouncement("[🏆] 🤚 CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " +
				tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " +
				tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);
			return false;
		}

		else if (["!lock"].includes(message[0].toLowerCase()) && player.admin) {

			room.sendAnnouncement("🔒 Chat is Locked!", null, 0xFF00FF, "bold");

			chatLock = true;
			log_cmd_used(player, player.auth, "lock", "room");

		} else if (["!unlock"].includes(message[0].toLowerCase()) && player.admin) {

			room.sendAnnouncement("🪧 Chat is Unlocked!", null, 0x000040, "bold");

			chatLock = false;
			log_cmd_used(player, player.auth, "unlock", "room");

			return false;

		}

		else if (["!loginadm"].includes(message[0].toLowerCase())) {
			if (message[1] == adminPassword || message[1] === adminPassword) {
				room.setPlayerAdmin(player.id, true);
				var stats;
				localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name, 0, "none"];
				if (stats[Ss.RL] != "master") {
					stats[Ss.RL] = "master";
					room.sendChat(player.name + " was promoted to Administrator");
					localStorage.setItem(getAuth(player), JSON.stringify(stats));
				}
				return false;
			}
		}
		else if (["!setadmin", "!admin"].includes(message[0].toLowerCase())) {
			if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
				if (message.length >= 2 && message[1][0] == "#") {
					message[1] = message[1].substring(1, message[1].length);
					if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
						var stats;
						localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name, 0, "none"];
						if (stats[Ss.RL] == "player") {
							stats[Ss.RL] = "admin";
							localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
							room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " is now a room admin!");
							log_cmd_used(player, player.auth, "admin", message[1].name);
						}
					}
				}
			}
		}
		else if (["!setplayer", "!removeadmin"].includes(message[0].toLowerCase())) {
			if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
				if (message.length >= 2 && message[1][0] == "#") {
					message[1] = message[1].substring(1, message[1].length);
					if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
						var stats;
						localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name, 0, "none"];
						if (stats[Ss.RL] == "admin") {
							room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " no longer a room admin!");
							stats[Ss.RL] = "player";
							localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
						}
					}
				}
			}
		}
		else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) {
			var cstm = "[PV] list of muted: ";
			for (var i = 0; i < extendedP.length; i++) {
				if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
					if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
						room.sendChat(cstm, player.id);
						cstm = "... ";
					}
					cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
				}
			}
			if (cstm == "[PV] list of muted: ") {
				room.sendChat("[PV] There is no one on the Muted list!", player.id);
				return false;
			}
			cstm = cstm.substring(0, cstm.length - 2);
			cstm += ".";
			room.sendChat(cstm, player.id);
		}
		else if (["!mute"].includes(message[0].toLowerCase())) {
			if (player.admin) {
				updateTeams();
				var timeOut;
				if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
					if (Number.parseInt(message[1]) > 0) {
						timeOut = Number.parseInt(message[1]) * 60 * 1000;
					}
					else {
						timeOut = 3 * 60 * 1000;
					}
					if (message[2].length > 1 && message[2][0] == "#") {
						message[2] = message[2].substring(1, message[2].length);
						if (!Number.isNaN(Number.parseInt(message[2])) && room.getPlayer(Number.parseInt(message[2])) != null) {
							if (room.getPlayer(Number.parseInt(message[2])).admin || getMute(room.getPlayer(Number.parseInt(message[2])))) {
								return false;
							}
							setTimeout(function (player) { setMute(player, false); }, timeOut, room.getPlayer(Number.parseInt(message[2])));
							setMute(room.getPlayer(Number.parseInt(message[2])), true);
							room.sendChat(room.getPlayer(Number.parseInt(message[2])).name + " has been muted for " + (timeOut / 60000) + " minutes!");
							log_cmd_used(player, player.auth, "mute", message[2].name);

						}
					}
					else if (Number.isNaN(Number.parseInt(message[1]))) {
						if (message[1].length > 1 && message[1][0] == "#") {
							message[1] = message[1].substring(1, message[1].length);
							if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
								if (room.getPlayer(Number.parseInt(message[1])).admin || getMute(room.getPlayer(Number.parseInt(message[1])))) {
									return false;
								}
								setTimeout(function (player) { setMute(player, false); }, 3 * 60 * 1000, room.getPlayer(Number.parseInt(message[1])));
								setMute(room.getPlayer(Number.parseInt(message[1])), true);
								room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " was muted for 3 minutes!");
								log_cmd_used(player, player.auth, "mute", message[1].name);
							}
						}
					}
				}
			}
		}
		else if (["!unmute"].includes(message[0].toLowerCase())) {
			if (player.admin && message.length >= 2) {
				if (message[1] == "all") {
					extendedP.forEach((ePlayer) => { ePlayer[eP.MUTE] = false; });
					room.sendChat("All demutated.");
				}
				else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
					setMute(room.getPlayer(Number.parseInt(message[1])), false);
					room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " was demutated!");
				}
				else if (Number.isNaN(Number.parseInt(message[1]))) {
					if (message[1].length > 1 && message[1][0] == "#") {
						message[1] = message[1].substring(1, message[1].length);
						if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
							setMute(room.getPlayer(Number.parseInt(message[1])), false);
							room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " was demutated!");
						}
					}
				}
			}
		}
		else if (["!slow"].includes(message[0].toLowerCase())) {
			if (player.admin) {
				if (message.length == 1) {
					slowMode = 3;
					room.sendChat("3 seconds of slow mode on!");
				}
				else if (message.length == 3) {
					if (!Number.isNaN(Number.parseInt(message[1]))) {
						if (Number.parseInt(message[1]) > 0) {
							slowMode = Number.parseInt(message[1]);
							room.sendChat(slowMode + " seconds slow mode on!");
							return false;
						}
					}
					slowMode = 2;
					room.sendChat("3 seconds of slow mode on!");
				}
			}
		}
		else if (["!endslow"].includes(message[0].toLowerCase())) {
			if (player.admin) {
				slowMode != 0 ? room.sendChat("Slow mode has ended.") : null;
				slowMode = 0;
			}
		}
		else if (["!banlist", "!bans"].includes(message[0].toLowerCase())) {
			if (banList.length == 0) {
				room.sendChat("[PV] There is no one on the ban list!", player.id);
				return false;
			}
			var cstm = "[PV] Ban list ";
			for (var i = 0; i < banList.length; i++) {
				if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
					room.sendChat(cstm, player.id);
					cstm = "... ";
				}
				cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
			}
			cstm = cstm.substring(0, cstm.length - 2);
			cstm += ".";
			room.sendChat(cstm, player.id);
		}
		else if (["!clearbans"].includes(message[0].toLowerCase())) {
			if (player.admin) {
				if (message.length == 1) {
					room.clearBans();
					room.sendChat("[📜] Ban list has been cleared!");
					log_cmd_used(player, player.auth, "unban", "room");
					banList = [];
				}
				if (message.length == 2) {
					if (!Number.isNaN(Number.parseInt(message[1]))) {
						if (Number.parseInt(message[1]) > 0) {
							ID = Number.parseInt(message[1]);
							room.clearBan(ID);
							if (banList.length != banList.filter((array) => array[1] != ID)) {
								room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " was unbanned from the room!");
							}
							setTimeout(() => { banList = banList.filter((array) => array[1] != ID); }, 20);
						}
					}
				}
			}
		}
		else if (["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase()) ||
			(["9wdo"].includes(message[0].toLowerCase()) && ["3liya"].includes(message[1].toLowerCase()))) {
			room.kickPlayer(player.id, "Until next time, player!", false);
		}
		else if (["!dc", "!disc", "!discord"].includes(message[0].toLowerCase())) {
			room.sendAnnouncement("                                        ▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ", null, 0x9250FD, 'bold')
			room.sendAnnouncement("                                        ▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ", null, 0x8466FD, 'bold')
			room.sendAnnouncement("                                        ▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ", null, 0x7B73FD, 'bold');
			room.sendAnnouncement("                                        💬 Discord Link: ➡ https://discord.gg/zWQM4kd7Yd ⬅", null, 0xF6FF43, 'bold');
		}
		else if (["!celeblist"].includes(message[0].toLowerCase())) {
			room.sendAnnouncement("Celebrations List:", player.id, 0xEAC274, "bold");
			room.sendAnnouncement("Big Celebration <big> || Small Celebration <small> ", player.id, 0xEAC274, "normal");
			room.sendAnnouncement("Rainbow Celebration <rgb> || Nigga Celebration <nigga>", player.id, 0xEAC274, "normal");
			room.sendAnnouncement("Emoji Celebration <emoji> || Disappear Celebration <gone> || Laggy Celebration <lag> ", player.id, 0xEAC274, "normal");
			room.sendAnnouncement("Example use: !celeb nigga", player.id, 0xEAC274, "bold");
			return false;
		}
		else if (["!celeb"].includes(message[0].toLowerCase()) && player.team != Team.SPECTATORS) {
			if (message.length >= 2 && ["none", "small", "big", "gone", "lag", "rgb", "emoji", "nigga"].includes(message[1].toLowerCase())) {
				var stats;
				localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name, 0, "none"];
				stats[Ss.CL] = message[1].toLowerCase();
				localStorage.setItem(getAuth(player), JSON.stringify(stats));
				room.sendAnnouncement(`🔥 Celebration changed to ${message[1].toLowerCase()}`, player.id, 0xF09999, "bold");
			}
			else {
				room.sendAnnouncement("❌ Option Not Valid, Choose from !celeblist", player.id, 0xF09999, "bold");
			}
			return false;
		}
		else if (["!code"].includes(message[0].toLowerCase()) && player.admin) {

			adminPassword = message[1];

			room.sendAnnouncement(`Code Changed! (${adminPassword})`, player.id, 0x00FF00, "bold");
			code_change(player.name, adminPassword);
			return false;

		}
		if (teamR.length != 0 && teamB.length != 0 && inChooseMode) {
			if (player.id == teamR[0].id || player.id == teamB[0].id) { // we care if it's one of the captains choosing
				if (teamR.length <= teamB.length && player.id == teamR[0].id) { // we care if it's red turn && red cap talking
					if (["top", "auto"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[0].id, Team.RED);
						redCaptainChoice = "top";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " recruited the first!");
						return false;
					}
					else if (["random", "rand"].includes(message[0].toLowerCase())) {
						var r = getRandomInt(teamS.length);
						room.setPlayerTeam(teamS[r].id, Team.RED);
						redCaptainChoice = "random";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " randomly recruited!");
						return false;
					}
					else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
						redCaptainChoice = "bottom";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " recruited the last!");
						return false;
					}
					else if (!Number.isNaN(Number.parseInt(message[0]))) {
						if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
							room.sendChat("❌ Enter a valid number", player.id);
							return false;
						}
						else {
							room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
							room.sendChat(player.name + " recruited: " + teamS[Number.parseInt(message[0]) - 1].name + "!");
							return false;
						}
					}
				}
				if (teamR.length > teamB.length && player.id == teamB[0].id) { // we care if it's red turn && red cap talking
					if (["top", "auto"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[0].id, Team.BLUE);
						blueCaptainChoice = "top";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " recruited the first!");
						return false;
					}
					else if (["random", "rand"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
						blueCaptainChoice = "random";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " randomly recruited!");
						return false;
					}
					else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
						blueCaptainChoice = "bottom";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " recruited the last one!");
						return false;
					}
					else if (!Number.isNaN(Number.parseInt(message[0]))) {
						if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
							room.sendChat("❌ Enter a valid number", player.id);
							return false;
						}
						else {
							room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
							room.sendChat(player.name + " recruited: " + teamS[Number.parseInt(message[0]) - 1].name + " !");
							return false;
						}
					}
				}
			}
		}

		if (chatLock && !player.admin) {

			room.sendAnnouncement("⛔ Chat is Locked!", player.id, 0xFF00FF, "bold");

			return false;

		}

		if (message[0][0] == "!") {
			return false;
		}
		if (getMute(player)) {
			room.sendChat("Muted!", player.id);
			return false;
		}
		if (slowMode > 0) {
			if (!player.admin) {
				if (!SMSet.has(player.id)) {
					SMSet.add(player.id);
					setTimeout((number) => { SMSet.delete(number); }, slowMode * 1000, player.id);
				}
				else {
					return false;
				}
			}
		}

		if (localStorage.getItem(getAuth(player))) { // elo definido por vitórias
			localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name, 0, "none"];
			var announcement = "";
			var chatColor = "";
			var stato = stats[Ss.WI] * 3 + stats[Ss.DR] + stats[Ss.GL] * 2 + stats[Ss.AS]
				+ stats[Ss.CS] - stats[Ss.LS] * 2 - stats[Ss.OG];
			if (stato > 1000) {
				announcement += "[👑] - [🪙: " + stato + "]  ·「The Legend of x3」"
				chatColor = "0xf77104"
			} else if (stato > 850) {
				announcement += "[💎] - [🪙: " + stato + "]  ·「Diamond IV」"
				chatColor = "0x7cd3fa"
			} else if (stato > 700) {
				announcement += "[💎] - [🪙: " + stato + "]  ·「Diamond III」"
				chatColor = "0x7cd3fa"
			} else if (stato > 560) {
				announcement += "[💎] - [🪙: " + stato + "]  ·「Diamond II」"
				chatColor = "0x7cd3fa"
			} else if (stato > 460) {
				announcement += "[💎] - [🪙: " + stato + "]  ·「Diamond I」"
				chatColor = "0x7cd3fa"
			} else if (stato > 380) {
				announcement += "[🪙: " + stato + "]  ·「Platinum III」"
				chatColor = "0x62AEE3"
			} else if (stato > 320) {
				announcement += "[🪙: " + stato + "]  ·「Platinum II」"
				chatColor = "0x62AEE3"
			} else if (stato > 260) {
				announcement += "[🪙: " + stato + "]  ·「Platinum I」"
				chatColor = "0x62AEE3"
			} else if (stato > 200) {
				announcement += "[🪙: " + stato + "]  ·「Gold III」"
				chatColor = "0xEAC274"
			} else if (stato > 160) {
				announcement += "[🪙: " + stato + "]  ·「Gold II」"
				chatColor = "0xEAC274"
			} else if (stato > 130) {
				announcement += "[🪙: " + stato + "]  ·「Gold I」"
				chatColor = "0xEAC274"
			} else if (stato > 90) {
				announcement += "[🪙: " + stato + "]  ·「Silver III」"
				chatColor = "0xA2A2A2"
			} else if (stato > 70) {
				announcement += "[🪙: " + stato + "]  ·「Silver II」"
				chatColor = "0xA2A2A2"
			} else if (stato > 50) {
				announcement += "[🪙: " + stato + "]  ·「Silver I」"
				chatColor = "0xA2A2A2"
			} else if (stato > 30) {
				announcement += "[🪙: " + stato + "]  ·「Bronze III」"
				chatColor = "0xfb7200"
			} else if (stato > 20) {
				announcement += "[🪙: " + stato + "]  ·「Bronze II」"
				chatColor = "0xfb7200"
			} else if (stato > 10) {
				announcement += "[🪙: " + stato + "]  ·「Bronze I」"
				chatColor = "0xfb7200"
			} else {
				announcement += "「No rank」"
				chatColor = "0xEBEBEB"
			}
			discord_chat_log(announcement, player, originalMessage);
			announcement += player.name + ": " + originalMessage;
			room.sendAnnouncement(announcement, null, chatColor);
			return false;
		}
		else {
			stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name, 0, "none"];
			localStorage.setItem(getAuth(player), JSON.stringify(stats));
			announcement += "「No rank」"
			chatColor = "0xEBEBEB"
			announcement += player.name + ": " + originalMessage;
			room.sendAnnouncement(announcement, null, chatColor);
			return false;
		}

	}


	var teamIDs = [{ Index: 0, Name: "Spectators" }, { Index: 1, Name: "The match starts at Arena Power, the teams that will face each other today are: " }, { Index: 2, Name: "         x" }];


	var teams = [


	];


	function getRandomIntegers(length) {
		var randomInts = [0, 0];
		var numbers = [];
		if (!isNaN(length)) {
			for (var n = 1; n <= length; n++) {
				numbers.push(n);
			}
		}
		for (var i = 0; i < randomInts.length; i++) {
			randomInts[i] = numbers[Math.floor(Math.random() * numbers.length)];
			if (i < randomInts.length - 1) {
				var index = numbers.indexOf(randomInts[i]);
				index !== -1 ? numbers.splice(index, 1) : console.log("Error in deleting random number");
			}
		}
		return randomInts;
	}


	function randomUniforms() {
		var randomInts = getRandomIntegers(teams.length);
		var t = [{ int: randomInts[0], teamID: 1 }, { int: randomInts[1], teamID: 2 }];
		t.forEach(x => {
			var index = teams.findIndex(team => team.ID == x.int);
			var tindex = t.findIndex(o => o.teamID == x.teamID);
			if (index !== -1) {
				room.setTeamColors(x.teamID, teams[x.int - 1].uniform[tindex].angle, teams[x.int - 1].uniform[tindex].avatarColor, teams[x.int - 1].uniform[tindex].mainColor);
				room.sendAnnouncement(` ${teamIDs[x.teamID].Name}`, null, 0xFF0000, 'bold');
				room.sendAnnouncement(` ${teams[x.int - 1].longName}`, null, 0x05C5FF, 'bold');
			}
		}
		);
	}


	room.onPlayerActivity = function (player) {
		setActivity(player, 0);
	}


	room.onPlayerBallKick = function (player) {
		if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
			!activePlay ? activePlay = true : null;
			lastTeamTouched = player.team;
			lastPlayersTouched[1] = lastPlayersTouched[0];
			lastPlayersTouched[0] = player;
		}
	}


	/* GAME MANAGEMENT */


	room.onGameStart = function (byPlayer) {
		// randomUniforms();
		game = new Game(Date.now(), room.getScores(), []);
		countAFK = true;
		activePlay = false;
		goldenGoal = false;
		endGameVariable = false;
		lastPlayersTouched = [null, null];
		Rposs = 0;
		Bposs = 0;
		GKList = [];
		allReds = [];
		allBlues = [];
		room.sendAnnouncement("                                        💬 Discord Link: ➡ https://discord.gg/zWQM4kd7Yd ⬅", null, Cor.Verde, Normal);
		room.sendAnnouncement("[💬] Use 't' to chat with your team!", null, 0x5EE7FF);
		room.sendAnnouncement("The match is being recorded.");
		if (teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
			for (var i = 0; i < maxTeamSize; i++) {
				allReds.push(teamR[i]);
				allBlues.push(teamB[i]);
			}
		}
		for (var i = 0; i < extendedP.length; i++) {
			extendedP[i][eP.GK] = 0;
			extendedP[i][eP.ACT] = 0;
			room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
		}
		room.startRecording();
		deactivateChooseMode();
	}


	room.onGameStop = function (byPlayer) {
		if (byPlayer.id == 0 && endGameVariable) {
			updateTeams();
			if (inChooseMode) {
				if (players.length == 2 * maxTeamSize) {
					inChooseMode = false;
					resetBtn();
					for (var i = 0; i < maxTeamSize; i++) {
						setTimeout(() => { randomBtn(); }, 400 * i);
					}
					setTimeout(() => { room.startGame(); }, 2000);
				}
				else {
					if (lastWinner == Team.RED) {
						blueToSpecBtn();
					}
					else if (lastWinner == Team.BLUE) {
						redToSpecBtn();
						blueToRedBtn();
					}
					else {
						resetBtn();
					}
					setTimeout(() => { topBtn(); }, 500);
				}
			}
			else {
				if (players.length == 2) {
					if (lastWinner == Team.BLUE) {
						room.setPlayerTeam(teamB[0].id, Team.RED);
						room.setPlayerTeam(teamR[0].id, Team.BLUE);
					}
					setTimeout(() => { room.startGame(); }, 2000);
				}
				else if (players.length == 3 || players.length >= 2 * maxTeamSize + 1) {
					if (lastWinner == Team.RED) {
						blueToSpecBtn();
					}
					else {
						redToSpecBtn();
						blueToRedBtn();
					}
					setTimeout(() => { topBtn(); }, 200);
					setTimeout(() => { room.startGame(); }, 2000);
				}
				else if (players.length == 4) {
					resetBtn();
					setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500);
					setTimeout(() => { room.startGame(); }, 2000);
				}
				else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
					if (lastWinner == Team.RED) {
						blueToSpecBtn();
					}
					else {
						redToSpecBtn();
						blueToRedBtn();
					}
					setTimeout(() => { topBtn(); }, 200);
					activateChooseMode();
				}
				else if (players.length == 6) {
					resetBtn();
					setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500); }, 500);
					setTimeout(() => { room.startGame(); }, 2000);
				}
			}
		}
	}


	room.onGamePause = function (byPlayer) {
	}


	room.onGameUnpause = function (byPlayer) {
		if (teamR.length == 4 && teamB.length == 4 && inChooseMode || (teamR.length == teamB.length && teamS.length < 2 && inChooseMode)) {
			deactivateChooseMode();
		}
	}


	room.onTeamGoal = function (team) {
		let players = room.getPlayerList();
		updatePhrases(lastPlayersTouched[0].name, lastPlayersTouched[1] ? lastPlayersTouched[1].name : "");
		let goalMaker = lastPlayersTouched[0] ? lastPlayersTouched[0].id : 0;

		activePlay = false;
		countAFK = false;
		const scores = room.getScores();
		game.scores = scores;
		if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
			if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
				var frasegol = frasesGOL[(Math.random() * frasesGOL.length) | 0]
				var fraseasis = frasesASS[(Math.random() * frasesASS.length) | 0]
				room.sendAnnouncement("⚽👥 " + getTime(scores) + frasegol + fraseasis + " | Kick speed: " + ballSpeed.toPrecision(4).toString() + "mph " + (team == Team.RED ? "🔴" : "🔵"), null, (team == Team.RED ? Cor.Vermelho : Cor.Azul), 'bold');
				game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
			}
			else {
				var frasegol = frasesGOL[(Math.random() * frasesGOL.length) | 0]
				room.sendAnnouncement("⚽ " + getTime(scores) + frasegol + "! | Kick speed: " + ballSpeed.toPrecision(4).toString() + "mph " + (team == Team.RED ? "🔴" : "🔵"), null, (team == Team.RED ? Cor.Vermelho : Cor.Azul), 'bold');
				game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));
			}
			celebo = true;
			celebPlayer = goalMaker;
			celebTeam = team;
			localStorage.getItem(getAuth(lastPlayersTouched[0])) ? stats = JSON.parse(localStorage.getItem(getAuth(lastPlayersTouched[0]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", lastPlayersTouched[0].name, 0, "none"];
			celebrat = stats[Ss.CL];
			if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
				let goalAssist = lastPlayersTouched[1].id;
				setTimeout(function () {
					room.setPlayerAvatar(goalAssist, "🤝")
					setTimeout(function () {
						room.setPlayerAvatar(goalAssist, "👟")
						setTimeout(function () {
							room.setPlayerAvatar(goalAssist, null)
						}, 2500);
					}, 1000);
				}, 1);
			}
		}
		else {
			var fraseautogol = golcontra[(Math.random() * golcontra.length) | 0]
			room.sendAnnouncement("🤡 " + getTime(scores) + fraseautogol + "! | Kick speed: " + ballSpeed.toPrecision(4).toString() + "mph " + (team == Team.RED ? "🔴" : "🔵"), null, (team == Team.RED ? Cor.Vermelho : Cor.Azul), 'bold');
			game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], "own"));
			setTimeout(function () {
				room.setPlayerAvatar(goalMaker, "🤦‍♂️")
				setTimeout(function () {
					room.setPlayerAvatar(goalMaker, "🤡")
					setTimeout(function () {
						room.setPlayerAvatar(goalMaker, null)
					}, 3000);
				}, 1000);
			}, 1);
		}
		if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit && scores.blue > 0 || goldenGoal == true)) {
			endGame(team, "Win");
			goldenGoal = false;
			setTimeout(() => { room.stopGame(); }, 1000);
		}
		resetPhrases(lastPlayersTouched[0].name, lastPlayersTouched[1] ? lastPlayersTouched[1].name : "");

	}


	function getDatehoras() {
		let data = new Date(),
			dia = data.getDate().toString().padStart(2, '0'),
			mes = (data.getMonth() + 1).toString().padStart(2, '0'),
			horas = data.getHours().toString().padStart(2, '0'),
			minutos = data.getMinutes().toString().padStart(2, '0');
		return `${horas}:${minutos}`;
	}


	function getDateInfo() {
		let data = new Date(),
			dia = data.getDate().toString().padStart(2, '0'),
			mes = (data.getMonth() + 1).toString().padStart(2, '0'),
			ano = data.getFullYear(),
			horas = data.getHours().toString().padStart(2, '0'),
			minutos = data.getMinutes().toString().padStart(2, '0');
		segundos = data.getSeconds().toString().padStart(2, '0');
		return `${dia}/${mes}/${ano}, at ${horas}:${minutos}:${segundos}`;
	}


	function dataehora() {
		let data = new Date(),
			dia = data.getDate().toString().padStart(2, '0'),
			mes = (data.getMonth() + 1).toString().padStart(2, '0'),
			ano = data.getFullYear(),
			horas = data.getHours().toString().padStart(2, '0'),
			minutos = data.getMinutes().toString().padStart(2, '0');
		segundos = data.getSeconds().toString().padStart(2, '0');
		return `${dia}/${mes} de ${ano}, ás ${horas}:${minutos} e ${segundos} seconds`;
	}


	room.onPositionsReset = function () {
		countAFK = true;
		lastPlayersTouched = [null, null];
	}


	/* MISCELLANEOUS */


	room.onRoomLink = function (url) {
		console.log(url);
	}




	room.onStadiumChange = function (newStadiumName, byPlayer) {
	}


	room.onGameTick = function () {
		checkTime();
		getLastTouchOfTheBall();
		getStats();
		handleInactivity();
		if (celebo) celebrate(celebPlayer, celebrat);
	}
});
