// DESTRUCTURING (desestructuración)
// Expresión para hacer posible la extracción de datos desde arrays y objetos.
	//en objetos:
	const person = {
		name: "Gastón",
		age: 34,
		email: "gasnvillarruel@gmail.com"
	}

	const {name, age, email} = person; // si queremos cambiar el nombre de la variable que guarda la propiedad, deberíamos escribir, por ejemplo, "{name:nombre}"
	console.log(name, age, email);
	
	//en arrays:
	const numbers = [1, 2, 3, 4];

	const [one, two, three, four] = numbers;
	console.log(four);


	//Función destructuradora:
	const destructurarArray = ([a,b])=>{
		console.log('el segundo valor del array es: ', b)
	}

	destructurarArray(numbers);

	//desestructurar petición:
	const getUsers = async ()=>{
		const {data:users} = await axios('http://jsonplaceholder.typicode.com/users')
		console.log("la propiedad data de la petición realizada contiene el siguiente valor: ",users)
	}
	getUsers();