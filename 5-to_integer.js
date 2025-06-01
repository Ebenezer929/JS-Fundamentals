// converting number to an integer without using try/catch
const num = parseInt(process.argv[2]);

if (!isNaN(num )) {
    console.log("My number");
}else {
    console.log("Not a number");
}
