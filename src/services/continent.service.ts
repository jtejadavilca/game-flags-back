import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
}
