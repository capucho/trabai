import { dataAccess } from './file-storage';
import './index';

jest.mock('./file-storage', () => {
  return {
    dataAccess: jest.fn().mockReturnValue({ read: jest.fn(), write: jest.fn() }),
  };
});

describe('create storage access', () => {
  it('should create a storage with OS home dir path', () => {
    expect(dataAccess).toHaveBeenCalledTimes(1);
    expect(dataAccess).toHaveBeenCalledWith(`${__dirname}/.tomate.test.json`);
  });
});
