import { writeFile } from "fs/promises"
export class PokemonService{
    constructor(){}

    async getPokemon(){
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        return data;
    }

    async getPokemonById(id){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return data;
    }

    async listPoke(){
        let pokeTime1: any = []
        let pokeTime2: any = []
 
        const poke = await this.getPokemon();
      
        while(pokeTime1.length < 5){
            let randomIndex = Math.floor(Math.random() * poke.results.length)
            let randomObject: any = poke.results[randomIndex]
            if(!pokeTime1.includes(randomObject)){
                    pokeTime1.push(randomObject)
            }
        }
 
        while(pokeTime2.length < 5){
            let randomIndex = Math.floor(Math.random() * poke.results.length)
            let randomObject: any = poke.results[randomIndex]
            if(!pokeTime2.includes(randomObject) && !pokeTime1.includes(randomObject)){
                pokeTime2.push(randomObject)
            }
        }
 
        await writeFile('time1.json', JSON.stringify(pokeTime1, null, 2))
        await writeFile('time2.json', JSON.stringify(pokeTime2, null, 2))
        
        return "pokemons inserted into times successfully!"    
    }

}