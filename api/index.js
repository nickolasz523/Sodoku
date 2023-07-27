const axios = require("axios")
const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs")
require("dotenv").config()

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/public", "index.html"))
})

app.get("/app.js", (req, res) => {
	res.sendFile(path.join(__dirname + "/public", "app.js"))
})

app.get("/styles.css", (req, res) => {
	res.sendFile(path.join(__dirname + "/public", "styles.css"))
})

app.get("/think", (req, res) => {
	res.send("think")
})

app.get("/board", (req, res) => {
	const options = {
		method: "GET",
		url: "https://sudoku-generator1.p.rapidapi.com/sudoku/generate",
		params: { difficulty: "easy" },
		headers: {
			"X-RapidAPI-Key": process.env.API_KEY,
			"X-RapidAPI-Host": "sudoku-generator1.p.rapidapi.com",
		},
	}

	axios
		.request(options)
		.then(function (response) {
			res.json(response.data)
		})
		.catch(function (error) {
			console.error(error)
		})
})
module.exports = app
