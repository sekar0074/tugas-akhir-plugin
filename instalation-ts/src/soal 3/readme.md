# Fungsi cetakSegitigaMiringKiri

Fungsi `cetakSegitigaMiringKiri` adalah sebuah fungsi dalam JavaScript yang digunakan untuk mencetak segitiga miring ke kiri dengan menggunakan karakter bintang (`*`). Fungsi ini menerima satu parameter yaitu `tinggi` yang menentukan tinggi segitiga tersebut.

## Parameter

- `tinggi`: Sebuah bilangan bulat yang menentukan tinggi segitiga yang akan dicetak.

## Penjelasan Kode

```javascript
function cetakSegitigaMiringKiri(tinggi: number): void {
    for (let i = 1; i <= tinggi; i++) {
        console.log(' '.repeat(tinggi - i) + '*'.repeat(i));
    }
}

// Contoh pemanggilan fungsi
cetakSegitigaMiringKiri(10);
