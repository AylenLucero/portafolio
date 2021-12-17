const tecnologias= [
    'img/tecnologias/html.jpg',
    'img/tecnologias/css.jpg',
    'img/tecnologias/js.jpg',
    'img/tecnologias/react.jpg',
    'img/tecnologias/sass.jpg',
    'img/tecnologias/boot.jpg',
    'img/tecnologias/git.jpg',
    'img/tecnologias/github.jpg',
]

const imgTecnologias=document.getElementById('imgTecnologia');

for(tecnologia of tecnologias) {
    let nvaImg = document.createElement('img')
    nvaImg.setAttribute('src', tecnologia)
    nvaImg.setAttribute('class', 'imgTecnologia')
    imgTecnologias.appendChild(nvaImg)
}

