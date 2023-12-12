import { Module } from '@nestjs/common';
import { UrlShortController } from './url-short.controller';
import { UrlShortService } from './url-short.service';
import { Url, UrlSchema } from '../schemas/url.schema'; 
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }]), 
  ],
  controllers: [UrlShortController],
  providers: [UrlShortService],
})
export class UrlShortModule {}
