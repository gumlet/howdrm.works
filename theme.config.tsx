import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  color: {
    hue: {
      dark: 258,
      light: 243,
    },
    saturation: {
      dark: 90,
      light: 75,
    },
    lightness: {
      dark: 66,
      light: 59
    },
 
  },
  backgroundColor:{
      dark: "000,000,000"
  },
  logo: (
    <>
      <img src="/round-logo-bg.svg" alt="Howdrm Logo" style={{ height: '1.5em' }} />
      <span style={{ marginLeft: '.4em', fontWeight: 500 }}>
        Howdrm.works
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/gumlet/howdrm.works',
  },
  docsRepositoryBase: 'https://github.com/gumlet/howdrm.works/blob/main',
  footer: {
    content: (
      <>
      <a href="https://nextra.site" target="_blank">
      <img src='https://assets.gumlet.io/assets/logo.svg' alt='Gumlet Logo' style={{ height: '1.5em' }} />
      </a>
      <span>
        ©{' '} {new Date().getFullYear()}
      </span>
      </>
    ),
  },
  search: {
    placeholder: "Search Howdrm.works"
  }
}

export default config
