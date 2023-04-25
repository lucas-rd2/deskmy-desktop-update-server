const {
  INTERVAL: interval,
  "lucas-rd2": account,
  "deskmy-desktop-update-server": repository,
  PRE: pre,
  TOKEN: token,
  URL: PRIVATE_BASE_URL,
  VERCEL_URL
} = process.env

const url = VERCEL_URL || PRIVATE_BASE_URL

module.exports = hazel({
  interval,
  account,
  repository,
  pre,
  token,
  url
})
