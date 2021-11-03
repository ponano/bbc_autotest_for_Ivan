
describe('Найти элементы по заданию Ивана', () => {
    it('Найти поле поиска ', () => {
        cy.visit('https://www.bbc.com/')
        cy.get('#orb-search-q').should('be.visible')
    })
    it('Найти кнопку погода ', () => {
        cy.visit('https://www.bbc.com/')
        cy.get('.orb-panel-content > ul > .orb-nav-weather > a').should('exist')
    })
    it('Найти первый бокс из блока новостей ', () => {
        cy.visit('https://www.bbc.com/')
        cy.get('.module--promo > .module__content > .media-list > .media-list__item--1 > .media > .block-link__overlay-link').should('exist')
    })
    it('Нати чётные элементы верхнего меню, которые не скрыты в More ', () => {
        cy.visit('https://www.bbc.com/')
        cy.get('#orb-nav-links > ul > .orb-nav-sport > a').should('exist')
        cy.get('#orb-nav-links > ul > .orb-nav-worklife > a').should('exist')
        cy.get('#orb-nav-links > ul > .orb-nav-future > a').should('exist')
        cy.get('#orb-nav-links > ul > .orb-nav-music > a').should('exist')
   
    })
  })
