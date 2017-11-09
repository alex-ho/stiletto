import Configuration from 'entities/Configuration'

const parse = (configStr) => Promise.resolve(new Configuration())

export {
  parse
}
