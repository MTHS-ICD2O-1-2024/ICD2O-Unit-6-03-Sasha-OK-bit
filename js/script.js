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
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=38.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
    const infoJSON = await fetch(url);
    const JSONdata = await infoJSON.json();

    const kelvinTemp = JSONdata.main.temp;
    const weatherImage = JSONdata.weather[0].icon;

    const iconUrl = "https://openweathermap.org/img/wn" + weatherImage + "@2x.png";
    document.getElementById("answer2").src = iconUrl;

    document.getElementById("answer1").innerHTML = (kelvinTemp - 273.15).toFixed(0) + ""+ "C";
  }catch (error) {
    console.log(error);
  }
}