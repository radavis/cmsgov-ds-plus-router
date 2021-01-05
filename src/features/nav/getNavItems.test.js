import getNavItems from './getNavItems'

const print = (data) => console.log(JSON.stringify(data, null, 2));

describe('getNavItems()', () => {
  it('returns an array of items', () => {
    const items = getNavItems()
    expect(items.length > 0).toBe(true)
  })

  it('sets the selected item based on the url', () => {
    const items = getNavItems({ url: '/apd/schedule-summary' })
    const i = items.findIndex(item => item.url === '/apd/schedule-summary')
    expect(items[i].selected).toBe(true)
    items.splice(i, 1)
    items.forEach(item => {
      expect(item.selected).toBeFalsy()
    })
  })

  it('can select an item in a nested list', () => {
    const activities = [
      { name: 'Thing X' },
      { name: 'Thing Y' },
      { name: 'Thing Z' }
    ]
    const items = getNavItems({ activities, url: '/apd/activity/1/cost-allocation' })
    expect(items[3].items[2].items[4].selected).toBe(true)
    expect(items[3].items[2].selected).toBe(true)
    expect(items[3].items[2].defaultCollapsed).toBe(false)
    expect(items[3].selected).toBe(true)
    expect(items[3].defaultCollapsed).toBe(false)
  })
})
