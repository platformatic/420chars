import { Entity } from '@platformatic/sql-mapper';
import graphqlPlugin from '@platformatic/sql-graphql'
import { User } from './types/User'

declare module '@platformatic/sql-mapper' {
  interface Entities {
    user: Entity<User>,
  }
}
