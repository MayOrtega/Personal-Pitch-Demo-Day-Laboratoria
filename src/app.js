



const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')



const historia = () => {
  Swal.fire({
  title: 'Creatividad, perseverancia y curiosidad',
  text: 'Soy una desarrolladora front-end en constante construcción. Además profesora de música y madre. Amo estudiar y aprender',
  width: 800,
  imageUrl: 'img/myAvatar.png',
  imageWidth: 200,
  imageHeight: 200,
  imageAlt: 'Custom image',
  padding: '3em',
  color: '#ff7675',
  background: '#000000',
    
  })
}

b1.addEventListener('click', historia)

const motivacion = () => {
  Swal.fire({
  title: 'Amor y Reinvención',
  text: 'Pasé por el mundo Tech, luego me tomé un año jupiteriano (un poco más) y hoy siento que he vuelto a casa',
  width: 800,
  imageUrl: 'img/jupiter.png',
  imageWidth: 200,
  imageHeight: 200,
  imageAlt: 'Custom image',
  padding: '3em',
  color: '#ff7675',
  background: '#000033',
  })

}
b2.addEventListener('click', motivacion)

const proyectos = () => {
  Swal.fire({
    title: 'Experiencias',
  text: 'En Laboratoria desarrollé varios proyectos en los que desarrollé mucho más que habilidades técnicas',
  width: 800,
  imageUrl: 'img/pilonAnimado.gif',
  imageWidth: 200,
  imageHeight: 200,
  imageAlt: 'Custom image',
  padding: '3em',
  color: '#ff7675',
  background: '#000077',
  }).then((result) => {
    if (result.isConfirmed) {
      location = "https://scl-019-burger-queen-sage.vercel.app"
    }
  })

}
b3.addEventListener('click', proyectos)