{{{
    "title"    			: "Desenredando conceptos: SOA, Rest, SOAP y otros",
    "Category"			: "Computer Science",
    "tags"     			: [ "SOA", "REST", "SOAP"],
    "date"     			: "10-24-2014",
    "lang"     			: "es",
    "description"       : "",
    "img_url"			: "images/SOA_logo.jpg"
}}}

[1]: http://www.viewpoints-and-perspectives.info/
[2]: http://users.ece.utexas.edu/~perry/work/papers/swa-sen.pdf
[3]: http://es.wikipedia.org/wiki/Protocolo_de_comunicaciones
[4]: http://es.wikipedia.org/wiki/Object_Management_Group
[5]: http://www.omg.org/attachments/pdf/OMG-and-the-SOA.pdf
[6]: http://es.wikipedia.org/wiki/Roy_Fielding
[7]: http://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm
[8]: http://www.crummy.com/writing/speaking/2008-QCon/act3.html
[9]: http://developer.netflix.com/docs/REST_API_Conventions
[10]: http://es.wikipedia.org/wiki/Java_Remote_Method_Invocation
[11]: http://es.wikipedia.org/wiki/CORBA
[12]: http://ftrianakast.herokuapp.com/

## ¿Por qué del enredo?

En el estado actual del software es fácil perderse entre el mar de conceptos que bombardean desde múltiples sitios: desde la industria, desde la academia, los gurús de software, etc. Personalmente cuando intenté aprender los conceptos de SOA, REST, web services, SOAP y demás, me encontre con la dificultad de hallar una fuente que distinguiera y relacionara claramente estos conceptos.

Por ejemplo me encontré con múltiples blogs en dónde se hacen comparaciones del tipo __SOAP__ vs __REST__. Si uno lee entre líneas es una comparación del tipo manzanas con peras; en este caso específico se está comparando un __protocolo de comunicación__ contra un __estilo arquitectural__.

Intuyo que gran parte de la confusión se debe a que en la industria hay un afán por promover la implementación en __sí misma__, sobre el entendimiento de los conceptos sobre los que se edifican las demás cosas. Pareciera que es el mismo mal que sufren quienes aprenden a hacer __cálculos__ sin preocuparse por la naturaleza de los conceptos __matemáticos__. En este post trataré de construir una base de conceptos y relaciones que me permitan tanto a mí como a ustedes sentirnos un poco menos enredados.

## Metodología y conceptos previos

Para tratar de dilucidar las diferencias y relaciones iré explicando concepto por concepto y a su vez edificando un gráfico que expresará las relaciones entre dichos conceptos. Dicho gráfico no intentará apegarse a ningún estándar por lo que será del tipo __ad_hoc__, aunque utilizaré notación __UML__ para expresar ciertas relaciones.

Las siguientes son las convenciones que utilizaré en el gráfico:

<figure style='text-align:center; margin: 50px'>
    <img src='https://dl.dropboxusercontent.com/u/21608465/Personal%20Web/software_concepts.png', alt='Definiciones', class='shadow'></img>
    <figcaption>Fig 1: Definiciones</figcaption>
</figure>

1. __Estilo Arquitectural__: "Un estilo arquitectural expresa una estructura fundamental o un esquema organizacional de software" [Rozanski N, Woods E][1]. Ese __esquema organizacional__ se describe en términos de cuatro cosas: elementos, conectores, configuraciones y restricciones. Esas cuatro cosas fueron definidos en un texto fundacional de la disciplina de __Arquitectura de Software__ en 1992: [Foundations of the Study of Software Architecture][2]. En los gráficos subsiguientes un estilo arquitectural estará representado por una caja verde.

2. __Servicio__: Esta caja de color naranja me permitirá definir los tipos y subtipos de servicios de software que se pueden dar dentro de una __SOA__ (Service Oriented Architecture).

3. __Protocolo de comunicación__: "Es un conjunto de reglas y normas que permiten que dos o más entidades de un sistema de comunicación se comuniquen entre ellos para transmitir información por medio de cualquier tipo de variación de una magnitud física". [Wikipedia][3] 

4. __Concepto__: Con concepto me refiero a definiciones en sí mismas. En este caso me interesan sólo tres conceptos: estilo arquitectural, servicio y protocolo de comunicación.


### Desenredando la pita: paso 1, SOA

__SOA__ es un estilo arquitectural. Siguiendo nuestra definición anterior de __estilo arquitectural__ uno tendría que describir los __elementos__, __conectores__, __configuraciones__ y __restricciones__ para lograr entender SOA. Para simplificar las cosas intentaré definir los pilares de SOA.

Dentro de los __elementos__ de este estilo arquitectural a mí entender dos de ellos son fundamentales:

1. __Proceso de negocio__: es un conjunto de tareas que se relacionan lógicamente para conseguir un resultado bien definido dentro de un negocio. Por ejemplo uno puede pensar en el proceso de: __comprar libro__ en un __ecommerce__. Si no estoy mal aquí hay lenguajes como __BPMN__ que permiten describir un __proceso de negocio__.

2. __Servicio__: Esos son los que implementamos los __desarrolladores__ normalmente y corresponden a definiciones de software concretas de los conceptos de negocio.

De los servicios es importante mencionar las siguientes __restricciones__:

- Son independientes
- No dependen del contexto o del estado de otros servicios
- Cumplen un objetivo de negocio predeterminado

No pretendo dar una definición exacta de __SOA__ que de por sí es bien ambigua. Por tanto me detendré acá y recomiendo este [documento][5] corto del [Object Management Group][4].

Como postule en la metodología después de definir el concepto tendría que definir el gráfico correspondiente. En este caso sólo me interesa el concepto de __servicio__ dado el propósito de este post.

<figure style='text-align:center; margin: 50px'>
    <img src='https://dl.dropboxusercontent.com/u/21608465/Personal%20Web/soa_step1.png', alt='Software Ontology 1', class='shadow'></img>
    <figcaption>Fig 2: Desenredando, paso 1</figcaption>
</figure>

### Desenredando la pita: paso 2, REST

__REST__ es un estilo arquitectural. REST se originó con la tesis doctoral de [Roy fielding][6] en el __2000__. El capítulo específico de su tesis donde introduce __REST__ puede ser visto [acá][7]. Si seguimos la definición de estilo arquitectural necesitamos describir los __elementos__, __conectores__, __configuraciones__ y __restricciones__. De nuevo no voy a pretender ennumerarlos en su totalidad. Dentro de los __elementos__ encontramos:

1. __Recurso__: Si para __SOA__ el elemento clave es el __servicio__ para REST lo es el __recurso__. Según Roger Fielding un recurso puede ser cualquier información que pueda ser nombrada: un documento, una imágen o un objeto no virtual (como las personas). Es importante decir que un recurso es un concepto que se mapea a un conjunto de entidades o valores y no al revés. Es decir que un recurso durante su tiempo de vida puede adquirir la cara de diferentes entidades o valores siempre y cuando estos valores y entidades mantengan la misma semántica del recurso. Un ejemplo claro que da Roger es el siguiente: "La versión preferida del paper de un autor" es un recurso distinto del que se refiere a "El paper en la conferencia X"; en algún punto ambos recursos pueden referirse al mismo __paper__ pero no dejan por eso de ser distintos. Por último un recurso tiene un __identificador__.

2. __Representación__: Permiten capturar el estado del recurso en un momento dado del tiempo y transportarlo por los diferentes componentes de software. Una representación son datos acompañados de metadatos e identificados con un media type. Ejemplos: __Documento HTML__, __imágen jpeg__.

Ahora bien dentro de las __restricciones__ que debe expresar una arquitectura que se ajuste a este __estilo arquitectural__ encontramos las siguientes:

1. __Cliente Servidor__: Es simplemente la separación que todos conocemos.

2. __Sin estado__: Esta restricción es añadida a la comunicación entre el cliente y el servidor, e indica que los mensajes que envíe el cliente deben tener toda la información necesaria para que el servidor pueda entender el __request__.

3. __Cacheable__: Significa que las respuestas de un servidor deben tener la posibilidad de ser marcadas como cacheables o no. Si la respuesta es cacheale entonces el cliente tendrá la posibilidad de usar esa respuesta en el futuro.

4. __Interfaz uniforme__: Debe haber una interfaz común que permita a los múltiples componentes de software desplegados a través de la red, comunicarse fácilmente.

Aquí va el gráfico de nuestra metodología:

<figure style='text-align:center; margin: 50px'>
    <img src='https://dl.dropboxusercontent.com/u/21608465/Personal%20Web/soa_step2.png', alt='Software Ontology 2', class='shadow'></img>
    <figcaption>Fig 3: Desenredando, paso 2</figcaption>
</figure>

Por último hablaré del modelo de madurez de Richardson que se refiere a REST y que me servirá en los apartados siguientes para desenredar los demás conceptos. Debo aclarar que aquí siento que hay un vacío en el hecho de que Richardson debió llamarle "modelo de madurez de la implementación más común del estilo arquitectural REST"; ya verán porque lo digo.


<figure style='text-align:center; margin: 50px'>
    <img src='https://dl.dropboxusercontent.com/u/21608465/Personal%20Web/richardson_maturity_model.png', alt='Richardson Maturity Model', class='shadow'></img>
    <figcaption>Fig 4: Modelo de Madurez de Richardson</figcaption>
</figure>

- Nivel 0: En palabras de [Richardson][8]: una __URI__, un método __HTTP__. Aquí ya empieza uno a intuir que Richardson habla del  "modelo de madurez de la implementación más común del estilo arquitectural REST". El estilo arquitectural de __Fielding__ no está ligado a ningún protocolo de comunicación. __Richardson__ lo liga a __HTTP__ de entrada.

- Nivel 1: Empiezan a manejarse muchas URIS y el concepto de __recurso__ aparece por primera vez en la arquitectura que estamos definiendo.

- Nivel 2: Múltiples URIs, cada una soportando múltiples métodos HTTP. Se presenta el mismo problema conceptual del Nivel 0. Es importante enunciar que muchos de los que desarrollamos (me incluyo) solamente hemos llegado hasta este nivel.

- Nivel 3: Eń el nivel de __Hipermedia__ los __recursos__ exponen sus propias capacidades e interconexiones. Aquí no quiero pecar por ignorante. Sólo puedo mencionar que muy pocos sistemas exponen este comportamiento: [__Netflix__][8] es uno de ellos.

Si bien __Richardson__ liga su modelo de madurez a __HTTP__; pasando por encima de las diferencias conceptuales que expone __Fielding__ en su tesis, este modelo es muy práctico y a mí parecer aterriza (o por lo menos nos pone a discutir) muchos de los elementos, conectores, configuraciones y restricciones de este __estilo arquitectural__. 


### Desenredando la pita: paso 3, Servicios, Web Services (SOAP Services, HTTP Services, REST Services)

En el primer paso del desenredo deje "volando" el concepto de __servicio__ de SOA intencionalmente. En este apartado intentaré desenredarlo. 

Estamos acostumbrados a escuchar los __Web Services__ como sinónimo de __SOA__. De nuevo esta comparación no esta muy bien vista. Hay dos puntos que creo cierran esta discusión:

1. Los Web Services no son la única implementación de SOA. Uno podría pensar en SOA usando cosas viejas como [__RMI__][10] o [__CORBA__][11]. La verdad es que yo soy medio pelado para estás tecnologías y nunca alcancé a utilizarlas.
 
2. Una aplicación que exponga Web Services no es necesariamente parte de un sistema SOA.   

Entendiendo entonces que los __Web Services__ no son la única forma de implementación de SOA, uno podría decir que al menos si son un tipo de __servicio__. Nuestro gráfico va así:

<figure style='text-align:center; margin: 50px'>
    <img src='https://dl.dropboxusercontent.com/u/21608465/Personal%20Web/soa_step3.png', alt='Software Ontology 3', class='shadow'></img>
    <figcaption>Fig 5: Desenredando, paso 3</figcaption>
</figure>

Uno podría clasificar los Web Services en 3:

1- __SOAP Web Services__: No se porque solamente le llaman SOAP web services. Está perfecto que un cliente invoca este tipo de Web Services usando el protocolo de comunicación __SOAP__, sin embargo entiendo que hay más cosas por detrás cuando nos referimos a los __"SOAP Web Services"__. Por ejemplo, cuando nos referimos a estos también hablamos de __WSDLs__ como un lenguaje estándar para describir los servicios y en algunos casos hablamos de los __UDDI__ o registron donde se publican los mismos. No estoy muy seguro de la razón o probablemente hay algo oculto que no estoy contemplando. Si este agradecería mucho que me dijeran [ftrianakast@gmail.com][12].  

2- __RESTful Web Services__: Yo creo que aquí es donde está el enredo más grande. ¿Coma sí que una arquitectura basada en __SOA__: que es un __estilo arquitectural__, se puede implementar con __Web services__ que se ajustan al __estilo arquitectural__ REST?. ¡A bueeeeno!. 

Creo que __Fielding__ en su [__tesis__][7] me ayudo a aclarar un poco esto. Cuando uno define una arquitectura de software no esta para nada restringido a solamente un __estilo arquitectural__. Uno puede generar __estilos arquitecturales híbridos__ utilizando las __restricciones__ (uno de los elementos que define un __estilo arquitectural__) de unos y otros __estilos arquitecturales__. El día de mañana si existe un __estilo arquitectural__ llamado __Chapulín__ a alguien se le podría ocurrir crear un __estilo arquitectural__ del tipo SOA-REST-Chapulin. 

En este caso específico __SOA__ se aprovecha de las __restricciones__ de __REST__: sin estado, cacheable e interfaz uniforme (se supone que en los __SOAP Web Services__ esto de interfaz uniforme también es cierto, pero no tan simple). Por último si retomamos el modelo de madurez de Richardson, los __Restful Web Services__ deberían ser únicamente aquellos que se ubiquen dentro del nivel 3 de madurez, es decir deberían implementar __hipermedia__.

3- __HTTP Services__:

Los HTTP Services son un intento por hacer __Restful Web Services__ pero que se quedan en eso: en particular sólo llegan hasta el Nivel 2 del modelo de madurez de __Richardson__. No deberían ser una categoría, pero los menciono porque son los que la mayoría hemos implementado (yo nunca he implementado __RESTful web services__, siempre llego hasta el Nivel 2).

Nuestro diagrama va así:

<figure style='text-align:center; margin: 50px'>
    <img src='https://dl.dropboxusercontent.com/u/21608465/Personal%20Web/soa_step4.png', alt='Software Ontology 4', class='shadow'></img>
    <figcaption>Fig 6: Desenredando, paso 4</figcaption>
</figure>


### Desenredando la pita: paso 4, protocolos de comunicación

Finalmente están los protocolos de comunicación. Está claro que deben ser distintos a los demás conceptos definidos con anterioridad. "Uno podría tener servicios __Rest__ sobre __SOAP__" es una frase que alguien le parecería extraña, pero que dados los argumentos anteriores se puede ver que esto es posible. Finalmente el gráfico nos queda así:


<figure style='text-align:center; margin: 50px'>
    <img src='https://dl.dropboxusercontent.com/u/21608465/Personal%20Web/soa_step5.png', alt='Software Ontology 5', class='shadow'></img>
    <figcaption>Fig 7: Desenredando, paso 5</figcaption>
</figure>

## Conclusión

Espero habernos ayudado a entender un poco mejor las relaciones y significados de todos estos conceptos. Como nota final sería bueno establecer una base de conocimiento (__ontología__) de nuestra área por lo menos para no perdernos fácilmente. En una parte de esa ontología se podría incluir los conceptos expresados en este post. A mi parecer sería de gran ayuda educativa. Por último si me enrede en el post de desenredamiento anterior, les agradecería mucho si me ayudan a desenredarme. [ftrianakast@gmail.com][12]
