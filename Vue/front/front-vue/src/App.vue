<template>
  <div>
    <!--INICIO NAVBAR -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container">
        <a class="navbar-brand order-md-last"
          >Crud Vue.js +progreSQL + node.js</a
        >
        <ul class="navbar-nav mr-auto"></ul>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Create New Employee

          </router-link>

        </li>
        
        <ul class="navbar-nav mr-auto"></ul>
        <li class="nav-item">
          <router-link class="nav-link" to="/list-employee">List All Employee

          </router-link>

        </li>
      </div>
      <!--FIM NAVBAR -->
    </nav>
      <div class="container mt-5">
      <router-view/>
      </div>
  </div>
 
</template>


