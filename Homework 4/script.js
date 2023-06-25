const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1 Function Pairs
function createPairs(students) {
    const boys = []
    const girls = []
    const pairs = []

    for (let student of students) {
        if (student.startsWith(`Олександр`) ||
        student.startsWith(`Ігор`) ||
        student.startsWith(`Олексій`)) {
            boys.push(student)
        } else { girls.push(student)
        }
        }
    const minLength = Math.min(boys.length, girls.length)
    for (let i = 0; i < minLength; i++) {
        pairs.push([boys[i], girls[i]])
    }
    return pairs
}
console.log(createPairs(students))

// 2 Function Themes

function assignThemes(pairs, themes) {
    const assignedThemes = []

    for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i]
    const theme = themes[i % themes.length]
    assignedThemes.push([`${pair[0]} і ${pair[1]}`, theme])
    }
    return assignedThemes
}
const studentPairs = createPairs(students)
const pairedThemes = assignThemes(createPairs(students), themes)
console.log(pairedThemes)

// 3 Fuction Marks

function assignMarks(students, marks) {
    const assignedMarks = []
    for (let i = 0; i < students.length; i++) {
        const student = students[i]
        const mark = marks[i]
        assignedMarks.push([student, mark])
    }
    return assignedMarks
}
const studentsMarks = assignMarks(students, marks)
console.log(studentsMarks)

// 4 Function

function pairsWithMark(pairs) {
    const marks = []

    for (let i = 0; i < pairs.length; i++) {
    const mark = Math.floor(Math.random() * 5) +1
    const pair = pairs[i]
    marks.push([...pair, mark])
    }
    return marks
}
const studentsPairsWithRate = pairsWithMark(pairedThemes)
console.log(studentsPairsWithRate)