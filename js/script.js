// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha Vorontsov
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

  if (navigator.serviceWorker) {
+   navigator.serviceWorker.register("/ICD2O-Unit-6-03-Sasha-OK-bit/sw.js",
  {
  scope: "/ICD2O-Unit-6-03-Sasha-OK-bit/",
    })
}

async function getdata() {
  try {
    const resultJSON = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
    const jsonData = await resultJSON.json()
    console.log(jsonData)
    const weatherData= jsonData.data[0]

    document.getElementById("answer1").innerHTML = "<p>" + weatherData + "</p>"
  }catch (error) {
    console.error(error)
  }
}