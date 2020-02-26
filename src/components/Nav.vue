<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <!-- <b-navbar-brand href="#">WELCOME</b-navbar-brand> -->
      <div style="font-size: 2rem;">
        <b-icon icon="house-fill" class="border rounded" variant="warning"></b-icon>
      </div>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav right>
          <!-- <b-nav-item href="/App" >HOME</b-nav-item> -->
          <b-nav-item href="/Profile">PROFILE</b-nav-item>
          <b-nav-item href="/Picture">PICTURE</b-nav-item>
          <b-nav-item href="/Certificate">CERTIFICATE</b-nav-item>
          <!-- <b-nav-item href="#" >ABOUT</b-nav-item> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus"></style>