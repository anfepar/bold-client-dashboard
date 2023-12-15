'use client'
import { Filters, RangeFilter } from "@/app/lib/types"
import { getMonth } from "@/app/lib/utils/date"
import { appendParamsSearchParams } from "@/app/lib/utils/location"
import { useRouter } from "next/navigation"
import { ReactEventHandler, useState } from "react"

export interface TableFiltersProps {
  filters: Filters
}

export default function TableFilters({ filters }: TableFiltersProps) {
  const router = useRouter()
  const [openFilterModal, setOpenFilterModal] = useState(false)
  const [filterType, setFilterType] = useState('all')
  const handleFilterByRange = (range: RangeFilter) => {
    if (filters.range !== range) {
      const redirectUrl = appendParamsSearchParams(location.search, { range, page: '1' })
      router.push(`/?${redirectUrl}`)
    }
  }

  const handleFilterByTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const id = e.target.id
    if (value) {
      setFilterType(id)
    }
  }

  const handleApplyTypeFilter = () => {
    if (filterType !== 'all') {
      if (filters.type !== filterType) {
        const redirectUrl = appendParamsSearchParams(location.search, { type: filterType, page: '1' })
        router.push(`/?${redirectUrl}`)
      }
    } else if (filters.type && filterType === 'all') {
      const redirectUrl = appendParamsSearchParams(location.search, { type: null, page: '1' })
      router.push(`/?${redirectUrl}`)
    }
    setOpenFilterModal(false)
  }

  const currentDate = new Date()
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => handleFilterByRange('today')}>hoy</button>
          <button onClick={() => handleFilterByRange('week')}>esta semana</button>
          <button onClick={() => handleFilterByRange('month')}>{getMonth(currentDate.getMonth())}</button>
        </li>
      </ul>
      <div>
        <button onClick={() => setOpenFilterModal(true)}>filtrar</button>
        {openFilterModal && (
          <>
            <fieldset>
              <input onChange={handleFilterByTypeChange} id="terminal" type="radio" name="typeFilter"></input>
              <label htmlFor="terminal">Cobro con datáfono</label>
              <input onChange={handleFilterByTypeChange} id="link" type="radio" name="typeFilter"></input>
              <label htmlFor="link">Cobros con link de pago</label>
              <input onChange={handleFilterByTypeChange} id="all" type="radio" name="typeFilter"></input>
              <label htmlFor="all">Ver todos</label>
            </fieldset>
            <button onClick={handleApplyTypeFilter}>
              Aplicar
            </button>
          </>
        )}
      </div>
    </div>
  )
}