import { render } from '@testing-library/react'
import { transactionsMock } from '@/app/__mocks__/transactions'
import Table from '../Table'
import { tableConfig } from '../tableConfig'

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: () => ({ get: jest.fn() })
}))


describe('Table tests', () => {
  it('should show correct table data', () => {
    const { getAllByRole } = render(<Table transactions={transactionsMock} totalItems={transactionsMock.length} />)
    const tableRows: HTMLElement[] = getAllByRole('row')
    const tableHeaders = tableRows[0]
    const tableHeadersElements = tableHeaders.getElementsByTagName('th')
    //Validate headers
    expect(tableHeadersElements.length).toBe(tableConfig.length)
    tableConfig.forEach((header, index) => {
      expect(tableHeadersElements[index].innerHTML).toBe(header.value)
    })
    //Validate table rows
    const tableBodyRows = tableRows.slice(1)
    expect(tableBodyRows.length).toBe(30)
    tableBodyRows.forEach((row, index) => {
      const rowItems = row.getElementsByTagName('td')
      const currentTransaction = transactionsMock[index]
      tableConfig.forEach((header, index) => {
        if (header.show) {
          const value = header.show(currentTransaction, 'desktop')
          expect(rowItems[index].innerHTML.includes(value)).toBeTruthy()
        }
      })
    })
  })

  it('should show correct table empty state', () => {
    const { getAllByRole } = render(<Table transactions={[]} totalItems={0} />)
    const tableRows: HTMLElement[] = getAllByRole('row')
    const tableHeaders = tableRows[0]
    const tableHeadersElements = tableHeaders.getElementsByTagName('th')
    //Validate headers
    expect(tableHeadersElements.length).toBe(tableConfig.length)
    //Validate table rows
    const tableBodyRows = tableRows.slice(1)
    expect(tableBodyRows.length).toBe(0)
  })
})