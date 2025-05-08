
import { ContactForm } from '../../models/index';
import { IContactRepository } from '../interface/ContactRepository';

export class MockContactRepository implements IContactRepository {
  private submissions: ContactForm[] = [];
  private nextId = 1;

  async submitContactForm(form: Omit<ContactForm, 'id' | 'submittedAt'>): Promise<ContactForm> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newSubmission: ContactForm = {
      ...form,
      id: String(this.nextId++),
      submittedAt: new Date()
    };
    
    this.submissions.push(newSubmission);
    return newSubmission;
  }

  async getAllSubmissions(): Promise<ContactForm[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...this.submissions];
  }
}
