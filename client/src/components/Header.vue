<template>
  <header dir="rtl">
    <section>
      <div id="logo">סמוס</div>
      <label for="toggle-1" class="toggle-menu">
        <ul>⋮</ul>
      </label>
      <input type="checkbox" id="toggle-1">
      <nav>
        <ul>
          <li><router-link to="/about"><i class="fa fa-user"></i>אודות</router-link></li>
          <li><router-link to="/services"><i class="fa fa-gears"></i>שירותים</router-link></li>
          <li><router-link to="/contact"><i class="fa fa-phone"></i>צור קשר</router-link></li>
          <li><router-link to="/logout"><i class="fa fa-phone"></i>יציאה</router-link></li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script>
export default {
  name: "v-header",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  section {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: table;
    position: relative;
  }

  h1 {
    margin:150px auto;
    display: table;
    font-size: 26px;
    padding: 40px 0px;
    text-align: center;
  }

  h1 span { font-weight: 500; }

  header {
    width: 100%;
    display: table;
    background-color: rgba(17, 132, 240, 0.5);
    margin-bottom: 50px;
  }

  #logo {
    float: right;
    font-size: 35px;
    text-transform: uppercase;
    color: #002e5b;
    font-weight: 700;
    padding: 15px 80px ;
  }

  nav {
    width: auto;
    float: left;
  }

  nav ul {
    display: table;
    float: left;
  }

  nav ul li { float: right; }

  nav ul li:last-child { padding-left: 0px; }

  nav ul li a {
    color: #002e5b;
    font-size: 18px;
    padding: 25px 20px;
    display: inline-block;
    transition: all 0.5s ease 0s;
  }

  nav ul li a:hover {
    background-color: #002e5b;
    color: rgba(17, 132, 240, 0.5);
    transition: all 0.5s ease 0s;
  }

  nav ul li a:hover i {
    color: rgba(17, 132, 240, 0.5);
    transition: all 0.5s ease 0s;
  }

  nav ul li a i {
    padding-right: 10px;
    color: #002e5b;
    transition: all 0.5s ease 0s;
  }

  .toggle-menu ul {
    display: table;
    width: 25px;
    font-size: 30px;
    padding: 10px 0px;
  }

  .toggle-menu ul li {
    width: 100%;
    height: 3px;
    background-color: #002e5b;
    margin-bottom: 4px;
  }

  .toggle-menu ul li:last-child { margin-bottom: 0px; }

  input[type=checkbox], label { display: none; }

  @media only screen and (max-width: 1440px) { 
    section { max-width: 95%; }
  }

  @media only screen and (max-width: 980px) {
    #logo { padding-right: 80px; }

    input[type=checkbox] {
      position: absolute;
      top: -9999px;
      right: -9999px;
      background: none;
    }

    input[type=checkbox]:fous {
      background:none;
    }

    label {
      float: left;
      padding: 8px 0px;
      display: inline-block;
      cursor: pointer;
    }

    input[type=checkbox]:checked ~ nav { display: block; }

    nav {
      display: none;
      position: absolute;
      left: 0px;
      top: 53px;
      background-color: #002e5b;
      padding: 0px;
      z-index: 99;
    }

    nav ul { width: auto; }

    nav ul li {
      float: none;
      padding: 0px;
      width: 100%;
      display: table;
    }

    nav ul li a {
      color: #FFF;
      font-size: 15px;
      padding: 10px 20px;
      display: block;
      border-bottom: 1px solid rgba(225,225,225,0.1);
    }

    nav ul li a i {
      color: rgba(17, 132, 240, 0.5);
      padding-right: 13px;
    }
  }

  @media only screen and (max-width: 568px) {
    h1 { padding: 25px 0px; }
    h1 span { display: block; }
  }

  @media only screen and (max-width: 480px) {
    section { max-width: 90%; }
  }

  @media only screen and (max-width: 360px) {
    h1 { font-size: 30px; }
    label { padding: 5px 0px; }
    #logo { font-size: 30px; }
    nav { top: 47px; }
  }

  @media only screen and (max-width: 320px) {
    h1 { padding: 20px 0px; }
  }

</style>
