describe('SpaceX Page', () => {
  it('successfully loads', () => {
    cy.visit('/') // change URL to match your dev URL
  })
})

describe('Spacex API', () => {
  it('returns JSON', () => {
    cy.request("https://api.spaceXdata.com/v3/launches?limit=100")
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })
})

describe('Home Page', () => {
  it('Heading check', () => {
    cy.visit('/')
    cy.get('.container-fluid h1').should('contain','SpaceX Launch Programs')
  })

  it ('filter years', () => {
    cy.get('.filter-options li')
      .find('button')
      .should('contain', '2006')
  })
})
