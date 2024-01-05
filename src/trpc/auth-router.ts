import { getPayloadClient } from '../get-payload'
import { publicProcedure, router } from './trpc'
import { AuthCredentialsValidator } from '../lib/validators/account-credentials-validator'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

export const authRouter = router({
  createPayloadUser: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input }) => {
      const { email, password } = input
      const payload = await getPayloadClient()

      //   check if user already exist
      const { docs: users } = await payload.find({
        collection: 'users',
        where: {
          email: {
            equals: email,
          },
        },
      })

      if (users.length !== 0) throw new TRPCError({ code: 'CONFLICT' })

      await payload.create({
        collection: 'users',
        data: {
          email,
          password,
          role: 'user',
        },
      })
      return { success: true, sentToEmail: email }
    }),

  // verify email api endpoint
  verifyEmail: publicProcedure
    .input(z.object({ token: z.string() }))
    //we're using 'query' because we're reading and not changing data
    .query(async ({ input }) => {
      const { token } = input

      // use payload to verify users email
      const payload = await getPayloadClient()

      // verify user
      const isVerified = await payload.verifyEmail({
        collection: 'users',
        token,
      })

      // if user is not authorized
      if (!isVerified) throw new TRPCError({ code: 'UNAUTHORIZED' })

      return { success: true }
    }),
})
