
const apps = [
  {
    name: 'explorer',
    showOnDesktop: true,
    active: true,
    showOnBar: true,
    f: () => {
      console.log("hi")
    },
  },
  {
    name: 'teams',
    showOnDesktop: false,
    showOnBar: true,
    active: false,
    f: () => {
      console.log("hi")
    },

  },
]

export default apps
