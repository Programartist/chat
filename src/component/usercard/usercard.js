
import React from 'react'
import PropTypes from 'prop-types'
import {Card,WingBlank,WhiteSpace} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

@withRouter
class Usercard extends React.Component{
	static propTypes = {
		userlist:PropTypes.array.isRequired
	}
	handleClick(v){
		// console.log(this.props);
		this.props.history.push(`/chat/${v._id}`)
	}
	render(){
		const Header = Card.Header
		const Body = Card.Body
		//console.log(this.props);
		return (
			<WingBlank className='usercardindex'>
				{this.props.userlist.map(v=>(
				<div key={v.user}>
				<WhiteSpace></WhiteSpace>
				 {v.avatar?<Card 
				 	key={v._id}
					onClick={()=>this.handleClick(v)}
				 	>
						<Header
							title={v.user}
							thumb={require(`../img/${v.avatar}.png`)}
							extra={<span>{v.title}</span>}
						></Header>
						<Body>
						{v.type=='boss'?<div>公司：{v.company}</div>:null}
						{v.desc.split('\n').map(k=>
						(<div key={k}>{k}</div>))}
						{v.type=='boss'?<div>薪资：{v.money}</div>:null}
						</Body>				
					</Card>:null}
				</div>
					))}
				<div style={{height:50}}></div>
			</WingBlank>
			)
	}
}

export default Usercard