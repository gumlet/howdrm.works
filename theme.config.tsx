import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Howdrm.works</span>,
  project: {
    link: 'https://github.com/gumlet/howdrm.works',
  },
  docsRepositoryBase: 'https://github.com/gumlet/howdrm.works/blob/main',
  footer: {
    content: 'Nextra Docs Template',
  },
  search: {
    placeholder: "Search Howdrm.works"
  }
}

export default config
