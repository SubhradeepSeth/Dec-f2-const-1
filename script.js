const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  let c = data.forEach((e) => {
    if (e.profession === "developer") console.log(e);
  });
}

// 2. Add Data
function addData() {
    let obj={
        name:prompt("Enter Name:"),
        age:parseInt(prompt("Enter Age:")),
        profession:prompt("Enter Profession:"),
    }
    data.push(obj);
    console.log("New Data Added");
    console.log(obj);
}

// 3. Remove Admins
function removeAdmin() {
    data.forEach((e,i)=>{
        if(e.profession==="admin") data.splice(i,1);
    })
    console.log(data);
}

// 4. Concatenate Array
function concatenateArray() {
    const data2 = [
        { name: "Subhradeep", age: 29, profession: "developer" },
        { name: "Debasish", age: 34, profession: "admin" },
      ];
    data2.forEach((e)=>data.splice(data.length,0,e));
    console.log(data);
}

// 5. Average Age
function averageAge() {
    let c1=0;
    data.forEach(function(e){
        c1+=e.age;
    })
    console.log(c1/data.length);
}

// 6. Age Check
function checkAgeAbove25() {
    let c=0;
    data.forEach(function(e){
       if(e.age>25){
       c++;
       }
    })
    if(c>0){
        console.log("Person with age greater than 25 exists!");
    }
    else{
        console.log("Person with age greater than 25 not exists!")
    }
    
}

// 7. Unique Professions
function uniqueProfessions() {
    let arr=[];
    data.forEach(function(e){
        if(!arr.includes(e.profession)){
            arr.push(e.profession);
        }
    })
    console.log("Unique Professions: "+arr);
}

// 8. Sort by Age
function sortByAge() {
    data.sort(function(a,b){
        return a.age-b.age;
    })
    console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
    data.forEach((e)=>{if(e.name==="john"){
        e.profession="manager";
    }})
    console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
    let c1=0,c2=0;
    data.forEach((e)=>{
        if(e.profession==="developer") c1++;
        if(e.profession==="admin") c2++;
    })
    console.log("Number of developers: "+c1+",Number of admins: "+c2);
}
