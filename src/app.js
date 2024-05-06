import { spawn } from 'node:child_process'
import config from './config/app.config.js'

//TODO(Gedare): explore execFile and Fork
//TODO(Gedare): see if I can setuid for this process
const subprocess = spawn(`${config.script_dir}/simulate_database_backup`, {
   detatched: true,
   stdio: 'ignore'
})

subprocess.unref()
