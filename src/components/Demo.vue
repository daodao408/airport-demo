<template>
  <div class="hello">
    <baidu-map class="map" :center="center" :zoom="zoom" :scroll-wheel-zoom="true" :mapStyle="mapStyle" @ready="handler"></baidu-map>
  </div>
</template>

<script>
export default {
  name: '',
  // props: {
  //   msg: String
  // },
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      mapStyle: {
        styleJson: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: {
              hue: '#007fff',
              saturation: 89
            }
          },
          {
            featureType: 'water',
            elementType: 'all',
            stylers: {
              color: '#ffffff'
            }
          }
        ]
      }
    }
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 114.306987
      this.center.lat = 30.549962
      this.zoom = 15
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  width: 100%;
  height: calc(100vh);
  .map {
    width: 100%;
    height: 100%;
  }
}
</style>
