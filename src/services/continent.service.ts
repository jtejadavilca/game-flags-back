import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContinentDto } from 'src/controllers/dto/continent-dto';
import { IContinent } from 'src/interfaces/continent.interface';

@Injectable()
export class ContinentService {
    constructor(
        @InjectModel('Continent') private continentModel: Model<IContinent>
    ) {
    }

    async getContinents( page: number = 0, limit: number = 5 ): Promise<IContinent[]> {
        const continents = await this.continentModel
                                        .find()
                                        .skip( page * limit )
                                        .limit( limit )
                                        .populate( 'image' );
        return continents;
    }

    async getCountContinents(): Promise<number> {
        const quantityContinents = await this.continentModel.countDocuments();
        return quantityContinents;
    }

    async getContinent( id: string ): Promise<IContinent> {
        const continent = await this.continentModel.findById( id );
        return continent;
    }

    async createContinent( continentDTO: ContinentDto ): Promise<IContinent> {
        const nuevoContinent = new this.continentModel( { ...continentDTO } );
        return await  nuevoContinent.save();
    }

    async updateContinent( id: string, continentDTO: ContinentDto ): Promise<IContinent> {
        const editContinent = await this.continentModel.findByIdAndUpdate( id, continentDTO, { new: true, omitUndefined: true, useFindAndModify: false } );
        return editContinent;
    }

    async deleteContinent( id: string ): Promise<IContinent> {

        const continentEliminado = await this.continentModel.findByIdAndDelete( id );
        return continentEliminado;
    
    }
}
