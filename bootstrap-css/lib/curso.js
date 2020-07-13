function validarForma(forma){
    console.log(" ");
    console.log("validando la forma");
    var usuario = forma.usuario;
    console.log("El usuario es "+ usuario.value);
    var correo = forma.correo;
    console.log("El correo es "+ correo.value);
    var telefono = forma.telefono;
    console.log("El telefono es "+ telefono.value);
    var pregunta = forma.pregunta;
    console.log("La pregunta es "+ pregunta.value);
    //validamos el nombre del usuario
    if(usuario.value == "" || usuario.value == "Escribir usuario"){
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
    //validamos el correo
    if(correo.value == "" || correo.value == "Escribir correo"){
        alert("Debe proporcionar un correo");
        correo.focus();
        correo.select();
        return false;
    }
    //validamos el telefono
    if(telefono.value == "" || telefono.value == "Escribir telefono"){
        alert("Debe proporcionar un teléfono");
        telefono.focus();
        telefono.select();
        return false;
    }
    //validamos la pregunta
    if(pregunta.value == "" || pregunta.value == "Escribir pregunta"){
        alert("Debe hacer una pregunta");
        pregunta.focus();
        pregunta.select();
        return false;
    }
    //validamos el género
    var genero = forma.genero;
    var checkSeleccionado = false;
    //revisamos si se seleccionó algún checkbox
    for(i=0; i<genero.length; i++){
        if (genero[i].checked){
            checkSeleccionado = true;
        }
    }
    if(!checkSeleccionado){
        alert("Debe proporcionar un género");
        return false;
    }
    //Formulario validado
    alert("formulario válido, enviando datos...");{
    return true;
    }
}
