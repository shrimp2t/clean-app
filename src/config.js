const ApiURL = 'http://localhost:9100/json/'

const APIConfig = {
  user: {
    login: `${ApiURL}login`,
    auth: `${ApiURL}profile`,
    logout: `${ApiURL}logout`,
  },
  product: {
    list: `${ApiURL}products`,
    add: `${ApiURL}product`,
    edit: `${ApiURL}product`,
    delete: `${ApiURL}product`,
    variants: `${ApiURL}variants/`,
    add_variant: `${ApiURL}variant/`,
    edit_variant: `${ApiURL}variant/`,
    delete_variant: `${ApiURL}variant/`,
  },
}

export default APIConfig
