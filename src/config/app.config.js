import path from 'path'

//TODO(Gedare): Write a function to check the existance
//of src/lib
const config = {
  root: path.resolve(),
  script_dir: path.join(path.resolve(), 'src/lib')
}

export default config
