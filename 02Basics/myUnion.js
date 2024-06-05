var score = 33;
var faatihat = { name: "faatihat", id: 88 };
// function getDbId(id: number | string) {
//     // making some api calls for example
//   console.log(`Db id is: ${id}`);
// }
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
