import { Logger } from '@nestjs/common';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

type WriteJson = {
  data: any;
  fileName: string;
  dirName?: string;
};
export const writeJson = ({ data, fileName, dirName = '' }: WriteJson): void => {
  const saveDir = join(process.cwd(), dirName);

  if (!existsSync(saveDir)) {
    mkdirSync(saveDir);
    Logger.log(`Add ${saveDir}`, 'Directory');
  }

  const jsonFileName = `${saveDir}/${fileName}.json`;
  writeFileSync(jsonFileName, JSON.stringify(data));
  Logger.log(`Add ${jsonFileName}`, 'Json');
};
