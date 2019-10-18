<template>
  <v-container>
    <h2>Members</h2>
    <v-form
      ref="form"
      v-model="valid"
    >
      <h3>Add a new member</h3>
      <v-row v-if="errors.length">
        <strong>Please correct the following errors:</strong>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
      </v-row>

      <v-row>
        <v-col class="pr-4">
          <v-text-field
            id="input-name"
            label="Name"
            type="text"
            outlined
            v-model="name"
            required
            :rules="nameRules"
            :counter="maxNameLength"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="pr-4">
          <v-text-field
            id="input-age"
            label="Age"
            type="number"
            outlined
            v-model="age"
            required
            min="0"
            :rules="ageRules"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="pr-4">
          <v-btn
            @click="validateAndSubmit"
          >Submit</v-btn>
        </v-col>
      </v-row>

    </v-form>

    <v-row>
      <v-col class="pr-4">
        <h3>All members</h3>
        <v-simple-table id="members">
          <thead>
            <th class="text-left">Name</th>
          </thead>
          <tbody>
            <tr v-for="member in members" v-bind:key="member.name">
              <td>{{ member.name }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      maxNameLength: 2,
      errors: [],
      lazy: false,
      valid: false,
      name: '',
      age: null,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= this.maxNameLength) || `Name must be ${this.maxNameLength} characters or less`,
      ],
      ageRules: [
        v => !!v || 'Age is required',
        v => (v && this.age > 0) || 'You must be be at least 1 year old',
      ],
      members: null,
    };
  },
  mounted() {
    axios.get('/members').then((result) => {
      this.members = result.data;
    });
  },
  methods: {
    validateAndSubmit() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
  },
};
</script>
