import type {Contact} from '@prisma/client'

import {
  contacts,
  contact,
  createContact,
  updateContact,
  deleteContact,
} from './contacts'
import type {StandardScenario} from './contacts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('contacts', () => {
  scenario('returns all contacts', async (scenario: StandardScenario) => {
    const result = await contacts()

    expect(result.length).toEqual(Object.keys(scenario.contact).length)
  })

  scenario('returns a single contact', async (scenario: StandardScenario) => {
    const result = await contact({id: scenario.contact.one.id})

    expect(result).toEqual(scenario.contact.one)
  })

  scenario('creates a contact', async () => {
    const result = await createContact({
      input: {name: 'String', email: 'like@like.email', message: 'String'},
    })

    expect(result.name).toEqual('String')
    expect(result.email).toEqual('like@like.email')
    expect(result.message).toEqual('String')
  })
})
