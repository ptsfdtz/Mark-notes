import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('This preload script can only be used in a context isolated renderer process')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO
  })
} catch (error) {
  console.error('Failed to expose context to the main world:', error)
}
