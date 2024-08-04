function cetakSegitigaMiringKiri(tinggi: number): void {
    for (let i = 1; i <= tinggi; i++) {
        console.log(' '.repeat(tinggi - i) + '*'.repeat(i));
    }
}

// Contoh pemanggilan fungsi
cetakSegitigaMiringKiri(10);
