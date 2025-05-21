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

async function getData() {
  try {
    const infoJSON = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
    const kelvinTemp = await infoJSON.main[1]
    const weatherImage = await infoJSON. weather[4]
    console.log(jsonData)
    const celsiusTemp = kelvinTemp + 273.75

    document.getElementById("answer1").innerHTML = "<p>" + celsiusTemp + "</p>"
    document.getElementById("answer2").innerHTML = "<p>" + weatherImage + "</p>"
  }catch (error) {
  }
}