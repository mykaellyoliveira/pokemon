import { Router } from "express";
// importa os controller
import pokemonController from "./Pokemon/pokemon.controller";

const routes = Router()

routes.post('/pokemons', pokemonController.montaTimes)

routes.get('/pokemons/:id', pokemonController.getPokeId)

routes.get('/pokemons', pokemonController.listPoke)


export default routes