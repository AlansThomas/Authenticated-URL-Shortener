import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UrlShortService } from './url-short.service';

@Controller('urls')
export class UrlShortController {
  constructor(private urlService: UrlShortService) {}

  @Post()
  async shorten(@Body() body: { originalUrl: string }): Promise<string> {
    return this.urlService.shortenUrl(body.originalUrl);
  }

  @Get('/:shortenedUrl')
  async redirect(@Param('shortenedUrl') shortenedUrl: string) {
    const originalUrl = await this.urlService.getOriginalUrl(shortenedUrl);
    return { originalUrl };
  }
}
