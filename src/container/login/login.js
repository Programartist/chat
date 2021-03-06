import React from 'react'
import { List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/user.redux'
import Logo from '../../component/logo/logo'
import imoocForm from '../../component/imooc-form/imooc-form'

@connect(
	state=>state.user,
	{login}
	)
@imoocForm
class Login extends React.Component{
	 constructor(props){
	 	super(props)
	 	// this.state={
	 	// 	user:'',
	 	// 	pwd:''
	 	// }
	 }
	 register(){
		console.log(this.props);
		this.props.history.push('/register')
	}
	// handleChange(key,value){
 //    	this.setState({
 //    		[key]:value
 //    	})
 //    }
    handleLogin(){
    	this.props.login(this.props.state)
    }
	render(){
		return (
			<div>
			{this.props.redirectTo&&this.props.redirectTo!='/login'?<Redirect to={this.props.redirectTo}/>:null}
			<Logo></Logo>
			<WingBlank>
				<List>
				{this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
				<InputItem
				onChange={(v)=>this.props.handleChange('user',v)}
				>用户名</InputItem>
				<WhiteSpace/>
				<InputItem
				type='password'
				onChange={(v)=>this.props.handleChange('pwd',v)}
				>密码</InputItem>
				</List>
				<WhiteSpace/>
				<Button 
				onClick={this.handleLogin.bind(this)} 
				type="primary">登陆</Button>
				<WhiteSpace />
				<Button type="primary" onClick={this.register.bind(this)}>注册</Button>
			</WingBlank>
			</div>
			)
	}
}

export default Login