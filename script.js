class Student {
  constructor(name, surname, yearOfBirth, grades) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.grades = grades;
    this.attendance = [];
  }

  getStudentAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirth;
  }

  // getAverageGrade() {
  //   const sum = this.grades.reduce((total, grade) => total + grade, 0);
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

  maxAttendancy() {
    return this.attendance.length >= 25;
  }

  checkAttendancy(attendance) {
    if(!this.maxAttendancy()) {
      attendance ? this.attendance.push(true) : this.attendance.push(false);
    }
      return this;
  }

  attendanceRatio() {
    const attendedClasses = this.attendance.filter(value => value).length;
    return attendedClasses / this.attendance.length;
  }

  summary() {
    if (this.getAverageGrade() > 90 && this.attendanceRatio() > 0.9) {
      return 'Good Job';
    } else if (this.getAverageGrade() > 90 || this.attendanceRatio() > 0.9) {
      return 'Good, but you can do better';
    } else {
      return 'Radish';
    }
  }

  processStudent() {
    console.log(`Student Age: ${this.getStudentAge()}`);
    console.log(`Student\'s Average Grade: ${this.getAverageGrade()}`);
    console.log(`Overall Activity: ${this.summary()}`);
    console.log(`Attendancy ratio: ${this.attendanceRatio()}`);
    if(this.maxAttendancy()) {
      console.log(`Max attendancy days this month reached`);
    }
    console.log('------------');
  }
}

const studentEdgar = new Student('Edgar', 'Poe', 1809, [100, 90, 90, 90]);
const studentOlaf = new Student('Olaf', 'Ferguson', 2003, [88, 93, 80, 90]);
const studentSarah = new Student('Sarah', 'Broms', 2001, [56, 60, 40, 50]);

studentEdgar.checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true);
studentOlaf.checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(false).checkAttendancy(true);
studentSarah.checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true).checkAttendancy(true);
studentEdgar.processStudent();
studentOlaf.processStudent();
studentSarah.processStudent();