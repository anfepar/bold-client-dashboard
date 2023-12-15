'use client'
import { Filters, RangeFilter } from "@/app/lib/types"
import { getMonth } from "@/app/lib/utils/date"
import { appendParamsSearchParams } from "@/app/lib/utils/location"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"
import styles from "./TableFilters.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSliders, faX } from "@fortawesome/free-solid-svg-icons"

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
    if (!buttonIsDisable()) {
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
  }

  const buttonIsDisable = () => {
    return (filterType === filters.type) || (!filters.type && filterType === 'all')
  }

  const currentDate = new Date()
  return (
    <div className={styles.container}>
      <ul className={styles.container__list}>
        <li><button className={`${filters.range === 'today' ? styles.container__button__selected : ''} ${styles.container__button}`} onClick={() => handleFilterByRange('today')}>hoy</button></li>
        <li><button className={`${filters.range === 'week' ? styles.container__button__selected : ''} ${styles.container__button}`} onClick={() => handleFilterByRange('week')}>esta semana</button></li>
        <li><button className={`${filters.range === 'month' ? styles.container__button__selected : ''} ${styles.container__button}`} onClick={() => handleFilterByRange('month')}>{getMonth(currentDate.getMonth())}</button></li>

      </ul>
      <div>
        {!openFilterModal &&
          <button className={styles.filterContainer} onClick={() => setOpenFilterModal(true)}>
            <p>filtrar</p>
            <FontAwesomeIcon icon={faSliders} />
          </button>
        }
        {openFilterModal &&
          <div className={`${styles.filterContainer} ${styles.filterContainer__open}`}>
            <p>filtrar</p>
            <button onClick={() => setOpenFilterModal(false)} ><FontAwesomeIcon icon={faX} /></button>
          </div>
        }
        {openFilterModal && (
          <div className={styles.filterModal}>
            <fieldset className={styles.filterModal__inputs}>
              <div className={styles.filterModal__input}>
                <input checked={filterType === 'terminal'} onChange={handleFilterByTypeChange} id="terminal" type="radio" name="typeFilter"></input>
                <label htmlFor="terminal">Cobro con datáfono</label>
              </div>
              <div className={styles.filterModal__input}>
                <input checked={filterType === 'link'} onChange={handleFilterByTypeChange} id="link" type="radio" name="typeFilter"></input>
                <label htmlFor="link">Cobros con link de pago</label>
              </div>
              <div className={styles.filterModal__input}>
                <input checked={filterType === 'all'} onChange={handleFilterByTypeChange} id="all" type="radio" name="typeFilter"></input>
                <label htmlFor="all">Ver todos</label>
              </div>
            </fieldset>
            <button className={`${styles.filterModal__button} ${buttonIsDisable() ? styles.filterModal__button__disabled : ''} `} onClick={handleApplyTypeFilter}>
              Aplicar
            </button>
          </div>
        )}
      </div>
    </div >
  )
}