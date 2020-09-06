import type { Writer, Reader, Data } from '../storage';

const add = (writer: Writer, reader: Reader) => (module: string) => (todo: string) => {
  const maybeEmptyData = reader();
  try {
    const data = initializeModuleData(maybeEmptyData, module);
    data.modules[module][`${data.meta[module].lastId}`] = todo;
    writer(data);
    return todo;
  } catch (e) {
    console.error('Adding todo failed');
  }
};

const remove = (writer: Writer, reader: Reader) => (module: string) => (id: string) => {
  try {
    const data = reader();
    if (data.modules[module][id]) {
      delete data.modules[module][id];
      return writer(data);
    }
    console.log('Id not found');
  } catch (e) {
    console.error('Removing todo failed');
  }
};

const read = (reader: Reader) => (module: string) => () => {
  const data = reader();
  const moduleData = data.modules[module];
  console.table(moduleData ?? 'Nothing yet');
};

/**
 * Helpers
 */

const initializeModuleData = (maybeEmptyData: Data, module: string) => {
  function moduleExists(data: Data, module: string) {
    return data.meta[module] && data.meta[module].lastId && data.modules[module];
  }

  function init(data: Data, module: string) {
    data.meta[module] = { lastId: 1 };
    data.modules[module] = {};
    return data;
  }

  const data = Object.assign({}, maybeEmptyData);

  if (moduleExists(data, module)) {
    ++data.meta[module].lastId;
    return data;
  }

  return init(data, module);
};

export { add, read, remove };
