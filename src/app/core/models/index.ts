
export interface Page {
    id: string;
    title: string;
    content: string;
    slug: string;
    metaDescription: string;
    lastUpdated: Date;
  }
  
  export interface ContactForm {
    id: string;
    name: string;
    email: string;
    message: string;
    submittedAt: Date;
  }
  