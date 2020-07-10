import { IS_OFFLINE, IS_PRODUCTION } from '@/env';
import { Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { join } from 'path';

@Injectable()
export class GraphqlService implements GqlOptionsFactory {
  async createGqlOptions(): Promise<GqlModuleOptions> {
    const typeOption =
      !IS_PRODUCTION || IS_OFFLINE
        ? { autoSchemaFile: join(process.cwd(), 'src/schema.gql') }
        : { typePaths: ['dist/*.gql'] };
    return {
      ...typeOption,
      cors: true,
      playground: true,
      tracing: !IS_PRODUCTION,
      introspection: true,
      cacheControl: IS_PRODUCTION && {
        defaultMaxAge: 5,
        stripFormattedExtensions: false,
        calculateHttpHeaders: false,
      },
      formatError(error: GraphQLError): any {
        return {
          message: error.message,
          code: error.extensions?.code,
          locations: error.locations,
          path: error.path,
        };
      },
    };
  }
}
