const express = require('express')
const utils = require('utility')
const model = require('./model')   //获取model文件
const Chat = model.getModel('chat')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
//work with express
const server = require('http').Server(app)
const io =require('socket.io')(server)


io.on('connection',function(socket){
	// console.log('user login')
	socket.on('sendmsg',function(data){
		// console.log(data)
		// io.emit('recvmsg',data)
		const {from,to,msg} = data
		const chatid = [from,to].sort().join('_')
		Chat.create({chatid,from,to,content:msg},function(err,doc){
			// console.log(doc);
			io.emit('recvmsg',Object.assign({},doc._doc))
		})
	})
})

const userRouter = require('./user')


app.use(bodyParser())
app.use(cookieParser())
app.use('/user',userRouter)

server.listen(9093,function(){
	console.log('Node app start at port 9093');
})