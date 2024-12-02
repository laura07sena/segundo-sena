document.getElementById("cargar").addEventListener("click",cargarCorreos);

async function cargarCorreos() {
    const correoslista = document.getElementById("listarcorreos");
    correoslista.innerHTML='cargando correos....';

    try {
    const repose=await fetch('https://jsonplaceholder.typicode.com/users');
    if (!repose.ok){
        throw new error('error al cargar correos');
    }
    const correos= await repose.json();
    correoslista.innerHTML='';
    correos.forEach(corres=> {
        const corresItem =document.createElement('div');
        corresItem.className='corres-item';
        corresItem.innerHTML=`<h3>${corres.email}</h3>`;
        correoslista.appendChild(corresItem);
        
    }); 
    }


catch(error){
    correoslista.innerHTML= '<p>${error.message}</p>';
}
}

document.getElementById("cargar").addEventListener("click",cargarusuarios);

async function cargarusuarios() {
    const usuarioslista = document.getElementById("listarusuarios");
    usuarioslista.innerHTML='cargando usuarios....';

    try {
    const repose=await fetch('https://jsonplaceholder.typicode.com/users');
    if (!repose.ok){
        throw new error('error al cargar usuarios');
    }
    const usuarios= await repose.json();
    usuarioslista.innerHTML='';
    usuarios.forEach(usuari=> {
        const usuariItem =document.createElement('div');
        usuariItem.className='corres-item';
        usuariItem.innerHTML=`<h3>${usuari.name}</h3>`;
        usuarioslista.appendChild(usuariItem);
        
    }); 
    }


catch(error){
    usuarioslista.innerHTML= '<p>${error.message}</p>';
}
}
