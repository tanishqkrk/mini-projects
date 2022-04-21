document.querySelector('.form').addEventListener('submit', e=>{
    // e.preventDefault()
    Email.send({
    // Host: "smtp.mailtrap.io",
    // Username : "c79e0da2adfdd4",
    // Password : "5e4e96d86a56e7",
    Host: "smtp.gmail.com",
    Username : "tanishqkrk@gmail.com",
    Password : "pxktwbsrzrikbzlk",
    To : 'tanishqkrk@gmail.com',
    From : document.querySelector('#email').value,
    Subject : document.querySelector('#name').value,
    Body : document.querySelector('#message').value,
    }).then(
        message => alert("mail sent successfully")
    );
});