import { Logger } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

const { mkdir, writeFile } = fs.promises;

type WriteJson = {
  data: any;
  fileName: string;
  dirName?: string;
};
export const writeJson = async ({ data, fileName, dirName = '' }: WriteJson): Promise<void> => {
  const saveDir = join(process.cwd(), dirName);
  const jsonFileName = `${saveDir}/${fileName}.json`;

  if (!fs.existsSync(saveDir)) {
    await mkdir(saveDir);
    Logger.log(saveDir, 'WriteDir');
  }

  await writeFile(jsonFileName, JSON.stringify(data));
  Logger.log(jsonFileName, 'WriteFile');
};
