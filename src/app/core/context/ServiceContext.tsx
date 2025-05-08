"use client"
import React, { createContext, useContext } from 'react';
import { PageService } from '../service/PageService';
import { ContactService } from '../service/ContactService';
import { MockPageRepository } from '../repository/implementations/PageRepository';
import { MockContactRepository } from '../repository/implementations/ContactRepository';

// Create instances of repositories
const pageRepository = new MockPageRepository();
const contactRepository = new MockContactRepository();

// Create instances of services with their respective repositories
const pageService = new PageService(pageRepository);
const contactService = new ContactService(contactRepository);

// Create context with services
interface ServiceContextValue {
  pageService: PageService;
  contactService: ContactService;
}

const ServiceContext = createContext<ServiceContextValue | undefined>(undefined);

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ServiceContext.Provider value={{ pageService, contactService }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useServices = () => {
  const context = useContext(ServiceContext);
  if (context === undefined) {
    throw new Error('useServices must be used within a ServiceProvider');
  }
  return context;
};
