<template>
<v-container fluid>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm12 md12>
        <div>
            <v-toolbar flat color="white">
            <v-toolbar-title>My CRUD</v-toolbar-title>
            <v-divider
                class="mx-2"
                inset
                vertical
            ></v-divider>
            <v-spacer></v-spacer>
            </v-toolbar>
            <v-data-table
            :headers="headers"
            :items="rows"
            hide-actions
            class="elevation-5"
            >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.user_id }}</td>
                <td class="text-xs-right">{{ props.item.is_approved }}</td>
                <td class="text-xs-right">{{ props.item.create_date }}</td>
                <td class="text-xs-right">{{ props.item.last_login }}</td>

                <td class="justify-center layout px-0">
                <v-icon
                    small
                    class="mr-2"
                    @click=""
                >
                    edit
                </v-icon>
                <v-icon
                    small
                    @click=""
                >
                    delete
                </v-icon>
                </td>
            </template>
            <template slot="no-data">
                <v-btn color="primary" @click="">Reset</v-btn>
            </template>
            </v-data-table>
        </div>
      </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import {USERS_SEARCH_REQUEST} from '../store/actions/users'
export default {
  name: 'users',
  data() {
    return {
      dialog: false,
      headers: [
        { text: 'user name', value: 'name' },
        { text: 'approved', value: 'name' },
        { text: 'created on', value: 'date' },
        { text: 'last login', value: 'date' },
      ],
    };
  },
  created() {
    this.$store.dispatch(USERS_SEARCH_REQUEST)
    .then(() => {
      console.log("rows fatched"); 
    }).catch(function(e) {
      console.log(e);
    })
  },
  computed:{
    rows () {
      return this.$store.state.users.rows
    },
  },
  
  methods: {
      
  }
}
</script>

<style scoped>

</style>