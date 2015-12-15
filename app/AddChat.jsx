var React = require('react');
var $ = require('jquery');


var AddChat = React.createClass({
    propTypes: {
        url: React.PropTypes.string.isRequired
    },
    
    getDefaultProps: function(){
        return {
            url: 'https://api.parse.com/1/classes/chat'
        }
    },
    
    addChat: function(){
        $.ajax({
            url: this.props.url,
            type: 'POST',
            data: JSON.stringify({text: this.refs.newChatInput.getDOMNode().value}),
            beforeSend: function(request){
                request.setRequestHeader("X-Parse-Application-Id", 'CD2pHq4pp9LvWkv2eK8ULitdsoR8T4Y4hLXfmcLw');
                request.setRequestHeader("X-Parse-REST-API-Key", 'FCnu3R5xXvBcbLi1RyIbGODirYuIbXmhKkwX4ndl');
                request.setRequestHeader("Content-Type", 'application/json');
            },
            error: function(){
                console.log('error on post');
            },
            success: function(){
                console.log('successful post');
            }.bind(this)
        })
    },
    
    handleSubmit: function(e){
        if(e.keyCode === 13){
            this.addChat();
        }
    },

    render: function(){
        return (
        <div className="form-group">
            <input
                type='text'
                ref='newChatInput' placeholder='Compose Message'
                className='form-control'
                onKeyDown={this.handleSubmit} />
        </div>
        )
    }
});


module.exports = AddChat;