const appMusic = {};
const miCallBack = datos => {
    console.log(datos);
    appMusic.versiones=datos;
    let html = ""
    appMusic.versiones.map(version => {
        
        html+="<iframe class='videos' width='560' height='315' src='"+version.url+" title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
        
            for(let propiedad of Object.keys(version)){
            html+= "<li class='listaversiones'>"+ propiedad + ": "+ version[propiedad]+ "</li>"  
        }
        html+="<br><br>"
    })

    document.getElementById("result").innerHTML=html;
}
