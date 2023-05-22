// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addTemplate({
    name: 'product_template',
    fields: [{ name: 'model', type: CommonFieldTypes.SingleLineText },
    { name: 'title', type: CommonFieldTypes.SingleLineText },
    { name: 'image', type: CommonFieldTypes.Image },
    { name: 'price', type: CommonFieldTypes.SingleLineText }],
  });
}
