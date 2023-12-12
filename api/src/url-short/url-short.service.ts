import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url } from '../schemas/url.schema';

@Injectable()
export class UrlShortService {
  constructor(@InjectModel(Url.name) private urlModel: Model<Url>) {}

  // Function to generate a random alphanumeric string
  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  async shortenUrl(originalUrl: string): Promise<string> {
    // Generate a random alphanumeric string of length 6
    const shortenedUrl = this.generateRandomString(6);

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
