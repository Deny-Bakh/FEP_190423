// Вам потрібно зробити конструктор сутності "Студент".



// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.



// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – ​​методи.



// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".



// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

// class Student {
//   constructor(name, surname, yearOfBirth, grades) {
//     this.name = name;
//     this.surname = surname;
//     this.yearOfBirth = yearOfBirth;
//     this.grades = grades;
//     // this.attendance = [];
//     // this.attendaceLimit = 25;
//     this.attendance = new Array(25).fill(undefined);
//     console.log(this.attendance);
//   }

//   getStudentAge() {
//     const currentYear = new Date().getFullYear();
//     return currentYear - this.yearOfBirth;
//   }

//   // getAverageGrade() {
//   //   if(this.grades.length === 0) {
//   //     return 0
//   //   }
//   //   const sum = this.grades.reduce((sum, grade) => sum + grade, 0);
//   //   return sum / this.grades.length;
//   // }

//     getAverageGrade() {
//     const sum = this.grades.reduce((sum, grade) => sum + grade, 0);
//     const averageGrade =  sum / this.grades.length;
//     return isNaN(averageGrade) ? 0 : averageGrade;
//   }

//   // present() {
//   //   const attendanceIndex = this.attendance.indexOf(undefined);
//   //   if (attendanceIndex >= 0) {
//   //     return this.attendance[attendanceIndex] = true;
//   //   }
//   // }

//   present() {
//     const attendanceIndex = this.attendance.indexOf(undefined);
//     if (attendanceIndex >= 0) {
//       this.attendance[attendanceIndex] = true;
//     }
//     return this;
//   }

//   absent() {
//     const attendanceIndex = this.attendance.indexOf(undefined);
//     if (attendanceIndex !== -1) {
//       this.attendance[attendanceIndex] = false;
//     }
//     return this;
//   }

//   summary() {
//     const averageGrade = this.getAverageGrade();
//     const attendanceRatio = this.attendance.filter(index => index === true).length / this.attendance.length

//     if(averageGrade > 90 && attendanceRatio > 0.9) {
//       return 'Good Job';
//     } else if(averageGrade < 90 || attendanceRatio < 0.9) {
//       return 'Good, but you can do better';
//     } else {
//       return 'Radish';
//     }
//   }
  
// }

// const studentEdgar = new Student ('Edgar', 'Poe', 1809, [100, 90, 90, 90], []);

// console.log(studentEdgar.getStudentAge());

// console.log(studentEdgar.getAverageGrade());

// studentEdgar.present().present().present().absent().present();

// console.log(studentEdgar.summary());

// class Student {
//   constructor(name, surname, yearOfBirth, grades) {
//     this.name = name;
//     this.surname = surname;
//     this.yearOfBirth = yearOfBirth;
//     this.grades = grades;
//     this.attendance = new Array(25).fill(null);
//   }

//   getStudentAge() {
//     const currentYear = new Date().getFullYear();
//     return currentYear - this.yearOfBirth;
//   }

//   // getAverageGrade() {
//   //   const sum = this.grades.reduce((sum, grade) => sum + grade, 0);
//   //   const averageGrade = sum / this.grades.length;
//   //   return isNaN(averageGrade) ? 0 : averageGrade;
//   // }

//   getAverageGrade() {
//     if (this.grades.length === 0) {
//       return 0;
//     }
//     const sum = this.grades.reduce((total, grade) => total + grade, 0);
//     return sum / this.grades.length;
//   }

//   // present() {
//   //   const attendanceIndex = this.attendance.indexOf(null);
//   //   if (attendanceIndex !== -1) {
//   //     this.attendance[attendanceIndex] = true;
//   //   }
//   //   return this;
//   // }

//   // absent() {
//   //   const attendanceIndex = this.attendance.indexOf(null);
//   //   if (attendanceIndex !== -1) {
//   //     this.attendance[attendanceIndex] = false;
//   //   }
//   //   return this;
//   // }

//   present() {
//     const nextEmptyIndex = this.attendance.indexOf(null);
//     this.attendance[nextEmptyIndex] = true;
//     return this;
//   }
  
//   absent() {
//     const nextEmptyIndex = this.attendance.indexOf(null);
//     this.attendance[nextEmptyIndex] = false;
//     return this;
//   }

//   summary() {
//     const averageGrade = this.getAverageGrade();
//     const totalAttendance = this.attendance.filter(value => value !== null).length;
//     const attendedClasses = this.attendance.filter(value => value).length;
//     const attendanceRatio = attendedClasses / totalAttendance;
  
//     if (averageGrade > 90 && attendanceRatio > 0.9) {
//       return 'Good Job';
//     } else if (averageGrade > 90 || attendanceRatio > 0.9) {
//       return 'Good, but you can do better';
//     } else {
//       return 'Radish';
//     }
//   }

//   processStudent() {
//     console.log(`Student Age: ${this.getStudentAge()}`);
//     console.log(`Student\'s Average Grade: ${this.getAverageGrade()}`);
//     console.log(`Overall Activity: ${this.summary()}`);
//     console.log('------------');
//   }
// }

// const studentEdgar = new Student('Edgar', 'Poe', 1809, [100, 90, 90, 90]);
// const studentOlaf = new Student('Olaf', 'Ferguson', 2003, [88, 93, 80, 90]);
// const studentSarah = new Student('Sarah', 'Broms', 2001, [56, 60, 40, 50]);

// // console.log(studentEdgar.getStudentAge());

// // console.log(studentEdgar.getAverageGrade());

// // studentEdgar.present().present().present().absent().present();

// // console.log(studentEdgar.summary());

// studentEdgar.present().present().present().present().present();
// studentOlaf.present().present().present().absent().present();
// studentSarah.present().present().present().present().present();
// studentEdgar.processStudent();
// studentOlaf.processStudent();
// studentSarah.processStudent();





  // summary() {
  //   const averageGrade = this.averageGrade;
  //   const attendanceRatio = this.attendance.filter(index => index === true).length / this.attendance.length;
  
  //   if (averageGrade > 90 && attendanceRatio > 0.9) {
  //     return 'Good Job';
  //   } else if (averageGrade < 90 || attendanceRatio < 0.9) {
  //     return 'Good, but you can do better';
  //   } else {
  //     return 'Radish';
  //   }
  // }
  

//   getAverageGrade() {
//     if(this.grades.length === 0) {
//       return 0
//     }
//     const sum = this.grades.reduce((sum, grade) => sum + grade, 0);
//     return sum / this.grades.length;
//   }



// class Attendance extends Student {
//   constructor(name, surname, yearOfBirth, grades,)
// }

class Student {
  constructor(name, surname, yearOfBirth, grades) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
  }

  getStudentAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirth;
  }

  // getAverageGrade() {
  //   const sum = this.grades.reduce((sum, grade) => sum + grade, 0);
  //   const averageGrade = sum / this.grades.length;
  //   return isNaN(averageGrade) ? 0 : averageGrade;
  // }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  // present() {
  //   const attendanceIndex = this.attendance.indexOf(null);
  //   if (attendanceIndex !== -1) {
  //     this.attendance[attendanceIndex] = true;
  //   }
  //   return this;
  // }

  // absent() {
  //   const attendanceIndex = this.attendance.indexOf(null);
  //   if (attendanceIndex !== -1) {
  //     this.attendance[attendanceIndex] = false;
  //   }
  //   return this;
  // }

  present() {
    const nextEmptyIndex = this.attendance.indexOf(null);
    this.attendance[nextEmptyIndex] = true;
    return this;
  }
  
  absent() {
    const nextEmptyIndex = this.attendance.indexOf(null);
    this.attendance[nextEmptyIndex] = false;
    return this;
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const totalAttendance = this.attendance.filter(value => value !== null).length;
    const attendedClasses = this.attendance.filter(value => value).length;
    const attendanceRatio = attendedClasses / totalAttendance;
  
    if (averageGrade > 90 && attendanceRatio > 0.9) {
      return 'Good Job';
    } else if (averageGrade > 90 || attendanceRatio > 0.9) {
      return 'Good, but you can do better';
    } else {
      return 'Radish';
    }
  }

  processStudent() {
    console.log(`Student Age: ${this.getStudentAge()}`);
    console.log(`Student\'s Average Grade: ${this.getAverageGrade()}`);
    console.log(`Overall Activity: ${this.summary()}`);
    console.log('------------');
  }
}

const studentEdgar = new Student('Edgar', 'Poe', 1809, [100, 90, 90, 90]);
const studentOlaf = new Student('Olaf', 'Ferguson', 2003, [88, 93, 80, 90]);
const studentSarah = new Student('Sarah', 'Broms', 2001, [56, 60, 40, 50]);

// console.log(studentEdgar.getStudentAge());

// console.log(studentEdgar.getAverageGrade());

// studentEdgar.present().present().present().absent().present();

// console.log(studentEdgar.summary());

studentEdgar.present().present().present().present().present();
studentOlaf.present().present().present().absent().present();
studentSarah.present().present().present().present().present();
studentEdgar.processStudent();
studentOlaf.processStudent();
studentSarah.processStudent();