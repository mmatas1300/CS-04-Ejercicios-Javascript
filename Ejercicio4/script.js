/*
Exercise #4
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/



let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

//----------------------for-------------------------------------

function compareCourses(student1,student2){
    const commonCourses = [];
    let it = 0;
    for(let i = 0; i <= student1.length-1; i++){
        for(let j = 0; j <= student2.length-1; j++){
            if(student1[i] === student2[j]){
                commonCourses[it] = student1[i];
                it++;
            }
        }  
    }
    console.log("Los cursos en comun son: " + commonCourses.join(""));
    
}

compareCourses(student1Courses,student2Courses);

//------------------------------includes-------------------------------


let itIncludes = 0;
const commonCoursesIncludes = [];

for(let i = 0 ; i<=student1Courses.length-1 ; i++){
    if(student2Courses.includes(student1Courses[i])){
        commonCoursesIncludes[itIncludes] = student1Courses[i];
        itIncludes++;
    }
}

console.log("Los cursos en comun son: " + commonCoursesIncludes.join(""));
