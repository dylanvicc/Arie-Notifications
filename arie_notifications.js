function show(message, title) {
    render(message, title, 'success');
}

function error(message, title) {
    render(message, title, 'error');
}

function warning(message, title) {
    render(message, title, 'warning');
}

function render(message, title, type) {
    var element = document.createElement('div');
    element.classList.add('notification-bar-' + type);
    
    element.innerHTML = '<p class=\'notification-bar-title\'>' 
        + title.charAt(0).toUpperCase() + title.slice(1) + '<br><img src=\'' + imageForType(type) 
        + '\' class=\'notification-image\'/>' + '</p>' + '<p class=\'notification-bar-message\'>' + message + '</p>';
    document.body.appendChild(element);
    
    setTimeout(
        function() {
            element.classList.add('hide');
        }, 5000
    );
}

function imageForType(type) {
    switch(type) {
        case 'success':
            return "./images/success.svg";

        case 'error':
            return "./images/error.svg";

        case 'warning':  
            return "./images/warning.svg";
    }
}