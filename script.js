const roles = {
	admin: "https://img.icons8.com/emoji/48/man-teacher.png",
	student: "https://img.icons8.com/emoji/48/graduation-cap-emoji.png",
	lector: "https://img.icons8.com/emoji/48/person-teacher.png"
};

const gradation = {
  0: 'fail',
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "https://img.icons8.com/emoji/48/person-student.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "https://img.icons8.com/emoji/48/man-student.png",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-student-back-to-school-justicon-lineal-color-justicon.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/external-student-female-profession-vitaliy-gorbachev-flat-vitaly-gorbachev-1.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "https://img.icons8.com/color/96/secretary-woman.png",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "https://img.icons8.com/bubbles/100/administrator-male.png",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
]

class User {
  constructor(user) {
    this.img = user.img;
    this.name = user.name;
    this.age = user.age;
    this.role = user.role;
    this.courses = user.courses;
  }

  render() {
    document.write(`<div class="wrapper">
    <div class="header">
      <div class="user_info">
        <img class="user_image" src="${this.img}" alt="${this.img}" height="50">  
        <div class="user_data">
          <p>Name: <b>${this.name}</b></p>
          <p>Age: <b>${this.age}</b></p>
        </div>
      </div>
      <div class="user_role ${this.role}">
      	<img src="${roles[this.role]}" alt="${roles[this.role]}" height="50">
        <p><b class="user_role-title">${this.role}</b></p>
      </div>
    </div>
    <div class="footer">
      ${this.courses?.length ? this.renderCourses().join('') : ''}
		</div>
</div>`)
  }

  convertGrade(grade) {
    const score =  Object.keys(gradation).sort((a, b) => a - b).find(score => grade <= score);
    return gradation[score];
  }

  renderCourses() {
      return this.courses.map(({ title, mark }) => {
        const progress = this.convertGrade(mark);
        return `<div class="footer_user ${this.role}">${title} <div class="${progress} progress">${progress}</div></div>`;
      });
  }
}

class Student extends User {
  constructor(args){
    super(args)
  }
}

class Lector extends User {
  constructor(args){
    super(args)
  }
  renderCourses() {
      return this.courses.map(({ title, score, studentsScore}) => {
        const progress = this.convertGrade(score);
        const averageScore = this.convertGrade(studentsScore);
        return `<div class="footer_user ${this.role} flex_column"> <p> Title: <b>${title}</b></p>
        <div class="staff_score">Lector\s score: <div  class="${progress} progress">${progress} </div></div>
        <div class="staff_score">Average student\s score: <div class="${averageScore} progress">${averageScore}</div></div></div> `;
      });
  }
}

class Admin extends User {
    constructor(args){
    super(args)
  }
  renderCourses() {
      return this.courses.map(({ title, score, lector}) => {
        const progress = this.convertGrade(score);
        return `<div class=" footer_user ${this.role} flex_column"> <p> Title: <b>${title}</b></p>
        <div class="staff_score">Admin\s score: <div  class="${progress} progress">${progress} </div></div>
        <p>Lector: <b>${lector}</b></p> </div>`;
      });
  }
}

users.forEach(user => {
  let newUser;

  if (user.role === 'lector') {
    newUser = new Lector(user);
  } else if (user.role === 'admin') {
    newUser = new Admin(user);
  } else if (user.role === 'student') {
    newUser = new Student(user);
  }

  if (newUser) {
    newUser.render();
  }
});