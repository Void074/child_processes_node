import { spawn } from 'node:child_process'

const subprocess = spawn('./simulate_database_backup', {
  detatched: true,
  stdio: 'ignore'
})

subprocess.unref()
