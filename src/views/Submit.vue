<template>
  <v-container>
    <h1>Members</h1>
    <v-form ref="form" v-model="valid">
      <h3>Add a new member</h3>
      <v-row>
        <v-col class="pr-4">
          <v-text-field
            data-testid="input-name"
            label="Name"
            type="text"
            outlined
            v-model="name"
            :rules="nameRules"
            :counter="maxNameLength"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pr-4">
          <v-text-field
            data-testid="input-age"
            label="Age"
            type="number"
            outlined
            v-model="age"
            min="0"
            :rules="ageRules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pr-4">
          <v-btn data-testid="button-submit" @click="submit">Submit</v-btn>
        </v-col>
      </v-row>
    </v-form>

    <v-row>
      <v-col class="pr-4">
        <h2>All members</h2>
        <v-simple-table data-testid="members">
          <thead>
            <th class="text-left">Name</th>
            <th class="text-left">Age</th>
          </thead>
          <tbody>
            <tr v-for="member in members" v-bind:key="member.name">
              <td>{{ member.name }}</td>
              <td>{{ member.age }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      maxNameLength: 20,
      valid: false,
      name: "",
      age: null,
      nameRules: [
        v => !!v || "Name is required",
        v =>
          (v && v.length <= this.maxNameLength) ||
          `Name must be ${this.maxNameLength} characters or less`
      ],
      ageRules: [
        v => !!v || "Age is required",
        v => (v && this.age > 0) || "You must be be at least 1 year old"
      ],
      members: null
    };
  },
  mounted() {
    this.fetchMembers();
  },
  methods: {
    submit() {
      console.log("Someone pressed the submit button");
      const newMember = {
        name: this.name,
        age: this.age
      };
      this.members.push(newMember);
    },
    fetchMembers() {
      axios.get("/members").then(result => {
        this.members = result.data;
      });
    }
  }
};
</script>
