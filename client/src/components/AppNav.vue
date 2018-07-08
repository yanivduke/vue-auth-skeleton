<template>
  <content>
    <section class="msg">
      <div>
      </div>
      <menu>
        <label for="trigger">
          <input id="trigger" type="checkbox" />
          <section class="drawer-list">
            <ul>
              <li><a href="#">משתמשים</a></li>
              <li><a href="#">קבוצות</a></li>
              <li><a href="#">משימות</a></li>
              <li><a href="#">הגדרות</a></li>
            </ul>
          </section>
          <hamburger>
            <i></i>
            <text>
              <close>close</close>
              <open>menu</open>
            </text>
          </hamburger>
        </label>
      </menu>
    </section>
  </content>
</template>

<script>
export default {

  name: "v-appnav",
  
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html { font-family: 'Lato', sans-serif; }

  body {
    margin: 0;
    overflow-x: hidden;
    height: 100vh;
    width: 100vw;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .msg {
    font-family: 'Pacifico', cursive;
    font-size: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    align-items: center;
    color: #FEFEFE;
    background-color: #1184F0;
  }

  menu, menu label {
    position: absolute;
    top: 0;
    right: 0;
  }

  menu { margin: 0; }

  menu input[type=checkbox] { display: none; }

  menu input[type=checkbox]:checked + .drawer-list {
    transform: translatex(0);
    border-bottom-left-radius: 0;
  }

  menu input[type=checkbox]:checked + .drawer-list li { transform: translatex(0); }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(1) { transition: transform 0.5s 0.02s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(2) { transition: transform 0.5s 0.04s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(3) { transition: transform 0.5s 0.06s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(4) { transition: transform 0.5s 0.08s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(5) { transition: transform 0.5s 0.1s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(6) { transition: transform 0.5s 0.12s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(7) { transition: transform 0.5s 0.14s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(8) { transition: transform 0.5s 0.16s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(9) { transition: transform 0.5s 0.18s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(10) { transition: transform 0.5s 0.2s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(11) { transition: transform 0.5s 0.22s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(12) { transition: transform 0.5s 0.24s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(13) { transition: transform 0.5s 0.26s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(14) { transition: transform 0.5s 0.28s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(15) { transition: transform 0.5s 0.3s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(16) { transition: transform 0.5s 0.32s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(17) { transition: transform 0.5s 0.34s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(18) { transition: transform 0.5s 0.36s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(19) { transition: transform 0.5s 0.38s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(20) { transition: transform 0.5s 0.4s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(21) { transition: transform 0.5s 0.42s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(22) { transition: transform 0.5s 0.44s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(23) { transition: transform 0.5s 0.46s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(24) { transition: transform 0.5s 0.48s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(25) { transition: transform 0.5s 0.5s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(26) { transition: transform 0.5s 0.52s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(27) { transition: transform 0.5s 0.54s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(28) { transition: transform 0.5s 0.56s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(29) { transition: transform 0.5s 0.58s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(30) { transition: transform 0.5s 0.6s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(31) { transition: transform 0.5s 0.62s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(32) { transition: transform 0.5s 0.64s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(33) { transition: transform 0.5s 0.66s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(34) { transition: transform 0.5s 0.68s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(35) { transition: transform 0.5s 0.7s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(36) { transition: transform 0.5s 0.72s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(37) { transition: transform 0.5s 0.74s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(38) { transition: transform 0.5s 0.76s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(39) { transition: transform 0.5s 0.78s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(40) { transition: transform 0.5s 0.8s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(41) { transition: transform 0.5s 0.82s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(42) { transition: transform 0.5s 0.84s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(43) { transition: transform 0.5s 0.86s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(44) { transition: transform 0.5s 0.88s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(45) { transition: transform 0.5s 0.9s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(46) { transition: transform 0.5s 0.92s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(47) { transition: transform 0.5s 0.94s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(48) { transition: transform 0.5s 0.96s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(49) { transition: transform 0.5s 0.98s ease; }

  menu input[type=checkbox]:checked + .drawer-list li:nth-child(50) { transition: transform 0.5s 1s ease; }

  menu input[type=checkbox]:checked + .drawer-list li a { padding-right: 15px; }

  menu input[type=checkbox]:checked ~ hamburger > i {
    background-color: transparent;
    transform: rotate(90deg);
  }

  menu input[type=checkbox]:checked ~ hamburger > i:before { transform: translate(-50%, -50%) rotate(315deg); }

  menu input[type=checkbox]:checked ~ hamburger > i:after { transform: translate(-50%, -50%) rotate(-315deg); }

  menu input[type=checkbox]:checked ~ hamburger close {
    color: #FEFEFE;
    width: 100%;
  }

  menu input[type=checkbox]:checked ~ hamburger open {
    color: transparent;
    width: 0;
  }

  menu .drawer-list {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    transform: translate(100vw, 0);
    /* ie workaround */
    -ms-transform: translatex(-100vw);
    box-sizing: border-box;
    pointer-events: none;
    padding-top: 125px;
    transition: width 475ms ease-out, transform 450ms ease, border-radius .8s .1s ease;
    border-bottom-left-radius: 100vw;
    background-color: #3d81c0;
    background-color: rgba(13, 97, 176, 0.8);
  }
  @media (min-width: 768px) {
    menu .drawer-list { width: 25vw; }
  }

  menu .drawer-list ul {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: auto;
    overflow-x: hidden;
    pointer-events: auto;
  }

  menu .drawer-list li {
    list-style: none;
    text-transform: uppercase;
    pointer-events: auto;
    white-space: nowrap;
    box-sizing: border-box;
    transform: translatex(100vw);
    /* ie workaround */
    -ms-transform: translatex(-100vw);
  }

  menu .drawer-list li:last-child { margin-bottom: 2em; }

  menu .drawer-list li a {
    text-decoration: none;
    color: #FEFEFE;
    text-align: center;
    display: block;
    padding: .5rem;
    font-size: 1.2em;
  }
  @media (min-width: 768px) {
    menu .drawer-list li a {
      font-size: 1rem;
      text-align: right;
    }

    menu hamburger {
      height: 35px;
      width: 35px;
    }
  }

  menu .drawer-list li a:hover {
    cursor: pointer;
    background-color: #88c2f8;
    background-color: rgba(17, 132, 240, 0.5);
  }

  menu hamburger {
    position: absolute;
    display: block;
    top: 20px;
    right: 20px;
  }

  menu hamburger:hover { cursor: pointer; }

  menu hamburger text close, menu hamburger text open {
    text-transform: uppercase;
    font-size: .8em;
    align-text: center;
    position: absolute;
    transform: translateY(50px);
    text-align: center;
    overflow: hidden;
    transition: width .25s .35s, color .45s .35s;
  }

  menu hamburger text close {
    color: transparent;
    right: 0;
    width: 0;
  }

  menu hamburger text open {
    color: #FEFEFE;
    width: 100%;
  }

  menu hamburger > i {
    position: absolute;
    width: 100%;
    height: 3px;
    top: 50%;
    background-color: #FEFEFE;
    pointer-events: auto;
    transition-duration: .35s;
    transition-delay: .35s;
  }

  menu hamburger > i:before, menu hamburger > i:after {
    position: absolute;
    display: block;
    width: 100%;
    height: 3px;
    left: 50%;
    background: #FEFEFE;
    content: "";
    transition: transform 0.35s;
    transform-origin: 50% 50%;
  }

  menu hamburger > i:before { transform: translate(-50%, -14px); }

  menu hamburger > i:after { transform: translate(-50%, 14px); }

  @media only screen and (max-width: 1440px) {
    menu hamburger {
      height: 35px;
      width: 40px;
    }
  }

  @media only screen and (max-width: 360px) {
    menu hamburger {
      height: 22px;
      width: 30px;
    }
  }

  
</style>
