import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { IContinent } from 'src/interfaces/continent.interface';
import { ContinentDto } from '../dto/continent-dto';
import * as utilResponse from 'src/utils/response.util';
import { ContinentService } from 'src/services/continent.service';
import { ResponseDTO } from '../response/response-dto';

@Controller('continent')
export class ContinentController {
    constructor(
        private readonly continentService: ContinentService
    ) {

    }

    @Get()
    async getContinents( @Query() query: any ): Promise<ResponseDTO> {
        const page = query.page ? Number(query.page) : undefined;
        const limit = query.limit ? Number(query.limit) : undefined;
        const countries = await this.continentService.getContinents( page, limit );
        const quantityContinents = await this.continentService.getCountContinents();
        return utilResponse.buildResponseOK({
            records: countries,
            total: quantityContinents
        });
    }

    @Get(':id')
    async getContinent(@Param('id') id: string): Promise<IContinent> {
        const continent = await this.continentService.getContinent( id );
        return continent;
    }

    @Post()
    async createContinent( @Body() continentDTO: ContinentDto ): Promise<IContinent> {
        const continent = await this.continentService.createContinent( continentDTO );
        return continent;
    }

    @Put(':id')
    updateContinent( @Param('id') id: string, @Body() continent: ContinentDto ): Promise<IContinent> {
        return this.continentService.updateContinent( id, continent );
    }

    @Delete(':id')
    async deleteContinent( @Param('id') id: string ): Promise<IContinent> {
        const continent = await this.continentService.deleteContinent( id );
        return continent;
    }
}
