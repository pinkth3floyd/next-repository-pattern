import { Page } from '../../models/index';
import { IPageRepository } from '../interface/PageRepository';

export class MockPageRepository implements IPageRepository {
  private pages: Page[] = [
    {
      id: '1',
      title: 'Welcome to Our Website',
      content: `<div>
        <h2>Making Innovation Simple</h2>
        <p>Our company specializes in creating efficient solutions with the repository pattern. We believe in clean architecture and separation of concerns.</p>
        <p>Explore our website to learn more about our approach and how we can help your business.</p>
      </div>`,
      slug: 'home',
      metaDescription: 'Welcome to our company website built with Repository Pattern',
      lastUpdated: new Date('2025-05-01')
    },
    {
      id: '2',
      title: 'About Us',
      content: `<div>
        <h2>Our Story</h2>
        <p>Founded in 2020, our company has been at the forefront of software architecture innovation.</p>
        <h2>Our Mission</h2>
        <p>We're committed to promoting clean code and teaching best practices like the Repository Pattern.</p>
        <h2>Our Team</h2>
        <p>Our diverse team of experts specializes in creating maintainable, scalable applications.</p>
      </div>`,
      slug: 'about',
      metaDescription: 'Learn about our company history and mission',
      lastUpdated: new Date('2025-04-28')
    },
    {
      id: '3',
      title: 'Contact Us',
      content: `<div>
        <h2>Get In Touch</h2>
        <p>We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
      </div>`,
      slug: 'contact',
      metaDescription: 'Contact our team for questions and inquiries',
      lastUpdated: new Date('2025-05-02')
    },
    {
      id: '4',
      title: 'Privacy Policy',
      content: `<div>
        <h2>Your Privacy Matters</h2>
        <p>This Privacy Policy explains how we collect, use, and protect your personal information.</p>
        <h3>Information Collection</h3>
        <p>We collect information when you visit our website, contact us, or use our services.</p>
        <h3>Information Usage</h3>
        <p>We use your information to respond to your inquiries and improve our services.</p>
        <h3>Data Protection</h3>
        <p>We implement security measures to protect your personal information.</p>
      </div>`,
      slug: 'privacy',
      metaDescription: 'Read our privacy policy and data protection practices',
      lastUpdated: new Date('2025-03-15')
    }
  ];

  async getAll(): Promise<Page[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...this.pages];
  }

  async getBySlug(slug: string): Promise<Page | null> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.pages.find(page => page.slug === slug) || null;
  }

  async getLatestPages(count: number): Promise<Page[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...this.pages]
      .sort((a, b) => b.lastUpdated.getTime() - a.lastUpdated.getTime())
      .slice(0, count);
  }
}
