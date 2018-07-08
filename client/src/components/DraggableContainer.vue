<template>
  <div v-draggable v-bind:style="initCSS">
    <slot/>
  </div>
</template>

<script>
import { Draggable } from "draggable-vue-directive";
export default {
  directives: {
    Draggable
  },
  name: "draggablecontainer",
  computed: {
    initCSS() {
      return "background-color: blue, height: 100%; width: 100%";
    }
  },
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
