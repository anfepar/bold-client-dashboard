'use client'
import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appendParamsSearchParams } from "@/app/lib/utils/location";
import { getTotalPages } from "@/app/lib/utils/pagination";

interface PaginationProps {
  totalItems: number
}

export default function Pagination({ totalItems }: PaginationProps) {
  const totalPages = useMemo(() => getTotalPages(totalItems), [totalItems]);
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentPage = parseInt(searchParams.get('page') || '') || 1
  const handleChangePage = (newPage: number) => {
    const redirectUrl = appendParamsSearchParams(location.search, { page: newPage.toString() })
    router.push(`/?${redirectUrl}`)
  }

  if (totalItems === 0) return null

  return (
    <div>
      <ul>
        <li>
          <button data-testid="button-first-page" onClick={() => handleChangePage(1)}>
            <FontAwesomeIcon icon={faAnglesLeft} />
          </button>
        </li>
        <li>
          <button
            data-testid="button-prev-page"
            disabled={currentPage === 1}
            onClick={() => currentPage > 1 ? handleChangePage(currentPage - 1) : null}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        </li>
        {currentPage !== 1 &&
          <li>
            <button onClick={() => currentPage > 1 ? handleChangePage(currentPage - 1) : null}>
              {currentPage - 1}
            </button>
          </li>
        }
        <li>
          <span>{currentPage}</span>
        </li>
        {currentPage !== totalPages &&
          <li>
            <button onClick={() => currentPage < totalPages ? handleChangePage(currentPage + 1) : null}>
              {currentPage + 1}
            </button>
          </li>
        }
        <li>
          <button
            data-testid="button-next-page"
            disabled={currentPage === totalPages}
            onClick={() => currentPage < totalPages ? handleChangePage(currentPage + 1) : null}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </li>
        <li>
          <button data-testid="button-last-page" onClick={() => handleChangePage(totalPages)}>
            <FontAwesomeIcon icon={faAnglesRight} />
          </button>
        </li>
      </ul>
    </div>
  )
}