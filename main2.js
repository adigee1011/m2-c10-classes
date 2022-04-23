// i want a class that represents a course


class Course {

    //string holds the subject of this course
    subject;

    //string holds the name of the course
    name;

    //nunber representing the maximum number of students that 
    //can join the course
    capacity;

    //an arroy of Student Object that have signed up for the course
    //we do not know how many students will sign up for the course 
    students;

    //a flag indicatiing adult content
    adultsOnly;


    /**
     * Constructs a new course
     * @param {String} subject 
     * @param {String} name 
     * @param {number} capacity 
     * @param {boolean} adultsOnly 
     */

    constructor(subject,name,capacity, adultsOnly) {
        this.subject = subject;
        this.name = name;
        this.capacity = capacity;
        this.adultsOnly = adultsOnly;
        this.students = [];
    }

    

    /**
     * Adds the student to the course
     * @param {Student} student 
     * @returns if the class is full, return false. If the student was added return true
     */
    addStudent(student) {

        //if the class is adults only, then check the age of student;
        
        //if the calss is adults only,
        //and the student is a minor
        //we cannot add them to the course
        if(this.adultsOnly && student.age <18) {
            return false
        }

        //the number of students in the class, is the array's length
        if(this.students.length < this.capacity) {
            //can add a student
        this.students.push(student)
        return true;
        } else {
            //cannot add a student
            return false;
        }

    }

}


// i want a class that represents a student


class Student {

    name;
    age;
    /**
     * Constructs a new student
     * @param {String} name 
     * @param {String} age 
     */
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return this.name + " " + this.age; 
    }

}

let course1 = new Course('Math',"Calc101",10,false);
console.log(course1);
//console.log(course1.students.length);

let course2 = new Course('Driving',"BigRig101",4,true); 

let s1 = new Student('John',14);
console.log(s1);
let s2 = new Student('James',21);
let s3 = new Student('Jackie',18);
let s4 = new Student('Jason',55);
let s5 = new Student('Jennie',35);
let s6 = new Student('Jax',24);
let s7 = new Student('Jessie',20);

course1.addStudent(s1);
console.log(course1);
course1.addStudent(s2);``
console.log(course1);
course1.addStudent(s3);
course1.addStudent(s4);
course1.addStudent(s5);
course1.addStudent(s6);
course1.addStudent(s7);


console.log(`for ${course1.name} i have ${course1.students.length} signups`)


console.log(`for ${course1.name} i have ${course1.students}`)

