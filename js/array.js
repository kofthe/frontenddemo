 let data17 = () => {
    let array = ["js", 44, true, false, 34.44, "java"];
    array[6] = "JSF"; //Array'a eleman ekleme 
    array.push("sona eklenedi");  
    array.unshift("başa eleman ekler"); 
    array.pop(); // sondan bir eleman çıkar; 
    array.shift(); 
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(array[i]);       
    }
 }

let data18 = () => {
    let obj = {
        name : "Mehmet", 
        surname : "Arı",
        department: "Kubernet",
        array : ["java", "csharp", "debug"]
    }

    console.log(obj.name);
    console.log(obj.surname);
    console.log(obj.department);
    console.log(obj.array[2]);
}


 //dizilerde push terimi vardır. push dizilerimizde
 
 
let data19 = () => {
    let array = [];

    for (let index = 0; index < 5; index++) {
        let rnd = Math.floor(Math.random() * 10 + 1); 
        array[i] = rnd; 
        if (array[i]%2 == 0 ) {
            console.log(array[i]); 
        }
        
    }

    console.log("*******************");
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }

}
data19();

let data20 = () => {
    let array = []; 
    for (let index = 0; index < 5; index++) {
        let rnd = Math.floor(Math.random() *10 + 1  );
        array[i] = rnd; 
        
    }
    return array;
}

let data21 = () => {
    let data = data20().filter(
        (value) => {
            return value % 2 == 0
        }
    )
}