/**
 * xpath: //<tag>[@<attribute>='<attributeValue>']
 * partial value of attribute : //<tag>[contains(@<attribute>,<attribute partial Value)]
 * Navigating from one element to other
 * 1. parent to Child
 *         //<Parent tag>[@<attribute>='<attributeValue>']//<Child Tag>[@<attribute>='<attributeValue>']
 * 2. child To parent
 *         //<Child Tag>[@<attribute>='<attributeValue>']//parent::<parent tag>[@<attribute>='<attributeValue>']
 * 3. child to Ancestor
 *    //<Child Tag>[@<attribute>='<attributeValue>']//ancestor::<html tag of ancestor>[@<attribute>='<attributeValue>']
 * 4. Moving between siblings
 *      following-siblings : //<html Tag>[@<attribute>='<attributeValue>']//following-sibling::<sibling html tag>[@<attribute>='<attributeValue>']
 *      preceding-siblings : //<html Tag>[@<attribute>='<attributeValue>']//preceding-sibling::<sibling html tag>[@<attribute>='<attributeValue>']
 * 5. text()
 * 6.  AND OR
 * 
 * css locator
 * class is denote by a .<Class Value>
 * Id is denote by #<Id value>
 * [<attribute>='<attributevalue>']
 * Partial value of attribute then syntax would [attribute*='partial Value']\
 * If attribute starts with a specific values [attribute^='value'];
 * 
 * parent to child
 * sibling to immidate sibling +
 */


/**
 * Absolute : //html//body//
 * relative 
 */