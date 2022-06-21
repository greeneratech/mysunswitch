<template>
    <v-app>
        <v-main style="margin:20px">
            <v-card class="text-center pa-5 mt-13 mx-auto" max-width=500px>
                <v-btn fab depressed color="#008140" class="white--text" x-large><v-icon>mdi-check</v-icon></v-btn>

                    <h1 class="my-5">Account verified successfully!</h1>

                    <p> You can now proceed to login to your account </p>

                    <v-btn to="/login" class="rounded-lg white--text" x-large color="#008140">Proceed</v-btn>
            </v-card>
        </v-main>
    </v-app>
</template>