 document.querySelectorAll('.menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            let scrolY = targetElement.offsetTop - document.querySelector('.menu').offsetHeight + 40
            console.log('fasdf' + scrolY)
            window.scrollTo({
                top: scrolY,
                behavior: 'smooth'
                
            });
        });
    });




    const container = document.querySelector('.hipage');

    // Отслеживаем движение мыши
    document.addEventListener('mousemove', (e) => {
        // Получаем положение мыши относительно центра экрана
        const x = e.clientX - window.innerWidth / 2;
        const y = e.clientY - window.innerHeight / 2;
    
        // Вычисляем угол вращения (в радианах)
        const angleX = (y / window.innerHeight) * 4; // Измените угол по X, как вам нужно
        const angleY = (x / window.innerWidth) * 4;  // Измените угол по Y, как вам нужно
    
        // Применяем вращение к контейнеру
        container.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        // container.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });



window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
 const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled =
  document.body.scrollTop / htmlElement.clientHeight

  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenHeightScrolled * 100, 100)
  )
}

setScrollVar()

