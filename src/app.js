import { spawn } from 'node:child_process'
import config from './config/app.config.js'
import path from 'path'

const root = path.resolve()
process.env.DIR_PATH = root

//TODO(Gedare): explore execFile and Fork
//TODO(Gedare): see if I can setuid for this process
const subprocess = spawn(`${config.script_dir}/simulate_database_backup`, {
   detatched: true,
   stdio: 'ignore'
})

subprocess.unref()
