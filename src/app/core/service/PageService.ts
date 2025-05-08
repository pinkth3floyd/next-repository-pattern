
import { Page } from '../models/index';
import { IPageRepository } from '../repository/interface/PageRepository';

export class PageService {
  private repository: IPageRepository;

  constructor(repository: IPageRepository) {
    this.repository = repository;
  }

  async getAllPages(): Promise<Page[]> {
    return this.repository.getAll();
  }

  async getPageBySlug(slug: string): Promise<Page | null> {
    return this.repository.getBySlug(slug);
  }

  async getLatestPages(count: number): Promise<Page[]> {
    return this.repository.getLatestPages(count);
  }
}