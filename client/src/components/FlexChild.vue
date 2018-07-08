<template>
  <div v-bind:style="initCSS">
    <slot/>{{flex}}
  </div>
</template>

<script>
export default {
  name: "flexchild",
  props: ["flex"],
  computed: {
    initCSS() {
      return "flex:" + this.flex + "; background-color: aquamarine;";
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
.t {
}
</style>
