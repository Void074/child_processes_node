import { spawn } from 'node:child_process'

let prog = {
  list: 'ls'
}

let child = spawn(prog.list, ['-l'])

child.stdout.on('data', function(data) {
  console.log(`${data}`)
})

child.stderr.on('error', function(error) {
  console.log(`${error}`)
})

child.on('close', function(code) {
  console.log(`exited with status code of ${code}`)
})
