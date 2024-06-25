import { describe, it, expect } from 'vitest'
import { formatNumber } from './format-number'

describe('format-number', () => {
  it('should format number to currency', () => {
    const number = 65.5
    const formatted = formatNumber(number)

    expect(formatted).toBe('R$ 65,50')
  })
})