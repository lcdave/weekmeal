<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "styles/globalSettings.scss";
  @import "~foundation-sites/scss/foundation.scss";
  @include foundation-button;
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
