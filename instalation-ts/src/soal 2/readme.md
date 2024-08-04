# Menggunakan Interface dan Spread Operator di TypeScript

Kode ini menunjukkan cara mendefinisikan sebuah interface dan menggunakan spread operator untuk memperbarui data dalam TypeScript.

## Interface `Song`

Interface adalah sebuah kontrak dalam TypeScript yang menentukan bentuk dari sebuah objek. Dalam contoh ini, kita mendefinisikan interface `Song` yang memiliki dua properti: `artist` dan `songTitle`.

```typescript
interface Song {
    artist: string;
    songTitle: string;
}

Objek originalData

Kita membuat sebuah objek originalData yang sesuai dengan interface Song.

typescript

const originalData: Song = {
    artist: "John Doe",
    songTitle: "Dream Big"
};

Spread Operator untuk Mengupdate Objek

Kita menggunakan spread operator (...) untuk membuat objek updatedData berdasarkan originalData, tetapi dengan beberapa perubahan pada propertinya.

typescript

const updatedData: Song = {
    ...originalData,
    artist: "Sekar Qynasih",
    songTitle: "Kaya Raya"
};

Dalam contoh ini, spread operator mengkopi semua properti dari originalData ke updatedData, kemudian kita mengganti nilai properti artist dan songTitle.

Berikut adalah file redmi.md yang menjelaskan kode TypeScript di atas:

markdown

# Menggunakan Interface dan Spread Operator di TypeScript

Kode ini menunjukkan cara mendefinisikan sebuah interface dan menggunakan spread operator untuk memperbarui data dalam TypeScript.

## Interface `Song`

Interface adalah sebuah kontrak dalam TypeScript yang menentukan bentuk dari sebuah objek. Dalam contoh ini, kita mendefinisikan interface `Song` yang memiliki dua properti: `artist` dan `songTitle`.

```typescript
interface Song {
    artist: string;
    songTitle: string;
}

Objek originalData

Kita membuat sebuah objek originalData yang sesuai dengan interface Song.

typescript

const originalData: Song = {
    artist: "John Doe",
    songTitle: "Dream Big"
};

Spread Operator untuk Mengupdate Objek

Kita menggunakan spread operator (...) untuk membuat objek updatedData berdasarkan originalData, tetapi dengan beberapa perubahan pada propertinya.

typescript

const updatedData: Song = {
    ...originalData,
    artist: "Sekar Qynasih",
    songTitle: "Kaya Raya"
};

Dalam contoh ini, spread operator mengkopi semua properti dari originalData ke updatedData, kemudian kita mengganti nilai properti artist dan songTitle.
Output

Akhirnya, kita mencetak updatedData ke konsol.

typescript

console.log(updatedData);

Output dari kode ini akan berupa:

json

{
  "artist": "Sekar Qynasih",
  "songTitle": "Kaya Raya"
}
