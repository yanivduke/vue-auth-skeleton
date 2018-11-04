<template>
  <div>
    main route
	</div>
</template>

<script>
import {USERS_SEARCH_REQUEST} from '../store/actions/users'
export default {
  name: 'component-name',
  props: {
    prop1: String,
    prop2: {
      type: String,
      required: false
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
    console.log("main created"); 
    this.$store.dispatch(USERS_SEARCH_REQUEST)
    .then(() => {
      console.log("rows fatched from main preload mechanism"); 
    }).catch(function(e) {
      console.log(e);
    })
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