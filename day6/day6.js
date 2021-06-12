
/*Write a JavaScript function to check whether an `input` is an array or not
Test Data :

false
True

Ans. */
function is_array(arg) {
	return(Array.isArray(arg))
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
/*Write a JavaScript function to clone an array
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]

Ans.*/

function array_Clone(arg) {
	let newArr = []
	for(let i = 0 ; i < arg.length;i++) {
		newArr.push(arg[i])
	}
	return newArr
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


/*Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :*/
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
/*Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]*/
function first(ls, num=1) {
	if(num == 1) return ls[0]
	ls2=[]
	for(let i = 0; i < ls.length && num > 0 ; i++ ,num--) {
		ls2.push(ls[i])
	}
	return ls2
}


/*Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/
function joinStr(arg){
	return arg.toString()
}

myColor = ["Red", "Green", "White", "Black"];
console.log(joinStr(myColor))
/* Write a JavaScript program to find the most frequent item of an array
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )*/

function mostFrequent(arg) {
	mf = 0
	mfitem = arg[0]
	count = 1
	for(let  i =1 ; i < arg.length ; i++){
		for(let j = i+1 ; j < arg.length ; j++) {
			if(arg[i] == arg[j]) {
				count++;
			}
		}
		if( count > mf) {
		mf = count
		mfitem = arg[i]
		}
		count = 0
		
	}
	return mfitem
}
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(arr1))
