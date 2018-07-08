<template>
    <div>

	</div>
</template>

<script>
export default {
  name: 'component-name',
  props: {
    prop1: String,
    prop2: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      data1: '',
      data2: ''
    }
  },
  computed: {
    comp1() {},
    comp2() {}
  },
  methods: {
    func1() {

    },
    func2() {

    }
  },
  watch: {
    watch1(newVal, oldVal) {

    },
    Watch2(newVal, oldVal) {

    }
  },
  beforeCreate() {

  },
  created() {

  },
  beforeMount() {

  },
  mounted() {

  },
  beforeUpdate() {

  },
  updated() {

  },
  beforeDestroy() {

  },
  destroyed() {

  }
  
}
</script>

<style scoped>

</style>