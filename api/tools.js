// Satu file router untuk BANYAK aksi.
// Vercel Hobby hanya mengizinkan 12 Serverless Functions -> 1 file ini menangani semuanya lewat ?action=
// Jangan pecah jadi banyak file.

const ALLOWED_ACTIONS = [
  'slugify',
  'base64-encode',
  'base64-decode',
  'uuid',
  'password',
  'reverse',
  'word-count',
  'info'
]

function applyCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

function send(res, statusCode, payload) {
  applyCors(res)
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.status(statusCode).json(payload)
}

function makeUuid() {
  if (typeof globalThis.crypto !== 'undefined' && typeof globalThis.crypto.randomUUID === 'function') {
    return globalThis.crypto.randomUUID()
  }
  const hex = '0123456789abcdef'
  let out = ''
  for (let i = 0; i < 32; i += 1) {
    out += hex[Math.floor(Math.random() * 16)]
    if (i === 7 || i === 11 || i === 15 || i === 19) out += '-'
  }
  return out
}

function makePassword(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*'
  let out = ''
  for (let i = 0; i < length; i += 1) {
    out += chars[Math.floor(Math.random() * chars.length)]
  }
  return out
}

export default function handler(req, res) {
  if (req.method === 'OPTIONS') {
    applyCors(res)
    res.status(204).end()
    return
  }

  const action = String(req.query.action || 'info').toLowerCase()
  const text = String(req.query.text || '')
  const amount = Number.parseInt(String(req.query.length || '16'), 10)

  if (!ALLOWED_ACTIONS.includes(action)) {
    send(res, 404, {
      status: false,
      creator: 'ZunSensei',
      message: 'Aksi tidak dikenal. Gunakan ?action=info untuk melihat daftar aksi.',
      result: { available: ALLOWED_ACTIONS }
    })
    return
  }

  if (action === 'info') {
    send(res, 200, {
      status: true,
      creator: 'ZunSensei',
      message: 'API aktif. Semua fitur berjalan di dalam satu file router.',
      result: { available: ALLOWED_ACTIONS, method: req.method }
    })
    return
  }

  if (action === 'uuid') {
    send(res, 200, {
      status: true,
      creator: 'ZunSensei',
      message: 'UUID berhasil dibuat.',
      result: { uuid: makeUuid() }
    })
    return
  }

  if (action === 'password') {
    const safeLength = Number.isFinite(amount) ? Math.min(Math.max(amount, 6), 128) : 16
    send(res, 200, {
      status: true,
      creator: 'ZunSensei',
      message: 'Password acak berhasil dibuat.',
      result: { password: makePassword(safeLength), length: safeLength }
    })
    return
  }

  if (text.trim() === '') {
    send(res, 400, {
      status: false,
      creator: 'ZunSensei',
      message: 'Parameter "text" wajib diisi untuk aksi ini.',
      result: null
    })
    return
  }

  try {
    if (action === 'slugify') {
      const slug = text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
      send(res, 200, { status: true, creator: 'ZunSensei', message: 'Slug dibuat.', result: { slug } })
      return
    }

    if (action === 'base64-encode') {
      const encoded = Buffer.from(text, 'utf8').toString('base64')
      send(res, 200, { status: true, creator: 'ZunSensei', message: 'Teks di-encode.', result: { base64: encoded } })
      return
    }

    if (action === 'base64-decode') {
      const decoded = Buffer.from(text, 'base64').toString('utf8')
      if (decoded.trim() === '') {
        send(res, 400, {
          status: false,
          creator: 'ZunSensei',
          message: 'Base64 tidak valid atau hasil kosong.',
          result: null
        })
        return
      }
      send(res, 200, { status: true, creator: 'ZunSensei', message: 'Teks di-decode.', result: { text: decoded } })
      return
    }

    if (action === 'reverse') {
      send(res, 200, {
        status: true,
        creator: 'ZunSensei',
        message: 'Teks dibalik.',
        result: { reversed: text.split('').reverse().join('') }
      })
      return
    }

    if (action === 'word-count') {
      const words = text.trim().split(/\s+/).filter(Boolean)
      send(res, 200, {
        status: true,
        creator: 'ZunSensei',
        message: 'Teks dihitung.',
        result: { words: words.length, characters: text.length, charactersNoSpace: text.replace(/\s/g, '').length }
      })
      return
    }
  } catch (error) {
    send(res, 500, {
      status: false,
      creator: 'ZunSensei',
      message: 'Terjadi kesalahan di server.',
      result: { detail: String(error && error.message ? error.message : error) }
    })
    return
  }

  send(res, 500, {
    status: false,
    creator: 'ZunSensei',
    message: 'Aksi gagal diproses.',
    result: null
  })
}  