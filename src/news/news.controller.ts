import { Body, Controller, Post, Get, HttpException } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Post('create')
  async createNews(@Body() news: any) {
    const createdNews = await this.newsService.createNews(news);
    return createdNews;
  }

  @Get()
  async getAllNews() {
    const news = await this.newsService.getAllNews();
    return news;
  }

  @Get(':id')
  async getNewsById(@Body('id') id: string) {
    const news = await this.newsService.getNewsById(id);
    return news;
  }
}
