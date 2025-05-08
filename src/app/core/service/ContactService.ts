
import { ContactForm } from '../models/index';
import { IContactRepository } from '../repository/interface/ContactRepository';

export class ContactService {
  private repository: IContactRepository;

  constructor(repository: IContactRepository) {
    this.repository = repository;
  }

  async submitForm(name: string, email: string, message: string): Promise<ContactForm> {
    // We could do validation here before submitting to repository
    return this.repository.submitContactForm({ name, email, message });
  }

  async getAllSubmissions(): Promise<ContactForm[]> {
    return this.repository.getAllSubmissions();
  }
}
