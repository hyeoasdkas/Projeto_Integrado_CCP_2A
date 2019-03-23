function animaAvatar(){
    
    $(document).ready(function() {
        $('#avatar-usuario').removeClass('avatar-usuario');
        $('#avatar-usuario').addClass('avatar-usuario-carregado');
    });
    
}

function animaEscritaTexto(id){
    

    const titulo = document.querySelector(`${id}`); 
    
    const textoArray = titulo.innerHTML.split('');
    titulo.innerHTML = '';
    textoArray.forEach((letra, i) =>{
        setTimeout( () => titulo.innerHTML += letra
        , 155 * i);
    });

    
}

export{animaAvatar,animaEscritaTexto};