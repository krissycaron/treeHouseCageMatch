$(document).ready(function(){

let playerArray = [];

const loadPlayerone = () => {
		return new Promise((resolve,reject) =>{
			$.ajax("https://teamtreehouse.com/krissycaron.json") /// find a way to make the user name in the string 
			.done((data1) => resolve(data1))
			.fail((error) => reject(error));
		});
			console.log("test", data1);
	}; 


const loadPlayertwo = () => {
		return new Promise((resolve,reject) =>{
			$.ajax("https://teamtreehouse.com/krissycaron.json")
			.done((data1) => resolve(data1))
			.fail((error) => reject(error));
		});
			console.log("test", data1);
	}; 

	Promise.all([loadPlayerone(), loadPlayertwo()])
			.then((result) => {
				result.forEach((xhrResult) => {
						playerArray.push(xhrResult);
						});
				console.log(playerArray);
				})
				.catch((errors) => {
					console.log(errors);
				})
				.catch((humanError) => {
				console.log(humanError);
				});	

// create an error when no name is created 

});
