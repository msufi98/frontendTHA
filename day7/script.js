/*1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno*/

function Objectprops(ob){
	kys = Object.keys(ob)
	console.log(kys.join(","))
}

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
Objectprops(student)

/***********************************************************************/
/*2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; */

function deleteRollnoProp(ob) {
	console.log(ob)
	delete ob.rollno
	console.log(ob)
}

deleteRollnoProp(student)

/*3. Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; */

function getObjectLength(ob){
	console.log(Object.keys(ob).length)
}
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
getObjectLength(student)

/*4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];*/ 

function displayReadingStatus(lib){
	console.log("TITLE\t\t\tAUTHOR\t\t\tREADING STATUS")
	for(book of lib) {
		str= book.title+ "\t\t" +book.author+"\t\t"+book.readingStatus
		console.log(str)
	}
	
}

var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
displayReadingStatus(library)


/*5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased */

class CylinderArea{
	constructor(radius, height){
		this.radius = radius
		this.height = height
	}
	vol(){
		return Math.PI*radius*radius*height
	}
}

radius = 7
height = 5

let ca = new CylinderArea(radius,height)
console.log(ca.vol())


/*Sample Object : 
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 
Expected Output: [[object Object] 
{ author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] 
{ author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] 
{ author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]
*/

function objectSort(library){
	sortedLibrary= []
	sortedKeys =Object.keys(library[0]).sort()
	
	for(book of library){
		sortedValues = []
		//console.log(book)
		sortedKeys.forEach(item => sortedValues.push(book[item]))
		sortedLibrary.push({})
		for(let i = 0; i < sortedKeys.length;i++) {
			sortedLibrary[sortedLibrary.length-1].a = "b"
			console.log(sortedKeys[i], sortedValues[i])
			sortedLibrary[sortedLibrary.length-1][sortedKeys[i]] = sortedValues[i]
		}
	}
	console.log(sortedLibrary)
}

var library = 
[ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

objectSort(library)