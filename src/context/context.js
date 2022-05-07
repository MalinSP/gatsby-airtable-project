import React, { useState } from 'react'
import sublinks from '../constants/links'

const GatsbyContext = React.createContext()

const GatsbyProvider = ({ children }) => {
  return <GatsbyContext.Provider value="">{children}</GatsbyContext.Provider>
}
