/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    xpath<E extends Node = HTMLElement>(selector: string, options?: Partial<Loggable & Timeoutable>): Chainable<JQuery<E>>;
    login(fixture: string): Chainable<any>;
  }
}