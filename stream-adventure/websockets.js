'use strict'
const ws = require('websocket-stream');

const socket = ws('ws://localhost:8099');
socket.write('hello\n')
