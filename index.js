import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
        
        // Destructure joke data
        const { joke, setup, delivery } = response.data;

        // Log the relevant data
        if (joke) {
            console.log(joke);
            res.render("index.ejs", { content: joke });
        } else {
            console.log(setup);
            console.log(delivery);
            res.render("index.ejs", { content: `${setup} ${delivery}` });
        }
    } catch (error) {
        console.error("Error fetching joke:", error);
        res.status(500).send("An error occurred while fetching the joke.");
    }
});

app.get("/submit", async (req, res) => {
    try {
        const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
        
        // Destructure joke data
        const { joke, setup, delivery } = response.data;

        // Log the relevant data
        if (joke) {
            console.log(joke);
            res.render("index.ejs", { content: joke });
        } else {
            console.log(setup);
            console.log(delivery);
            res.render("index.ejs", { content: `${setup} ${delivery}` });
        }
    } catch (error) {
        console.error("Error fetching joke:", error);
        res.status(500).send("An error occurred while fetching the joke.");
    }
});


app.listen(port, () => {
    console.log(`You're on ${port} port!!`);
})