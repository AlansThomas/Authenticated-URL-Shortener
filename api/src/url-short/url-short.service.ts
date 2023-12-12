import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url } from '../schemas/url.schema';
import { nanoid } from 'nanoid';

@Injectable()
export class UrlShortService {
  constructor(@InjectModel(Url.name) private urlModel: Model<Url>) {}

  async shortenUrl(originalUrl: string): Promise<string> {
    const shortenedUrl = nanoid(6);

    // Create a new URL document
    const newUrl = new this.urlModel({
      originalUrl,
      shortenedUrl,
    });
    await newUrl.save();
    return shortenedUrl;
  }

  async getOriginalUrl(shortenedUrl: string): Promise<string> {
    // Find the URL document with the given shortened URL
    const url = await this.urlModel.findOne({ shortenedUrl });

    // If no URL found, throw an error
    if (!url) {
      throw new Error('Invalid shortened URL');
    }
    return url.originalUrl;
  }
}
