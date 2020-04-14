type TypedObjectEntries = <Object extends { [key: string]: any }, Key extends keyof Object>(
  obj: Object
) => Array<[Key, Object[Key]]>
export const typedObjectEntries: TypedObjectEntries = Object.entries
