// App Imports
import Organization from './model'

// Create
export async function organizationCreate({ params: { name, description, domain }, auth }) {
  if(auth.user && auth.user.id) {
    const data = await Organization.create({
      userId: auth.user.id,
      name,
      description,
      domain
    })

    return {
      data
    }
  }

  throw new Error('You are not allowed to perform this action.')
}

// Update product
export async function organizationUpdate({ params: { id, name, description, domain }, auth }) {
  if(auth.user && auth.user.id) {
    const data = await Organization.updateOne(
      { _id: auth.user.organizationId },
      {
        $set: { name, description, domain }
      }
    )

    return {
      data
    }
  }

  throw new Error('You are not allowed to perform this action.')
}

// Delete
export async function organizationRemove({ params: { id }, auth }) {
  if(auth.user && auth.user.id) {
    const data = await Organization.remove({
      _id: _id,
      userId: auth.user.id
    })

    return {
      data
    }
  }

  throw new Error('You are not allowed to perform this action.')
}