import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ICountry } from 'src/interfaces/country.interface';

@Injectable()
export class CountryService {
    constructor(
        @InjectModel('Country') private countryModel: Model<ICountry>
    ) {
    }

    async getCountries( page: number = 0, limit: number = 5 ): Promise<ICountry[]> {
        const countries = await this.countryModel
                                        .find()
                                        .skip( page * limit )
                                        .limit( limit )
                                        .populate( 'image' );
        return countries;
    }

    async getCountCountries(): Promise<number> {
        const quantityCountries = await this.countryModel.countDocuments();
        return quantityCountries;
    }

    async getCountry( id: string ): Promise<ICountry> {
        const country = await this.countryModel.findById( id );
        return country;
    }
}
