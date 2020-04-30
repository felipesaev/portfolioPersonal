import { icon, library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(faCoffee)
library.add(fas)

icon({prefix: 'fas', iconName: 'angle-down'})
//_ Now add the faCoffee icon to our library and we can use
//the string name 'coffee' in our app _