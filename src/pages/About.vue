<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">

      <q-separator inset />
      <q-card-section>
        <div>
          <center>
            <q-icon name="face" /><br />
            <a href="https://gruessung.eu" style="text-decoration:none; color:black;" target="_blank">Alexander Gr&uuml;&szlig;ung</a>
            <br /><br />
            <q-icon name="info" /><br />
            Version 1.0
            <br /><br />
            <q-icon name="favorite" /><br />
            Vielen Dank für die Nutzung meiner kleinen App.
          </center>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'AboutIndex',
}
</script>
<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 400px
</style>