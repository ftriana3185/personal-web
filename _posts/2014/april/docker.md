{{{
    "title"    			: "Docker, aplastando maquinas virtuales I",
    "Category"			: "Computer Science",
    "tags"     			: [ "Docker", "Infrastructure", "Computer Science"],
    "date"     			: "06-02-2014",
    "lang"     			: "es",
    "description"  		: "Docker se expone como un reemplazo a las máquinas virtuales de bajo costo",
    "img_url"			: "images/docker.png"
}}}

[1]: https://www.dotcloud.com/
[2]: https://www.heroku.com/
[3]: https://www.openshift.com/
[4]: http://venturebeat.com/2014/01/21/dockers-open-source-bet-pays-off-with-15m-round/
[5]: http://venturebeat.com/2013/12/23/how-docker-turned-intricate-linux-code-into-developer-pixie-dust/
[6]: http://www.vmware.com/co
[7]: https://www.virtualbox.org/
[8]: https://linuxcontainers.org/
[9]: https://github.com/dotcloud/docker

## Introducción

En esta primera entrada intentaré dar una introducción teórica a Docker. En las siguientes entradas profundizaré sobre algunos de los aspectos de Docker que facilitan el despliegue de aplicaciones en cualquier ambiente: desarrollo, puesta en escena y producción. Específicamente describiré el despliegue de una aplicación <strong>NodeJS</strong> que utiliza una base de datos <strong>MongoDB</strong>.

## Historia

Docker nació en 2013 como un proyecto aislado dentro de [dotCloud][1], una empresa en San Francisco, Estados Unidos en el año 2013, que se dedica al igual que <strong>[Heroku][2]</strong> y <strong>[OpenShift][3]</strong> a proveer servicios PaaS. Aunque nació como un proyecto aislado ha tenido bastante acogida; tanto que en Marzo de este año (tan sólo un año después de haberse fundado) alcanzó cifras sorprendentes en GitHub: <strong> 1.700 </strong> forks, <strong>10.700</strong> estrellas y <strong>400</strong> contribuidores. 

Docker en menos de dos años ha alcanzado <strong>26 millones de dólares</strong> en [inversión][4] (la sacaron del estadio). A su vez grandes compañías como Ebay han empezado a usarlo como estándar de facto para el despliegue de sus aplicaciones ([How Docker turned intricate Linux code into developer pixie dust][5])

### ¿Por qué tanta plata?

Hasta hace un tanto los desarrolladores sólo contabamos con las máquinas virtuales para compartir los ambientes sobre los cuales desarrollabamos nuestras aplicaciones. Lo que ocurría normalmente es que un desarrollador configuraba una máquina virtual y la compartía con el resto de su equipo de desarrollo para que estos se olvidaran de las configuraciones subyacentes necesarias para que la aplicación corriera. Del mismo modo cuando se salía a producción se tenía que replicar el ambiente y seguramente añadirle mejoras para el "excelso" funcionamiento de la aplicación. Estas máquinas virtuales normalmente son molestas, porque no sólo se comparte la <strong>aplicación</strong> (que debería ser lo estrictamente necesario) sino que se comparte el sistema operativo huésped y otras dependencias que se requieran.

Un ambiente de estos que describo es muy caro en términos computacionales y en términos monetarios (si usted paga licencias). Sistema Hipervisor + Sistema Huésped + Dependencias + Aplicación (Ver Fig 1), es lo que un desarrollador necesitaría para replicar el ambiente de otro. 


<figure style='text-align:center; margin: 50px'>
	<img src='https://s3-us-west-2.amazonaws.com/ftrianakast/personal-web/images/virtual_machine.png', alt='Virtual Machine', class='shadow'></img>
	<figcaption>Fig 1: Máquina Virtual</figcaption>
</figure>


Oracle con [Virtual Box][7], y [VMware][8] eran dueños del negocio hasta hace poco. Hacia los 2000's, proveniente de la comunidad Linux aparecieron lo que se llaman los contenedores LXC. Un contenedor LXC no es más que una manera de aislar un proceso de otros en un sistema Linux. Para ello los LXC utilizan <strong>Cgroups</strong> y <srong>__namespaces__</strong> (probablemente sean más las cosas que permitan hacer esto). Estás características permiten que los contenedores compartan el mismo kernel pero puedan convivir aisladamente y restringirse a una cantidad definida de recursos de CPU, memoria([Ver https://linuxcontainers.org/][8]). 

Docker es una capa construida sobre LXC (precisamente para aquellos como yo que no entendemos mucho sobre los detalles técnicos del kernel Linux) que simplifica el proceso de empaquetar una aplicación dentro de un contenedor, de distribuirlo, de construir nuevos contenedores sobre éste y de correrlo en cualquier parte: Cloud, localmente (probablemente correría hasta en la lavadora de mi abuelita: <strong>filosofía JAVA</strong>). Docker vendría a representarse de la siguiente forma:


<figure style='text-align:center; margin: 50px'>
	<img src='https://s3-us-west-2.amazonaws.com/ftrianakast/personal-web/images/docker.png', alt='Docker', class='shadow'></img>
	<figcaption>Fig 2: Docker</figcaption>
</figure>

La razón de porque Docker ha adquirido tanta inversión en tan poco tiempo, está entonces en el hecho de que a diferencia de las máquinas virtuales los contenedores corren dentro de un sistema operativo único y pueden llegar a compartir los mismos binarios. Además de la optimización en espacio a la que me refiero, la portabilidad mejora otro tanto: con las VMs cada modificación en una aplicación requiere la creación de una nueva máquina virtual mientras que con los contenedores lo único que usted copia es el __delta__ que se presenta entre el viejo y el nuevo estado de la aplicación.

## Cierre

Docker se convierte claramente en una alternativa excelente para las máquinas virtuales que en tan sólo 2 años a acaparado la atención de una buena parte del mercado. Algunos podrían considerar que su principal desventaja es que sólo funciona sobre sistemas operativos construidos sobre el kernel de Linux, sin embargo estoy seguro de que los muchachos de Docker Inc trabajarán para llevar la solución a Windows prontamente, o tal vez lo pueda hacer usted antes que ellos ([puede partir de acá][9]).

Este primer post es sólo un abrebocas y hace parte del primer paso en la experimentación a la que estará sometido este blog. En la próxima entrada intentaré aterrizar un ejemplo concreto de uso de docker. Un saludo.  