interface Song {
    artist: string;
    songTitle: string;
}

const originalData: Song = {
    artist: "John Doe",
    songTitle: "Dream Big"
};

const updatedData: Song = {
    ...originalData,
    artist: "Sekar Qynasih",
    songTitle: "Kaya Raya"
};

console.log(updatedData);