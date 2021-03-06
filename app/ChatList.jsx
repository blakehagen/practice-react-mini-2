var React = require('react');
var $ = require('jquery');

var ChatList = React.createClass({
    getInitialState: function(){
        return {
            chats: []
        }
    },
    
    propTypes: {
        url: React.PropTypes.string.isRequired
    },
    
    getDefaultProps: function(){
        return {
            url: 'https://api.parse.com/1/classes/chat'
        };
    },
    
    getChats: function(){
        $.ajax({
            url: this.props.url,
            type: 'GET',
            beforeSend: function(request){
                request.setRequestHeader("X-Parse-Application-Id",'CD2pHq4pp9LvWkv2eK8ULitdsoR8T4Y4hLXfmcLw');
                request.setRequestHeader("X-Parse-REST-API-Key", 'FCnu3R5xXvBcbLi1RyIbGODirYuIbXmhKkwX4ndl');
                request.setRequestHeader("Content-Type", 'application/json');  
            },
            error: function(data){
                console.log('There was an error getting the chats');
            },
            success: function(data){
                if(this.isMounted()){
                    this.setState({
                        chats: data.results
                    });
                }
            }.bind(this)
        })
    },
    
    componentDidMount: function(){
        this.interval = setInterval(function(){
            this.getChats();
        }.bind(this),1000)
    },
    
    componentWillUnmount: function(){
        clearInterval(this.interval);
    },
    
    render: function(){
        var list = this.state.chats.map(function(item, index){
            return <li className='list-group-item' key={item.objectId}> {item.text} </li>
        });
        return (
            <ul className="list-group">
            {list}
            </ul>
        )
    }
});

module.exports = ChatList;