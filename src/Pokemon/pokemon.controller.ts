import { Request, Response } from "express";
import { PokemonService } from "./pokemon.service";

class PokemonController{
    async montaTimes(req: Request, res: Response){
        const result = await new PokemonService().listPoke()
        return res.status(200).json(result)
    }

    async listPoke(req: Request, res: Response){
        const result = await new PokemonService().getPokemon()
        return res.status(200).json(result)
    }

    async getPokeId(req: Request, res: Response){
        const result = await new PokemonService().getPokemonById(req.params.id)
        return res.status(200).json(result)
    }
}

export default new PokemonController()