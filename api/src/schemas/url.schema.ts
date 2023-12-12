/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({
  timestamps: true,
})

export class Url {

  @Prop()
  originalUrl: string;

  @Prop()
  shortenedUrl: string;

}

export const UrlSchema = SchemaFactory.createForClass(Url);