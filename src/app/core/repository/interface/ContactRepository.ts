import { ContactForm } from '../../models/index';

export interface IContactRepository {
  submitContactForm(form: Omit<ContactForm, 'id' | 'submittedAt'>): Promise<ContactForm>;
  getAllSubmissions(): Promise<ContactForm[]>;
}
