const room=window.location.pathname.replace(/\//g, '');
const socket = io(`http://localhost:3000/${room}`);


let user=null;
socket.on('update_messages', (messages)=>{
    updateMessagesOnScreen(messages);
})

function updateMessagesOnScreen(messages){
    const div_messages = document.querySelector('#messages');
    let list_messages = '<ul>'

    messages.forEach(message=>{
        list_messages += `<li>${message.user}: ${message.msg}</li>`;
    })
    list_messages += '</ul>'

    div_messages.innerHTML = list_messages;
}

document.addEventListener('DOMContentLoaded',() =>{
    const form = document.querySelector('#message_form');
        form.addEventListener('submit',(e) =>{
            e.preventDefault();

            if(!user){
                alert('Please enter user');
                return;
            }

            const message = document.forms['message_form']['msg'].value;
            document.forms['message_form']['msg'].value='';
            socket.emit('new_message',{user: user, msg: message});
            
        })

    const userForm = document.querySelector('#user_form');
        userForm.addEventListener('submit',(e) =>{
        e.preventDefault();
        user = document.forms['user_form']['user'].value;
        userForm.parentNode.removeChild(userForm);
    })
})