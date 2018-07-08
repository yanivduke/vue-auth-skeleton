<template>
  <div class="flex-container" v-bind:style="initCSS">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "flexcontainer",
  props: ["direction"],
  computed: {
    initCSS() {
      return "flex-direction:" + this.direction + ";"; //flex-direction: row | row-reverse | column | column-reverse;
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
.flex-container {
  display: flex;
  align-content: stretch;
  align-items:stretch;
  flex: 1 1 100%;
}

</style>
