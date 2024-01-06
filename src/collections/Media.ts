import { User } from '../payload-types'
import { Access, CollectionConfig } from 'payload/types'

// can you read images or not
const isAdmin =
  (): Access =>
  async ({ req }) => {
    const user = req.user as User | undefined // this would be undefined if user is not logged in

    if (!user) return false
    if (user.role === 'admin') return true

    return {
      user: {
        equals: req.user.id, // if the image field === the logged in user
      },
    }
  }

export const Media: CollectionConfig = {
  slug: 'media',
  hooks: {
    beforeChange: [
      ({ req, data }) => {
        return { ...data, user: req.user.id }
      },
    ],
  },
  access: {
    read: async ({ req }) => {
      const referer = req.headers.referer

      // if users are not logged in
      if (!req.user || !referer?.includes('admin')) {
        return true
      }

      return await isAdmin()({ req }) //
    },
    delete: isAdmin(),
    update: isAdmin(),
  },
  admin: {
    hidden: ({ user }) => user.role !== 'admin',
  },
  upload: {
    staticDir: 'media',
    staticURL: '/media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        height: undefined,
        position: 'center',
      },
    ],
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
  ],
}
