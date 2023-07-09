class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        this.dismissed = false;
    }

    getInfo() {
        return `Студент -
                ${this.course},
                ${this.university},
                ${this.fullName}.`
    }

    get mark() {
        return this.isDismissed ? null : [...this.marks];
    }

    set mark(newMark) {
        this.marks.push(newMark);
    }

    getAverageMark () {
        const sum = this.marks.reduce((total, mark) => total + mark, 0);
        const average = sum / this.marks.length;
        return average.toFixed(1);
    }

    dismiss() {
        this.isDismissed = true;
        this.marks = null;
    }

    recover () {
        this.isDismissed = false;
        console.log(`Поновлюємо студента`)
    }
}
// Task 1 and 2:
const student1 = new Student(`Вищої школи психотерапії м.Одеса`,`1го курсу`,`Остап Родоманський Бендер`);
console.log(`Інформація:`,student1.getInfo());

// Task 3:
this.marks = [5, 4, 4, 5];
console.log('Оцінки студента ', this.marks);

// Task 4:
student1.mark = 5;
console.log(`Додавання нової оцінки студента`, student1.mark);

// Task 5:
console.log(`Середній бал`, student1.getAverageMark());

// Task 6:
student1.dismiss();
console.log(`Виключення студента`, student1.mark);

// Task 7:
student1.recover();
console.log('Оцінки студента після відновлення', this.marks);

// ADVANCED
console.log(`ADVANCED`);

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        this.scolarshipInterval = setInterval(() => this.getScolarship(), 30000);
    }

    getScolarship() {
        if (!this.isDismissed && this.getAverageMark() >= 4.0) {
            console.log(`Ви отримали стипендію 1400грн`);  
        } else {
            console.log(`Стипедія не отриманна`);
        }
    }
}

const budgetStudent1 = new BudgetStudent(`Вищої школи психотерапії м.Одеса`,`1го курсу`,`Остап Родоманський Бендер`);
console.log(`Новий клас:`,budgetStudent1.getInfo());

// Отримання стипендії 
budgetStudent1.mark = 5;
budgetStudent1.getScolarship();

// Бал нижче 4.0
budgetStudent1.mark = 1;
budgetStudent1.mark = 3;
budgetStudent1.getScolarship();

// Перевірка. Видача стипендії виключеному студенту
budgetStudent1.dismiss();
budgetStudent1.getScolarship();