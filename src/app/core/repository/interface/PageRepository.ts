import { Page } from '../../models/index';

export interface IPageRepository {
  getAll(): Promise<Page[]>;
  getBySlug(slug: string): Promise<Page | null>;
  getLatestPages(count: number): Promise<Page[]>;
}
