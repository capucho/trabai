import { join } from 'path';
import { existsSync, unlinkSync } from 'fs';
import { dataAccess } from './file-storage';
import objectContaining = jasmine.objectContaining;

describe('file-storage', () => {
  afterEach(() => {
    const path = join(__dirname, '.tomate.test.json');
    // remove file if exists
    if (existsSync(path)) {
      unlinkSync(path);
    }
  });

  it('should create read and write functions with path', () => {
    expect(dataAccess(join(__dirname, '.tomate.test.json'))).toEqual(
      objectContaining({
        read: expect.any(Function),
        write: expect.any(Function),
      }),
    );
  });

  it('should create file if does not exist', () => {
    const { read } = dataAccess(join(__dirname, '.tomate.test.json'));
    const file = read();
    expect(file).toEqual({
      meta: {},
      modules: {},
    });
  });

  it('should read file if does exist and return json', () => {
    const { read, write } = dataAccess(join(__dirname, '.tomate.test.json'));
    write({
      modules: {
        inbox: {},
      },
      meta: {
        inbox: {
          lastId: 9999,
        },
      },
    });
    const file = read();
    expect(file).toEqual({
      modules: {
        inbox: {},
      },
      meta: {
        inbox: {
          lastId: 9999,
        },
      },
    });
  });

  it('should write over file if exists', () => {
    const { read, write } = dataAccess(join(__dirname, '.tomate.test.json'));
    // create file
    write({
      modules: {
        inbox: {},
      },
      meta: {
        inbox: {
          lastId: 9999,
        },
      },
    });

    // overwrite
    write({
      modules: {
        inbox: {},
      },
      meta: {
        inbox: {
          lastId: 5555,
        },
      },
    });

    expect(read()).toEqual({
      modules: {
        inbox: {},
      },
      meta: {
        inbox: {
          lastId: 5555,
        },
      },
    });
  });

  it('should end process if file is not defined', () => {
    const { read } = dataAccess(join(__dirname));
    try {
      read();
    } catch (e) {
      expect(e).toEqual(new Error('Error while reading file'));
    }
  });
});
