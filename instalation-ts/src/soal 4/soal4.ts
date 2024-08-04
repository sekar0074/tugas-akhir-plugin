function calculateAverageGrade(
    webProgramming: number,
    computerProgramming: number,
    statistics: number,
    databaseSystems: number
  ): string {
    // Validasi input: semua nilai harus diisi dan berada dalam rentang 0-100
    const scores: number[] = [webProgramming, computerProgramming, statistics, databaseSystems];
    for (let score of scores) {
      if (score < 0 || score > 100 || isNaN(score)) {
        throw new Error("Semua nilai harus diisi dan berada dalam rentang 0-100.");
      }
    }
  
    // Hitung rata-rata
    const average: number = (webProgramming + computerProgramming + statistics + databaseSystems) / 4;
  
    // Tentukan grade berdasarkan rata-rata
    let grade: string;
    if (average >= 90) {
      grade = 'A';
    } else if (average >= 80) {
      grade = 'B';
    } else if (average >= 70) {
      grade = 'C';
    } else if (average >= 60) {
      grade = 'D';
    } else {
      grade = 'E';
    }
  
    return `Rata-rata: ${average.toFixed(2)}, Grade: ${grade}`;
  }
  
  // Contoh penggunaan
  try {
    const result = calculateAverageGrade(85, 90, 78, 88);
    console.log(result); // Output: "Rata-rata: 85.25, Grade: B"
  } catch (error: any) {
    console.error(error.message);
  }
  