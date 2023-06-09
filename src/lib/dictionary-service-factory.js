import {
  GraphQLDictionaryService,
  RestDictionaryService,
  constants,
} from '@sitecore-jss/sitecore-jss-react';
import config from '../temp/config';

export class DictionaryServiceFactory {
  create() {
    return process.env.REACT_APP_FETCH_WITH === constants.FETCH_WITH.GRAPHQL
      ? new GraphQLDictionaryService({
          endpoint: config.graphQLEndpoint,
          apiKey: config.sitecoreApiKey,
          siteName: config.jssAppName,
          rootItemId: '{A6915C8F-62A8-4CC6-B117-154027DBD6A8}',
          /*
            The Dictionary Service needs a root item ID in order to fetch dictionary phrases for the current
            app. If your Sitecore instance only has 1 JSS App, you can specify the root item ID here;
            otherwise, the service will attempt to figure out the root item for the current JSS App using GraphQL and app name.
            rootItemId: '{GUID}'
          */
        })
      : new RestDictionaryService({
          apiHost: config.sitecoreApiHost,
          apiKey: config.sitecoreApiKey,
          siteName: config.jssAppName,
        });
  }
}

export const dictionaryServiceFactory = new DictionaryServiceFactory();
