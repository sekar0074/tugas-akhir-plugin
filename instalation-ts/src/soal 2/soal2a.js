"use strict";
const originalData = {
    artist: "John Doe",
    songTitle: "Dream Big"
};
const updatedData = Object.assign(Object.assign({}, originalData), { artist: "Sekar Qynasih", songTitle: "Kaya Raya" });
console.log(updatedData);
