import { EmployeeComponent } from './employee.component'

describe('EmployeeComponent', () => {
  it('should mount', () => {
    cy.mount(EmployeeComponent)
  })
})