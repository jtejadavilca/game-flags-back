import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ImageCloudinarySchema } from 'src/db/schemas/image-cloudinary.schema';
import { CountrySchema } from 'src/db/schemas/country.schema';
import { ContinentSchema } from 'src/db/schemas/continent.schema';

import { CountryService } from 'src/services/country.service';

import { CountryController } from './country/country.controller';
import { ContinentController } from './continent/continent.controller';
import { ContinentService } from 'src/services/continent.service';

@Module({
    imports: [
        HttpModule,
        MongooseModule.forFeature([
            { name: 'ImageCloudinary', schema: ImageCloudinarySchema },
            { name: 'Country', schema: CountrySchema },
            { name: 'Continent', schema: ContinentSchema }
        ])
    ],
    controllers: [
      CountryController,
      ContinentController
    ],
    providers: [
        CountryService,
        ContinentService
    ]
})
export class ControllersModule {}
