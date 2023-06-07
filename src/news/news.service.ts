import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { News } from './schemas/news.schema';
import { Model } from 'mongoose';

@Injectable()
export class NewsService {
  constructor(@InjectModel(News.name) private newsModel: Model<News>) {}

  async createNews(news: News): Promise<News> {
    const createdNews = new this.newsModel(news);
    if (!createdNews) {
      throw new HttpException('Not created', 400);
    }
    return createdNews.save();
  }

  async getAllNews(): Promise<News[]> {
    const news = await this.newsModel.find().exec();
    if (!news) {
      throw new HttpException('Not found', 404);
    }
    return news;
  }

  async getNewsById(id: string): Promise<News> {
    const newsDetails = await this.newsModel.findOne({ id }).exec();
    if (!newsDetails) {
      throw new HttpException('Not found', 404);
    }
    return newsDetails;
  }
}
