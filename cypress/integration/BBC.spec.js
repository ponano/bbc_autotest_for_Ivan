
describe('Найти элементы по заданию Ивана', () => {
    it('Найти поле поиска ', () => {
        cy.visit('https://www.bbc.com/')
        cy.get('#orb-search-q').should('be.visible')
    })
    it('Найти кнопку погода ', () => {
        cy.get('.istats-notrack').click()
        cy.get('.orb-panel-content > ul > .orb-nav-weather > a').should('be.visible')
    })
    it('Найти первый бокс из блока новостей ', () => {
        cy.get('.module--promo > .module__content > .media-list > .media-list__item--1 > .media > .block-link__overlay-link').should('be.visible')
    })
    it('Нати чётные элементы верхнего меню, которые не скрыты в More ', () => {

   
    })
  })
