//@flow

class Configuration {
  id: string
  name: string
  containerConfigFile: string
  routes: Array<string>
  dependencies: Array<Configuration>
  ports: Array<number>

  constructor(
    id: string = '',
    name: string = '',
    containerConfigFile: string = '',
    routes: Array<string> = [],
    dependencies: Array<Configuration> = [],
    ports: Array<number> = []
  ) {
    this.id = id
    this.name = name
    this.containerConfigFile = containerConfigFile
    this.routes = routes
    this.dependencies = dependencies
    this.ports = ports
  }
}
