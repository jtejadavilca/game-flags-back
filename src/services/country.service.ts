import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CountryDto } from 'src/controllers/dto/country-dto';

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
                                        .populate( 'image' )
                                        .populate( 'continent' );
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

    async createCountry( countryDTO: CountryDto ): Promise<ICountry> {
        const nuevoCountry = new this.countryModel( { ...countryDTO } );
        return await  nuevoCountry.save();
    }

    async createCountries( countriesDTO: CountryDto[] ): Promise<ICountry[]> {
        const countries: ICountry[] = [];

        countriesDTO.forEach( async (countryDTO) => {
            const newCountry = new this.countryModel( { ...countryDTO } );
            const saved = await  newCountry.save();
            countries.push( saved );
        });

        return countries;
    }

    async updateCountry( id: string, countryDTO: CountryDto ): Promise<ICountry> {
        const editCountry = await this.countryModel.findByIdAndUpdate( id, countryDTO, { new: true, omitUndefined: true, useFindAndModify: false } );
        return editCountry;
    }

    async deleteCountry( id: string ): Promise<ICountry> {

        const countryEliminado = await this.countryModel.findByIdAndDelete( id );
        return countryEliminado;
    
    }
}
