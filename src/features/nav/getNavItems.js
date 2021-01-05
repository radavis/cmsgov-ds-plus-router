import staticNavItems from './staticNavItems'

const clone = data => JSON.parse(JSON.stringify(data))

const buildActivitySection = i => [
  {
    label: 'Activity overview',
    url: `/apd/activity/${i}/overview`
  },
  {
    label: 'Objectives and key results',
    url: `/apd/activity/${i}/okrs`
  },
  {
    label: 'State cost categories',
    url: `/apd/activity/${i}/state-costs`
  },
  {
    label: 'Private contractor costs',
    url: `/apd/activity/${i}/contractor-costs`
  },
  {
    label: 'Cost allocation',
    url: `/apd/activity/${i}/cost-allocation`
  },
  {
    label: 'FFP and budget',
    url: `/apd/activity/${i}/ffp`
  }
]

const setId = item => {
  let result = [item.label.split(' ').join(''), item.selected || false];
  if (item.items && item.items.length) {
    result.push(item.items.length)
    result.push(item.defaultCollapsed)
    item.items.forEach(item => setId(item))
  }
  item.id = result.join('-')
}

const setDefaults = item => {
  item.selected = false
  if (item.items && item.items.length) {
    item.defaultCollapsed = true
    item.items.forEach(item => setDefaultCollapsedTrue(item))
  }
}

const setSelected = (data, key, value, parents = []) => {
  data.forEach(e => {
    if (e[key] === value) {
      e.selected = true;
      if (parents.length) {
        parents.forEach(p => {
          p.defaultCollapsed = !e.selected
          p.selected = e.selected
        })
      }
    }
    if (e.items && e.items.length) {
      setSelected(e.items, key, value, [...parents, e])
    }
  })
}

const getNavItems = ({
  activities = [],
  items = staticNavItems,
  url = ''
} = {}) => {
  // items = clone(items)

  if (activities.length) {
    const item = items.find(item => item.label === 'Program Activities')
    item.items = [
      item.items[0],
      ...activities.map((activity, i) => ({
        label: `Activity #${i + 1}: ${activity.name}`,
        items: buildActivitySection(i)
      }))
    ]
  }

  items.forEach(item => setDefaults(item)) // collapse all, by default
  setSelected(items, 'url', url)
  items.forEach(item => setId(item)) // create 'ids' for each item

  return items
}

export default getNavItems
