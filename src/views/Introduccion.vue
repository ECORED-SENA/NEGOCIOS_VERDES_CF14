<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="flip-up") La negociación es un proceso de aprendizaje que invita al reconocimiento de las emociones propias y ajenas, produce la necesidad de aprender novedosas maneras de comunicación, además de autorregular los sentimientos y pensar sobre las circunstancias que llevaron a ocasionar un problema, maltrato, agresión o desequilibrio en las relaciones interpersonales, ya sea entre los miembros de una familia, en una sociedad educativa o en un ambiente laboral. 

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10
        .cajon.color-primario.p-4
          .row.align-items-center
            .col-lg-3.mb-4.mb-lg-0
              img.img-a(src='@/assets/curso/intro/img_1.png', alt='Texto que describa la imagen')
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 La negociación se apoya en el acercamiento de dos partes opuestas, hasta que alcanzan una postura aceptable para las dos, es una discusión estratégica que resuelve un problema de una manera que ambas encuentran aceptable.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
