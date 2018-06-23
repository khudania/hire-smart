// Imports
import { GraphQLString } from 'graphql'

// App Imports
import { UserType, UserLoginType } from '../types'
import { create, remove, startNow, inviteToOrganization, verifySendCode, verifyCode, verifyUpdateAccount } from './resolvers'

// Create a demo user and login
export const userStartNow = {
  type: UserLoginType,
  resolve: startNow
}

// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLString
    }
  },
  resolve: remove
}

// Invite to Organization
export const userInviteToOrganization = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },
    email: {
      name: 'email',
      type: GraphQLString
    }
  },
  resolve: inviteToOrganization
}

// Verify email send code
export const userVerifySendCode = {
  type: UserType,
  args: {
    email: {
      name: 'email',
      type: GraphQLString
    }
  },
  resolve: verifySendCode
}

// Verify code
export const userVerifyCode = {
  type: UserType,
  args: {
    code: {
      name: 'code',
      type: GraphQLString
    }
  },
  resolve: verifyCode
}

// Verify code
export const userVerifyUpdateAccount = {
  type: UserLoginType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },
    password: {
      name: 'password',
      type: GraphQLString
    },
    organizationName: {
      name: 'organizationName',
      type: GraphQLString
    }
  },
  resolve: verifyUpdateAccount
}
