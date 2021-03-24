export const updateInput = (value: any) => {
  return {
    type: 'INPUT_UPDATED',
    data: value
  }
}

export const updateCountBadge = (count: number) => {
  return {
    type: 'COUNT_UPDATED',
    data: count
  }
}