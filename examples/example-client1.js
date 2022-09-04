const SignalingChannel = require('./signaling-channel')
const peerId = 'testPeer1'
// Where the signaling server is hosted, for a local server the port must match the one set in the .env files inside the config directory
const port = process.env.PORT || 3030
const signalingServerUrl = 'http://localhost:' + port
// Token must match the value defined in the .env filed inside the config directory
const token = 'SIGNALING123'

const channel = new SignalingChannel(peerId, signalingServerUrl, token)
channel.onMessage = (message) => {
	console.log(message)
}
channel.connect()
channel.send('Hello from the first peer')
channel.sendTo('testPeer2', { this: 'is a test' })
