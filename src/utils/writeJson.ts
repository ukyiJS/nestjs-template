import { Logger } from '@nestjs/common';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

type WriteJson = {
  data: any;
  fileName: string;
  dirName?: string;
};
export const writeJson = async ({ data, fileName, dirName = '' }: WriteJson): Promise<void> => {
  const saveDir = join(process.cwd(), dirName);
  const jsonFileName = `${saveDir}/${fileName}.json`;

  if (!existsSync(saveDir)) {
    mkdirSync(saveDir);
    Logger.log(saveDir, 'WriteDir');
  }

  writeFileSync(jsonFileName, JSON.stringify(data));
  Logger.log(jsonFileName, 'WriteFile');
};
