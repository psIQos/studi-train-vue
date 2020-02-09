import pages from './pages'
import specific from './specific'
import general from './general'

const de = {
  greeting: 'Hallo Welt!',
  pages,
  general,
  ...specific
}

export default de
