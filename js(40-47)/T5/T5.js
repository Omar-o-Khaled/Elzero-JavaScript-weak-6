let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
needle == haystack[+true]? console.log("Found"): console.log("Not_found"); 

haystack.includes(needle)? console.log("Found"): console.log("Not_found"); 

haystack.splice(true,true)[+false]===needle? console.log("Found"): console.log("Not_found"); 