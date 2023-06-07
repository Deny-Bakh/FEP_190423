let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];

Array.prototype.heroesRender = function (folder) {

  const heroRender = this.map(function(hero) {
    const heroUniverse = hero.name.replace(' ', '').toLowerCase();
    return `<tr>
      <td>${hero.name}</td>
      <td>
        <img src="images/${folder}/${heroUniverse}.svg">
      </td>
    </tr>`
  }).join('')

  return document.write(`<table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Icon</th>
      </tr>
    </thead>
      ${heroRender}
  </table>`)
}

marvelHeroes.heroesRender('marvel');
dcHeroes.heroesRender('dc');

// **************************************************************************

// Array.prototype.heroesRender = function (folder) {

//   const heroRender = this.map((hero)=> {
//     const heroUniverse = hero.name.replace(' ', '').toLowerCase();
//     return `<tr>
//       <td>${hero.name}</td>
//       <td>
//         <img style = "width: 20px" src="images/${folder}/${heroUniverse}.svg">
//       </td>
//     </tr>`
//   }).join('')

//   return document.write(`<table style = "width:200px">${heroRender}</table>`)
// }

// marvelHeroes.heroesRender('marvel');
// dcHeroes.heroesRender('dc');



