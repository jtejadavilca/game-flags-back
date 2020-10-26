import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CountryService } from 'src/services/country.service';
import { ResponseDTO } from 'src/controllers/response/response-dto';
import * as utilResponse from 'src/utils/response.util';
import { ICountry } from 'src/interfaces/country.interface';
import { CountryDto } from '../dto/country-dto';

@Controller('country')
export class CountryController {
    constructor(
        private readonly countryService: CountryService
    ) {

    }

    @Get()
    async getCountries( @Query() query: any ): Promise<ResponseDTO> {
        const page = query.page ? Number(query.page) : undefined;
        const limit = query.limit ? Number(query.limit) : undefined;
        const countries = await this.countryService.getCountries( page, limit );
        const quantityCountries = await this.countryService.getCountCountries();
        return utilResponse.buildResponseOK({
            records: countries,
            total: quantityCountries
        });
    }

    @Get(':id')
    async getCountry(@Param('id') id: string): Promise<ICountry> {
        const country = await this.countryService.getCountry( id );
        return country;
    }

    @Post()
    async createCountry( @Body() countryDTO: CountryDto ): Promise<ICountry> {
        const country = await this.countryService.createCountry( countryDTO );
        return country;
    }

    @Post('/all')
    async createCountries( @Body() countriesDTO: CountryDto[] ): Promise<ICountry[]> {
        const countries = await this.countryService.createCountries( countriesDTO );
        return countries;
    }

    @Put(':id')
    updateCountry( @Param('id') id: string, @Body() country: CountryDto ): Promise<ICountry> {
        return this.countryService.updateCountry( id, country );
    }

    @Delete(':id')
    async deleteCountry( @Param('id') id: string ): Promise<ICountry> {
        const country = await this.countryService.deleteCountry( id );
        return country;
    }
}
