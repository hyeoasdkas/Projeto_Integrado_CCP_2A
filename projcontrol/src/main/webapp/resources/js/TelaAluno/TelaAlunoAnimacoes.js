function animaAvatar(){
    
    $(document).ready(function() {
        $('#avatar-usuario').removeClass('avatar-usuario');
        $('#avatar-usuario').addClass('avatar-usuario-carregado');
    });
    
}

function animaEscritaTexto(id){
    
    const titulo = document.querySelector(`${id}`); 
    
    if(titulo == null){
        
    }else{
        
        const textoArray = titulo.innerHTML.split('');
        titulo.innerHTML = '';
        textoArray.forEach((letra, i) =>{
            setTimeout( () => titulo.innerHTML += letra
            , 155 * i);
        });
    }
    
}

function scrollDetect(){

    var rd_nodejs = $('#rd_nodejs');
    var rd_bootstrap = $('#rd_bootstrap');
    var rd_sass = $('#rd_sass');
    var rd_ruby = $('#rd_ruby');
    var rd_angular = $('#rd_angular');

    $('#rd_nodejs').on("click",()=>{
        $('.sections').css('margin-top','0vh');
        rd_nodejs.attr("checked",true);
        rd_bootstrap.removeAttr("checked"); 
        rd_sass.removeAttr("checked"); 
        rd_ruby.removeAttr("checked"); 
        rd_angular.removeAttr("checked"); 
        
    });

    $('#rd_bootstrap').on("click",()=>{
        $('.sections').css('margin-top','-100vh');
        rd_bootstrap.attr("checked",true);
        rd_nodejs.removeAttr("checked"); 
        rd_sass.removeAttr("checked"); 
        rd_ruby.removeAttr("checked"); 
        rd_angular.removeAttr("checked"); 

    });

    $('#rd_sass').on("click",()=>{
        $('.sections').css('margin-top','-200vh');
        rd_sass.attr("checked",true);
        rd_nodejs.removeAttr("checked"); 
        rd_ruby.removeAttr("checked"); 
        rd_bootstrap.removeAttr("checked"); 
        rd_angular.removeAttr("checked"); 
    });

    $('#rd_ruby').on("click",()=>{
        $('.sections').css('margin-top','-300vh');
        rd_ruby.attr("checked",true);
        rd_nodejs.removeAttr("checked"); 
        rd_bootstrap.removeAttr("checked"); 
        rd_angular.removeAttr("checked"); 
        rd_sass.removeAttr("checked");
    });

    $('#rd_angular').on("click",()=>{
        $('.sections').css('margin-top','-400vh');
        rd_angular.attr("checked",true);
        rd_nodejs.removeAttr("checked"); 
        rd_bootstrap.removeAttr("checked"); 
        rd_sass.removeAttr("checked");
        rd_ruby.removeAttr("checked"); 
    });
    
    $('body').on('keydown', function(event) {
        
        var tecla = event.keyCode;        
        
        if(tecla == 38 || tecla == 37) {            
            
            // seta pra CIMA
            if(rd_angular.prop("checked")){
                $('.sections').css('margin-top','-300vh');
                rd_ruby.attr("checked",true);  

                rd_angular.removeAttr("checked");
                rd_nodejs.removeAttr("checked");
                rd_sass.removeAttr("checked");
                rd_bootstrap.removeAttr("checked");
                
            }else if(rd_ruby.prop("checked")){
                $('.sections').css('margin-top','-200vh');
                rd_sass.attr("checked",true);

                rd_ruby.removeAttr("checked");
                rd_bootstrap.removeAttr("checked");
                rd_nodejs.removeAttr("checked");
                rd_angular.removeAttr("checked");
                
            }else if(rd_sass.prop("checked")){
                $('.sections').css('margin-top','-100vh');
                rd_bootstrap.attr("checked",true);

                rd_ruby.removeAttr("checked");
                rd_nodejs.removeAttr("checked");
                rd_angular.removeAttr("checked");
                rd_sass.removeAttr("checked");
                
            }else if(rd_bootstrap.prop("checked")){
                $('.sections').css('margin-top','0vh');
                rd_nodejs.attr("checked",true);

                rd_ruby.removeAttr("checked");
                rd_bootstrap.removeAttr("checked");    
                rd_angular.removeAttr("checked");
                rd_sass.removeAttr("checked");
            }
            
        } else if(tecla == 40 || tecla == 39) {
            // seta pra BAIXO
            
            if(rd_nodejs.prop("checked")){
                $('.sections').css('margin-top','-100vh');
                rd_bootstrap.attr("checked",true);
                
                rd_angular.removeAttr("checked");
                rd_ruby.removeAttr("checked");
                rd_sass.removeAttr("checked");
                rd_nodejs.removeAttr("checked");
                
            }else if(rd_bootstrap.prop("checked")){
                $('.sections').css('margin-top','-200vh');
                rd_sass.attr("checked",true);

                rd_angular.removeAttr("checked");
                rd_ruby.removeAttr("checked");
                rd_bootstrap.removeAttr("checked");
                rd_nodejs.removeAttr("checked");
                
            }else if(rd_sass.prop("checked")){
                $('.sections').css('margin-top','-300vh');
                rd_ruby.attr("checked",true);

                rd_nodejs.removeAttr("checked");
                rd_sass.removeAttr("checked");
                rd_angular.removeAttr("checked");
                rd_bootstrap.removeAttr("checked");

            }else if(rd_ruby.prop("checked")){
                $('.sections').css('margin-top','-400vh');
                rd_angular.attr("checked",true);

                rd_nodejs.removeAttr("checked");
                rd_sass.removeAttr("checked");
                rd_ruby.removeAttr("checked");
                rd_bootstrap.removeAttr("checked");
                
            }else if(rd_angular.prop("checked")){
                $('.sections').css('margin-top','0vh');
                rd_nodejs.attr("checked",true);

                rd_sass.removeAttr("checked");
                rd_ruby.removeAttr("checked");
                rd_bootstrap.removeAttr("checked");
                rd_angular.removeAttr("checked");
            }
        }
        
    });
    
}


export{animaAvatar,animaEscritaTexto,scrollDetect};