class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
    }

    getInfo() {
        return `Student -
                ${this.course},
                ${this.university},
                ${this.fullName}.`
    }

    getMark() {
        return [...this.marks];
    }

    setMark(newMark) {
        this.marks.push(newMark);
    }

    getAverageMark() {
        const sum = this.marks.reduce((total, getMark) => total + getMark, 0);
        const average = sum / this.marks.length;
        return average.toFixed(2);
    }
}

const student1 = new Student(`Вищої школи психотерапії м.Одеса`,`1го курсу`,`Остап Родоманський Бендер`);
console.log(`Task 2`,student1.getInfo());

console.log(`Task 3, Marks -`,student1.getMark());

student1.getMark = 5;
console.log(`Task 4 (Add mark )`, student1.getMark);

console.log(`Task 5 Average -`,student1.getAverageMark())
