import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronRight, FileCode2, FolderPlus, Plus, Trash2, X } from 'lucide-react'

export default function VirtualFileExplorer({
  folders,
  files,
  activeId,
  onSelect,
  onAddFile,
  onAddFolder,
  onDeleteFile,
  onDeleteFolder
}) {
  const [openFolders, setOpenFolders] = useState(['root'])
  const [creatingIn, setCreatingIn] = useState(null)
  const [draftName, setDraftName] = useState('')

  const toggleFolder = (id) => {
    setOpenFolders((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const startCreate = (folderId, kind) => {
    setCreatingIn({ folderId, kind })
    setDraftName('')
  }

  const commitCreate = () => {
    if (!creatingIn) return
    const name = draftName.trim()
    if (name === '') {
      setCreatingIn(null)
      return
    }
    if (creatingIn.kind === 'folder') {
      onAddFolder(name)
      setOpenFolders((prev) => (prev.includes(name) ? prev : [...prev, name]))
    } else {
      onAddFile(name, creatingIn.folderId)
      setOpenFolders((prev) =>
        prev.includes(creatingIn.folderId) ? prev : [...prev, creatingIn.folderId]
      )
    }
    setCreatingIn(null)
    setDraftName('')
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-line px-3 py-2.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          File Virtual
        </span>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => startCreate('root', 'folder')}
            title="Folder baru"
            className="flex h-6 w-6 items-center justify-center rounded-md border border-line text-slate-400 transition-colors hover:border-cyan/60 hover:text-cyan"
          >
            <FolderPlus size={12} />
          </button>
          <button
            type="button"
            onClick={() => startCreate('root', 'file')}
            title="File baru"
            className="flex h-6 w-6 items-center justify-center rounded-md border border-line text-slate-400 transition-colors hover:border-cyan/60 hover:text-cyan"
          >
            <Plus size={12} />
          </button>
        </div>
      </div>

      <div className="thin-scroll flex-1 overflow-y-auto px-2 py-2">
        {folders.map((folder) => {
          const isOpen = openFolders.includes(folder)
          const folderFiles = files.filter((file) => file.folder === folder)

          return (
            <div key={folder} className="mb-1">
              <div className="group flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => toggleFolder(folder)}
                  className="flex flex-1 items-center gap-1.5 rounded-md px-1.5 py-1.5 text-left text-[12.5px] font-semibold text-slate-400 transition-colors hover:bg-panel hover:text-slate-200"
                >
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.18 }}
                    className="text-slate-600"
                  >
                    <ChevronRight size={13} />
                  </motion.span>
                  <span className="truncate">{folder === 'root' ? 'proyek (root)' : folder}</span>
                  <span className="ml-auto rounded bg-panel px-1 text-[10px] text-slate-600">
                    {folderFiles.length}
                  </span>
                </button>
                {folder !== 'root' ? (
                  <button
                    type="button"
                    onClick={() => onDeleteFolder(folder)}
                    title="Hapus folder"
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <X size={12} className="text-slate-600 hover:text-rose" />
                  </button>
                ) : null}
              </div>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key={`body-${folder}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden pl-4"
                  >
                    {folderFiles.map((file) => {
                      const isActive = activeId === file.id
                      return (
                        <div key={file.id} className="group/file flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => onSelect(file.id)}
                            className={`flex flex-1 items-center gap-1.5 rounded-md px-1.5 py-1.5 text-left font-mono text-[11.5px] transition-colors ${
                              isActive
                                ? 'bg-cyan/15 text-cyan'
                                : 'text-slate-500 hover:bg-panel hover:text-slate-300'
                            }`}
                          >
                            <FileCode2 size={12} className="shrink-0" />
                            <span className="truncate">{file.name}</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => onDeleteFile(file.id)}
                            title="Hapus file"
                            className="opacity-0 transition-opacity group-hover/file:opacity-100"
                          >
                            <Trash2 size={12} className="text-slate-600 hover:text-rose" />
                          </button>
                        </div>
                      )
                    })}

                    {creatingIn && creatingIn.folderId === folder ? (
                      <div className="flex items-center gap-1 px-1 py-1">
                        <input
                          autoFocus
                          value={draftName}
                          onChange={(event) => setDraftName(event.target.value)}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter') commitCreate()
                            if (event.key === 'Escape') setCreatingIn(null)
                          }}
                          onBlur={commitCreate}
                          placeholder={creatingIn.kind === 'folder' ? 'nama-folder' : 'nama-file.css'}
                          className="w-full rounded-md border border-cyan/50 bg-ink px-1.5 py-1 font-mono text-[11px] text-slate-200 outline-none"
                        />
                      </div>
                    ) : null}

                    <button
                      type="button"
                      onClick={() => startCreate(folder, 'file')}
                      className="mt-0.5 flex w-full items-center gap-1.5 rounded-md px-1.5 py-1 text-[11px] text-slate-600 transition-colors hover:text-cyan"
                    >
                      <Plus size={11} /> file baru
                    </button>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      <div className="border-t border-line px-3 py-2">
        <p className="flex items-center gap-1 text-[10.5px] leading-relaxed text-slate-600">
          <ChevronDown size={11} /> Hanya index.html, style.css, script.js yang dirender.
        </p>
      </div>
    </div>
  )
}