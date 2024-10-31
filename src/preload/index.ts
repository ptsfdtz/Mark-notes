import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('Electron is not in context isolated mode')
}

try {
  contextBridge.exposeInMainWorld('electron', {})
} catch (error) {
  console.error(error)
}
